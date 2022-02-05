import { TrashIcon } from "@heroicons/react/outline";
import { Router } from "next/router";
import React, { useContext, useState } from "react";
import { deleteCategoryAPI, saveCategoryAPI } from "../../lib/utils";
import { CategoryType, TokenType } from "../../types";
import {
  showDissapearingSuccessAlert,
  showErrorAlert,
  showSuccessAlert,
} from "../general/alert/AlertActions";
import { AlertContext } from "../general/alert/AlertProvider";
import Modal from "../general/modal/Modal";

const CategoryModal = ({
  categories,
  tokens,
  open,
  setOpen,
  refreshData,
}: {
  categories: CategoryType[];
  tokens: TokenType;
  open: boolean;
  setOpen: Function;
  refreshData: Function;
}) => {
  //Get alert context
  const value: any = useContext(AlertContext);
  const [_, dispatch] = value;
  const [categoryData, setCategoryData] = useState<CategoryType>({
    name: "",
  });
  const clearCategoryForm = () => {
    setCategoryData({
      name: "",
    });
  };

  const handleCategorySubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!categoryData.name)
      showErrorAlert(dispatch, "Category field is required");
    else {
      try {
        showSuccessAlert(dispatch, "Saving...");
        await saveCategoryAPI(categoryData, tokens.accessToken);
        clearCategoryForm();
        refreshData();
        showDissapearingSuccessAlert(dispatch, "Category added successfully");
      } catch (err: any) {
        showErrorAlert(dispatch, err.response.data.message);
      }
    }
  };

  const handleCategoryChange = (event: React.FormEvent<HTMLInputElement>) => {
    let target = event.target as HTMLInputElement;
    setCategoryData({
      ...categoryData,
      [target.name]: target.value,
    });
  };
  const deleteCategory = async (id: string) => {
    try {
      showSuccessAlert(dispatch, "Deleting");
      await deleteCategoryAPI(id, tokens.accessToken);
      refreshData();
      showDissapearingSuccessAlert(dispatch, "Category deleted successfully");
    } catch (err: any) {
      showErrorAlert(dispatch, err.response.data.message);
    }
  };

  return (
    <Modal title="Add Category" open={open} setOpen={setOpen}>
      <form onSubmit={handleCategorySubmit}>
        <div className="flex items-center gap-x-2">
          <input
            type="text"
            name="name"
            placeholder="Category name"
            className="input-text"
            value={categoryData.name}
            onChange={handleCategoryChange}
          />
          <button
            type="submit"
            className="bg-green-600 px-4 py-3 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit"
          >
            Save
          </button>
        </div>
      </form>
      <hr className="mt-2" />
      <div className="space-y-2 py-2">
        {categories.map((category) => (
          <div
            className="flex items-center justify-between px-3 py-2 rounded-md bg-gray-50 border"
            key={category._id}
          >
            <small>{category.name}</small>
            <button
              className="p-1 bg-gray-300 rounded hover:scale-105"
              onClick={() => deleteCategory(category._id!)}
            >
              <TrashIcon className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default CategoryModal;
