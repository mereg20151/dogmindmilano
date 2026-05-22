import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import logoImg from "@/assets/logo-dog-mind-milano.png";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Dog Mind Milano" },
      { name: "description", content: "Informativa sui cookie di Dog Mind Milano." },
      { property: "og:title", content: "Cookie Policy — Dog Mind Milano" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://dogmindmilano.lovable.app/cookies" },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
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

        <h1 className="text-3xl md:text-4xl mb-8">Cookie Policy</h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-xl text-foreground mb-3">Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati dall&apos;utente
              inviano al suo dispositivo (computer, tablet, smartphone), dove vengono
              memorizzati per essere poi ritrasmessi agli stessi siti alla visita
              successiva.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-3">Cookie utilizzati</h2>
            <p>
              Dog Mind Milano utilizza esclusivamente <strong>cookie tecnici</strong>,
              necessari per il corretto funzionamento del sito e per migliorare
              l&apos;esperienza di navigazione. Non utilizziamo cookie di profilazione,
              né strumenti di tracciamento di terze parti (Google Analytics, Facebook
              Pixel, ecc.).
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-3">Cookie di preferenza</h2>
            <p>
              Il sito memorizza in <code>localStorage</code> la preferenza dell&apos;utente
              relativa all&apos;accettazione dei cookie, per non mostrare ripetutamente il
              banner informativo. Questa informazione rimane sul dispositivo
              dell&apos;utente ed è gestita esclusivamente dal browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-3">Come gestire i cookie</h2>
            <p>
              L&apos;utente può gestire le preferenze relative ai cookie direttamente
              all&apos;interno del proprio browser. È possibile impedire l&apos;utilizzo dei
              cookie, anche se ciò potrebbe compromettere il funzionamento di alcune
              parti del sito.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-3">Modifiche</h2>
            <p>
              La presente cookie policy può essere aggiornata periodicamente.
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
