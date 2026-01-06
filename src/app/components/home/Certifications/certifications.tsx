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
