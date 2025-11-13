import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50 p-8 sm:p-20 flex flex-col items-center">
      {/* Hero Section */}
      <section className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-6">
          We turn ideas into apps
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
          At <span className="font-semibold text-blue-600">SonoCode IT</span>,
          we understand that{" "}
          <span className="font-semibold">speed + quality = success</span>.
          <br />
          That’s why we keep things simple.
        </p>
      </section>

      {/* Steps Section */}
      <section className="w-full max-w-3xl grid gap-10 md:gap-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-shrink-0 text-3xl font-bold text-white bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
            1
          </div>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Send us your idea: how can we help your business scale? Build a new
            app, or assist with completing existing projects for your clients.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-shrink-0 text-3xl font-bold text-white bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
            2
          </div>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We reply fast: get a clear estimate on how long it would take and
            the approximate cost.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-shrink-0 text-3xl font-bold text-white bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
            3
          </div>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Start collaborating: if everything works, we schedule a meeting to
            go through every detail and begin building your solution.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16">
        <Link
          href="/contact"
          className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Home;
