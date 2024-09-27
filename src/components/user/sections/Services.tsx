import Image from "next/image";
import {Separator} from "../../ui/separator";
import SectionsTitle from "../ui/SectionsTitle";

export default function Services() {
  return (
    <>
      <section id="services" className="max-container scroll-mt-20">
        <SectionsTitle>Xizmatlar</SectionsTitle>
        <div className="grid grid-cols-4 gap-6 mt-7 justify-items-center">
          <Image
            width={200}
            height={200}
            src="/social-icons/telegram.svg"
            alt="telegram image"
          />
          <Image
            width={200}
            height={200}
            src="/social-icons/instagram.svg"
            alt="instagram image"
          />
          <Image
            width={200}
            height={200}
            src="/social-icons/tiktok.svg"
            alt="tik-tok image"
          />
          <Image
            width={200}
            height={200}
            src="/social-icons/facebook.svg"
            alt="facebook image"
          />
        </div>
      </section>
      <Separator />
    </>
  );
}
