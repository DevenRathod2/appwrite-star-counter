import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box , Center, Text} from "@chakra-ui/react"
import logo from '../public/logo.svg'
import axios from 'axios'
import { useState } from 'react'



export default function Home() {
  const [starts, setStarts] = useState(null);

  
  axios.get('https://api.github.com/repos/appwrite/appwrite').then(response => {
  console.log(response);
  console.log(response.data.stargazers_count)
  setStarts(response.data.stargazers_count)
});

  return (
    <Box 
      bg="#f02e65"
      height="100vh"
      width="100vw"
    >
      <Center>
        <Image 
        src={logo}
        alt="logo"
        width="600px"
        ></Image>
      </Center>
      <Box>
        <Center>
          <Text
            fontSize="6rem"
            fontWeight="bold"
            color="#fff"
            textAlign="center"
          >
            {starts}
          </Text>
        </Center>
        <Center>
        <Text
            fontSize="6rem"
            fontWeight="bold"
            color="#fff"
            textAlign="center"
          >
            Github Stars
          </Text>
        </Center>
        
      </Box>
    </Box>
  )
}