import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";

export const ProjectsGrid = () => {
  return (
    <section className="relative box-border caret-transparent pt-5 pb-8 px-4 md:pt-10 md:pb-16 md:px-8">
      <div className="relative box-border caret-transparent w-full mx-auto px-[15px] before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-lg before:not-italic before:normal-nums before:font-light before:tracking-[normal] before:leading-[32.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-lg after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[32.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
        <div className="items-stretch box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <ProjectCard
            imageUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/image_1024.jpg"
            imageAlt="Penguin"
            clockIconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_time.svg"
            timeText="50:00"
            title="Penguin"
            tags={[
              {
                text: "Apparel",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-[#a1ff0a] mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Standard",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-purple-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Website",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Ecommerce",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Events",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Blog",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
            ]}
            description="Founded over 20 years ago from a passion for freeriding, Penguin creates technically advanced, functional apparel designed for uncompromising performance in the powder. Following t..."
            discoverMoreUrl="/projects/21"
            discoverMoreIconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/icon-2.svg"
          />
          <ProjectCard
            imageUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/image_1024-1.jpg"
            imageAlt="Plugin Company"
            clockIconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_time.svg"
            timeText="50:00"
            title="Plugin Company"
            tags={[
              {
                text: "Energy",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-[#a1ff0a] mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Standard",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-purple-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Website",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
            ]}
            description="Pioneers in car charging in Belgium, Plugin company has been offering since 2009 personalised and reliable solutions to support businesses striving for sustainability and individua..."
            discoverMoreUrl="/projects/18"
            discoverMoreIconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/icon-2.svg"
          />
          <ProjectCard
            imageUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/image_1024-2.jpg"
            imageAlt="Laboratoires PRED"
            clockIconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_time.svg"
            timeText="250:00"
            title="Laboratoires PRED"
            tags={[
              {
                text: "Health & Medical",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-[#a1ff0a] mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Custom",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-purple-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Website",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Ecommerce",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Events",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Blog",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
            ]}
            description="Laboratoires PRED mission is to improve oral health and help practitioners offer patients their best smile by promoting minimally invasive, evidence-based dentistry. They select on..."
            discoverMoreUrl="/projects/17"
            discoverMoreIconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/icon-2.svg"
          />
          <ProjectCard
            imageUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/image_1024-3.jpg"
            imageAlt="Torvisco"
            clockIconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_time.svg"
            timeText="50:00"
            title="Torvisco"
            tags={[
              {
                text: "Manufacturing",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-[#a1ff0a] mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Standard",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-purple-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Website",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Ecommerce",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Blog",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
            ]}
            description="TORVISCO GROUP has been a leading name in the bathroom and sanitary sector since 1979. With over 40 years of expertise, the company employs more than 300 professionals and operates..."
            discoverMoreUrl="/projects/20"
            discoverMoreIconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/icon-2.svg"
          />
          <ProjectCard
            imageUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/image_1024-4.jpg"
            imageAlt="Cefora"
            clockIconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_time.svg"
            timeText="500:00+"
            title="Cefora"
            tags={[
              {
                text: "Education",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-[#a1ff0a] mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Custom",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-purple-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Website",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Events",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Blog",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
            ]}
            description="Cefora is a major Belgian training organization serving over 500,000 employees and 60,000 companies within the country’s largest employment sector (CP 200). Created by social partn..."
            discoverMoreUrl="/projects/22"
            discoverMoreIconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/icon-2.svg"
          />
          <ProjectCard
            imageUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/image_1024-5.jpg"
            imageAlt="Julie’s House"
            clockIconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_time.svg"
            timeText="200:00"
            title="Julie’s House"
            tags={[
              {
                text: "Food & Restaurant",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-[#a1ff0a] mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Custom",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-purple-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Website",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mr-2 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
              {
                text: "Ecommerce",
                className:
                  "text-xs font-semibold box-border caret-transparent inline-block leading-3 break-words text-center uppercase text-nowrap border-teal-300 mb-2 px-3.5 py-2 rounded-[800px] border-2 border-solid",
              },
            ]}
            description="Julie’s House was born from Julie’s childhood dream of a dollhouse made of cake. Fueled by her passion for sweets and honed by her pastry training at Spermalie and Ter Groene Poort..."
            discoverMoreUrl="/projects/11"
            discoverMoreIconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/icon-2.svg"
          />
        </div>
        <div className="box-border caret-transparent flex flex-wrap justify-center ml-[-15px] mr-[-15px] pt-5 md:pt-10"></div>
      </div>
    </section>
  );
};
