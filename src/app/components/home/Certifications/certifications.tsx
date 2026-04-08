import Image from "next/image";
import { getImgPath } from "@/utils/image";

const Certifications = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="relative z-10">
          <div className="container">
            {/* Section Header */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>Certifications</h2>
              <p className="text-xl text-primary">( 05 )</p>
            </div>

            {/* Content */}
            <div className="pt-10 xl:pt-16 space-y-10 max-w-4xl">
              {/* Certification Item */}
              <div className="flex flex-col gap-3 border-b border-mistGray pb-6">
                <h3 className="text-xl font-semibold">
                  Mobile Automation with Appium 2.0 and WebdriverIO - 2026
                </h3>
                <p className="text-lg text-black">
                  Completed an in-depth course on Mobile Test Automation using
                  Appium 2.0 with WebdriverIO. Gained hands-on experience in
                  building scalable automation frameworks for Android and iOS
                  applications.
                </p>
                <a
                  href="/images/certificates/Mobile Automation with Appium 2.0 and WebdriverIO - 2026.jpg"
                  target="_blank"
                  className="text-primary text-lg font-medium w-fit hover:underline"
                >
                  View Certificate
                </a>
              </div>
              {/* Certification Item */}
              <div className="flex flex-col gap-3 border-b border-mistGray pb-6">
                <h3 className="text-xl font-semibold">
                  Playwright_JS_TS_Automation_Testing_From_Scratch_&_Framework
                </h3>
                <p className="text-lg text-black">
                  Completed a comprehensive course on Playwright with JavaScript
                  & TypeScript, gaining hands-on experience in end-to-end test
                  automation, building scalable test frameworks, implementing
                  Page Object Model (POM), API testing, and CI/CD integration.
                  Developed skills in writing reliable, maintainable, and
                  efficient automated tests for modern web applications.
                </p>
                <a
                  href="/images/certificates/Playwright_JS_TS_Automation_Testing_From_Scratch_&_Framework.jpg"
                  target="_blank"
                  className="text-primary text-lg font-medium w-fit hover:underline"
                >
                  View Certificate
                </a>
              </div>
              {/* Certification Item */}
              <div className="flex flex-col gap-3 border-b border-mistGray pb-6">
                <h3 className="text-xl font-semibold">
                  LambdaTest Product Certified – Automation Testing
                </h3>
                <p className="text-lg text-black">
                  Hands-on certification validating expertise in Selenium-based
                  automation, cross-browser testing on LambdaTest cloud grid,
                  and CI/CD execution.
                </p>
                <a
                  href="/images/certificates/LAT-66E4PC.png"
                  target="_blank"
                  className="text-primary text-lg font-medium w-fit hover:underline"
                >
                  View Certificate
                </a>
              </div>

              {/* Certification Item */}
              <div className="flex flex-col gap-3 border-b border-mistGray pb-6">
                <h3 className="text-xl font-semibold">
                  LambdaTest TestNG Certification
                </h3>
                <p className="text-lg text-black">
                  Demonstrates strong knowledge of TestNG framework including
                  annotations, DataProviders, parallel execution, listeners, and
                  suite configuration.
                </p>
                <a
                  href="/images/certificates/TNG-4FOHP8.png"
                  target="_blank"
                  className="text-primary text-lg font-medium w-fit hover:underline"
                >
                  View Certificate
                </a>
              </div>

              {/* Certification Item */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">
                  LambdaTest Product Certified – Manual Testing
                </h3>
                <p className="text-lg text-black">
                  Certification covering test case design, defect lifecycle,
                  exploratory testing, and functional validation techniques.
                </p>
                <a
                  href="/images/certificates/LMT-Y8QN2H.png"
                  target="_blank"
                  className="text-primary text-lg font-medium w-fit hover:underline"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
