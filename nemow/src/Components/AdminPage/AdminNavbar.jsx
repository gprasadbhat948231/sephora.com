// admin navbar page
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPage } from "../../HOC/AdminRedux/product.actions";

// navbar options hardcoded
const Links = ["Admin", "Dashboard", "Add Product"];
const AdminNavbar = () => {
  const page = useSelector((store) => store.adminManager.page);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [visible, setvisible] = useState({ hove: "false", nav: page });

  // hover effect underline
  const handleHover = (link) => {
    setvisible({ ...visible, hove: link });
  };

  // handle title and cheged color of it
  const handlePage = (link) => {
    setvisible({ ...visible, nav: link });
    dispatch(setPage(link));
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={10}>
      {/* full screen navbar */}
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          spacing={40}
          alignItems={"center"}
          fontWeight="700"
          color="gray.500"
        >
          {/* redirected link to home page */}
          <Link
            to="/"
            onClick={() => {
              setvisible({ ...visible, nav: false });
            }}
          >
            Home
          </Link>
          <HStack
            as={"nav"}
            spacing={30}
            display={{ base: "none", md: "flex" }}
          >
            {Links.map((link) => (
              <Box
                key={link}
                color={link == page ? "orange.400" : ""}
                onClick={() => {
                  handlePage(link);
                }}
                onMouseEnter={() => handleHover(link)}
                onMouseLeave={() => handleHover(false)}
                _before={{
                  content: '""',
                  position: "absolute",
                  backgroundColor:
                    link === visible.nav ? "blue.500" : "blue.200",
                  height: " 2px",
                  // top= "100%"
                  width:
                    link === visible.hove || link === visible.nav
                      ? "100%"
                      : "0%",
                  left: "50%",
                  bottom: "-10px",
                  transition: " width .3s, ease-in-out   transform",
                  transform: "translate(-50%, -50%)",
                }}
                position="relative"
                cursor="pointer"
              >
                {link}
              </Box>
            ))}
          </HStack>
        </HStack>

        <Avatar
          size={"sm"}
          src={
            "https://ca.slack-edge.com/T049JC010P9-U04ARFKMAHL-92937c2b8633-72"
          }
        />
      </Flex>

      {/* small screen navbar */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <Link
                key={link}
                onClick={isOpen ? onClose : onOpen}
                
               // to={"/" + +link.toLowerCase().split(" ", 1)}
              >
                <Box
                  fontWeight={"600"}
                  _hover={{ bg: "orange.100" }}
                  color={link == page ? "blue" : ""}
                  onClick={() => {
                    setvisible({ ...visible, nav: link });
                    dispatch(setPage(link));
                    
                  }}
                >
                  {link}
                </Box>
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default AdminNavbar;
