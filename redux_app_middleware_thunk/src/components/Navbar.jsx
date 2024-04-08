import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";
import ToDoList from "./ToDoList";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../Redux/Theme/actionCreator";
import { useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const state = useSelector((state) => state.theme.mode);

  const navigate = useNavigate();
  const handleTheme = () => {
    if (state == "light") {
      dispatch(theme("dark"));
      toggleColorMode();
    } else {
      dispatch(theme("light"));
      toggleColorMode();
    }
  };

  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"} bg={"#7A52B3"}>
        <Box
          p="4"
          className="roboto-light-italic"
          color={"white"}
          marginLeft={40}
        >
          <Heading>Redux -Thunk, ToDo App</Heading>
        </Box>
        <Spacer />
        <Box
          p="4"
          fontSize={35}
          display={"flex"}
          alignItems={"center"}
          color={"dark"}
          onClick={handleTheme}
        >
          <MdDarkMode />
        </Box>
      </Flex>
      <Flex justifyContent={"flex-end"} alignContent={"center"} p={5}>
        <Button onClick={() => navigate('/add')}>Add ToDo</Button>
        <Button ml={5} bg={"red"}>
          Login
        </Button>
      </Flex>
      <ToDoList />
    </>
  );
};

export default Navbar;
