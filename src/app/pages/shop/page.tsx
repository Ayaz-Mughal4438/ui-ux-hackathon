import Card from "@/app/components/common/Card";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import TextData from "@/app/components/TextData";
import productData from "@/utils/productData";
import Image from "next/image";
// import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />

      <div className="w-full flex justify-center my-6">
        <Image src="/assets/Images/banner5.png" alt="" />
        {/* <Image alt='' height={} width={}> */}
      </div>
      <div>
        <Image src="/assets/Images/filter.png" alt="" />
      </div>

      <div className="flex justify-center items-center flex-wrap gap-4 my-20">
        {productData.map((item) => {
          const { price, imageUrl, title ,id} = item;
          return (
           <Link key={id} href={`/pages/productDetails/${id}`}> <Card key={id} title={title} imageUrl={imageUrl} price={price} /></Link>
          );
        })}
      </div>
     <TextData/>
      <Footer />
    </div>
  );
};

export default page;
