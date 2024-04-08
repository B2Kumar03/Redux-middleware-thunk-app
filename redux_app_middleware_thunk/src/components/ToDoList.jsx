import React, { useEffect } from "react";
import { addData, deleteData, fetchData, toggleStatus } from "../Redux/ToDo/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text, Button } from "@chakra-ui/react";
import { loading } from "../Redux/Loading/actionCreator";
import Loading from "./Loading";
import Error from "./Error";
import {useNavigate} from 'react-router-dom'

const ToDoList = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.todo);
  const { loader } = useSelector((state) => state.loader);
  const { error } = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchData);
  }, []);

  const handleClick=(data,id)=>{
    dispatch(toggleStatus(!data,id))
    
  }
  const handleDelete=(id)=>{
    dispatch(deleteData(id))
  }



  if (loader) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Box>
      {data.map((ele) => {
        return (
          <Box
            key={ele.id}
            w={"90%"}
            margin={"auto"}
            display={"flex"}
            borderBottom={"1px solid #ccc"}
            p={5}
            justifyContent={"space-between"}
          >
            <Text fontSize={20} fontWeight={700}>
              {ele.title}
            </Text>
            <Button bg={ele.status ? "green" : "pink"} onClick={()=>handleClick(ele.status,ele.id)}>
              {ele.status ? "Complete" : "Pending"}
            </Button>
            <Button onClick={()=>navigate(`/update-edit/${ele.id}`)}>Edit</Button>
            <Button bg={"red"} onClick={()=>handleDelete(ele.id)}>Delete</Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default ToDoList;
