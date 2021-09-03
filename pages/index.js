import { Box, Button, Flex, Text, Icon, Link, Stack, Heading, Code } from '@chakra-ui/core';
import Head from "next/head";
import {useAuth} from "@/lib/auth";
import {useRouter} from "next/router";


// import {useAuth} from "@/lib/auth";

export default function Home() {

    const auth = useAuth();
    const router = useRouter();

  return (
      <Flex as="main" direction="column" align="center" justify="center" h="100vh">
        <Head>
            <script dangerouslySetInnerHTML={{ __html: `
                  if (document.cookie && document.cookie.includes('quick-feedback-auth')) {
                    window.location.href = "/dashboard"
                  }
                ` }} />
            <title>QuickFeedback app</title>
        </Head>

          <Flex direction="column" w="30vw" align="center">
            <Icon name="logo" color="black" size="64px" />
          <Text noOfLines={2} fontSize="5xl">Quick Feedback</Text>
            <Text>
                It's the easiest way to add comments or reviews to your static site.
                It's still a work-in-progress, but you can try it out by logging in.
            </Text>

          {auth.user ? (
              <Button mt={6}>View Dashboard</Button>
          ) : (
              <Button mt={6} varian="link" size="sm" onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
          )}
          </Flex>
      </Flex>
  )
}

// the start screen working cool today
