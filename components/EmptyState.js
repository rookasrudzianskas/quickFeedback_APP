import React from 'react'
import {
    Heading,
    Box,
    Text,
    Button
} from '@chakra-ui/react';

import DashboardShell from "@/components/DashboardShell";

const EmptyState = () => (
    <DashboardShell>
        <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
            <Heading size="md">You haven't added any sites.</Heading>
            <Text>Welcome, 👋 Let's get started.</Text>
            <Button variant="solid" size="md">
                Add Your First Site
            </Button>
        </Box>
    </DashboardShell>
)

export default EmptyState;
