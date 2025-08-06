'use client';

import Image from "next/image";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { TopHero } from "@/components/TopHero";

const event = {
  title: "Imo Agric Revolution Launch & Agripreneur Empowerment",
  img: "/images/imo‑agric‑revolution.webp",
  date: "July 2025",
  time: "All day",
  organizer: "Ministry of Rural Development & Economic Empowerment, Imo State",
  phone: "N/A",
  address: "Owerri, Imo State",
  description:
    "Imo State has officially kicked off its agricultural revolution under the Ministry of Rural Development & Economic Empowerment. A total of 4,259 agripreneurs have been empowered to begin commercial farming in four key value chains: rice, cassava, poultry and fishery. The programme aims to stimulate rural economy by equipping youth and rural farmers with inputs, training, and market access support." ,
};

const speakers = [
  {
    name: "Hon. Commissioner for Rural Development & Economic Empowerment",
    role: "Lead Speaker",
    img: "/images/minister.png",
  },
];

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days:0, hours:0, minutes:0, seconds:0 });

  useEffect(() => {
    function calculateTimeLeft() {
      const eventDate = new Date(targetDate);
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days:0, hours:0, minutes:0, seconds:0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-green-700 text-white rounded-lg px-8 py-4 flex gap-6 items-center text-center w-max mt-4 mb-6 md:mb-0 md:absolute md:bottom-6 md:right-10 shadow-lg">
      {/* countdown display */}
      {/* Days, Hours, Minutes, Seconds */}
      {/* ... */}
    </div>
  );
}

export default function EventDetailPage() {
  return (
    <>
      <TopHero
        ministryName="Ministry of Rural Development & Economic Empowerment, Imo"
        titleLabel="Events"
      />

      <div className="bg-white">
        {/* Hero Title */}
        <section className="relative w-full h-[220px] flex items-center justify-center bg-gradient-to-br from-green-900/80 to-black/80">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center z-10">{event.title}</h1>
        </section>

        {/* Event Image & Countdown */}
        <section className="relative w-full max-w-6xl mx-auto flex flex-col items-center pt-10 pb-6 px-4">
          <div className="w-full max-w-4xl relative">
            <Image
              src={event.img}
              alt={event.title}
              width={1200}
              height={500}
              className="rounded-xl object-cover w-full h-[340px]"
            />
            {/* Optional countdown if needed */}
          </div>
          <p className="text-gray-700 mt-8 mb-8 text-center max-w-3xl mx-auto">{event.description}</p>
        </section>

        {/* Event Details */}
        <section className="w-full max-w-6xl mx-auto px-4 mb-12">
          <h2 className="text-xl font-bold mb-4">EVENT DETAILS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div><span className="font-semibold">DATE:</span> <span className="ml-2">{event.date}</span></div>
            <div><span className="font-semibold">ORGANIZER:</span> <span className="ml-2">{event.organizer}</span></div>
            <div><span className="font-semibold">ADDRESS:</span> <span className="ml-2">{event.address}</span></div>
            <div><span className="font-semibold">TIME:</span> <span className="ml-2">{event.time}</span></div>
            <div><span className="font-semibold">PHONE:</span> <span className="ml-2">{event.phone}</span></div>
          </div>
        </section>

        {/* Speaker */}
        <section className="w-full max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-xl font-bold mb-6">SPEAKER</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((sp, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow p-4">
                <div className="w-40 h-48 relative mb-3 rounded-lg overflow-hidden">
                  <Image src={sp.img} alt={sp.name} fill className="object-cover" />
                </div>
                <span className="text-green-700 font-semibold text-xs mb-1">{sp.role}</span>
                <span className="font-bold text-lg text-center">{sp.name}</span>
              </div>
            ))}
          </div>
        </section>

        <CTASection
          heading="Support Rural Agripreneurs in Imo State"
          subtext="Join the drive to grow rural agribusiness and empower farmers across our communities."
          buttonLabel="Contact Us"
          buttonHref="/contact-us"
        />

        <Footer />
      </div>
    </>
  );
}
