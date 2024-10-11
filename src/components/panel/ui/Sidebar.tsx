"use client";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  BellIcon,
  CircleUser,
  HistoryIcon,
  HomeIcon,
  Package2Icon,
} from "lucide-react";
import {usePathname} from "next/navigation";
export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (linkPath: string) => pathname === linkPath;
  return (
    <div className="md:grid md:min-h-screen grid-cols-[280px_1fr]">
      <div className="md:flex hidden md:h-full md:max-h-screen md:flex-col gap-2 border-r bg-muted/40">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <Package2Icon className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                isActive("/dashboard") && "bg-muted text-primary"
              }`}
            >
              <HomeIcon className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/account"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                isActive("/dashboard/account") && "bg-muted text-primary"
              }`}
            >
              <CircleUser className="h-4 w-4" />
              Account
            </Link>
            <Link
              href="#"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                isActive("/#") && "bg-muted text-primary"
              }`}
              prefetch={true}
            >
              <HistoryIcon className="h-4 w-4" />
              Orders
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
