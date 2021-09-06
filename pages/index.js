import { Box, Button, Flex, Text, Icon, Link, Stack, Heading, Code } from '@chakra-ui/core';
import Head from "next/head";
import {useAuth} from "@/lib/auth";
import {useRouter} from "next/router";


// import {useAuth} from "@/lib/auth";

export default function Home() {

    const auth = useAuth();
    const router = useRouter();

    const GoToDashboard = () => {
        router.push('/dashboard');
    }

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
              <Text mb={4} fontSize="lg" py={4}>
                  <Text as="span" fontWeight="bold" display="inline">
                      Quick Feedback
                  </Text>
                  {' was built as part of '}
                  <Link
                      href="https://byrookas.com"
                      isExternal
                      textDecoration="underline"
                  >
                      byRookas 2030
                  </Link>
                  {`. It's the easiest way to add comments or reviews to your static site. Try it out by leaving a comment below. After the comment is approved, it will display below.`}
              </Text>

          {auth.user ? (
              <Button backgroundColor="white" color="gray.900" variant="outline" fontWeight="medium" _hover={{bg: 'gray.100'}} _active={{bg: 'gray.100', transform: 'scale(0.95)'}} onClick={GoToDashboard} mt={6} leftIcon="google">View Dashboard</Button>

              ) : (
              <Stack>
              <Button backgroundColor="gray.900" color="white" fontWeight="medium" _hover={{bg: 'gray.700'}} _active={{bg: 'gray.800', transform: 'scale(0.95)'}} mt={4} onClick={(e) => auth.signinWithGithub()} leftIcon="github">Sign In with GitHub</Button>
              <Button backgroundColor="white" color="gray.900" variant="outline" fontWeight="medium" _hover={{bg: 'gray.100'}} _active={{bg: 'gray.100', transform: 'scale(0.95)'}} mt={4} onClick={(e) => auth.signinWithGoogle()} leftIcon="google">Sign In with Google</Button>
              </Stack>
          )}
          </Flex>
      </Flex>
  )
}

