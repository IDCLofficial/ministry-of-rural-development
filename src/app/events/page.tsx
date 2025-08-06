import EventsListSection from "./EventsListSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";

export default function EventsPage() {
  const Events = [
    {
      date: "JULY 2025",
      location: "OWERRI, IMO STATE",
      title: "Imo Agric Revolution Launch & Agripreneur Empowerment",
      description:
        "Imo State officially launches its agricultural revolution, empowering over 4,000 agripreneurs across rural communities.",
      img: "/images/agro.png",
      details: `The Ministry of Rural Development & Economic Empowerment has commenced the Imo Agric Revolution Programme. The initiative empowers 4,259 agripreneurs across rice, cassava, poultry, and fishery value chains. Beneficiaries receive farming inputs, training, and market access support. This milestone aims to uplift rural economies and strengthen Imo's food security efforts.`,
      dateString: "2025-07-01T10:00:00",
    },
  ];
  
  return (
   <div className="bg-white">
  <TopHero
    ministryName="Ministry of Rural Development & Economic Empowerment"
    titleLabel="Events"
  />

  <EventsListSection events={Events} />

  <CTASection
    heading="Empowering Agripreneurs Across Imo"
    subtext="Be part of our mission to transform rural communities through agricultural development, entrepreneurship, and sustainable empowerment programs."
    buttonLabel="Contact Us"
    buttonHref="/contact-us"
  />

  <Footer />
</div>

  );
}
