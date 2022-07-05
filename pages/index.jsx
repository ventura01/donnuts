import React, { useState } from "react";
import Image from "next/image";
import AddButton from "../components/AddButton";
import Add from "../components/Add";
import Header from "../components/Header";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";

export default function Home({ productList, admin }) {
  const [close, setClose] = useState(true);
  // console.log(productList);
  return (
    <Layout title="Home" description="The best donnuts shop in town.">
      {/*<Header />*/}
      <Slider />
      {admin && <AddButton setClose={setClose} />}
      <div className={styles.container}>
        <ProductList productList={productList} />
        </div>
        {!close && <Add setClose={setClose} />}
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get(`http://localhost:3000/api/products`);
  return { props: { productList: res.data, admin } };
};
