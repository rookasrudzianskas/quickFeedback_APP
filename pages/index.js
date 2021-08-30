import Image from 'next/image'
import { Box, Button, Flex, Text, Icon, Link, Stack, Heading, Code } from '@chakra-ui/core';
import Head from "next/head";
import {useAuth} from "@/lib/auth";
import EmptyState from "@/components/EmptyState";


// import {useAuth} from "@/lib/auth";

export default function Home() {

    const auth = useAuth();

  return (
      <Flex as="main" direction="column" align="center" justify="center" h="100vh">
        <Head>
            <title>Something cool</title>
        </Head>

            <Icon name="logo" color="black" size="64px" />
          <Text noOfLines={2} fontSize="5xl">Quick Feedback</Text>


          {auth.user ? (
              // <Button mt={6} onClick={(e) => auth.signout()}>Sign Out</Button>
              <EmptyState />
          ) : (
              <Button mt={6} varian="link" size="sm" onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
          )}
      </Flex>
  )
}

// the start screen working cool
