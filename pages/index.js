import Image from 'next/image'
import { Box, Button, Flex, Text, Icon, Link, Stack, Heading, Code } from '@chakra-ui/core';
import Head from "next/Head";


import {useAuth} from "@/lib/auth";

export default function Home() {

    const auth = useAuth();

  return (
      <Flex as="main" direction="column" align="center" justify="center" maxW="300px">
        <Head>
            <title>Something cool</title>
        </Head>

            <Icon name="logo" color="black" size="32px" />

          <Text>
              Current user: <Code>{auth.user ? auth.user.email : "There is no user currently on 🔥"}</Code>
          </Text>

          {auth.user ? (
              <Button onClick={(e) => auth.signout()}>Sign Out</Button>
          ) : (
              <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
          )}
      </Flex>
  )
}
