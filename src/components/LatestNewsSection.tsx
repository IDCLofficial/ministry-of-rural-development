import Image from "next/image";
import Link from "next/link";
const news = [
  {
    title: "Imo State Launches Renewed Hope Empowerment Scheme Under Ministry of Rural Development & Economic Empowerment",
    description:
      "Imo State launched the Renewed Hope Agenda empowerment scheme in June 2025, offering vocational training and startup grants to over 2,000 rural youths and women across multiple LGAs.",
    date: "July 2025",
    image: "/images/okobi6.png",
  },
  {
    title: "Ministry Partners with NDDC & IFAD to Boost Agricultural and Economic Empowerment",
    description:
      "The Ministry joined forces with NDDC and IFAD in July 2025 to roll out a comprehensive rural livelihood programme across riverine and rural LGAs of Imo State.",
    date: "June 2025",
    image: "/images/rural1.png",
  },
  {
    title: "OKOBI Summit Held at KOMU: Students’ Club and Grant Awards Launch",
    description:
      "At the OKOBI summit held in May 2025 at Kingsley Ozumba Mbadiwe University, Ideato (KOMU), Prof. Kenneth Amaeshi inaugurated the OKOBI Students’ Club and awarded startup grants (₦2M–₦3M) to selected kindred businesses.",
    date: "May 2025",
    image: "/images/okobi1.png",
  },
];


export default function LatestNewsSection() {
  return (
    <section className="w-full py-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Latest News</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl justify-center mb-8">
        {news.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col w-full max-w-md p-0 overflow-hidden transition hover:shadow-md"
          >
            <div className="w-full h-64 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-t-2xl"
                sizes="400px"
                priority={idx === 0}
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 tracking-tight uppercase">{item.title}</h3>
              <p className="text-gray-500 text-base mb-6">{item.description}</p>
              <div className="mt-auto font-bold text-black text-base">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/news">
        <p className="bg-green-700 animate-bounce hover:bg-green-800 text-white font-semibold px-12 py-3 rounded text-lg transition-colors text-center block">See More</p>
      </Link>
    </section>
  );
} 