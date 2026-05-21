import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Dog, Baby, Building2, Link as LinkIcon, Target, Sparkles,
  Instagram, MessageCircle, Mail, MapPin, Star, ArrowRight, Check,
  Menu, X,
} from "lucide-react";
import {
  Sheet, SheetTrigger, SheetContent, SheetClose,
} from "@/components/ui/sheet";
import heroImg from "@/assets/hero-malinois.jpg";
import portraitImg from "@/assets/about-portrait.jpg";
import action1 from "@/assets/action-1.jpg";
import { MultiStepForm } from "@/components/MultiStepForm";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import logoImg from "@/assets/logo-dog-mind-milano.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dog Mind Milano · Educatore cinofilo a Milano | Sessioni 1:1" },
      { name: "description", content: "Educatore cinofilo a Milano. Sessioni private a domicilio per cuccioli, cani giovani e gestione urbana. Metodo basato sulla relazione. Prima consulenza in 48h." },
      { name: "keywords", content: "educatore cinofilo Milano, addestramento cani Milano, educazione cuccioli Milano, gestione urbana cane, ENCI" },
      { property: "og:title", content: "Dog Mind Milano — Educazione cinofila moderna" },
      { property: "og:description", content: "Sessioni private 1:1 a Milano per costruire un cane equilibrato nella vita di tutti i giorni." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dogmindmilano.lovable.app/" },
      { property: "og:image", content: "https://dogmindmilano.lovable.app/logo-dog-mind-milano.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0a0a0a" },
    ],
    links: [
      { rel: "canonical", href: "https://dogmindmilano.lovable.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Dog Mind Milano",
          description: "Educatore cinofilo a Milano — sessioni private di educazione e gestione urbana.",
          areaServed: "Milano",
          telephone: "+393318165762",
          email: "dogmindmilano@gmail.com",
          url: "https://dogmindmilano.lovable.app/",
          address: { "@type": "PostalAddress", addressLocality: "Milano", addressCountry: "IT" },
        }),
      },
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
    <div className="min-h-screen bg-background text-foreground pb-24 md:pb-0">
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
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-4 md:top-6 inset-x-0 z-30 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between bg-background/70 backdrop-blur-xl border border-border rounded-full shadow-sm">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <img src={logoImg} alt="Dog Mind Milano" className="h-10 md:h-12 w-auto" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-base md:text-lg text-foreground">Dog Mind</span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-semibold mt-1">Milano</span>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-accent transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contatto"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all"
        >
          Consulenza
        </a>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-foreground hover:bg-surface transition-colors">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Apri menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background border-l border-border">
            <div className="flex flex-col gap-6 mt-8">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contatto"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all"
              >
                Consulenza
              </a>
              <img src={logoImg} alt="Dog Mind Milano" className="h-20 w-auto object-contain self-center shrink-1 opacity-70 mt-6" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-background">
      {/* Blurred background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/80" />

      </div>


      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
        <div className="reveal flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-accent" />
          <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-muted-foreground">Educazione cinofila · Milano</span>
          <div className="h-px w-12 bg-accent" />
        </div>
        <h1 className="reveal reveal-delay-1 font-display text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-tight text-foreground mb-10">
          Il tuo cane,<br />
          <span className="italic font-light text-accent">finalmente</span> sereno<br />
          in città.
        </h1>
        <p className="reveal reveal-delay-2 max-w-xl text-lg md:text-2xl text-muted-foreground leading-relaxed font-light mb-10 mx-auto">

          Educazione di base e gestione quotidiana. Per chi vuole costruire un cane equilibrato nella vita reale di città.
        </p>

        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
          <a
            href="#contatto"
            className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-7 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/30"
          >
            PRENOTA LA PRIMA CONSULENZA
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/393318165762?text=Ciao%20Sam%2C%20vorrei%20informazioni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-surface-elevated hover:border-foreground/30 transition-all"
          >
            <MessageCircle className="h-4 w-4" /> Scrivimi su WhatsApp
          </a>
        </div>
        <div className="reveal reveal-delay-4 mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto border-t border-border pt-8">
          <div>
            <div className="font-display text-3xl text-foreground">120+</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">Sessioni svolte</div>
          </div>
          <div>
            <div className="font-display text-3xl text-foreground">48h</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">Risposta garantita</div>
          </div>
          <div>
            <div className="font-display text-3xl text-foreground">ENCI</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">Percorso in corso</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MilanoBanner() {
  return (
    <div className="relative w-full overflow-hidden py-6 md:py-10 select-none pointer-events-none">
      <span className="block font-display text-[28vw] leading-none whitespace-nowrap text-foreground/[0.06] text-center tracking-tight">
        MILANO
      </span>
    </div>
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
        sub="Il percorso è rivolto a tutti i proprietari che desiderano migliorare il rapporto con il proprio cane attraverso un’educazione equilibrata, rispettosa e personalizzata. Ogni percorso viene costruito in base alle esigenze del cane e della famiglia, con l’obiettivo di creare una convivenza serena e una comunicazione chiara tra cane e proprietario."
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
          <div className="mt-3">
            <div className="aspect-square overflow-hidden rounded-xl">
              <img src={action1} alt="Lavoro pratico con Belgian Malinois" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeader
            kicker=""
            title={"\n"}
          />
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
    "Ogni situazione richiede un approccio diverso: per questo i percorsi vengono personalizzati caso per caso.",
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
              {"\n"}
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
        sub="Poche domande per inquadrare il tuo cane, le sue abitudini e gli obiettivi su cui vuoi lavorare."
      />
      <div className="mb-8 p-5 rounded-lg border border-border bg-surface text-sm text-muted-foreground leading-relaxed">
        Lavoro principalmente su <span className="text-foreground">educazione di base e gestione quotidiana</span>.
        Per situazioni più complesse verrà prima valutato il caso.
      </div>
      <div className="mb-8 flex flex-col sm:flex-row gap-3">
        <a
          href="https://wa.me/393318165762"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 flex-1 border border-border rounded-md px-5 py-3.5 text-sm text-foreground hover:bg-surface transition-colors"
        >
          <MessageCircle className="h-4 w-4 text-accent" /> +39 331 8165762
        </a>
        <a
          href="mailto:dogmindmilano@gmail.com"
          className="inline-flex items-center justify-center gap-2 flex-1 border border-border rounded-md px-5 py-3.5 text-sm text-foreground hover:bg-surface transition-colors"
        >
          <Mail className="h-4 w-4 text-accent" /> dogmindmilano@gmail.com
        </a>
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
    <section className="relative py-28 md:py-40 bg-surface-elevated overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full bg-accent blur-3xl" />
      </div>
      <div className="container-px max-w-4xl mx-auto text-center relative">
        <img src={logoImg} alt="Logo Dog Mind Milano" className="h-20 w-auto mx-auto mb-8 opacity-90" />
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-border bg-background text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Posti limitati questa settimana
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-balance leading-[1.05] mb-6">
          Inizia a vivere meglio <span className="italic text-accent">con il tuo cane</span>
        </h2>
        <p className="text-base md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Compila il questionario o scrivimi su WhatsApp. Ti rispondo personalmente entro 48 ore.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contatto"
            className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/30 transition-all"
          >
            Richiedi una consulenza
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/393318165762?text=Ciao%20Sam%2C%20vorrei%20informazioni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-background border border-border text-foreground px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:border-foreground/30 hover:bg-surface transition-all"
          >
            <MessageCircle className="h-4 w-4 text-accent" /> Scrivimi su WhatsApp
          </a>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          {"\n"}
        </p>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-border py-12 container-px max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logoImg} alt="Dog Mind Milano" className="h-12 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground">Educatore cinofilo in formazione · Percorso ENCI.</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
            <MapPin className="h-4 w-4" /> Milano, Italia
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contatti</div>
          <ul className="space-y-3 text-sm">
            <li><a href="https://wa.me/393318165762" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"><MessageCircle className="h-4 w-4" /> +39 331 8165762</a></li>
            <li><a href="mailto:dogmindmilano@gmail.com" className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"><Mail className="h-4 w-4" /> dogmindmilano@gmail.com</a></li>
            <li><a href="https://www.instagram.com/dogmind_milano?igsh=MW1kZ2RqMzN3aXl5Mg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"><Instagram className="h-4 w-4" /> Instagram</a></li>
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
        <span>© {new Date().getFullYear()} DOG MIND MILANO. Tutti i diritti riservati.</span>
        <span>Made in Milano</span>
      </div>
    </footer>
  );
}
