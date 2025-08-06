import { SectionHero } from "@/components/SectionHero";
import { ObjectivesSection } from "@/app/about/ObjectivesSection";
import { StructuresSection } from "@/app/about/StructuresSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import MissionVisionCard from "@/app/about/MissionVisionCard";
import TeamPage from "./Team";

// departments
const departments = {
  row1: [
    {
      title: "Department of Rural Infrastructure Development",
      description:
        "Plans and executes the construction and rehabilitation of rural roads, water schemes, and energy access projects.",
    },
    {
      title: "Department of Community Empowerment",
      description:
        "Drives grassroots entrepreneurship programs, women and youth empowerment, and cooperatives support initiatives.",
    },
    {
      title: "Department of Agricultural Extension Services",
      description:
        "Facilitates training, tools, and support for rural farmers to increase productivity and market access.",
    },
  ],
  row2: [
    {
      title: "Department of Economic Empowerment Programs",
      description:
        "Implements economic schemes, micro-credit programs, and skills acquisition for rural dwellers.",
    },
    {
      title: "Department of Monitoring and Evaluation",
      description:
        "Ensures quality assurance and performance tracking across all rural development projects and initiatives.",
    },
  ],
};

// team
const teamMembers = [
  {
    name: "Hon. Ifeanyi Demian Oruh",
    role: "Hon. Commissioner",
    image: "/images/commisioner.png",
    bio: "Leads the ministry in promoting inclusive rural development and grassroots economic growth across Imo State.",
  },
  {
    name: "Mrs. Ijeoma Assumpta Uzoamaka",
    role: "Permanent Secretary",
    image: "/images/permsec.jpg",
    bio: "Oversees internal coordination of development programs, ensuring alignment with state goals for rural transformation.",
  },
];

// objectives
const objectives = [
  {
    title: "Inclusive Rural Development",
    description:
      "Bridge the urban-rural divide through infrastructure, healthcare, and education access in rural areas.",
  },
  {
    title: "Economic Empowerment",
    description:
      "Promote self-reliance through micro-enterprise support, skill acquisition, and job creation initiatives.",
  },
  {
    title: "Agricultural Advancement",
    description:
      "Enhance food security by supporting modern farming techniques, input supply, and agro-processing facilities.",
  },
  {
    title: "Community Participation",
    description:
      "Engage local leaders and groups in planning and implementation of rural development projects.",
  },
  {
    title: "Sustainable Infrastructure",
    description:
      "Develop and maintain rural roads, solar power, boreholes, and market structures for long-term impact.",
  },
  {
    title: "Data-Driven Monitoring",
    description:
      "Utilize modern tools for monitoring, reporting, and evaluating project performance and community feedback.",
  },
];

const coreValues = [
  "Equity",
  "Sustainability",
  "Empowerment",
  "Transparency",
  "Inclusiveness",
  "Innovation",
];

export default function AboutUs() {
  return (
    <div className="h-screen bg-white">
      {/* Top Hero */}
      <TopHero
        ministryName="Ministry of Rural Development and Economic Empowerment"
        titleLabel="About Us"
      />

      {/* Section Hero */}
      <SectionHero
        aboutText={`The Ministry of Rural Development and Economic Empowerment in Imo State is dedicated to uplifting rural communities through strategic infrastructure, economic opportunities, and inclusive policies.\n
By promoting agriculture, facilitating access to skills, and investing in basic amenities, the ministry empowers citizens in underserved areas to thrive and contribute to the state's growth.\n
Its collaborative approach with communities and stakeholders ensures that development is people-centered, sustainable, and impactful.`}
        imgSrc="/images/okobi.png"
        altText="Rural development project in Imo State"
      />

      {/* Mission & Vision Section */}
      <MissionVisionCard
        ministryName="Ministry of Rural Development and Economic Empowerment"
        state="Imo State"
        mission="To facilitate sustainable rural transformation and economic empowerment through infrastructure development, agricultural support, and inclusive programs that improve the quality of life in rural communities."
        vision="A prosperous Imo State where rural communities are vibrant, self-sufficient, and integrated into the state’s economic growth."
      />

      {/* Team Section */}
      <TeamPage teamMembers={teamMembers} />

      {/* Objectives Section */}
      <ObjectivesSection
        objectives={objectives}
        coreValues={coreValues}
        ministryName="Ministry of Rural Development and Economic Empowerment"
      />

      {/* Structures Section */}
      <StructuresSection
        imgSrc="/images/building.png"
        departments={departments}
      />

      {/* CTA Section */}
      <CTASection
        heading="Join us in transforming every rural community in Imo State"
        buttonLabel="Explore Our Development Projects"
        buttonHref="/projects"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
