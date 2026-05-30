import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const TO_EMAIL = "dogmindmilano@gmail.com";
const FROM_EMAIL = "Dogmind Milano <onboarding@resend.dev>";

const Schema = z.object({
  nome: z.string().trim().max(200).optional().default(""),
  telefono: z.string().trim().max(50).optional().default(""),
  email: z.string().trim().max(255).optional().default(""),
  zona: z.string().trim().max(200).optional().default(""),
  contatto: z.string().trim().max(50).optional().default(""),
  nomeCane: z.string().trim().max(100).optional().default(""),
  eta: z.string().trim().max(50).optional().default(""),
  razza: z.string().trim().max(100).optional().default(""),
  sesso: z.string().trim().max(50).optional().default(""),
  intero: z.string().trim().max(50).optional().default(""),
  difficolta: z.array(z.string().max(100)).max(30).optional().default([]),
  daQuanto: z.string().trim().max(100).optional().default(""),
  daQuantoNum: z.string().trim().max(20).optional().default(""),
  educatore: z.string().trim().max(10).optional().default(""),
  obiettivo: z.string().trim().max(2000).optional().default(""),
});

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

const LABELS: Record<string, string> = {
  nome: "Nome e cognome",
  telefono: "Telefono",
  email: "Email",
  zona: "Zona di Milano",
  contatto: "Contatto preferito",
  nomeCane: "Nome del cane",
  eta: "Età",
  razza: "Razza",
  sesso: "Sesso",
  intero: "Intero / sterilizzato",
  difficolta: "Difficoltà riscontrate",
  daQuanto: "Da quanto tempo",
  daQuantoNum: "Da quanto (mesi)",
  educatore: "Ha già lavorato con un educatore",
  obiettivo: "Cosa vorrebbe migliorare",
};

export const Route = createFileRoute("/api/public/send-consultation")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        if (!LOVABLE_API_KEY) return Response.json({ error: "LOVABLE_API_KEY missing" }, { status: 500 });
        if (!RESEND_API_KEY) return Response.json({ error: "RESEND_API_KEY missing" }, { status: 500 });

        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = Schema.safeParse(payload);
        if (!parsed.success) {
          return Response.json({ error: "Invalid input" }, { status: 400 });
        }
        const d = parsed.data;

        const rows = Object.entries(LABELS)
          .map(([k, label]) => {
            const raw = (d as Record<string, unknown>)[k];
            const value = Array.isArray(raw) ? raw.join(", ") : String(raw ?? "");
            if (!value) return "";
            return `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600;vertical-align:top;width:220px">${escapeHtml(label)}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`;
          })
          .join("");

        const html = `<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto">
<h2 style="color:#111">Nuova richiesta consulenza cinofila</h2>
<table style="border-collapse:collapse;width:100%;font-size:14px;color:#222">${rows}</table>
</div>`;

        const textLines = Object.entries(LABELS).map(([k, label]) => {
          const raw = (d as Record<string, unknown>)[k];
          const value = Array.isArray(raw) ? raw.join(", ") : String(raw ?? "");
          return value ? `${label}: ${value}` : "";
        }).filter(Boolean).join("\n");

        const replyTo = d.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) ? d.email : undefined;

        const res = await fetch(`${GATEWAY_URL}/emails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": RESEND_API_KEY,
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            subject: "Nuova richiesta consulenza cinofila",
            html,
            text: textLines,
            ...(replyTo ? { reply_to: replyTo } : {}),
          }),
        });

        if (!res.ok) {
          const body = await res.text();
          console.error("Resend error", res.status, body);
          return Response.json({ error: "Email send failed" }, { status: 502 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});
