import { Box, Button, Flex, Text, Icon, Link, Stack, Heading, Code } from '@chakra-ui/core';
import Head from "next/head";
import {useAuth} from "@/lib/auth";
import {useRouter} from "next/router";
import {getAllFeedback, getSite} from "@/lib/db-admin";
import LoginButtons from "@/components/LoginButtons";
import FeedbackLink from "@/components/FeedbackLink";
import Feedback from "@/components/Feedback";


// import {useAuth} from "@/lib/auth";

const SITE_ID = 'MWiWRZN1PrAkdqdxDtAE';


export async function getStaticProps(context) {
    const { feedback } = await getAllFeedback(SITE_ID);
    const { site } = await getSite(SITE_ID);

    return {
        props: {
            allFeedback: feedback,
            site,
        },
        revalidate: 1
    };
}

export default function Home({ allFeedback, site }) {

    const auth = useAuth();
    const router = useRouter();



    const GoToDashboard = () => {
        router.push('/dashboard');
    }

  return (
      <>
          <Box bg="gray.100" py={16} px={4}>
              <Flex as="main" direction="column" maxW="700px" margin="0 auto">
                  <Head>
                      <script dangerouslySetInnerHTML={{ __html: `
                  if (document.cookie && document.cookie.includes('quick-feedback-auth')) {
                    window.location.href = "/dashboard"
                  }
                ` }} />
                  </Head>
                  <Icon color="black" name="logo" size="48px" mb={2} />
                  <Text mb={4} fontSize="lg" py={4}>
                      <Text as="span" fontWeight="bold" display="inline">
                          Quick Feedback
                      </Text>
                      {`. It's the easiest way to add comments or reviews to your static site. Try it out by leaving a comment below. After the comment is approved, it will display below.`}

                  </Text>
                  {auth.user ? (
                      <Button
                          as="a"
                          // onClick={GoToDashboard}
                          href="/dashboard"
                          backgroundColor="gray.900"
                          color="white"
                          fontWeight="medium"
                          mt={4}
                          maxW="200px"
                          _hover={{ bg: 'gray.700' }}
                          _active={{
                              bg: 'gray.800',
                              transform: 'scale(0.95)'
                          }}
                      >
                          View Dashboard
                      </Button>
                  ) : (
                      <LoginButtons />
                  )}
              </Flex>
          </Box>
          <Box
              display="flex"
              flexDirection="column"
              width="full"
              maxWidth="700px"
              margin="0 auto"
              mt={8}
              px={4}
          >
              <FeedbackLink paths={[SITE_ID]} />
              {allFeedback.map((feedback, index) => (
                  <Feedback
                      key={feedback.id}
                      settings={site?.settings}
                      isLast={index === allFeedback.length - 1}
                      {...feedback}
                  />
              ))}
          </Box>
          {/*<Footer />*/}
      </>
  )
}

// what's going on?
