import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Box, Center, Text } from "@chakra-ui/react";
import logo from "../public/logo.svg";
import axios from "axios";
import { useState } from "react";
import CountUp from "react-countup";
import { AiFillStar, AiFillGithub } from "react-icons/ai";



export default function Home() {
  const [starts, setStarts] = useState(null);

  axios
    .get("https://api.github.com/repos/appwrite/appwrite")
    .then((response) => {
      setStarts(response.data.stargazers_count);
    });

  return (
    <Box bg="#f02e65" height="100vh" width="100vw" fontFamily={"poppins"}>
      <Center>
        <Image src={logo} alt="logo" height={"250px"}></Image>
      </Center>
      <Box>
        <Box>
          <CountUp
            start={0}
            end={starts}
            duration={2.75}
            separator=" "
            decimals={0}
            decimal=","
          >
            {({ countUpRef, start }) => (
              <div>
                <Center>
                  <Text
                    ref={countUpRef}
                    fontSize={["50px", "80px", "190px", "220px"]}
                    fontWeight="bold"
                    color="#fff"
                    textAlign="center"
                  >
                    <AiFillStar></AiFillStar>
                  </Text>
                </Center>
              </div>
            )}
          </CountUp>
        </Box>
      </Box>
      <Box>
        <Center>
          <Text
            fontSize={["40px", "40px", "60px", "80px"]}
            fontWeight="bold"
            color="#fff"
            textAlign="center"
            mt={["20px", "0px", "0px", "0px"]}
          >
            Github Stargazers
          </Text>
        </Center>
        <Center></Center>
      </Box>
    </Box>
  );
}
