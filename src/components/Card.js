import {Box,Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export default function Card(props) {
    const [img, setImg] = useState([]);
  
    useEffect(() => {
      function fetchImage() {
       const requestOptions = {
         method: "GET",
         redirect: "follow",
       };
       fetch(
       `https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`,
       requestOptions
         )
       .then((response) => response.blob())
       .then((res)=>setImg(URL.createObjectURL(res)))
       .catch((error) => console.log("error", error));
    }
    fetchImage();
   }, [props.username])     
  
  
    return (
      <Box
        w="70vw"
        h="250px"
        overflow="hidden"
        m="2vh auto"
        display={"flex"}
        flexDir="row"
        color="black"
        bg='white'
        boxShadow={'inherit'}
      >
        <Box>
          <Image
            w="20vw"
            h="250px"
            src={img} 
          />
        </Box>
  
        <Box display='flex' flexDirection={'column'} alignItems='flex-start' ml='2vw' fontSize={'lg'}>
            <Box fontSize={'3xl'} mb='2vw'>{props.name}</Box>
            <Box><strong>Email: </strong>{props.email}</Box>
            <Box><strong>Phone: </strong>{props.phone}</Box>
            <Box><strong>Company: </strong>{props.company}</Box>
            <Box><strong>Website: </strong>{props.website}</Box>
            <Box><strong>Address: </strong>{props.address}</Box>
        </Box>
      </Box>
  );
}
