import React from 'react';

const ExperienceSec = () => {
    const experiences = [
      {
        year: "2018 - 2022",
        title:"Data Annotator | Annotation Quality Checker | Annotation Team Lead | Project Lead",
        company: "Pacecom Technologies Pvt Ltd", //https://pacecom.co.in/
        type: "Fulltime",
        description: (
          <div className="text-gray-700 leading-relaxed">
            Led a team of{" "}
            <span className="font-semibold">
              20+ annotators and reviewers
            </span>
            , ensuring{" "}
            <span className="font-semibold">high-quality delivery</span> of
            image and text annotation projects. Managed{" "}
            <span className="font-semibold">sprint planning</span>,{" "}
            <span className="font-semibold">daily stand-ups</span>,{" "}
            <span className="font-semibold">status reporting</span>, and{" "}
            <span className="font-semibold text-primary">
              client escalations
            </span>
            . Successfully delivered{" "}
            <span className="font-semibold text-primary">
              10+ high-volume projects
            </span>{" "}
            with <span className="font-semibold">98%+ accuracy</span>,
            consistently{" "}
            <span className="font-semibold">ahead of deadlines</span>. Ensured
            strict quality adherence across multiple project cycles. Trained and
            mentored <span className="font-semibold">junior annotators</span>{" "}
            and facilitated{" "}
            <span className="font-semibold">reviewer onboarding programs</span>{" "}
            to improve overall team productivity and quality benchmarks.
          </div>
        ),
      },
      {
        year: "2022 - present",
        title: "QA Automation and Manual Engineer",
        company: "Pacecom Technologies Pvt Ltd", //https://pacecom.co.in/
        type: "Fulltime",
        description: (
          <div className="text-gray-700 leading-relaxed">
            I have a proven track record of identifying{" "}
            <span className="font-semibold">critical issues</span>,
            ensuring product quality, and working closely with{" "}
            <span className="font-semibold">developers</span>,{" "}
            <span className="font-semibold">product owners</span>, and
            stakeholders in{" "}
            <span className="font-semibold text-primary">
              Agile environments
            </span>
            . My expertise includes{" "}
            <span className="font-semibold">test case design</span>,{" "}
            <span className="font-semibold">automation script development</span>
            ,{" "}
            <span className="font-semibold text-primary">
              (Selenium + Java) , API testing (Postman)
            </span>
            , and continuous improvement of test processes. I take pride in
            delivering{" "}
            <span className="font-semibold">
              robust and reliable software
            </span>{" "}
            through diligent testing and effective collaboration.
          </div>
        ),
      },
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    {exp.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;