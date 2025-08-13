import Image from "next/image";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";
import Link from "next/link";

const latestNews = [
  {
    title:
      "Imo Rural Agro‑preneurs Begin IFAD/NDDC Training to Boost Incomes",
    date: "6 April 2025",
    img: "/images/agro.png",
  },
];

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Section 1: Hero + Body */}
      <section className="relative w-full pb-[180px]">
        <NewsHeroSection />
        <NewsBodySection>
          {/* Title & Meta */}
          <div className="relative z-10 w-full flex justify-center pb-2">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/agro.png"
                alt="Agro-Training"
                width={900}
                height={400}
                className="object-cover w-full h-[260px] md:h-[320px]"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Imo Rural Agro‑preneurs Begin IFAD/NDDC Training to Boost Incomes
            </h1>
            <p className="text-gray-500 text-sm">
              6 April 2025 • Rural Development / Livelihoods
            </p>
          </div>

          {/* Main Content */}
          <div>
            <p className="text-gray-700 mb-6">
              Under the Livelihood Improvement Family Enterprises (LIFE-ND)
              initiative, the Imo State Government, in partnership with IFAD and
              NDDC, has launched a training program aimed at empowering rural
              agro-preneurs across eight Local Government Areas (LGAs).
            </p>
            <p className="text-gray-700 mb-6">
              The training covers value chains in cassava, poultry, rice, and
              aquaculture. Participants are expected to earn at least ₦200,000 in
              take-off profit each month, creating sustainable income for rural
              dwellers and encouraging youth participation in agribusiness.
            </p>

            <div className="w-full flex justify-center my-8">
              <div className="w-full max-w-md rounded-xl overflow-hidden">
                <Image
                  src="/images/okobi5.png"
                  alt="Rural Training Session"
                  width={600}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="font-semibold mb-2">Key Highlights:</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-6">
                  <li>
                    Over 100 beneficiaries from eight LGAs selected under LIFE-ND.
                  </li>
                  <li>
                    Focus on cassava, poultry, rice, and fish value chains.
                  </li>
                  <li>
                    ₦200,000 projected monthly take-off profit per participant.
                  </li>
                  <li>
                    Special focus on youth, women, and persons with disabilities.
                  </li>
                  <li>
                    Collaboration between IFAD, NDDC, and Imo Ministry of Rural Development.
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex items-center">
                <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800">
                  <span className="font-bold">
                    &ldquo;This initiative isn’t just training farmers—it’s building
                    a new generation of agricultural entrepreneurs.&rdquo;
                  </span>
                </blockquote>
              </div>
            </div>

            <p className="text-gray-700 mt-6">
              The Ministry affirmed its ongoing commitment to strengthening
              agribusiness development through modern training, mentorship, and
              access to finance and markets. Beneficiaries expressed optimism
              about the life-changing opportunity.
            </p>
            <p className="text-gray-700 mt-2">
              Imo State continues to lead in implementing rural livelihood
              strategies that create jobs, drive self-reliance, and boost local
              food systems.
            </p>
          </div>
        </NewsBodySection>
      </section>

      {/* Section 2: Latest News */}
      <div className="w-full bg-[#181c23] py-10">
        <div className="max-w-6xl mx-auto px-4">
        <Link href="/news" className="bg-green-600 text-white px-6 py-2 m-4">
        Go back to news
        </Link>
          {/* <h2 className="text-white text-xl font-semibold mb-6">
            LATEST NEWS
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {latestNews.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#232323] rounded-xl overflow-hidden flex-1 min-w-[220px] max-w-xs"
              >
                <div className="relative w-full h-28">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-white text-xs font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </div>
                  <div className="text-gray-400 text-[10px]">{item.date}</div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
