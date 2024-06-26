"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OpacityTransition from "@/components/Transition";
import { brands } from "@/lib/data";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="py-14 bg-background-100">
      <MaxWidthWrapper>
        <div>
          <div className="grid grid-cols-12 items-center lg:gap-x-8 gap-x-6 gap-y-5">
            {brands.map(({ id, img, alt }) => (
              <div
                key={id}
                className="lg:col-span-2 md:col-span-4 col-span-6 justify-self-center"
              >
                <OpacityTransition delay={0.5}>
                  <Image
                    width={135}
                    height={35}
                    src={img}
                    alt={alt + `-${id}`}
                  />
                </OpacityTransition>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Brands;
