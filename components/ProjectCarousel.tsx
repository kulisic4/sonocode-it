"use client";
import React from "react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  previewType: "iframe" | "image";
  preview: string;
};

const projects: Project[] = [

  {
    id: 1,
    title: "ACENDI APP",
    description:
      "Mindfulness app for everyday meditations! Explore it on your computer, iOS or Android device!",
    link: "https://acendi.vercel.app/",
    previewType: "image",
    preview: "/Acendi-app.png",
  },

  {
    id: 2,
    title: "Our Healthy Day APP",
    description:
      "Web App for a healthy life! Explore the blog, sources, shop and more.",
    link: "https://www.ourhealthyday.com/",
    previewType: "iframe",
    preview: "/Ourhealthyday-app.png",
  },
  
];

const ProjectCarousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        navigation
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="bg-blue-100 p-6 rounded-xl shadow-lg">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h2 className="text-3xl font-extrabold text-gray-800 text-center">
                  {project.title}
                </h2>
                <p className="text-black font-bold text-center">
                  {project.description}
                </p>
                <Image
                  src={project.preview}
                  width={800}
                  height={600}
                  className="p-5 object-cover rounded-lg"
                  alt={project.title}
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
