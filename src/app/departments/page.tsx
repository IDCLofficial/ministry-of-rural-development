import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import CTASection from "@/components/CTASection";

const departmentsData = [
  {
    name: "Rural Infrastructure Development Department",
    image: "/images/road1.png",
    description:
      "Oversees planning and execution of rural roads, water schemes, solar and energy access projects across all LGAs.",
  },
  {
    name: "Community Empowerment & Livelihoods Department",
    image: "/images/department1.png",
    description:
      "Drives rural entrepreneurship via OKOBI groups, youth skills acquisition, and microcredit support programs.",
  },
  {
    name: "Agricultural Extension & Agro‑Processing Support",
    image: "/images/agro.png",
    description:
      "Facilitates farmer training, provision of inputs/tools, and supports agro‑processing value‑chain development.",
  },
  {
    name: "Economic Empowerment Programs Department",
    image: "/images/okobi1.png",
    description:
      "Manages state-sponsored microenterprise interventions, grants, and livelihoods upgrades for rural dwellers.",
  },
  {
    name: "Monitoring & Evaluation Department",
    image: "/images/rural1.png",
    description:
      "Ensures quality tracking, performance assessment and impact evaluation of all rural development initiatives.",
  },
];

export default function UnitsPage() {
  return (
    <div className="bg-white">
      <TopHero
        ministryName="Ministry of Rural Development & Economic Empowerment"
        titleLabel="Departments"
      />
      
      <UnitsTabsSection departments={departmentsData} />

      <CTASection
        heading="Engage with Us to Transform Rural Communities"
        subtext="Join efforts to build infrastructure, support agro‑enterprises, and empower rural women, youth, and farmers across Imo State."
        buttonLabel="Contact the Ministry"
        buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
