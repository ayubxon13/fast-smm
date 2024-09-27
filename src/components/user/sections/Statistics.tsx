import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CountUp from "react-countup";
import {Separator} from "../../ui/separator";
import SectionsTitle from "../ui/SectionsTitle";
export default function Statistics() {
  return (
    <>
      <section id="statistics" className="mt-10 scroll-mt-20 max-container">
        <SectionsTitle>Nakrutka.uz raqamlarda</SectionsTitle>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-6 mt-7">
          <Card>
            <CardHeader className="text-center gap-2">
              <CardTitle>Faol mijozlar</CardTitle>
              <CardDescription className="text-2xl">
                <CountUp prefix="+" duration={2} end={2122} start={0} />
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center gap-2">
              <CardTitle>Mavjud xizmatlar</CardTitle>
              <CardDescription className="text-2xl">
                <CountUp prefix="+" duration={2} end={12131} start={0} />
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center gap-2">
              <CardTitle>Berilgan buyurtmalar</CardTitle>
              <CardDescription className="text-2xl">
                <CountUp prefix="+" duration={2} end={42341341} start={0} />
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
      <Separator />
    </>
  );
}
