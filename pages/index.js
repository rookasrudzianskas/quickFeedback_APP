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
              <Stack>
              <Button backgroundColor="gray.900" color="white" fontWeight="medium" _hover={{bg: 'gray.700'}} _active={{bg: 'gray.800', transform: 'scale(0.95)'}} mt={4} onClick={(e) => auth.signinWithGithub()} leftIcon="github">Sign In with GitHub</Button>
              <Button backgroundColor="white" color="gray.900" variant="outline" fontWeight="medium" _hover={{bg: 'gray.100'}} _active={{bg: 'gray.100', transform: 'scale(0.95)'}} mt={4} onClick={(e) => auth.signinWithGithub()} leftIcon="google">Sign In with Google</Button>
              </Stack>
          )}
          </Flex>
      </Flex>
  )
}

// the start screen working cool today
