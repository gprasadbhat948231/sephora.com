import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateDeleteButton,
  AddButton,
} from "../Components/AdminPage/AddDeleteUpdate";
import AddUpdate from "../Components/AdminPage/AddUpdate";
import AddUpdateData from "../Components/AdminPage/AddUpdateData";
import AdminNavbar from "../Components/AdminPage/AdminNavbar";
import Dashboard from "../Components/AdminPage/Dashboard";
import { getPagesCount } from "../HOC/AdminRedux/product.actions";

const pathsInfo = {
  "Eye Care": {
    path: "womens-Eye-Brows",
    icon: "GiEyelashes",
    color: "blue.400",
  },
  "Men T-Shirts": {
    path: "mens-t-shirt",
    icon: "FaTshirt",
    color: "orange.400",
  },
  "Men Jackets": {
    path: "mens-jackets",
    icon: "GiMonclerJacket",
    color: "Purple.500",
  },
  "Men Belts": { path: "mens-belt", icon: "GiBelt", color: "brown.500" },
  "Men Perfume": {
    path: "mens-perfume",
    icon: "GiDelicatePerfume",
    color: "green.500",
  },
  "Womens Lip Stick ": {
    path: "womens-Lip-Stick",
    icon: "GiLipstick",
    color: "pink.500",
  },
  Fragrance: {
    path: "new-arrival-fragrance",
    icon: "GiFragrance",
    color: "gold.500",
  },
  "Womens Dresses": {
    path: "womens-Dresses",
    icon: "GiMailShirt",
    color: "red.300",
  },
  "Mens Shirts": {
    path: "mens-shirts",
    icon: "GiPoloShirt",
    color: "teal.500",
  },
  "Mens Jeans ": {
    path: "mens-jeans",
    icon: "GiArmoredPants",
    color: "blue.200",
  },
};
const Admin = () => {
  const page = useSelector((store) => store.adminManager.page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPagesCount(pathsInfo));
  }, []);
  return (
    <Box>
      <AdminNavbar page={page} />
      {page === "Dashboard" ? (
        <Dashboard pathsInfo={pathsInfo} />
      ) : page === "Admin" ? (
        <Box>
          <AddButton />
          <UpdateDeleteButton />
        </Box>
      ) : (
        <AddUpdate />
      )}
    </Box>
  );
};

export default Admin;
