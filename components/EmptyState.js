import React from 'react'
import {
    Heading,
    Box,
    Text,
    Button,
    Flex,
} from '@chakra-ui/core';

import DashboardShell from "@/components/DashboardShell";
import AddSiteModal from "@/components/AddSiteModal";

const EmptyState = () => (
        <Flex width="100%" backgroundColor="white" borderRadius="8px" p={16} justify="center" direction="column" align="center">
            <Heading mb={2} size="lg">You haven't added any sites.</Heading>
            <Text mb={4}>Welcome, 👋. Let's get started.</Text>
            <AddSiteModal>
                Add Your First Site
            </AddSiteModal>
        </Flex>
)

export default EmptyState;
