import Image from 'next/image'
import { Box, Button, Flex, Text, Icon, Link, Stack, Heading, Code } from '@chakra-ui/core';
import Head from "next/head";
import {useAuth} from "@/lib/auth";
import EmptyState from "@/components/EmptyState";


// import {useAuth} from "@/lib/auth";

const Dashboard = () => {

    const auth = useAuth();
    if(!auth.user) {
        return 'Loading...';
    }

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>

                <EmptyState />

        </>
    );
};


export default Dashboard;
