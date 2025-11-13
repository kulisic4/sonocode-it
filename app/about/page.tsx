import React from "react";

const about = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col row-start-2 items-center">
        <h1 className="text-4xl text-center font-bold text-blue-600">
          About Danilo
        </h1>
        <div>
          <p className="max-w-3xl mx-auto text-gray-800 text-lg leading-relaxed md:text-xl md:leading-relaxed mt-8">
            I am a Frontend Engineer based in Novi Sad, Serbia, with experience in{" "}
            <span className="font-semibold text-blue-600">
              JavaScript, TypeScript, React, Next.js, CSS, Git, GitHub, and
              GraphQL
            </span>
            . I specialize in building high-quality, user-friendly applications
            that solve real-world problems.
            <br />
            <br />
            One of my key projects was{" "}
            <span className="font-semibold text-blue-600">
              “Our Healthy Day”
            </span>
            , a comprehensive app for purchasing health supplements and
            mushrooms, where I led the integration of a blog and database
            system. I am passionate about creating{" "}
            <span className="font-semibold text-blue-600">
              exceptional user experiences
            </span>{" "}
            and take pride in delivering results that exceed expectations.
          </p>
        </div>
      </main>
    </div>
  );
};

export default about;
