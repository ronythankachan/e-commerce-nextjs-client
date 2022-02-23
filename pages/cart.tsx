import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import React from "react";
import AmountSummary from "../components/client/AmountSummary";
import Layout from "../components/client/Layout";
import ProductOverview from "../components/client/ProductOverview";
import { extractTokensFromCookie, getCartAPI } from "../lib/utils";
import { CartType, TokenType } from "../types";

const cart = ({ tokens, cart }: { tokens: TokenType; cart: CartType }) => {
  return (
    <Layout>
      <main className="mt-16 bg-gray-50 min-h-screen grid grid-cols-2">
        <ProductOverview cart={cart} />
        <AmountSummary />
      </main>
    </Layout>
  );
};

export default cart;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const tokens = extractTokensFromCookie(req.cookies);
  try {
    const userid = jwtDecode(tokens.accessToken);
    console.log(userid);
  } catch (err) {}
  // console.log(tokens.accessToken);
  // const cart = await getCartAPI(userid, tokens.accessToken);
  return {
    props: { tokens },
  };
};
