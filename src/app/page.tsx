import AboutMandateSection from "@/components/AboutMandateSection";
import HeroSection from "@/components/HeroSection";
import CommissionerSection from "@/components/CommissionerSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import SkillUpSection from "@/components/SkillUpSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import Stats from "@/components/Stats";
import FeaturedPartners from "@/components/FeaturedPartners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

     
      {/* hero section */}
      <HeroSection
          backgroundImages={["/images/road4.png", "/images/road3.png", "/images/road2.png"]}

  overlayText="Imo State Ministry of Rural Development and Economic Empowerment"
  heading="Empowering Communities."
  subheading=""
  description="Building resilient rural communities, promoting grassroots development, and creating inclusive economic opportunities for Imo citizens through strategic empowerment programs."
/>

{/* About Mandate Section */}
<AboutMandateSection
  label="ABOUT US"
  title="Our Mandate —"
  subheading="Ministry of Rural Development and Economic Empowerment"
  description="Welcome to the Imo State Ministry of Rural Development and Economic Empowerment. 
As a pivotal agency for sustainable growth and poverty reduction, our Ministry champions the development of rural infrastructure, skills acquisition, and microenterprise promotion to uplift every corner of Imo State. 

We are dedicated to empowering rural communities, fostering self-reliance, and enhancing access to basic amenities through strategic partnerships, innovation, and community-led initiatives. 

Through focused policies and actionable programs, we create enabling environments for agriculture, local entrepreneurship, and cooperative growth—ensuring that no community is left behind."
  buttonText="Discover More"
  image1="/images/rural1.png"
  image2="/images/road3.png"
/>

{/* Commissioner Section */}
<CommissionerSection
  imageSrc="/images/commisioner.png"
  imageAlt="Hon. Ifeanyi Demian Oruh, Commissioner for Rural Development and Economic Empowerment in Imo State"
  title="About The Commissioner"
  bio="Honourable Ifeanyi Demian Oruh from Imo State serves as the Honourable Commissioner for Rural Development and Economic Empowerment. Appointed in June 2024, he is responsible for leading strategic interventions that drive rural infrastructure, community livelihood, and youth empowerment across the state." 
  details="In his role, Hon. Oruh spearheads programs under the ‘One Kindred, One Business (OKOBI)’ initiative, encouraging each of Imo State’s 655 autonomous communities to identify and develop business opportunities they can own and collectively benefit from. He collaborates with local leaders, cooperative groups, and development partners to ensure rural transformation through infrastructure, enterprise development, and inclusive economic policies. His leadership aligns with Governor Uzodimma’s agenda for rehabilitation, reconstruction, and recovery in grassroots communities." 
/>


<div className="bg-white">
  {/* Skill Up Section */}
  <SkillUpSection />
  {/* Quick Links Section */}
  <QuickLinksSection />
  {/* Latest News Section */}
  <LatestNewsSection />
</div>

{/* Stats Section */}
<Stats />
{/* Featured Partners Section */}
<FeaturedPartners />
{/* CTASection */}
<CTASection
  heading="Join Us in Transforming Rural Communities and Empowering Citizens"
  subtext="Partner with us in building a stronger, more inclusive Imo State—where rural development fuels economic prosperity for all."
  buttonLabel="Contact Us"
  buttonHref="/contact-us"
/>
{/* Footer */}
<Footer />

   
    </>
  );
}
