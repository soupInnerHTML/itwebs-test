import React from "react";
import Image from "next/image";
import {IUserProps} from "./types";

export const User: React.FC<IUserProps> = ({avatar, first_name, last_name}) => {
  return <div className={'w-16'}>
    <Image src={avatar} className="rounded-full m-auto" alt={''} width={64} height={64}/>
    <p className={'text-center text-sm mt-2'}>{first_name} {last_name}</p>
  </div>
}