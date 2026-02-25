export const FooterCTA = () => {
  return (
    <div className="relative z-[1] flex flex-col items-center gap-6 pb-12">
      <h3 className="text-3xl md:text-4xl font-extrabold text-center text-balance font-sans">
        Ready to start a project?
      </h3>
      <a
        href="/contact"
        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-foreground text-background text-sm font-bold tracking-wide uppercase transition-opacity hover:opacity-80"
      >
        Contact us
      </a>
    </div>
  );
};
