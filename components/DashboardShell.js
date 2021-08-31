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

const DashboardShell = ({children}) => (
        <Flex flexDirection="column" height="100vh">
            <Flex
                backgroundColor="white"
                justifyContent="space-between"
                p={4}
            >
                <Stack spacing={4} isInline align="center">
                    <Icon name="logo" color="black" size="24px"/>
                    <Link>Sites</Link>
                    <Link>Feedback</Link>
                </Stack>
                <Flex justifyContent="flex-start" alignItems="center">
                    <Link mr={4}>Account</Link>
                    <Avatar size="sm" />
                </Flex>
            </Flex>
            <Flex backgroundColor="blackAlpha.50" p={8} height="100vh">
                <Flex
                    w="100%"
                    ml="auto"
                    mr="auto"
                    direction="column"
                    maxWidth="800px">
                    <Breadcrumb />
                        <Breadcrumb>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink>Sites/</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Heading mb={4}>My Sites</Heading>
                        {children}
                </Flex>
            </Flex>
        </Flex>
)

export default DashboardShell;

// todays shit
