"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">
            {/* Contact Items */}
            {/* Contact Items */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 md:gap-5 lg:gap-11">
              {contactBarData?.contactItems?.map(
                (value: any, index: number) => (
                  <a
                    key={index}
                    href={value?.link} // use the actual link from JSON
                    target="_blank" // open email/phone in new tab
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 lg:gap-4 text-sm md:text-base hover:text-primary"
                  >
                    <Image
                      src={getImgPath(value?.icon)}
                      alt={value?.type}
                      width={32}
                      height={32}
                      className="min-w-[24px] min-h-[24px] focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <h6 className="text-sm md:text-base xl:text-xl">
                      {value?.label}
                    </h6>
                  </a>
                )
              )}
            </div>

            {/* Social Items */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-2.5">
              {contactBarData?.socialItems?.map((value: any, index: number) => (
                <a
                  key={index}
                  href={value.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-colors duration-300 hover:bg-auto flex items-center justify-center">
                  <Image
                    src={getImgPath(value.icon)}
                    alt={value.platform}
                    width={50}
                    height={50}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>

            {/* Social Items */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
