import React from 'react'
import {
    Flex,
    Link,
    Stack,
    Icon,
    Avatar,
    Breadcrumb,
    Heading,
    BreadcrumbItem,
    BreadcrumbLink,
    Box,
    Text,
    Button
} from '@chakra-ui/core';
import {useAuth} from "@/lib/auth";
import AddSiteModal from "@/components/AddSiteModal";
import {useRouter} from "next/router";

const DashboardShell = ({children}) => {

    const auth = useAuth();
    const signOut = () => {
    }

    const router = useRouter();
    const signOutFromApp = () => {
        auth.signout();
        router.push('/');

    }

    return  (
        <Flex flexDirection="column" overflow="hidden">
            <Box as='header' sx={{ position: '-webkit-sticky', /* Safari */ top: '0', }}>

            <Flex
                    backgroundColor="white"
                    justifyContent="space-between"
                    py={4}
                    px={8}
                >
                    <Stack spacing={4} isInline align="center">
                        <Icon name="logo" color="black" size="24px"/>
                        <Link>Sites</Link>
                        <Link>Feedback</Link>
                    </Stack>
                    <Flex justifyContent="flex-start" alignItems="center">
                        {auth.user && <Link onClick={signOutFromApp} mr={4}>Log Out</Link>}
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
                        <Breadcrumb>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink color="gray.700" fontSize="sm">Sites/</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    <Flex >
                        <Heading flexGrow="1" mb={4}>My Sites</Heading>
                        <AddSiteModal>
                            + Add Site
                        </AddSiteModal>
                    </Flex>
                        {children}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DashboardShell;

// today's shit, done for today
// continuing today
