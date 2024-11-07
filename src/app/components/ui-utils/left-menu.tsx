"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./left-menu.module.css";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/patient-list",
    label: "Patient List",
  },
  {
    href: "/appointments",
    label: "Appointments",
  },
  {
    href: "/messages",
    label: "Messages",
  },
  {
    href: "/logout",
    label: "Logout",
  },
];

const LeftMenu: React.FC = () => {
  const pathName = usePathname();
  const [activePath, setActivePath] = useState("");
  const [hoveredItem, setHoveredItem] = useState("");

  useEffect(() => {
    setActivePath(pathName);
  }, [pathName]);

  return (
    <div className={classes.sidebar}>
      <h2 className={classes.title}>Bayer Health</h2>
      <div className={classes.menu}>
        <nav>
          <ul className={classes.menuList}>
            {menuItems.map((item, index) => (
              <li
                className={classes.menuItem}
                key={index}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem("")}
              >
                <Link href={item.href} className={classes.menuLink}>
                  <div
                    className={
                      pathName === item.href
                        ? classes.menuItemActive
                        : classes.menuItemInActive
                    }
                  >
                    {item.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeftMenu;
