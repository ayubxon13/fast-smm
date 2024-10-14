import {Sparkles} from "@/components/user/ui/Sparkles";

export default function UserMainSection() {
  return (
    <main className="mt-16 w-full overflow-hidden text-white ">
      <section className="mx-auto relative h-[90vh] mt-4 border-b border-white/10 w-full overflow-hidden rounded-2xl">
        <article className="grid gap-4 text-center relative z-10 pt-10">
          <span className="inline-block xl:text-base text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
            Early Access
          </span>
          <h1 className="2xl:text-6xl h-[125px]  xl:text-5xl text-5xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
            Fast-smm. Arzon obunachilar. <br /> Barcha tarmoqga!
          </h1>
          <span>
            Fast-SMM xizmati bilan arzon va tez obunachilar oling! <br /> Barcha
            tarmoqlar uchun sifatli va ishonchli obunachilarni taqdim etamiz.
            <br />
            Bugun boshlang va ijtimoiy tarmoqlaringizni rivojlantiring!
          </span>
          <button className="border border-blue-400 w-fit p-2 px-4 rounded-md bg-blue-900/40 hover:bg-blue-900/60  backdrop-blur-2xl mx-auto text-white">
            Take The Course
          </button>
        </article>

        <div className="absolute bottom-0 z-[2] h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute">
          <Sparkles
            density={1800}
            speed={1.2}
            color="#48b6ff"
            direction="top"
            className="absolute inset-x-0 bottom-0 h-full w-full "
          />
        </div>
      </section>
    </main>
  );
}
