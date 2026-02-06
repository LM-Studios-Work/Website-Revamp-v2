export type TestimonialCardProps = {
  imageUrl: string;
  name: string;
  title: string;
  testimonial: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="w-full px-3 py-2 md:w-1/2 md:py-3">
      <div className="bg-white/5 backdrop-blur-sm flex flex-col h-full overflow-hidden rounded-2xl border border-white/5">
        <div className="flex items-center pt-6 px-6">
          <img
            src={props.imageUrl}
            alt={props.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">
              {props.name}
            </span>
            <span className="text-sm text-white/60">
              {props.title}
            </span>
          </div>
        </div>
        <div className="grow p-6">
          <p className="text-white/70 text-sm leading-relaxed">
            {props.testimonial}
          </p>
        </div>
      </div>
    </div>
  );
};
