import { Inter as FontSans } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import "./globals.css"
import { Toaster } from "@/components/ui/toaster"


interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: "Timetable",
  },
  description: "University of Port Harcourt 400LV Timetable",
  keywords: [
    "Timetable",
    "Uniport",
    "400 level",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}