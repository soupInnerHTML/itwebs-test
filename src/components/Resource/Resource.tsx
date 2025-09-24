import React from 'react'
import {IResourceProps} from "@/components/Resource/types";
import styles from "./Resource.module.scss";

export const Resource: React.FC<IResourceProps> = ({color, name, year, pantone_value}) => {
  return (
    <div className={styles.resource}>
      <div style={{background: color}} className={styles.color}></div>
      <p className={'text-sm mt-2'}>{name}</p>
      <i className={'text-sm mt-1'}>{year}</i>
      <i className={'text-sm mt-1'}>{pantone_value}</i>
    </div>
  );
};