import Image from "next/image";
import React from "react";
import { BrandType } from "../../types";

const Brand = ({ brand }: { brand: BrandType }) => {
  return (
    <div>
      <table className="relative">
        <tr>
          <th className="p-4 text-center font-bold">Image</th>
          <th>Name</th>
          <th>Count</th>
          <th>Actions</th>
        </tr>
      </table>
    </div>
  );
};

export default Brand;
