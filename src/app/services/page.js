import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import ServicesCard from "@/components/ServicesCard";

export default function services() {
  return (
    <main className="bg-wave bg-repeat">
      <div>
        <HeroSection
          title="A "
          cspan="client-centric "
          title2="approach to innovative legal advisory"
          titlesize="text-5xl lg:text-[5.2rem]"
        />
      </div>
      <section className="py-12 ">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto place-items-center place-content-stretch max-w-[52rem] gap-y-3">
            <ServicesCard
              title="Startup Advisory"
              description="At Vazi, we are passionate about working with innovative start-up companies from ideation to completion, our clients are more than companies to us but partners, we are interested in their successes and growing their business by ensuring our start-up companies are legally protected and fully compliant with all the necessary regulations."
              linkText="View More"
              linkHref="/services/inner"
              iconSrc="/icons/rocketser.svg"
            />
            <ServicesCard
              title="Venture Capital
              and Fund Raising"
              description="Our firm is leading in fundraising transactions from start up to pre seed rounds, we provide due diligence on corporate governance, shareholding, IPOs, angel funding, buy-outs and tax advisory."
              linkText="View More"
              linkHref="/startup-advisory"
              iconSrc="/icons/rocketser.svg"
            />

            <ServicesCard
              title="Intellectual Property"
              description="With a keen interest and experience in handling IP transactions, we provide detailed IP protection strategies, detailed IP services ranging from licences to copyrights, distribution, and consent agreements across different industries from fashion to fintech. We also conduct due diligence on IP assets for IPOs, licensing, mergers, and high value transactions."
              linkText="View More"
              linkHref="/startup-advisory"
              iconSrc="/icons/rocketser.svg"
            />
            <ServicesCard
              title="Frontier Technology"
              description="As tech lawyers for tech organisations, we remain at the cutting edge of innovative technology, we provide advisory on a range of issues relating to block chain technology and Artificial Intelligence."
              linkText="View More"
              linkHref="/startup-advisory"
              iconSrc="/icons/rocketser.svg"
            />
            <ServicesCard
              title="Company Secretarial"
              description="Our Company Secretarial services we ensure all important and time-consuming administrative tasks are completely sorted out. From set up, compliance and company secretarial services to nominee director services, we are trusted to deliver all your professional services."
              linkText="View More"
              linkHref="/startup-advisory"
              iconSrc="/icons/rocketser.svg"
            />

            <ServicesCard
              title="Nominee Directors"
              description="Our Company Secretarial services we ensure all important and time-consuming administrative tasks are completely sorted out. From set up, compliance and company secretarial services to nominee director services, we are trusted to deliver all your professional services."
              linkText="View More"
              linkHref="/startup-advisory"
              iconSrc="/icons/rocketser.svg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
