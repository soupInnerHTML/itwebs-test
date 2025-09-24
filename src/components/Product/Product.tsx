'use client'

import React from 'react'
import Image from "next/image";
import {IProductProps} from "@/components/Product/types";
import styles from './Product.module.scss'
import {Animation} from "@/components/Animation/Animation";


export const Product: React.FC<IProductProps> = ({thumbnail, title, price, rating, reviews, index}) => {
  return (
    <Animation index={index} className={styles.card}>
      <p className={styles.rating}>⭐ {rating} 💬 {reviews.length}</p>
      <Image width={150} height={150} src={thumbnail} alt={'thumbnail'}/>
      <p className={'text-center'}>{title}</p>
      <p className={'my-2'}>{price}$</p>
      <button className={styles.button}>
        В корзину
      </button>
    </Animation>
  );
};