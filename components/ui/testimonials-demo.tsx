'use client';

import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import { Star, Award } from "lucide-react";

export const testimonialsData: Testimonial[] = [
  {
    text: "Lanka Luxe Journeys arranged direct helicopter transfers from Colombo to Ceylon Tea Trails and Wild Coast. The white-glove precision was unmatchable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    name: "Dr. Alexander von Bernstorff",
    role: "Private Investor, Zurich 🇩🇪",
  },
  {
    text: "빅토리아 캔디와 샹그릴라 함반토타에서의 대기 없는 18홀 라운딩과 1:1 캐디 의전이 최고였습니다. 한국어 콘시어지팀의 세심한 케어에 감사드립니다.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    name: "김민수 대표 (Minsu Kim)",
    role: "CEO & Avid Golfer, Seoul 🇰🇷",
  },
  {
    text: "The level of detail in our customized trip was unmatched. Private tea masterclass, private whale watching yacht, and exquisite cuisine throughout.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    name: "Lady Eleanor Vance",
    role: "Philanthropist, London 🇬🇧",
  },
  {
    text: "Playing Royal Colombo and Nuwara Eliya at 6,000ft altitude with guaranteed morning tee times made this our favorite Asian golf holiday.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    name: "Kenji Sato (佐藤 健二)",
    role: "Golf Club President, Tokyo 🇯🇵",
  },
  {
    text: "The VIP airport runway fast-track and Mercedes V-Class chauffeur transport saved us hours. Highly recommend their 100% tailor-made itineraries.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    name: "Maximilian Weber",
    role: "Tech Entrepreneur, Munich 🇩🇪",
  },
  {
    text: "야라 국립공원 표범 사파리와 와일드 코스트 코쿤 텐트 투숙은 평생 잊지 못할 추억이 되었습니다. 한국인 프라이빗 가이드 의전 덕분에 편안했습니다.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    name: "박지현 이사 (Jihyun Park)",
    role: "Executive Director, Seoul 🇰🇷",
  },
  {
    text: "Staying at Amangalla inside 17th-century Dutch Galle Fort with private catamaran yacht charters exceeded every single expectation.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    name: "Charlotte Dupont",
    role: "Art Curator, Paris 🇫🇷",
  },
  {
    text: "The Santani Ayurvedic wellness diagnosis combined with high-altitude PGA golf in Nuwara Eliya recharged our entire leadership team.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    name: "Tariq Al-Maktoum",
    role: "Family Office Director, Dubai 🇦🇪",
  },
  {
    text: "Exceptional 24/7 travel concierge team on WhatsApp. Any request—from private tea tastings to helicopter charters—was executed seamlessly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    name: "Olivia Chen",
    role: "Venture Partner, Singapore 🇸🇬",
  },
];

const firstColumn = testimonialsData.slice(0, 3);
const secondColumn = testimonialsData.slice(3, 6);
const thirdColumn = testimonialsData.slice(6, 9);

const TestimonialsHorizontal = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <div
      className="md:hidden overflow-hidden w-full relative py-4 mt-8"
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <motion.div
        animate={{
          translateX: "-50%",
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex gap-6 w-max"
      >
        {[...testimonials, ...testimonials].map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-[#C8A45D]/30 bg-[#122848] shadow-xl w-[290px] text-white hover:border-[#C8A45D] transition-all shrink-0 flex flex-col justify-between"
          >
            <div className="text-xs text-gray-200 leading-relaxed italic">"{item.text}"</div>
            <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/10">
              <img
                width={36}
                height={36}
                src={item.image}
                alt={item.name}
                className="h-9 w-9 rounded-full border border-[#C8A45D] object-cover"
              />
              <div className="flex flex-col">
                <div className="font-serif font-bold text-xs tracking-tight leading-4 text-white">{item.name}</div>
                <div className="text-[10px] text-[#C8A45D] leading-4 tracking-tight font-medium">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-[#060F1D] py-20 relative overflow-hidden border-t border-[#C8A45D]/20 text-white">
      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <div className="flex justify-center">
            <div className="border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] py-1 px-4 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Discerning Guest Reviews</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight mt-5 text-white">
            What Our VIP Guests Say
          </h2>
          <p className="text-center mt-3 text-xs sm:text-sm text-gray-300">
            Read verified testimonials from international travelers and Korean golf guests.
          </p>
        </motion.div>

        {/* Horizontal auto-scrolling row on mobile only */}
        <TestimonialsHorizontal testimonials={testimonialsData} />

        {/* Vertical auto-scrolling columns on desktop/tablet */}
        <div className="hidden md:flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
