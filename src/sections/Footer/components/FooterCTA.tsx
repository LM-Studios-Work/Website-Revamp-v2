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
                title="English"
                className="box-border caret-transparent inline-block mr-2 py-[3px] hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
              >
                <span className="box-border caret-transparent">
                  English
                </span>
              </a>
              <span className="box-border caret-transparent inline-block mr-2">
                |
              </span>
              <a
                role="menuitem"
                href="/af"
                title=" Afrikaans"
                className="box-border caret-transparent inline-block mr-2 py-[3px] hover:text-yellow-300 hover:border-yellow-300"
              >
                <span className="box-border caret-transparent">
                  {" "}
                  Afrikaans
                </span>
              </a>
              <span className="box-border caret-transparent inline-block mr-2">
                |
              </span>
              <a
                role="menuitem"
                href="/zu"
                title=" isiZulu"
                className="box-border caret-transparent inline-block py-[3px] hover:text-[#a1ff0a] hover:border-[#a1ff0a]"
              >
                <span className="box-border caret-transparent"> isiZulu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
        <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 text-center w-full px-[15px]">
          <span className="text-2xl font-bold text-white tracking-wide">LM Studios</span>
        </div>
      </div>
    </section>
  );
};
