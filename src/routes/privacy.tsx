import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import logoImg from "@/assets/logo-dog-mind-milano.png";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Dog Mind Milano" },
      { name: "description", content: "Informativa sulla privacy di Dog Mind Milano." },
      { property: "og:title", content: "Privacy Policy — Dog Mind Milano" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://dogmindmilano.lovable.app/privacy" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto container-px py-6 flex items-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Torna al sito
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto container-px py-16">
        <div className="flex items-center gap-3 mb-10">
          <img src={logoImg} alt="Dog Mind Milano" className="h-10 w-auto" />
        </div>

        <h1 className="text-3xl md:text-4xl mb-8">Privacy Policy</h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-xl text-foreground mb-3">Titolare del trattamento</h2>
            <p>
              Il titolare del trattamento dei dati personali è Dog Mind Milano,
              contattabile tramite email all&apos;indirizzo dogmindmilano@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-3">Dati raccolti</h2>
            <p>
              Questo sito raccoglie esclusivamente i dati personali che l&apos;utente
              fornisce volontariamente tramite il modulo di contatto (nome, email,
              numero di telefono, informazioni sul cane). Non utilizziamo cookie di
              profilazione né strumenti di tracciamento di terze parti.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-3">Finalità del trattamento</h2>
            <p>
              I dati raccolti sono utilizzati esclusivamente per rispondere alle
              richieste di informazioni e per organizzare le sessioni di educazione
              cinofila. Non cediamo i dati a terzi né li utilizziamo per finalità
              commerciali non richieste.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-3">Base giuridica</h2>
            <p>
              Il trattamento dei dati si basa sul consenso espresso dall&apos;utente
              al momento dell&apos;invio del modulo di contatto, ai sensi dell&apos;art. 6
              del GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-3">Conservazione</h2>
            <p>
              I dati personali sono conservati per il tempo strettamente necessario
              a soddisfare la richiesta dell&apos;utente, salvo obblighi di legge che
              richiedano una conservazione più prolungata.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-3">Diritti dell&apos;interessato</h2>
            <p>
              L&apos;utente ha il diritto di accedere ai propri dati, chiederne la rettifica
              o la cancellazione, opporsi al trattamento o richiederne la limitazione.
              Per esercitare questi diritti è sufficiente scrivere a
              dogmindmilano@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-3">Modifiche</h2>
            <p>
              La presente privacy policy può essere aggiornata periodicamente.
              Le modifiche saranno pubblicate su questa pagina.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="max-w-3xl mx-auto container-px text-xs text-muted-foreground/70 flex justify-between">
          <span>© {new Date().getFullYear()} DOG MIND MILANO</span>
          <Link to="/" className="hover:text-foreground transition-colors">Torna al sito</Link>
        </div>
      </footer>
    </div>
  );
}
