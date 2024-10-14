"use client";
import Footer from "@/components/user/layouts/Footer";
import Header from "@/components/user/layouts/Header";
import Services from "@/components/user/sections/Services";
import Statistics from "@/components/user/sections/Statistics";
import UserMainSection from "@/components/user/sections/UserMainSection";
import WhyChooseUs from "@/components/user/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid gap-5">
        <UserMainSection />
        <Statistics />
        <Services />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
