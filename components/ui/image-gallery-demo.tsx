import { ImageGallery } from "@/components/ui/image-gallery";

export default function DemoOne() {
  return (
    <section className="py-20 bg-[#0B1F3A] text-white border-t border-[#C8A45D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold mb-3">
          PORTFOLIO GALLERY
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
          Visual Journey of Sri Lanka
        </h2>
        <p className="text-gray-300 text-sm mt-3 max-w-xl mx-auto">
          Explore iconic high-resolution captures of tea mountains, golf fairways, ocean beaches, and ancient citadels.
        </p>
      </div>

      <ImageGallery />
    </section>
  );
}
