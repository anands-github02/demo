import "./App.css";
import Card from "./components/Card";
import fetchData from "./utils/fetchData";
import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetchData(setData);
  }, []);




  return (
    <Box className="App"  boxShadow={'2xl'}>
      {data.map((details) => {
        return (
          <Card 
            key={details.id}
            email={details.email}
            name={details.name}
            username={details.username}
            phone={details.phone}
            website={details.website}
            company={details.company.name}
            address={`${details.address.street}, ${details.address.suite}, ${details.address.city}, ${details.address.zipcode}`}
          />
        );
      })}
    </Box>
  );
}

export default App;
