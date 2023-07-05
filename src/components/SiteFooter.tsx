import * as React from "react"

import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Icons } from "./icons"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    const year = new Date().getFullYear()
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <p>
            Uniport Timetable {year}
            .
          </p>
        <ModeToggle />
      </div>
    </footer>
  )
}