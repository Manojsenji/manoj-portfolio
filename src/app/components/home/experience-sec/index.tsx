import React from 'react';

const ExperienceSec = () => {
    const experiences = [
      {
        year: "2018-2022",
        title:
          "Data Annotator | Annotation Quality Checker | Annotation Team Lead | Project Lead",
        company: "Pacecom Technologies Pvt Ltd", //https://pacecom.co.in/
        type: "Fulltime",
        description:
          "Led a team of 20+ annotators and reviewers, ensuring high-quality delivery of image and text annotation projects. Managed sprint planning, stand-ups, reporting, and client escalations. Delivered 10+ high-volume projects with >98% accuracy, consistently ahead of deadlines. Ensured quality and adherence to guidelines across multiple project cycles. Trained and mentored junior annotators and facilitated reviewer onboarding programs. ",
      },
      {
        year: "2022-present",
        title: "QA Automation and Manual Engineer",
        company: "Pacecom Technologies Pvt Ltd", //https://pacecom.co.in/
        type: "Fulltime",
        description:
          " I have a proven track record of identifying critical issues, ensuring product quality, and working closely with developers, product owners, and stakeholders in Agile environments.My expertise includes test case design, automation script development(Selenium + Java), API testing(Postman), and continuous improvement of test processes.I take pride in delivering robust and reliable software through diligent testing and effective collaboration.",
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
                                    <p className="leading-relaxed text-base">{exp.description}</p>
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