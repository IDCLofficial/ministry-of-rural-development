"use client";

import React, { useState } from "react";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MediaSearchBar from "./MediaSearchBar";

const mediaItems = [
  {
    image: "/images/okobi5.png",
    title: "Launch of OKOBI Initiative across Imo Communities",
    isVideo: false,
  },
  {
    image: "/images/agro.png",
    title: "Agripreneurs Start Farming Under LIFE‑ND Programme",
    isVideo: false,
  },
  {
    image: "/images/okobi6.png",
    title: "LIFE‑ND Training: Cassava & Poultry Entrepreneurs in Obollo and Ngor‑Okpala",
    isVideo: false,
  },
  {
    image: "/images/okobi2.jpeg",
    title: "Imo Agripreneurs Set to Benefit from FMN Innovation Awards",
    isVideo: false,
  },
  {
    image: "/images/okobi1.png",
    title: "OKOBI Student Club Launch at KOMU to Foster Youth Entrepreneurship",
    isVideo: false,
  },
];

export default function MediaPage() {
  const [search, setSearch] = useState("");

  const filteredItems = mediaItems.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Empowering Rural Communities in Imo State"
        subtitle="Browse through our gallery of initiatives, media coverage, and community engagements showcasing our efforts to uplift rural areas across Imo State."
        backgroundImage="/images/gradient.png"
        searchBar={<MediaSearchBar placeholder="Search media..." onSearch={setSearch} />}
      />
  
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <div className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-500 text-lg font-semibold py-12">
              No results found
            </div>
          ) : (
            <MediaGalleryGrid items={filteredItems} />
          )}
        </div>
      </section>
  
      <CTASection
        heading="Support Rural Development in Imo State"
        subtext="Join us in our mission to improve infrastructure, empower local economies, and enhance the quality of life in our rural communities."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
  
      <Footer />
    </main>
  );
  
}
