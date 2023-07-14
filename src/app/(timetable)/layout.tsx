import React, { ReactNode } from "react";
import { MainNav } from "@/components/MainNav";
import { SiteFooter } from "@/components/SiteFooter";
import NameFallback from "@/components/fallback";
import LogoutButton from "@/components/logout-button";
import ProtectedPage from "@/components/auth/protected";

interface RootLayoutProps {
    children: ReactNode
}
 const navMenu =  [
    {
      title: "Timetable",
      href: "/csc-timetable",
    },
    {
      title: "Exam timetable",
      href: "/exam-timetable",
    },
]
const TimeTableLayout = ({children}: RootLayoutProps) => {
    return(
       <ProtectedPage>
            <div className="flex min-h-screen flex-col relative">
                <header className="container bg-background shadow-md">
                    <div className="flex h-20 items-center justify-between py-6">
                    <MainNav items={navMenu} />
                    <nav className="flex flex-row gap-2">
                        <NameFallback />
                        <LogoutButton />
                    </nav>
                    </div>
                </header>
                <main>{children}</main>
                <SiteFooter />
            </div>
       </ProtectedPage>
    )
}
export default TimeTableLayout;