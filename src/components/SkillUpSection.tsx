import Image from "next/image";
import Link from 'next/link';
import AnimatedSection from "./AnimatedSection";

export default function SkillUpSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8 py-8 px-4">
      {/* Left: Green Card */}
      <div className="w-[90%] md:w-[40%] flex items-stretch">
        <div className="relative w-full h-[300px] md:h-full min-h-[300px]">
          <Image src="/images/okobi.png" alt="Imo Women" fill className="object-cover rounded" />
        </div>
      </div>
      {/* Right: Text and Buttons */}
      <div className="w-[90%] md:w-[55%] flex-1 flex flex-col justify-center items-start max-w-2xl px-2 min-h-0">
      <AnimatedSection>
      
      <h2 className="text-xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          The Okobi Initiative: Redefining Rural Development in Imo State
        </h2>
        </AnimatedSection>
        <AnimatedSection>
        
        <p className="text-gray-500 text-sm md:text-md lg:text-lg mb-8 max-w-[700px]">
          The <strong>Okobi Initiative</strong>, pioneered by the Imo Ministry of Rural Development, stands as a gold standard in rural transformation and sustainable empowerment. 
          What began as a vision to uplift underdeveloped communities has blossomed into a bold movement that is redefining what rural progress looks like. 
          Through strategic interventions, infrastructure upgrades, and targeted skill acquisition programs, the Okobi Initiative has revitalized local economies, created jobs, and restored dignity to countless families.
          <br /><br />
          Celebrated across Nigeria as a blueprint for effective governance, the initiative is more than a program—it’s a promise fulfilled. 
          With innovation, empathy, and unmatched execution, the Ministry has proven that when leadership listens, development follows. 
          The Okobi Initiative is not just a success story; it’s a legacy in the making.
        </p>

        </AnimatedSection>
        <div className="flex flex-row gap-4 mt-4 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/about" style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-2 rounded text-lg transition-colors min-w-[140px] text-center">
            See More
          </Link>
          <Link href="/contact-us" style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="border border-green-700 text-green-700 font-semibold px-8 py-2 rounded text-lg hover:bg-green-50 transition-colors min-w-[160px] text-center">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
} 