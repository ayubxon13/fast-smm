"use client";
import {Separator} from "../../ui/separator";
import SectionsTitle from "../ui/SectionsTitle";
import TelegramIcon from "../social-icons/TelegramIcon";
import InstagramIcon from "../social-icons/InstagramIcon";
import TikTokIcon from "../social-icons/TikTokIcon";
import FacebookIcon from "../social-icons/FacebookIcon";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function Services() {
  const {theme, systemTheme} = useTheme();
  const [fillColor, setFillColor] = useState("#fff");

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      setFillColor("#fff");
    } else if (currentTheme === "light") {
      setFillColor("#000");
    }
  }, [theme, systemTheme]);

  return (
    <>
      <section id="services" className="max-container scroll-mt-20">
        <SectionsTitle>Xizmatlar</SectionsTitle>
        <div className="grid grid-cols-4 gap-6 mt-7 justify-items-center">
          <div className="max-w-52 w-full">
            <TelegramIcon fillColor={fillColor} />
          </div>
          <div className="max-w-52 w-full">
            <InstagramIcon fillColor={fillColor} />
          </div>
          <div className="max-w-52 w-full">
            <TikTokIcon fillColor={fillColor} />
          </div>
          <div className="max-w-52 w-full">
            <FacebookIcon fillColor={fillColor} />
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
}
