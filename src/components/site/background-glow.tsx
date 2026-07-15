function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div
        className="absolute inset-0 grid-bg opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
        }}
      />
      <div className="animate-float-glow absolute -top-40 -left-32 h-[34rem] w-[34rem] blue-glow blur-2xl" />
      <div
        className="animate-float-glow absolute top-1/3 -right-40 h-[40rem] w-[40rem] blue-glow blur-2xl"
        style={{ animationDelay: "-4s" }}
      />
      <div className="absolute bottom-0 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 blue-glow opacity-70 blur-3xl" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 0%, transparent 40%, var(--background) 95%)",
        }}
      />
    </div>
  );
}

export { BackgroundGlow };
