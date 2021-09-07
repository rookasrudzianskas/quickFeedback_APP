import React, {useState} from 'react'
import {
    Heading,
    Box,
    Text,
    Button,
    Flex,
} from '@chakra-ui/core';

import DashboardShell from "@/components/DashboardShell";
import AddSiteModal from "@/components/AddSiteModal";
import {createCheckoutSession} from "@/lib/db";
import {useAuth} from "@/lib/auth";

const UpgradeEmptyState = () => {

    const {user} = useAuth();
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

    return (
    <Flex width="100%" backgroundColor="white" borderRadius="8px" p={16} justify="center" direction="column" align="center">
        <Heading mb={2} size="lg">Get feedback on your site instantly.</Heading>
        <Text mb={4}>Start today, then grow with us 🌱</Text>

        <Button
            as="a"
            onClick={(e) => {
                setIsCheckoutLoading(true);
                createCheckoutSession(user.uid)
            }}
            // href="/dashboard"
            backgroundColor="gray.900"
            color="white"
            fontWeight="medium"
            mt={2}
            maxW="200px"
            isLoading={isCheckoutLoading}
            _hover={{ bg: 'gray.700' }}
            _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
            }}
        >
            Upgrade to Starter
        </Button>
    </Flex>
    )
}

export default UpgradeEmptyState;
