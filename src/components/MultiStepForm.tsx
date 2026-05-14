import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

type Data = {
  nome: string;
  telefono: string;
  email: string;
  zona: string;
  nomeCane: string;
  eta: string;
  razza: string;
  difficolta: string[];
  morso: string;
  reagisceP: string;
  reagisceC: string;
  gravita: number;
  messaggio: string;
};

const initial: Data = {
  nome: "", telefono: "", email: "", zona: "",
  nomeCane: "", eta: "", razza: "",
  difficolta: [],
  morso: "", reagisceP: "", reagisceC: "",
  gravita: 3,
  messaggio: "",
};

const difficoltaOpts = [
  "Tira al guinzaglio",
  "Richiamo",
  "Eccessiva eccitazione",
  "Difficoltà di focus",
  "Gestione urbana",
  "Educazione cucciolo",
  "Altro",
];

export function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>(initial);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 6;
  const progress = ((step + 1) / totalSteps) * 100;

  const update = <K extends keyof Data>(k: K, v: Data[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const toggleDiff = (opt: string) => {
    setData((d) => ({
      ...d,
      difficolta: d.difficolta.includes(opt)
        ? d.difficolta.filter((x) => x !== opt)
        : [...d.difficolta, opt],
    }));
  };

  const canNext = () => {
    if (step === 0) return data.nome && data.telefono && data.email && data.zona;
    if (step === 1) return data.nomeCane && data.eta && data.razza;
    if (step === 2) return data.difficolta.length > 0;
    if (step === 3) return data.morso && data.reagisceP && data.reagisceC;
    if (step === 4) return true;
    if (step === 5) return data.messaggio.length > 5;
    return false;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canNext()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-10 md:p-14 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="font-display text-3xl text-foreground mb-3">Richiesta inviata</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Grazie {data.nome.split(" ")[0]}. Analizzo il tuo questionario e ti ricontatto entro 48 ore
          per valutare insieme il percorso più adatto.
        </p>
      </div>
    );
  }

  const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );

  const inputCls =
    "w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors";

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-surface p-6 md:p-10">
      {/* progress */}
      <div className="mb-8">
        <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
          <span>Step {step + 1} di {totalSteps}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-px w-full bg-border overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="min-h-[320px]">
        {step === 0 && (
          <div key="s0" className="reveal grid gap-6 md:grid-cols-2">
            <h3 className="md:col-span-2 font-display text-2xl mb-2">I tuoi dati</h3>
            <Field label="Nome e cognome">
              <input className={inputCls} value={data.nome} onChange={(e) => update("nome", e.target.value)} placeholder="Mario Rossi" />
            </Field>
            <Field label="Telefono">
              <input className={inputCls} value={data.telefono} onChange={(e) => update("telefono", e.target.value)} placeholder="+39" />
            </Field>
            <Field label="Email">
              <input type="email" className={inputCls} value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="tu@esempio.it" />
            </Field>
            <Field label="Zona di Milano">
              <input className={inputCls} value={data.zona} onChange={(e) => update("zona", e.target.value)} placeholder="Es. Porta Romana" />
            </Field>
          </div>
        )}

        {step === 1 && (
          <div key="s1" className="reveal grid gap-6 md:grid-cols-3">
            <h3 className="md:col-span-3 font-display text-2xl mb-2">Il tuo cane</h3>
            <Field label="Nome del cane">
              <input className={inputCls} value={data.nomeCane} onChange={(e) => update("nomeCane", e.target.value)} />
            </Field>
            <Field label="Età">
              <input className={inputCls} value={data.eta} onChange={(e) => update("eta", e.target.value)} placeholder="Es. 8 mesi" />
            </Field>
            <Field label="Razza">
              <input className={inputCls} value={data.razza} onChange={(e) => update("razza", e.target.value)} />
            </Field>
          </div>
        )}

        {step === 2 && (
          <div key="s2" className="reveal">
            <h3 className="font-display text-2xl mb-2">Quali difficoltà stai riscontrando?</h3>
            <p className="text-sm text-muted-foreground mb-6">Selezione multipla.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {difficoltaOpts.map((opt) => {
                const sel = data.difficolta.includes(opt);
                return (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => toggleDiff(opt)}
                    className={`text-left px-4 py-3 rounded-lg border transition-all ${
                      sel
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border hover:border-foreground/40"
                    }`}
                  >
                    <span className="text-sm">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 3 && (
          <div key="s3" className="reveal space-y-6">
            <h3 className="font-display text-2xl mb-2">Alcune domande importanti</h3>
            {[
              { k: "morso" as const, q: "Il cane ha mai morso qualcuno?" },
              { k: "reagisceP" as const, q: "Reagisce fortemente alle persone?" },
              { k: "reagisceC" as const, q: "Reagisce fortemente ad altri cani?" },
            ].map(({ k, q }) => (
              <div key={k} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-3 border-b border-border">
                <span className="text-sm text-foreground">{q}</span>
                <div className="flex gap-2">
                  {["Sì", "No"].map((v) => (
                    <button
                      type="button"
                      key={v}
                      onClick={() => update(k, v)}
                      className={`px-5 py-2 rounded-md text-sm border transition-all ${
                        data[k] === v
                          ? "border-accent bg-accent/15 text-foreground"
                          : "border-border hover:border-foreground/40 text-muted-foreground"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {step === 4 && (
          <div key="s4" className="reveal">
            <h3 className="font-display text-2xl mb-2">Quanto ritieni grave la situazione?</h3>
            <p className="text-sm text-muted-foreground mb-8">1 = poco · 5 = molto</p>
            <div className="flex justify-between gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  onClick={() => update("gravita", n)}
                  className={`flex-1 aspect-square rounded-lg border text-lg font-display transition-all ${
                    data.gravita === n
                      ? "border-accent bg-accent/15 text-foreground scale-105"
                      : "border-border hover:border-foreground/40 text-muted-foreground"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div key="s5" className="reveal">
            <h3 className="font-display text-2xl mb-2">Descrivi brevemente la situazione</h3>
            <p className="text-sm text-muted-foreground mb-6">Più dettagli mi dai, meglio posso aiutarti.</p>
            <textarea
              className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors min-h-[160px]"
              value={data.messaggio}
              onChange={(e) => update("messaggio", e.target.value)}
              placeholder="Racconta com'è la vostra giornata tipo, cosa hai già provato…"
            />
          </div>
        )}
      </div>

      {/* actions */}
      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="h-4 w-4" /> Indietro
        </button>

        {step < totalSteps - 1 ? (
          <button
            type="button"
            onClick={() => canNext() && setStep((s) => s + 1)}
            disabled={!canNext()}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continua <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canNext()}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-accent/90 transition-all disabled:opacity-40"
          >
            Invia richiesta <Check className="h-4 w-4" />
          </button>
        )}
      </div>
    </form>
  );
}
