"use client";

import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-8 rounded-3xl border border-[#C9A227]/30 bg-[#0D2647] shadow-xl shadow-black/20 max-w-xs w-full text-white hover:border-[#C9A227] transition-all"
                  key={i}
                >
                  <div className="text-xs text-gray-200 leading-relaxed italic">"{text}"</div>
                  <div className="flex items-center gap-3 mt-5 pt-3 border-t border-white/10">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full border border-[#C9A227] object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-serif font-bold text-sm tracking-tight leading-5 text-white">{name}</div>
                      <div className="text-[11px] text-[#C9A227] leading-5 tracking-tight font-medium">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
