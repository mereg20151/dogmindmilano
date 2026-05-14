export function StickyMobileCta() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-gradient-to-t from-background via-background/95 to-transparent">
      <a
        href="#contatto"
        className="block w-full text-center bg-primary text-primary-foreground rounded-md py-3.5 text-sm font-medium shadow-lg shadow-black/40"
      >
        Richiedi una consulenza
      </a>
    </div>
  );
}
