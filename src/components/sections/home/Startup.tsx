"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import Image from "next/image";
import StartupImage from "/public/startup-image.jpg";
import StartupImage1 from "/public/svg/startup/startup-image-1.svg";
import StartupImage2 from "/public/svg/startup/startup-image-2.svg";
import StartupImage3 from "/public/svg/startup/startup-image-3.svg";
import { Button, LinkButton } from "@/components/Button";
import OpacityTransition from "@/components/Transition";

const Startup = () => {
  return (
    <section className={styles.sectionPadding}>
      <MaxWidthWrapper>
        <OpacityTransition delay={0}>
          <div className="sm:mb-14 mb-10 text-center">
            <h2 className={styles.heading2}>
              Our app is great for individuals,{" "}
              <br className="sm:block hidden" /> startups and enterprises
            </h2>
          </div>
        </OpacityTransition>
        <OpacityTransition
          className="grid grid-cols-12 lg:gap-8 gap-5"
          delay={0.2}
        >
          <div className="lg:col-span-4 col-span-12 border border-primary-100 relative overflow-hidden">
            <div className="xs:h-[800px] h-[600px]">
              <Image
                fill
                className="object-cover"
                src={StartupImage}
                alt="startup image"
              />
            </div>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <div className="grid grid-cols-12 lg:gap-8 gap-5 h-full">
              <div className="col-span-12 border border-primary-100 sm:p-14 p-7">
                <div className="flex sm:flex-row flex-col gap-x-5">
                  <div className="flex-shrink-0 sm:mb-0 mb-5">
                    <Image
                      width={50}
                      height={50}
                      src={StartupImage3}
                      alt="startup-image 3"
                    />
                  </div>
                  <div>
                    <h3 className={`${styles.heading3} mb-3`}>Individuals</h3>
                    <p className={styles.paragraph}>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="sm:col-span-6 col-span-12 border border-primary-100
                sm:py-14 sm:px-8 p-7"
              >
                <div className="mb-5">
                  <Image
                    width={50}
                    height={50}
                    src={StartupImage2}
                    alt="startup-image 2"
                  />
                </div>
                <div>
                  <h3 className={`${styles.heading3} mb-3`}>Startups</h3>
                  <p className={styles.paragraph}>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum aute
                    irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
              <div
                className="sm:col-span-6 col-span-12 border border-primary-100
                sm:py-14 sm:px-8 p-7"
              >
                <div className="mb-5">
                  <Image
                    width={50}
                    height={50}
                    src={StartupImage1}
                    alt="startup-image 1"
                  />
                </div>
                <div>
                  <h3 className={`${styles.heading3} mb-3`}>Enterprises</h3>
                  <p className={styles.paragraph}>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum aute
                    irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-10">
            <OpacityTransition
              delay={0.2}
              className="sm:flex justify-center items-center gap-x-5"
            >
              <Button
                type="button"
                href="/pricing"
                className={`${styles.blackButton} sm:mb-0 mb-5`}
                title="Get Started"
              />
              <LinkButton href="/about" type="button" title="Learn more" />
            </OpacityTransition>
          </div>
        </OpacityTransition>
      </MaxWidthWrapper>
    </section>
  );
};

export default Startup;
