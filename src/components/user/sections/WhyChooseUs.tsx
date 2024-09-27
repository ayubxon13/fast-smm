import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Separator} from "../../ui/separator";
import SectionsTitle from "../ui/SectionsTitle";
export default function WhyChooseUs() {
  return (
    <>
      <section id="about-us" className="max-container">
        <SectionsTitle className="text-center">
          Nima uchun bizni tanlash kerak ?
        </SectionsTitle>
        <div className="grid justify-items-center gap-4 mt-7">
          <div className="grid md:grid-cols-2 md:gap-6 gap-4 justify-between">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Activity/Sports%20Medal.webp"
                    alt="Sports Medal"
                    width="35"
                    height="35"
                  />
                  Sifat
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci accusantium nostrum sed enim eum repudiandae a ea
                  pariatur laboriosam. Aperiam est ut nihil similique pariatur
                  quis harum consequuntur necessitatibus modi.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Bomb.webp"
                    alt="Bomb"
                    width="35"
                    height="35"
                  />
                  Tezlik
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit ratione vitae, laboriosam veritatis perferendis
                  voluptatibus culpa, veniam amet architecto temporibus maiores
                  nobis, officia illum perspiciatis sed inventore consectetur
                  unde consequatur?
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Bomb.webp"
                    alt="Bomb"
                    width="35"
                    height="35"
                  />
                  Tezlik
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit ratione vitae, laboriosam veritatis perferendis
                  voluptatibus culpa, veniam amet architecto temporibus maiores
                  nobis, officia illum perspiciatis sed inventore consectetur
                  unde consequatur?
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Money%20Bag.webp"
                    alt="Money Bag"
                    width="35"
                    height="35"
                  />
                  Arzon
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit ratione vitae, laboriosam veritatis perferendis
                  voluptatibus culpa, veniam amet architecto temporibus maiores
                  nobis, officia illum perspiciatis sed inventore consectetur
                  unde consequatur?
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="md:max-w-[566px] w-full">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Heart%20On%20Fire.webp"
                    alt="Heart On Fire"
                    width="35"
                    height="35"
                  />
                  Ishonch
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit ratione vitae, laboriosam veritatis perferendis
                  voluptatibus culpa, veniam amet architecto temporibus maiores
                  nobis, officia illum perspiciatis sed inventore consectetur
                  unde consequatur?
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
}
