import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import ServicesGrid from "./ServiceCard";

const services = [
  {
    title: "Rural Road Rehabilitation & Access",
    description:
      "Rehabilitation of rural roads (e.g. Okwelle–Dikenafia, Amiri–Atta–Nkume corridors) to enhance connectivity, trade, and seasonal access for farmers and communities.",
  },
  {
    title: "Community‑Led Road Maintenance (RAAMP)",
    description:
      "Engaging local communities in maintenance of rehabilitated roads under the Rural Access & Agricultural Marketing Project, supported by World Bank/AFD funding.",
  },
  {
    title: "Agri‑Entrepreneurship & Youth Empowerment",
    description:
      "Supporting women, youth and vulnerable groups in mobilizing agripreneurship under the LIFE‑ND/IFAD initiative covering rice, cassava, poultry and fishery value chains.",
  },
  {
    title: "Agricultural Input Distribution & Support",
    description:
      "Distribution of seedlings, inputs and training to smallholder farmers across the three Imo agro‑zones (Okigwe, Orlu, Owerri), collaborating with NDDC/IMSG.",
  },
  {
    title: "Watershed & Erosion Control Projects",
    description:
      "Soil erosion control and watershed interventions in vulnerable communities (e.g. Umueshi, Umunumo, Ikeduru) via NEWMAP and state-funded ecology funds.",
  },
  {
    title: "Community Empowerment & Co‑operatives",
    description:
      "Formation and capacity‑building of rural cooperatives and women’s associations to support income generation and local enterprise.",
  },
  {
    title: "Local Market Infrastructure Development",
    description:
      "Construction and rehabilitation of rural market access structures and bridges to improve local economic activity.",
  },
  {
    title: "Data‑Driven Monitoring & Evaluation",
    description:
      "Tracking project performance, community contributions, and outcomes through SPIU platforms and local oversight committees.",
  },
  {
    title: "Stakeholder Engagement & Sensitization",
    description:
      "Town‑hall meetings, community planning sessions, and awareness campaigns on rural development priorities and participation.",
  },
];


export default function Services() {
  return (
    <div className="h-screen bg-white">

      {/* Top Hero */}
      <TopHero
        ministryName="What we do"
        titleLabel="Services"
      />
      <ServicesGrid services={services} />

      {/* CTASection */}
      <CTASection
        heading="Partner with Us to Transform Rural Communities"
        subtext="Join our mission to uplift rural areas through sustainable development, economic empowerment, and inclusive community-based initiatives."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />

      {/* Footer */}
      <Footer />
    </div>
  )
}