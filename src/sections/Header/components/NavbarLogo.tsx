import Image from "next/image";

export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="text-white text-3xl block shrink-0 leading-none text-nowrap font-bold tracking-tight"
    >
      <span className="flex items-center gap-2">
        <Image
          src="/lmstudioslogo.png"
          alt="LM Studios Logo"
          width={238}
          height={78}
          priority
          className="h-[2.8rem] max-w-[171px] sm:h-[3.04rem] sm:max-w-[190px] md:h-[4.56rem] md:max-w-[238px] w-auto inline-block align-middle drop-shadow"
        />
        <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold font-sans tracking-tight">
          LM Studios
        </span>
      </span>
    </a>
  );
};
