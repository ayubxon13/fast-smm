"use client";
import {ToggleTheme} from "@/components/user/ui/ToggleTheme";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import {useEffect, useState} from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {AllServices} from "@/interfaces";
import Loading from "@/components/ui/loading";
import {Label} from "@/components/ui/label";
import {ReloadIcon, TextAlignRightIcon} from "@radix-ui/react-icons";
import {useGetUser} from "@/hooks/useGetUser";
import UserProfile from "@/components/custom-ui/UserProfile";

export default function NewOrder() {
  const {userData, loading} = useGetUser();
  const usdPrice = 14;
  const [isOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState<null | AllServices[]>(null);
  const [categories, setCategories] = useState<null | string[]>(null);
  const [servicesOfCategory, setServicesOfCategory] = useState<
    null | AllServices[]
  >(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [singleService, setSingleService] = useState<
    AllServices | undefined | null
  >(null);
  const [inputValue, setInputValue] = useState({
    link: "",
    quantity: 0,
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://fast-smm-backend.vercel.app/api/services"
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data: AllServices[] = await res.json();
        console.log(data);

        setServices(data); // Set the services state
        const uniqueCategories = Array.from(
          new Set(data.map((service) => service.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        setIsLoading(false);
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const handleChangeCategory = (category: string) => {
    const filtered = services?.filter(
      (service) => service.category === category
    );
    setSingleService(null);
    setServicesOfCategory(filtered || []);
  };

  const findSingleService = (serviceName: string) => {
    const filtered = servicesOfCategory?.find(
      (service) => service.name === serviceName
    );
    setSingleService(filtered || null);
  };

  console.log(userData);

  const handleSubmitBtn = () => {
    const addOrder = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://fast-smm-backend.vercel.app/api/add-order",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              service: singleService?.service,
              link: inputValue.link,
              quantity: inputValue.quantity,
            }),
          }
        );
        if (!res.ok) {
          throw new Error(`Server responded with status ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    addOrder();
  };

  return (
    <>
      {isLoading && <Loading />}
      <>
        <div className="w-full">
          <div className="h-[60px] bg-muted/40 px-6 grid border-b">
            <div className="flex items-center">
              <div className="md:hidden visible">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger className="md:hidden visible" asChild>
                    <Button size="icon" className="px-2" variant="outline">
                      <TextAlignRightIcon />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="pt-11" side="left">
                    <SheetHeader>
                      <Link
                        className="text-start"
                        href="#statistics"
                        onClick={handleClose}
                      >
                        <Button variant="link" onClick={handleClose}>
                          <SheetTitle>Statistika</SheetTitle>
                        </Button>
                      </Link>
                      <Link
                        className="text-start"
                        href="#services"
                        onClick={handleClose}
                      >
                        <Button variant="link" onClick={handleClose}>
                          <SheetTitle>Xizmatlar</SheetTitle>
                        </Button>
                      </Link>
                      <Link
                        className="text-start"
                        href="#about-us"
                        onClick={handleClose}
                      >
                        <Button variant="link" onClick={handleClose}>
                          <SheetTitle>Biz haqimizda</SheetTitle>
                        </Button>
                      </Link>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
              <div className="flex items-center sm:gap-10 gap-3 ml-auto">
                <p className="text-slate-100 sm:text-base text-sm flex items-center gap-2">
                  Balance: {userData?.user_metadata?.balance ?? 1}{" "}
                  <span className="font-bold">uzs</span>
                </p>
                <div className="flex items-center gap-2">
                  <ToggleTheme />
                  {loading ? (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  ) : userData ? (
                    <UserProfile userData={userData} />
                  ) : (
                    <p>error</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 xl:flex grid xl:gap-6 gap-4">
            <Card className="p-3 grid lg:gap-5 gap-3 xl:max-w-4xl w-full">
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
                <Button
                  className="xl:px-9 border border-white xl:py-6 2xl:text-lg xl:text-base"
                  variant="secondary"
                >
                  New order
                </Button>
                <Button
                  className="xl:px-9 border xl:py-6 2xl:text-lg xl:text-base"
                  variant="secondary"
                >
                  Yoqtirganlar
                </Button>
              </div>
              <div className="grid gap-2">
                <Label>Category</Label>
                <Select onValueChange={(cat) => handleChangeCategory(cat)}>
                  <SelectTrigger className="h-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a category</SelectLabel>
                      {categories?.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Service</Label>
                <Select onValueChange={(service) => findSingleService(service)}>
                  <SelectTrigger className="h-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      {servicesOfCategory?.map((service) => (
                        <SelectItem key={service.name} value={service.name}>
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Link</Label>
                <Input
                  onChange={(e) => {
                    setInputValue({
                      ...inputValue,
                      link: e.target.value,
                    });
                  }}
                  name="link"
                  type="url"
                />
              </div>
              <div className="grid gap-1">
                <div className="grid gap-2">
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    onChange={(e) => {
                      setInputValue({
                        ...inputValue,
                        quantity: parseInt(e.target.value, 10),
                      });
                    }}
                    value={inputValue.quantity}
                    name="quantity"
                  />
                </div>
                <p className="text-[11px] font-light">
                  Min: {singleService?.min ?? 0} - Max:{" "}
                  {singleService?.min ?? 0}
                </p>
              </div>
              <div className="grid gap-2">
                <Label>Charge</Label>
                <Input
                  disabled
                  value={
                    singleService?.rate
                      ? (
                          singleService.rate *
                          usdPrice *
                          inputValue.quantity
                        ).toLocaleString("en-US", {
                          // Changed locale to 'en-US' for desired formatting
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : "0,00"
                  }
                />
              </div>
              <Button disabled={isLoading} onClick={() => handleSubmitBtn()}>
                SUBMIT
              </Button>
            </Card>
            <Card className="p-3 grid xl:max-w-2xl w-full h-min items-start lg:gap-5 gap-3">
              <Button
                className="xl:px-9 xl:py-6 2xl:text-lg xl:text-base"
                variant="secondary"
              >
                Description
              </Button>
              <div className="grid gap-2">
                <Label>Service</Label>
                <Card>
                  <CardHeader className="p-3">
                    <CardDescription className="text-white">
                      {singleService?.name ?? "Ma'lumot yo'q"}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <Card className="h-min">
                <CardHeader className="lg:p-6 p-4">
                  <CardTitle className="md:text-xl text-lg">
                    Description
                  </CardTitle>
                  <CardDescription>
                    Service ID: #{singleService?.service ?? ""}
                    {singleService?.description
                      .split("\r\n")
                      .map((line, index) => (
                        <p key={index}>
                          {line.replace(/\t/g, "\u00A0\u00A0\u00A0\u00A0")}{" "}
                        </p>
                      ))}
                  </CardDescription>
                </CardHeader>
              </Card>
              <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-3 justify-between">
                <Card className="h-min">
                  <CardHeader className="lg:p-6 p-4">
                    <CardTitle className="md:text-xl text-lg">
                      Max Quantity
                    </CardTitle>
                    <CardDescription>
                      {singleService?.max.toLocaleString("en-DE") ?? "N/A"}{" "}
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-min">
                  <CardHeader className="lg:p-6 p-4">
                    <CardTitle className="md:text-xl text-lg">
                      Min Quantity
                    </CardTitle>
                    <CardDescription>
                      {singleService?.min.toLocaleString("en-DE") ?? "N/A"}{" "}
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-min">
                  <CardHeader className="lg:p-6 p-4">
                    <CardTitle className="md:text-xl text-lg">
                      Price per 1,000
                    </CardTitle>
                    <CardDescription>
                      {singleService?.rate
                        ? (singleService.rate * 1000 * usdPrice).toLocaleString(
                            "en-US",
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }
                          )
                        : "0,00"}{" "}
                      uzs
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-min">
                  <CardHeader className="lg:p-6 p-4">
                    <CardTitle className="md:text-xl text-lg">
                      Avarage time
                    </CardTitle>
                    <CardDescription>3 minutes</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </>
    </>
  );
}
