import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/admin/Layout";
import Modal from "../../components/general/modal/Modal";

const users = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <Head>
        <title>Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50 p-5 md:p-10">
        <h1 className="page-title">Users</h1>
        <button className="btn-primary" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <Modal title="Add product" open={open} setOpen={setOpen}>
          <form className="flex flex-col justify-start">
            <input type="text" placeholder="Title" className="input-text" />
            <button type="submit">Save</button>
          </form>
        </Modal>
      </div>
    </Layout>
  );
};

export default users;
