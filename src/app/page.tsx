"use client";
import Services from "@/components/user/sections/Services";
import Statistics from "@/components/user/sections/Statistics";
import WhyChooseUs from "@/components/user/sections/WhyChooseUs";
import {ReactTyped} from "react-typed";

export default function Home() {
  return (
    <main className="grid gap-5 mt-32">
      <h1 className="lg:text-7xl sm:text-6xl text-4xl font-medium text-center">
        Arzon obunachilar!
      </h1>
      <p className="lg:text-6xl sm:text-5xl text-3xl text-center">
        <span>Bizda</span>{" "}
        <ReactTyped
          className=" bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text !leading-[1.15] text-transparent transition-colors"
          backSpeed={100}
          strings={["tezkor.", "arzon.", "sifatli.", "ishonchli."]}
          typeSpeed={60}
          loop
        />
      </p>
      <Statistics />
      <Services />
      <WhyChooseUs />
    </main>
  );
}
