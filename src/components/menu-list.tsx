"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface StaticMenuItemsIT {
  text: string;
  href: string;
}
export const StaticMenu: StaticMenuItemsIT[] = [
  {
    text: "Timetable",
    href: "/csc-timetable",
  },
  {
    text: "Exam Timetable",
    href: "/exam-timetable",
  },
];

export default function MenuList() {
  const pathname = usePathname();

  const showStaticMenuWeb = StaticMenu.map((menu, key) => {
    const isActive = pathname === menu.href;
    const linkClassName = `hover:border-b hover:border-pink-500 ${isActive && 'border-b border-pink-500'}`;

    return (
      <Link href={menu.href} key={key} className={linkClassName}>
        {menu.text}
      </Link>
    );
  });

  return (
    <div className="hidden md:flex gap-3 text-brand_secondary-450 justify-center items-center">
      {showStaticMenuWeb}
    </div>
  );
}