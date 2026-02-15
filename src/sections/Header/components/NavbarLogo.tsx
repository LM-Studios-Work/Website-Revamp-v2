export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="text-white text-3xl block shrink-0 leading-none text-nowrap font-bold tracking-tight"
    >
      <span className="flex items-center gap-2">
        <img
          src="/lmstudioslogo.png"
          alt="LM Studios Logo"
          className="h-14 max-w-[180px] sm:h-16 sm:max-w-[200px] md:h-[4.8rem] md:max-w-[250px] w-auto inline-block align-middle drop-shadow"
        />
        <span className="text-white text-2xl md:text-3xl font-bold font-sans tracking-tight">
          LM Studios
        </span>
      </span>
    </a>
  );
};
