import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  UpdateDeleteButton,
  AddButton,
} from "../Components/AdminPage/AddDeleteUpdate";
import AddUpdate from "../Components/AdminPage/AddUpdate";
import AddUpdateData from "../Components/AdminPage/AddUpdateData";
import AdminNavbar from "../Components/AdminPage/AdminNavbar";
import Dashboard from "../Components/AdminPage/Dashboard";

const Admin = () => {
  const page = useSelector((store) => store.adminManager.page);
  console.log(page);
  return (
    <Box>
      <AdminNavbar page={page} />
      {page === "Dashboard"?<Dashboard/>: page === "Admin" ? (
        <Box>
          <AddButton />
          <UpdateDeleteButton />
        </Box>
      ) : (
        <AddUpdate  />
      )}
    </Box>
  );
};

export default Admin;
