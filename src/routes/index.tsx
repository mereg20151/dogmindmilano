import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Dog, Baby, Building2, Link as LinkIcon, Target, Sparkles,
  Instagram, MessageCircle, Mail, MapPin, Star, ArrowRight, Check,
} from "lucide-react";
import heroImg from "@/assets/hero-malinois.jpg";
import portraitImg from "@/assets/about-portrait.jpg";
import action1 from "@/assets/action-1.jpg";
import { MultiStepForm } from "@/components/MultiStepForm";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Educatore cinofilo a Milano — Educazione e gestione urbana" },
      { name: "description", content: "Educatore cinofilo a Milano, percorso ENCI in formazione. Percorsi pratici per cuccioli, cani giovani e gestione quotidiana in città." },
      { name: "keywords", content: "educatore cinofilo Milano, educazione cane Milano, educatore cuccioli Milano" },
      { property: "og:title", content: "Educatore cinofilo a Milano" },
      { property: "og:description", content: "Percorsi pratici per migliorare la vita quotidiana con il tuo cane." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Instrument+Serif&display=swap" },
    ],
  }),
  component: Home,
});

const nav = [
  { label: "A chi è rivolto", href: "#percorso" },
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Come lavoro", href: "#metodo" },
  { label: "Servizi", href: "#servizi" },
  { label: "Contatto", href: "#contatto" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Target1 />
      <About />
      <Method />
      <Pricing />
      <FormSection />
      <Reviews />
      <FinalCta />
      <Footer />
      <StickyMobileCta />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="container-px max-w-7xl mx-auto h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">
          Cinofilia<span className="text-accent">.</span>Milano
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contatto"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-all"
        >
          Consulenza
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end pb-20 md:pb-28 overflow-hidden">
      <img
        src={heroImg}
        alt="Belgian Malinois in una via di Milano al tramonto"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

      <div className="relative container-px max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          <div className="reveal inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
            <span className="h-px w-8 bg-accent" />
            Milano · Educazione cinofila
          </div>
          <h1 className="reveal reveal-delay-1 text-5xl md:text-7xl lg:text-8xl text-balance leading-[1.02] mb-6">
            Educazione cinofila <span className="text-accent italic">di base</span> a Milano
          </h1>
          <p className="reveal reveal-delay-2 text-lg md:text-xl text-muted-foreground max-w-xl text-pretty mb-3">
            Ti aiuto a vivere meglio con il tuo cane nella vita quotidiana.
          </p>
          <p className="reveal reveal-delay-2 text-base text-muted-foreground/80 max-w-xl mb-10">
            Specializzato in cuccioli, cani giovani e gestione urbana.
          </p>
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3">
            <a
              href="#contatto"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-all group"
            >
              Richiedi una consulenza
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-md text-sm font-medium hover:bg-surface transition-all"
            >
              Scopri come lavoro
            </a>
          </div>
          <div className="reveal reveal-delay-4 mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
            Educatore cinofilo in formazione · Percorso ENCI
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl mb-14 md:mb-20">
      <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">{kicker}</div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.05] mb-4">{title}</h2>
      {sub && <p className="text-base md:text-lg text-muted-foreground text-pretty">{sub}</p>}
    </div>
  );
}

function Target1() {
  const items = [
    { icon: Baby, title: "Cuccioli", desc: "Le basi giuste fin dai primi mesi: socializzazione, autocontrollo, abitudini di città." },
    { icon: Dog, title: "Cani giovani", desc: "L'età critica in cui si costruisce il cane adulto. Lavoro su attenzione e gestione." },
    { icon: Building2, title: "Gestione urbana", desc: "Vivere bene Milano insieme: traffico, persone, rumori, spazi piccoli." },
    { icon: LinkIcon, title: "Guinzaglio", desc: "Camminate rilassate senza tirare. Tecnica, costanza e relazione." },
    { icon: Target, title: "Richiamo", desc: "Un cane che torna sempre. Costruito step by step, senza scorciatoie." },
    { icon: Sparkles, title: "Eccessiva eccitazione", desc: "Insegnare a calmarsi: dentro casa, in passeggiata, davanti agli stimoli." },
  ];
  return (
    <section id="percorso" className="py-24 md:py-36 container-px max-w-7xl mx-auto">
      <SectionHeader
        kicker="A chi è rivolto"
        title="Per chi è pensato il percorso"
        sub="Educazione di base e gestione quotidiana — per chi vuole costruire un cane equilibrato nella vita reale di città."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group bg-background p-8 md:p-10 transition-colors hover:bg-surface"
          >
            <Icon className="h-6 w-6 text-accent mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.4} />
            <h3 className="font-display text-2xl mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="chi-sono" className="py-24 md:py-36 bg-surface">
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={portraitImg}
              alt="Ritratto educatore cinofilo Milano"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="aspect-square overflow-hidden rounded-xl">
              <img src={action1} alt="Lavoro pratico con Belgian Malinois" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl bg-background border border-border flex items-center justify-center p-6 text-center">
              <p className="font-display text-sm text-muted-foreground italic leading-relaxed">
                "Un cane equilibrato non nasce, si costruisce — un giorno alla volta."
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 text-white">
          <SectionHeader
            kicker="Chi sono"
            title="Lavoro pratico, relazione vera, risultati nella vita di tutti i giorni."
          />
          <div className="space-y-5 font-sans text-base md:text-lg text-muted-foreground leading-relaxed text-pretty [&_p]:font-sans [&_span]:font-sans">
            <p>
              Il mio approccio è semplice: niente scorciatoie e niente spettacolarizzazione. Mi concentro su ciò che conta davvero: la vita quotidiana con il cane, dentro e fuori casa.
            </p>
            <p>
              Non te lo presento come "il cane perfetto". È il cane su cui imparo, ogni giorno,
              cosa significa costruire una relazione fatta di costanza, ascolto e gestione concreta. È quello
              che mi permette di capire fino in fondo i cani che vedo lavorando con i miei clienti.
            </p>
            <p>
              Il mio approccio è semplice: niente scorciatoie e niente spettacolarizzazione. Mi concentro su ciò che conta davvero: la vita quotidiana con il cane, dentro e fuori casa.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {["Percorso ENCI in corso", "Esperienza pratica quotidiana", "Approccio basato sulla relazione"].map((t) => (
              <span key={t} className="text-xs uppercase tracking-[0.18em] text-muted-foreground border border-border px-3 py-2 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    { n: "01", title: "Compili il questionario online", desc: "In pochi minuti, da mobile. Tutte le informazioni che mi servono per capire il punto di partenza." },
    { n: "02", title: "Analizzo la situazione e ti ricontatto", desc: "Valuto il caso e ti rispondo personalmente entro 48 ore con un primo confronto." },
    { n: "03", title: "Incontri pratici personalizzati", desc: "Sessioni costruite sulla tua quotidianità, dove vivi e dove porti il cane ogni giorno." },
    { n: "04", title: "Costruiamo una gestione concreta e sostenibile", desc: "Non un protocollo da seguire, ma uno stile di gestione che resta nel tempo." },
  ];
  return (
    <section id="metodo" className="py-24 md:py-36 container-px max-w-7xl mx-auto">
      <SectionHeader kicker="Come lavoro" title="Un metodo trasparente, dal primo contatto alla gestione quotidiana." />
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
        {steps.map((s, i) => (
          <div key={s.n} className="group relative py-8 border-t border-border first:border-t md:[&:nth-child(2)]:border-t flex gap-6 md:gap-10">
            <div className="font-display text-3xl text-accent w-12 shrink-0">{s.n}</div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl mb-2">{s.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const features = [
    "Sessione di 1 ora",
    "A Milano e zone limitrofe",
    "Disponibilità 7 giorni su 7",
    "Programma costruito sulla tua quotidianità",
    "Materiali e suggerimenti pratici dopo la sessione",
  ];
  return (
    <section id="servizi" className="py-24 md:py-36 bg-surface">
      <div className="container-px max-w-7xl mx-auto">
        <SectionHeader
          kicker="Servizi e prezzi"
          title="Un percorso pratico personalizzato."
          sub="Una formula semplice e trasparente. Costruiamo insieme il numero di sessioni adatto al tuo cane."
        />
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl p-10 md:p-14 border border-accent bg-background shadow-2xl shadow-accent/10 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
              Lezione singola
            </div>
            <h3 className="font-display text-3xl mb-3">Sessione di educazione</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Una sessione mirata, costruita sulla tua situazione reale.
            </p>
            <p className="text-sm text-foreground/90 mb-8">
              Servizio a domicilio su Milano e dintorni
            </p>
            <div className="flex items-baseline gap-2 mb-10">
              <span className="font-display text-7xl">€60</span>
              <span className="text-base text-muted-foreground">/ora</span>
            </div>
            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contatto"
              className="block text-center w-full py-3.5 rounded-md text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
            >
              Richiedi una consulenza
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <section id="contatto" className="py-24 md:py-36 container-px max-w-4xl mx-auto">
      <SectionHeader
        kicker="Modulo di contatto"
        title="Iniziamo dal questionario."
        sub="Un modo semplice per farmi capire la situazione e per arrivare già preparato alla nostra prima chiamata."
      />
      <div className="mb-8 p-5 rounded-lg border border-border bg-surface text-sm text-muted-foreground leading-relaxed">
        Lavoro principalmente su <span className="text-foreground">educazione di base e gestione quotidiana</span>.
        Per situazioni più complesse verrà prima valutato il caso.
      </div>
      <MultiStepForm />
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "Giulia M.", breed: "Border Collie · 6 mesi", text: "Approccio calmo e concreto. In poche sessioni abbiamo trasformato le passeggiate." },
    { name: "Andrea R.", breed: "Labrador · 1 anno", text: "Spiega tutto con chiarezza e ti dà strumenti che usi davvero ogni giorno." },
    { name: "Sara C.", breed: "Pastore Australiano · 8 mesi", text: "Finalmente un educatore che lavora sulla relazione, non solo sui comandi." },
  ];
  return (
    <section className="py-24 md:py-36 container-px max-w-7xl mx-auto">
      <SectionHeader kicker="Recensioni" title="Cosa dicono i proprietari." />
      <div className="grid md:grid-cols-3 gap-5">
        {reviews.map((r) => (
          <div key={r.name} className="p-8 rounded-2xl border border-border bg-surface hover:border-accent/40 transition-colors">
            <div className="flex gap-0.5 mb-5 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
            </div>
            <p className="text-base text-foreground/90 leading-relaxed mb-8 text-pretty">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-muted border border-border" />
              <div>
                <div className="text-sm text-foreground">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.breed}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-24 md:py-36 bg-surface">
      <div className="container-px max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-balance leading-[1.05] mb-6">
          Inizia a vivere meglio <span className="italic text-accent">con il tuo cane</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-10">
          Compila il modulo e ti ricontatterò personalmente.
        </p>
        <a
          href="#contatto"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md text-sm font-medium hover:bg-primary/90 transition-all group"
        >
          Richiedi una consulenza
          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 container-px max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="font-display text-xl mb-3">Cinofilia<span className="text-accent">.</span>Milano</div>
          <p className="text-sm text-muted-foreground">Educatore cinofilo in formazione · Percorso ENCI.</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
            <MapPin className="h-4 w-4" /> Milano, Italia
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contatti</div>
          <ul className="space-y-3 text-sm">
            <li><a href="https://wa.me/393318165762" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"><MessageCircle className="h-4 w-4" /> +39 331 8165762</a></li>
            <li><a href="mailto:almasio.sam@gmail.com" className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"><Mail className="h-4 w-4" /> almasio.sam@gmail.com</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"><Instagram className="h-4 w-4" /> Instagram</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Legale</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Privacy policy</Link></li>
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Cookie policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="hairline" />
      <div className="pt-6 text-xs text-muted-foreground/70 flex flex-col md:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Cinofilia Milano. Tutti i diritti riservati.</span>
        <span>Made in Milano</span>
      </div>
    </footer>
  );
}
