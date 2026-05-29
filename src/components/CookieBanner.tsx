import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";


export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("dogmind-cookies-status");
    if (!status) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("dogmind-cookies-status", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("dogmind-cookies-status", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl mb-4">
      <div className="bg-surface-elevated border border-border rounded-lg shadow-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-muted-foreground flex-1">
          Questo sito utilizza cookie tecnici necessari al funzionamento.
          Per saperne di più consulta la{" "}
          <Link
            to="/cookies"
            className="underline text-accent hover:text-accent/80 transition-colors"
          >
            cookie policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 shrink- =0">
          <button
            onClick={accept}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Accetta
          </button>
          <button
            onClick={decline}
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            Rifiuta
          </button>
        </div>
      </div>
    </div>
  );
}
