import React from 'react'
import {Header} from "@/components/Header/Header";
import {fetchProducts} from "@/lib/api/products";
import {Product} from "@/components/Product/Product";

export default async function Page() {
  const products = await fetchProducts()
  return (
    <section className={'p-6'}>
      <Header>🛍️ Products (ISR)</Header>
      <div className={'flex container justify-between flex-wrap mx-auto gap-5'}>
        {products.map(({id, ...product}, index) => <Product key={id} index={index} {...product} />)}
      </div>
    </section>
  );
};