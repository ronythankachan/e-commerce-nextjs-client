import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../components/client/Layout";
import { extractTokensFromCookie } from "../lib/utils";
import { TokenType } from "../types";

const cart = ({ tokens }: { tokens: TokenType }) => {
  return (
    <Layout>
      <main className="mt-16 bg-gray-50 min-h-screen">Cart page</main>
    </Layout>
  );
};

export default cart;

const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const tokens = extractTokensFromCookie(req.cookies);
  return {
    props: { tokens },
  };
};
