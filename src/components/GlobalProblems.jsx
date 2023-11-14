"use client";
import Image from "next/image";
import problems from "../assets/images/problems.png";
import play from "../assets/images/play.png";
import TypeWriter from "typewriter-effect";
export default function GlobalProblems() {
  return (
    <div id="home">
      <div className="flex gap-6 items-center h-screen overflow-hidden">
        <div className="text my-auto min-[850px]:w-1/2 min-[850px]:py-0 py-10">
          <div>
            <h2 className="text-5xl font-semibold">
              Launching startups to <span className="text-blue">solve</span>{" "}
              global <span className="text-blue">problems</span>
            </h2>
            <div className="mt-4 font-normal text-lg">
              <TypeWriter
                options={{
                  strings: [
                    "We help to ignite global change with our accelerator program designed to supercharge the growth of startups",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="flex gap-4 mt-12 flex-wrap">
              <button className="py-2.5 px-5 bg-blue text-white font-sm w-40">
                Learn more
              </button>
              <button className="flex items-center justify-center py-2.5 px-5 bg-wblue w-40">
                <Image src={play} alt="img" />
                Play showreel
              </button>
            </div>
          </div>
        </div>
        <div className="img min-[850px]:block hidden w-1/2">
          <Image src={problems} className="w-full" alt="img" />
        </div>
      </div>
    </div>
  );
}
