import React from 'react'
import {
    Heading,
    Box,
    Text,
    Button,
    Flex,
} from '@chakra-ui/core';

import DashboardShell from "@/components/DashboardShell";

const EmptyState = () => (
    <DashboardShell>
        <Flex width="100%" backgroundColor="white" borderRadius="8px" p={16} justify="center" direction="column" align="center">
            <Heading mb={2} size="lg">You haven't added any sites.</Heading>
            <Text mb={4}>Welcome, 👋. Let's get started.</Text>
            <Button fontWeight="medium" maxW="200px" variant="solid" size="md">
                Add Your First Site
            </Button>
        </Flex>
    </DashboardShell>
)

export default EmptyState;
