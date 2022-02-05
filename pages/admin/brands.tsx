import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../../components/admin/Layout";
import { BrandType, TokenType } from "../../types";
import {
  extractTokensFromCookie,
  getAllBrandsAPI,
  saveBrandAPI,
  uploadImageToS3API,
} from "../../lib/utils";
import Modal from "../../components/general/modal/Modal";
import { useContext, useEffect, useState } from "react";
import { AlertContext } from "../../components/general/alert/AlertProvider";
import {
  showDissapearingSuccessAlert,
  showErrorAlert,
  showSuccessAlert,
} from "../../components/general/alert/AlertActions";
import { PlusIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Brand from "../../components/admin/Brand";
import { useRouter } from "next/router";

const Brands = ({
  brands,
  tokens,
}: {
  brands: BrandType[];
  tokens: TokenType;
}) => {
  //Get alert context
  const value: any = useContext(AlertContext);
  const [_, dispatch] = value;

  const [open, setOpen] = useState(false);
  const [brandData, setBrandData] = useState<BrandType>({
    image: "",
    name: "",
  });

  const clearBrandForm = () => {
    setBrandData({
      image: "",
      name: "",
    });
  };
  // Refresh page after deleting
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  useEffect(() => {
    clearBrandForm();
    refreshData();
  }, [open]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!brandData.image) showErrorAlert(dispatch, "Add brand image");
    else if (!brandData.name) showErrorAlert(dispatch, "Brand name is missing");
    else {
      try {
        showSuccessAlert(dispatch, "Saving...");
        await saveBrandAPI(brandData);
        setOpen(false);
        showDissapearingSuccessAlert(dispatch, "Brand added successfully");
      } catch (err: any) {
        showErrorAlert(dispatch, err.response.data.message);
      }
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    let target = event.target as HTMLInputElement;
    setBrandData({
      ...brandData,
      [target.name]: target.value,
    });
  };

  const uploadImage = async (event: any) => {
    const file = event.target.files[0];
    try {
      showSuccessAlert(dispatch, "Uploading...please wait");
      const result = await uploadImageToS3API(file, tokens.accessToken);
      setBrandData({
        ...brandData,
        image: result.url,
      });
      showDissapearingSuccessAlert(dispatch, "Image uploaded successfully");
    } catch (err: any) {
      showErrorAlert(dispatch, err.response.data.message);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Brands</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50 p-5 md:p-10 space-y-8">
        <header className="flex flex-col md:flex-row justify-between md:items-center">
          <h1 className="page-title">Brands</h1>
          <div className="flex space-x-2 mt-4 md:mt-0 md:space-y-0">
            <button
              className="bg-blue-600 px-4 py-2 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit"
              onClick={() => setOpen(true)}
            >
              Add Brand
            </button>
          </div>
          <Modal title="Add Brand" open={open} setOpen={setOpen}>
            <form onSubmit={handleSubmit}>
              <div className="form-group w-56">
                {brandData.image ? (
                  <div className="relative w-full h-44 border rounded-md">
                    <Image
                      src={brandData.image}
                      placeholder="blur"
                      blurDataURL="/placeholder.jpg"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                ) : (
                  <div className="relative border-2 border-dashed w-full rounded-md bg-white h-36 flex items-center justify-center">
                    <PlusIcon className="w-10 h-10" />
                    <input
                      type="file"
                      className=" absolute h-full w-full opacity-0  hover:cursor-pointer z-20"
                      onChange={uploadImage}
                    />
                  </div>
                )}

                <input
                  type="text"
                  name="name"
                  placeholder="Brand name"
                  className="input-text"
                  value={brandData.name}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="bg-green-500 px-4 py-2 md:h-fit rounded-md text-white hover:text-gray-300 w-full h-fit"
                >
                  Save
                </button>
              </div>
            </form>
          </Modal>
        </header>
        <section className="bg-white shadow-sm rounded-md p-3">
          <form className="flex flex-col md:flex-row justify-between items-center border-b-2 pb-4 md:space-x-2 space-y-2 md:space-y-0">
            <input
              type="text"
              placeholder="Search..."
              className="input-text w-full md:w-1/2"
            />
          </form>
          <div className=" grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 mt-4 justify-items-center">
            {brands.map((brand) => (
              <Brand brand={brand} key={brand._id} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Brands;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const tokens: TokenType = extractTokensFromCookie(req.cookies);
  const brands = await getAllBrandsAPI();
  return {
    props: {
      brands,
      tokens,
    },
  };
};
