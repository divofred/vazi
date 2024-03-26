import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import PersonCard from "@/components/PersonCard";
import peopleData from "@/components/data/peopleData";

export default function legalteam() {
  return (
    <main className="bg-wave">
      <div>
        <HeroSection
          title="Tech-driven "
          cspan="trusted minds"
          title2=""
          titlesize="text-5xl lg:text-[5.7rem]"
        />
      </div>
      <section className="py-24">
        <div className="container">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 mx-auto place-items-center max-w-[53.8rem] ">
              {peopleData.map((person) => (
                <PersonCard
                  key={person.id}
                  person={person}
                  href={"/modupe-odele"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
