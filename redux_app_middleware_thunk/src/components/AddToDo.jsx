import { Box, Button, Checkbox, Flex, FormLabel, Heading, Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { postData } from "../Redux/ToDo/actionCreator";
const intialState = {
  title: "",
  description: "",
  status: "",
  
};

const reducer = (state, action) => {
  
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "due_date":
      return { ...state, due_date: action.payload };
    case "status":
      return { ...state, status: action.payload };
    case "set":
      return { ...state, title:action.payload.title,description:action.payload.description,due_date:action.payload.due_date,status:action.payload.status };
  }
};

const AddToDo = () => {
  

  const [state, dispatch] = useReducer(reducer, intialState);
  const dispatch1=useDispatch()
  const toast=useToast()
  const navigate=useNavigate()

  const submitData=()=>{

    dispatch1(postData(state))
    showToast()
    navigate('/')
    
  }
  

 
 
  function showToast(){
    toast({
      title: 'Task added successfully.',
      // description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
      position:"top",
      colorScheme:"green"
    
    })
  }
  



  return (
    <Box w={"50%"} margin={"auto"}>
    <Heading>Add new Todo</Heading>
    <hr />
    <br /><br />
      <FormLabel>Title</FormLabel>
      <Input
        value={state.title}
        onChange={(e) => dispatch({ type: "title", payload: e.target.value })}
      />
      <FormLabel>Description</FormLabel>
      <Input
        value={state.description}
        onChange={(e) =>
          dispatch({ type: "description", payload: e.target.value })
        }
      />
     
      <Flex>
        <FormLabel>Status</FormLabel>
        <Checkbox
          isChecked={state.status}
          onChange={(e) =>
            dispatch({ type: "status", payload: e.target.checked })
          }
        />
        <FormLabel></FormLabel>
      </Flex>
      <br />
      <Button onClick={submitData}>Submit</Button>
    </Box>
  );
};

export default AddToDo;
