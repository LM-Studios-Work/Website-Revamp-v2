export const FooterCTA = () => {
  return (
    <section className="relative box-border caret-transparent py-10 md:py-20">
      <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
        <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 text-center w-full pb-5 px-[15px] md:pb-10">
          <div className="box-border caret-transparent">
            <div role="menu" className="box-border caret-transparent list-none">
              <a
                role="menuitem"
                href=""
                title="English (US)"
                className="box-border caret-transparent inline-block mr-2 py-[3px] hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
              >
                <span className="box-border caret-transparent">
                  English (US)
                </span>
              </a>
              <span className="box-border caret-transparent inline-block mr-2">
                |
              </span>
              <a
                role="menuitem"
                href="/fr_BE"
                title=" Français (BE)"
                className="box-border caret-transparent inline-block mr-2 py-[3px] hover:text-yellow-300 hover:border-yellow-300"
              >
                <span className="box-border caret-transparent">
                  {" "}
                  Français (BE)
                </span>
              </a>
              <span className="box-border caret-transparent inline-block mr-2">
                |
              </span>
              <a
                role="menuitem"
                href="/it"
                title=" Italiano"
                className="box-border caret-transparent inline-block mr-2 py-[3px] hover:text-yellow-300 hover:border-yellow-300"
              >
                <span className="box-border caret-transparent"> Italiano</span>
              </a>
              <span className="box-border caret-transparent inline-block mr-2">
                |
              </span>
              <a
                role="menuitem"
                href="/es"
                title=" Español"
                className="box-border caret-transparent inline-block py-[3px] hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
              >
                <span className="box-border caret-transparent"> Español</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
        <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 text-center w-full px-[15px]">
          <img
            src="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_odoo_horizontal.svg"
            alt="Odoo"
            className="box-border caret-transparent max-w-full mr-4"
          />
        </div>
      </div>
    </section>
  );
};
