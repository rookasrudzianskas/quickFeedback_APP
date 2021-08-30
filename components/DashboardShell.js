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
        <Flex flexDirection="column">
            <Flex
                backgroundColor="white"
                justifyContent="space-between"
                p={4}
            >
                <Stack spacing={4} isInline alignItems="center">
                    <Icon name="logo" color="black"/>
                    <Link>Sites</Link>
                    <Link>Feedback</Link>
                </Stack>
                <Flex justifyContent="flex-start" alignItems="center">
                    <Link mr={4}>Account</Link>
                    <Avatar size="sm" />
                </Flex>
            </Flex>
            <Flex backgroundColor="blackAlpha.50" p={8} height="100%">
                <Flex justifyContent="center" alignItems="center" ml="auto" mr="auto">
                    <Breadcrumb />
                    <Flex flexDirection="column">
                        <Breadcrumb>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink>Sites/</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Heading>My Sites</Heading>
                        {children}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
)

export default DashboardShell;
