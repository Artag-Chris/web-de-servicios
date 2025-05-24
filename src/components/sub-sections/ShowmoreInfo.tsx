import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React from "react";

function ShowmoreInfo({
  showMoreBio,
  setShowMoreBio,
}: {
  showMoreBio: any;
  setShowMoreBio: any;
}) {
  return (
    <>
      {/* Bio with expandable content */}
      <div className="relative">
        <motion.div
          className={`text-zinc-300 space-y-4 overflow-hidden transition-all duration-500 ${
            showMoreBio ? "max-h-[500px]" : "max-h-[100px]"
          }`}
        >
          <p>
            I'm a passionate fullstack developer with over 5 years of experience
            building web applications. I specialize in creating robust, scalable
            solutions that solve real-world problems.
          </p>
          <p>
            My journey in software development began with a curiosity about how
            things work on the web. That curiosity evolved into a career where
            I've had the opportunity to work with startups and established
            companies alike, helping them bring their digital products to life.
          </p>
          <p className={showMoreBio ? "block" : "hidden"}>
            I believe in writing clean, maintainable code and staying up-to-date
            with the latest technologies and best practices. When I'm not
            coding, you can find me exploring new technologies, contributing to
            open-source projects, or sharing my knowledge through blog posts and
            community events.
          </p>
        </motion.div>

        {/* Read more/less toggle */}
        {!showMoreBio && (
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
        )}
        <div className="relative z-20 mt-2">
          <button
            onClick={() => setShowMoreBio(!showMoreBio)}
            className="text-emerald-400 text-sm flex items-center hover:text-emerald-300 transition-colors"
          >
            {showMoreBio ? "Read less" : "Read more"}
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${
                showMoreBio ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default ShowmoreInfo;
