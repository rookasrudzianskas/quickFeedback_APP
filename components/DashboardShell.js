import React from 'react'
import {
    Flex,
    Stack,
    Icon,
    Avatar,
    Breadcrumb,
    Heading,
    BreadcrumbItem,
    BreadcrumbLink,
    Box,
    Text,
    Button, Link
} from '@chakra-ui/core';
import NextLink from 'next/link'

import {useAuth} from "@/lib/auth";
import AddSiteModal from "@/components/AddSiteModal";
import {useRouter} from "next/router";
import {NextSeo} from "next-seo";

const DashboardShell = ({children}) => {

    const auth = useAuth();





    const router = useRouter();
    const signOutFromApp = () => {
        auth.signout();
        router.push('/');

    }

    const goToAccount = () => {
        router.push('/account');
    }

    return  (
        <>
            <Flex flexDirection="column" overflow="hidden">
                <Box as='header' sx={{ position: '-webkit-sticky', /* Safari */ top: '0', }}>

                <Flex
                        backgroundColor="white"
                        justifyContent="space-between"
                        py={4}
                        px={8}
                    >
                        <Stack spacing={4} isInline align="center">
                            <NextLink href={'/'} passHref>
                                <Icon mr={4} name="logo" color="black" size="24px"/>
                            </NextLink>
                            <NextLink href={'/dashboard'} passHref>
                                <Link>Sites</Link>
                                </NextLink>

                            <NextLink href={'/feedback'} passHref>
                                <Link ml={4}>Feedback</Link>
                            </NextLink>
                        </Stack>
                        <Flex justifyContent="flex-start" alignItems="center">
                            <Link onClick={goToAccount} mr={4}>Account</Link>
                            <Avatar size="sm" src={auth?.user?.photoUrl} />
                        </Flex>
                    </Flex>
                </Box>
                <Flex backgroundColor="blackAlpha.50" p={8} height="93vh">
                    <Flex
                        w="100%"
                        ml="auto"
                        mr="auto"
                        direction="column"
                        maxWidth="1200px">
                        <Breadcrumb />

                            {children}
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default DashboardShell;

// today's shit, done for today
// continuing today
// Google auth
