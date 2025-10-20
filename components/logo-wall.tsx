const logos = ["Atlas", "Beacon", "Nova", "Quantis", "Vector", "Orbital"];

export function LogoWall() {
  return (
    <section className="rounded-3xl border border-border/60 bg-surface/60 px-6 py-10">
      <p className="text-center text-sm uppercase tracking-[0.3em] text-muted">Trusted by scaled operators</p>
      <div className="mt-6 grid grid-cols-2 items-center justify-items-center gap-6 text-lg font-semibold text-text sm:grid-cols-3 md:grid-cols-6">
        {logos.map((logo) => (
          <span key={logo} className="opacity-70">{logo}</span>
        ))}
      </div>
    </section>
  );
}
