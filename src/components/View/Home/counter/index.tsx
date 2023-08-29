import React, { useState } from "react";
import counterData from "#/__mocks__/counter.json";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [count, setCount] = useState(false);

  return (
    <div className="lg:section-gap sm:section-gap-m section-gap-sm">
      <div className="bg-gradient-to-r from-blue-50 to-green-50 ">
        <div className="container mx-auto lg:section-gap sm:section-gap-m section-gap-sm">
          <div className="w-2/3 flex md:justify-between md:flex-row flex-col gap-10 md:gap-0 px-3 mx-auto lg:px-0">
            {counterData.counter.map((counter: any, i: number) => {
              return (
                // <ScrollTrigger
                //   onEnter={() => setCount(true)}
                //   onExit={() => setCount(false)}
                // >
                  <div className="gap-12 text-center" key={i}>
                    <img
                      src={counter.icon}
                      alt="count"
                      className="mx-auto mb-6"
                    />
                    <h4 className="text-4xl font-poppins font-semibold mb-3">
                      {/* {count && ( */}
                        <CountUp
                          start={0}
                          end={counter.number}
                          duration={2}
                          delay={0}
                        />
                      {/* )} */}
                      +
                    </h4>
                    <p className="lg:text-xl text-lg font-poppins">
                      {counter.content}
                    </p>
                  </div>
                // </ScrollTrigger>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
