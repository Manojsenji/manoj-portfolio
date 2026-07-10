import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Manoj</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>QA Automation Engineer</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Specialized in designing and maintaining robust test automation
              frameworks using Selenium, Playwright, Java, and TestNG.
              Experienced in Web, Mobile, and API testing, with strong knowledge
              of CI/CD integration, Agile methodologies, and quality assurance
              best practices. Passionate about improving software quality by
              delivering reliable, scalable, and efficient automation solutions.
            </p>
          </div>
          <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px]  overflow-hidden inline-block">
            <Image
              src={getImgPath("/images/home/banner/manoj.jpeg")}
              alt="profile"
              width={300}
              height={300}
              className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
