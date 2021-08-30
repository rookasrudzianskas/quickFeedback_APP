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
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import DashboardShell from "@/components/DashboardShell";

const FreePlanEmptyState = () => (
    <DashboardShell>
        <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
            <Heading size="md">Get feedback on your site instantly.</Heading>
            <Text>Start today, then grow with us 🌱</Text>
            <Button variant="solid" size="md">
                Upgrade to Starter
            </Button>
        </Box>
    </DashboardShell>
)

export default DashboardShell
