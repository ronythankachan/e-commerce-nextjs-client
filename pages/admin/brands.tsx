import { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/admin/Layout";
import { BrandType } from "../../types";
import {
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

const Brands = ({ brands }: { brands: BrandType[] }) => {
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

  useEffect(() => {
    clearBrandForm();
  }, [open]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!brandData.image) showErrorAlert(dispatch, "Add brand image");
    else if (!brandData.name) showErrorAlert(dispatch, "Brand name is missing");
    else {
      showSuccessAlert(dispatch, "Saving...");
      await saveBrandAPI(brandData);
      setOpen(false);
      showDissapearingSuccessAlert(dispatch, "Brand added successfully");
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
    showSuccessAlert(dispatch, "Uploading...please wait");
    const result = await uploadImageToS3API(file);
    setBrandData({
      ...brandData,
      image: result.url,
    });
    showDissapearingSuccessAlert(dispatch, "Image uploaded successfully");
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
                  className="bg-green-600 px-4 py-2 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit"
                >
                  Save
                </button>
              </div>
            </form>
          </Modal>
        </header>
        <section></section>
      </main>
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
