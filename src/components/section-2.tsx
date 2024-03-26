"use client";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import { FaCaretRight, FaCircleChevronRight } from "react-icons/fa6";
import RadioSelection from "./selection-client";

type Props = {};

const Section2 = (props: Props) => {
  const [selected, setSelected] = useState<string>("overview");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <section className="relative flex min-w-full min-h-[80vh] w-full flex-col items-start gap-4 p-14 md:flex-row">
      {/* Orange element */}
      <div className="h-fit  min-w-[35%] rounded-md shadow-md">
        <RadioSelection selected={selected} handleChange={handleChange} />
      </div>
      {selected === "overview" ? (
        <div className="flex w-full flex-wrap items-center justify-center gap-10 p-10 pt-0">
          <div className="card card-compact max-w-[300px] rounded-md bg-base-100 shadow-md">
            <figure>
              <Image
                width={400}
                height={200}
                style={{
                  objectFit: "scale-down",
                }}
                src="/class-image.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Learning Resources</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s.
              </p>
              <div className="card-actions justify-end">
                <button className="link-primary link inline-flex items-center justify-center gap-2 capitalize">
                  View More <FaCircleChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact max-w-[300px] rounded-md bg-base-100 shadow-md">
            <figure>
              <Image
                width={400}
                height={200}
                style={{
                  objectFit: "scale-down",
                }}
                src="/class-image.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">Self Assessment</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s.
              </p>
              <div className="card-actions justify-end">
                <button className="link-primary link inline-flex items-center justify-center gap-2 capitalize">
                  View More <FaCircleChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact max-w-[300px] rounded-md bg-base-100 shadow-md">
            <figure>
              <Image
                width={400}
                height={200}
                style={{
                  objectFit: "scale-down",
                }}
                src="/class-image.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">Discussion forum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s.
              </p>
              <div className="card-actions justify-end">
                <button className="link-primary link inline-flex items-center justify-center gap-2 capitalize">
                  View More <FaCircleChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact max-w-[300px] rounded-md bg-base-100 shadow-md">
            <figure>
              <Image
                width={400}
                height={200}
                style={{
                  objectFit: "scale-down",
                }}
                src="/class-image.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">Track progress </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s.
              </p>
              <div className="card-actions justify-end">
                <button className="link-primary link inline-flex items-center justify-center gap-2 capitalize">
                  View More <FaCircleChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "No content yet !"
      )}
    </section>
  );
};

export default Section2;
