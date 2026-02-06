export const SocialSidebar = () => {
  return (
    <section className="fixed left-0 top-1/2 -translate-y-1/2 z-[999] hidden lg:block">
      <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
        <div className="items-center box-border caret-transparent flex flex-col shrink-0 max-w-full min-h-6 min-w-0 w-full px-[15px] md:min-w-[auto]">
          <p className="text-base box-border caret-transparent leading-[28.8px] min-h-0 min-w-0 mb-8 mx-4 md:min-h-[auto] md:min-w-[auto]">
            Follow us
          </p>
          <ul className="box-border caret-transparent list-none min-h-0 min-w-0 z-[5] mb-4 pl-0 md:min-h-[auto] md:min-w-[auto]">
            <li className="box-border caret-transparent mb-2">
              <a
                href="https://www.behance.net/odoo-designer"
                title="Behance"
                className="text-purple-300 box-border caret-transparent hover:text-purple-400 hover:border-purple-400"
              >
                <img
                  src="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_social_behance.svg"
                  alt="Behance"
                  className="box-border caret-transparent max-w-full"
                />
              </a>
            </li>
            <li className="box-border caret-transparent mb-2">
              <a
                href="https://dribbble.com/OdooBe"
                title="Dribbble"
                className="text-purple-300 box-border caret-transparent hover:text-purple-400 hover:border-purple-400"
              >
                <img
                  src="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_social_dribbble.svg"
                  alt="Dribbble"
                  className="box-border caret-transparent max-w-full"
                />
              </a>
            </li>
            <li className="box-border caret-transparent mb-2">
              <a
                href="https://www.instagram.com/odoo.official/"
                title="Instagram"
                className="text-purple-300 box-border caret-transparent hover:text-purple-400 hover:border-purple-400"
              >
                <img
                  src="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_social_instagram.svg"
                  alt="Instagram"
                  className="box-border caret-transparent max-w-full"
                />
              </a>
            </li>
            <li className="box-border caret-transparent">
              <a
                href="https://www.youtube.com/playlist?list=PL1-aSABtP6ADgnXqXDdpxU7-8ixNGUsrz"
                title="Youtube"
                className="text-purple-300 box-border caret-transparent hover:text-purple-400 hover:border-purple-400"
              >
                <img
                  src="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_social_youtube.svg"
                  alt="Youtube"
                  className="box-border caret-transparent max-w-full"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
