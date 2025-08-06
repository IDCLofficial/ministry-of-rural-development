import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import ProjectCard from "@/app/projects/ProjectCard";
import type { Project } from "@/app/projects/ProjectCard";


export default function Projects() {
  const projectsData: Project[] = [
    {
      title: "OKOBI – One Kindred One Business Initiative",
      description:
        "Flagship grassroots economic empowerment model now active across all 655 autonomous communities—supporting over 350 cooperative businesses with 9,000+ members in rural and urban areas.",
      status: "active",
    },
    {
      title: "Rural Access & Mobility Project (RAMP‑2)",
      description:
        "World Bank & French Development Agency backed rehabilitation of ~380 km of rural roads, bridges and culverts to boost agricultural mobility and economic access.",
      status: "active",
    },
    {
      title: "RAAMP – Rural Access & Agricultural Marketing Project",
      description:
        "FG‑state vehicle to strengthen agro‑logistics infrastructure and rural transport under RAAMP policies in Imo State.",
      status: "active",
    },
    {
      title: "LIFE‑ND Agri‑Enterprise Incubator",
      description:
        "IFAD/NDDC funded programme enrolling 4,259 rural youth, women and vulnerable groups into agri‑enterprise sectors (rice, cassava, poultry, fishery).",
      status: "active",
    },
    {
      title: "FRILIA – Responsible Inclusive Land‑Use in Agriculture",
      description:
        "State framework promoting inclusive agricultural investment and land-use practices to enhance rural economic resilience.",
      status: "active",
    },
    {
      title: "Legacy: Imo‑NCDF Affordable Housing",
      description:
        "Completed partnership with NCDF delivering 3,000 low‑income housing units for rural communities in Imo State.",
      status: "closed",
    },
  ];

  const imagePaths = [
    "/images/okobi.png",
    "/images/rural1.png",
    "/images/road3.png",
  ];

  return (
    <div>
      <TopHero
        ministryName="Ministry of Rural Development & Economic Empowerment, Imo State"
        titleLabel="Key Rural & Empowerment Initiatives"
      />
      <ProjectCard projectlist={projectsData} images={imagePaths} />

      <CTASection
        heading="Partner With Us to Accelerate Prosperity in Rural Imo"
        subtext="Collaborate on transformative initiatives like OKOBI, infrastructure upgrades, and agri‑enterprise incubation."
        buttonLabel="Contact the Ministry"
        buttonHref="/contact-us"
      />

      <Footer />
    </div>
  );
}

