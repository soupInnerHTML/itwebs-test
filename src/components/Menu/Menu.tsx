'use client'

import React from 'react'
import {MENU} from "@/consts/menu";
import Link from "next/link";
import {usePathname} from "next/navigation";
import classNames from "classnames";
import {Modal} from "@/components/Modal/Modal";

export const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className={'container mx-auto pt-4 flex justify-between'}>
      <div>
        {MENU.map(menuItem =>
          <Link
            key={menuItem.link}
            href={menuItem.link}
            className={classNames({"text-blue-500 font-bold": pathname === menuItem.link}, "mr-5")}
          >
            {menuItem.title}
          </Link>
        )}
      </div>

      <Modal />
    </nav>
  );
};