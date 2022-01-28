import { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/admin/Layout";
import { BrandType } from "../../types";
import { getAllBrandsAPI } from "../../lib/utils";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/outline";

const Brands = ({ brands }: { brands: BrandType[] }) => {
  return (
    <Layout>
      <Head>
        <title>Brands</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50 p-5 md:p-10 space-y-8">
        <header className="flex flex-col md:flex-row justify-between md:items-center">
          <h1 className="page-title">Brands</h1>
          <div className="flex space-x-2 mt-4 md:mt-0 md:space-y-0">
            <button className="bg-blue-600 px-4 py-2 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit">
              Add Brand
            </button>
          </div>
        </header>
        <section className="flex items-center">
          <table className="w-full bg-white">
            <tr>
              <th className="p-2 text-center border rounded-md text-gray-500 text-sm font-semibold">
                Image
              </th>
              <th className="p-2 text-center border rounded-md text-gray-500 text-sm font-semibold">
                Name
              </th>
              <th className="p-2 text-center border rounded-md text-gray-500 text-sm font-semibold">
                Count
              </th>
              <th className="p-2 text-center border rounded-md text-gray-500 text-sm font-semibold">
                Actions
              </th>
            </tr>
            {brands.map((brand) => (
              <tr>
                <td className="p-2 text-center border rounded-md">
                  <Image
                    src={brand.image}
                    height={50}
                    width={50}
                    objectFit="cover"
                    className="rounded"
                  />
                </td>
                <td className="p-2 text-center border rounded-md text-sm">
                  {brand.name}
                </td>
                <td className="p-2 text-center border rounded-md text-sm underline text-blue-500 hover:cursor-pointer">
                  {brands.filter((b) => b.name === brand.name).length} items
                </td>
                <td className="p-2 text-center border rounded-md text-sm">
                  <button>
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </section>
      </div>
    </Layout>
  );
};

export default Brands;

export const getStaticProps: GetStaticProps = async () => {
  const brands = await getAllBrandsAPI();
  return {
    props: {
      brands,
    },
  };
};
