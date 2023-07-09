"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
// interface MainNavProps {
//   children?: React.ReactNode
// }

export function MainNav() {
  // const segment = useSelectedLayoutSegment()
  // const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="items-center space-x-2 md:flex">
        CSC Timetable
      </Link>
    </div>
  )
}