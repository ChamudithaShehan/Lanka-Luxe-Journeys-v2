'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Compass, Clock, User, ArrowRight, Search, Tag, BookOpen, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { BLOG_ARTICLES, BlogArticle } from '@/data/travelData';

export default function BlogPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const categories = ['All', 'Golf', 'Luxury Travel', 'Korean Guide', 'Culture', 'Wildlife'];

  const filteredArticles = BLOG_ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.titleKr.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#0B1F3A] text-white min-h-screen pb-24">
      {/* Hero Banner */}
      <section className="relative py-28 bg-[#060F1D] overflow-hidden border-b border-[#C8A45D]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            THE LUXE JOURNAL
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            {language === 'kr' ? "스리랑카 럭셔리 & 골프 저널" : "Sri Lanka Luxury & Golf Journal"}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            {language === 'kr'
              ? "명문 골프 코스 라운딩 노하우부터 차밭 방갈로 투숙 가이드 및 한국 VIP 전담 콘시어지 팁."
              : "Insights on PGA golf, tea bungalow retreats, private charters, and Korean VIP concierges."}
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#122848] border border-[#C8A45D]/30 rounded-2xl p-4 sm:p-6 shadow-xl">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#C8A45D] text-[#0B1F3A] shadow-md'
                    : 'bg-[#0B1F3A] text-gray-300 border border-white/10 hover:border-[#C8A45D]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'kr' ? "아티클 검색..." : "Search articles..."}
              className="w-full bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-[#122848] border border-[#C8A45D]/30 hover:border-[#C8A45D] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={art.image} alt={art.titleEn} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122848] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-[#C8A45D] text-[#0B1F3A] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {art.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#C8A45D]" /> {art.readTime}</span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors">
                    {language === 'kr' ? art.titleKr : art.titleEn}
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 line-clamp-3 leading-relaxed">
                    {language === 'kr' ? art.excerptKr : art.excerptEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#C8A45D] font-bold uppercase tracking-wider">
                  <span>Read Journal Entry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div onClick={() => setSelectedArticle(null)} className="fixed inset-0 bg-[#060F1D]/80 backdrop-blur-md" />
          <div className="relative w-full max-w-3xl bg-[#0B1F3A] border border-[#C8A45D]/50 rounded-2xl p-6 sm:p-8 shadow-2xl text-white z-10 my-8 space-y-6">
            <button onClick={() => setSelectedArticle(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 p-2 rounded-full">
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs text-[#C8A45D] uppercase tracking-wider font-semibold">{selectedArticle.category} • {selectedArticle.date}</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">{language === 'kr' ? selectedArticle.titleKr : selectedArticle.titleEn}</h2>
            <div className="relative h-64 rounded-xl overflow-hidden border border-[#C8A45D]/30">
              <Image src={selectedArticle.image} alt={selectedArticle.titleEn} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {language === 'kr' ? selectedArticle.contentKr : selectedArticle.contentEn}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
