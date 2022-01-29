import Head from "next/head";
import React, { useContext, useState } from "react";
import Layout from "../../components/admin/Layout";
import {
  showDissapearingSuccessAlert,
  showErrorAlert,
  showSuccessAlert,
} from "../../components/general/alert/AlertActions";
import { AlertContext } from "../../components/general/alert/AlertProvider";
import Modal from "../../components/general/modal/Modal";
import { saveCategoryAPI } from "../../lib/utils";

const categories = () => {
  //Get alert context
  const value: any = useContext(AlertContext);
  const [_, dispatch] = value;

  const [open, setOpen] = useState(false);
  const [categoryInForm, setCategoryInForm] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!categoryInForm) showErrorAlert(dispatch, "Category field is required");
    else {
      showSuccessAlert(dispatch, "Saving...");
      await saveCategoryAPI(categoryInForm);
      setOpen(false);
      showDissapearingSuccessAlert(dispatch, "Category added successfully");
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    let target = event.target as HTMLInputElement;
    setCategoryInForm(target.value);
  };

  return (
    <Layout>
      <Head>
        <title>Categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50 p-5 md:p-10 space-y-8">
        <header className="flex flex-col md:flex-row justify-between md:items-center">
          <h1 className="page-title">Categories</h1>
          <div className="flex space-x-2 mt-4 md:mt-0 md:space-y-0">
            <button
              className="bg-blue-600 px-4 py-2 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit"
              onClick={() => setOpen(true)}
            >
              Add Category
            </button>
          </div>
        </header>
        <main>
          <Modal title="Add Category" open={open} setOpen={setOpen}>
            <form onSubmit={handleSubmit}>
              <div className="flex items-center gap-x-2">
                <input
                  type="text"
                  name="categoryInForm"
                  placeholder="Enter category name"
                  className="input-text"
                  value={categoryInForm}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="bg-green-600 px-4 py-3 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit"
                >
                  Save
                </button>
              </div>
            </form>
          </Modal>
        </main>
      </div>
    </Layout>
  );
};

export default categories;
