import React, { ReactNode } from "react";
import { MainNav } from "@/components/MainNav";
import { SiteFooter } from "@/components/SiteFooter";
// import NameFallback from "@/components/fallback";

interface RootLayoutProps {
    children: ReactNode
  }

const TimeTableLayout = ({children}: RootLayoutProps) => {
    return(
        <div className="flex min-h-screen flex-col relative">
            <header className="container bg-background">
                <div className="flex h-20 items-center justify-between py-6">
                <MainNav  />
                <nav>
                    {/* <NameFallback /> */}
                </nav>
                </div>
            </header>
            <main className="flex-1 flex items-center justify-center">{children}</main>
            <SiteFooter />
        </div>
    )
}
export default TimeTableLayout;