export type TestimonialCardProps = {
  imageUrl: string;
  name: string;
  title: string;
  testimonial: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-[15px] py-2 md:w-6/12 md:py-4">
      <div className="relative backdrop-blur-[3px] bg-white/10 box-border caret-transparent flex flex-col h-full break-words overflow-hidden rounded-[20px]">
        <div className="items-center box-border caret-transparent flex min-h-[150px] break-words pt-8 px-8 rounded-t-[20px]">
          <img
            src={props.imageUrl}
            alt={props.name}
            className="box-border caret-transparent max-w-full min-h-px break-words mr-4 rounded-[800px]"
          />
          <div className="box-border caret-transparent flex flex-col break-words">
            <span className="text-xl font-semibold box-border caret-transparent block leading-9 break-words">
              {props.name}
            </span>
            <span className="text-base box-border caret-transparent block leading-[28.8px] opacity-75 break-words">
              {props.title}
            </span>
          </div>
        </div>
        <div className="box-border caret-transparent grow break-words p-8 rounded-b-[20px]">
          <p className="box-border caret-transparent break-words">
            {props.testimonial}
          </p>
        </div>
      </div>
    </div>
  );
};
