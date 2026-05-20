import { MessageCircle, ArrowRight } from "lucide-react";

export function StickyMobileCta() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 px-3 pt-6 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-background via-background/95 to-transparent">
      <div className="flex gap-2">
        <a
          href="https://wa.me/393318165762?text=Ciao%20Sam%2C%20vorrei%20informazioni%20sulle%20sessioni%20di%20educazione%20cinofila%20a%20Milano"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrivi su WhatsApp"
          className="inline-flex items-center justify-center gap-2 bg-background border border-border text-foreground rounded-full px-4 py-3.5 text-sm font-semibold shadow-lg shadow-black/10"
        >
          <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp
        </a>
        <a
          href="#contatto"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full py-3.5 text-sm font-semibold shadow-xl shadow-primary/30"
        >
          Richiedi consulenza <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
