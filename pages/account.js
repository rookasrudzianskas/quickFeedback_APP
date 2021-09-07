import Image from 'next/image'
import { Box, Button, Flex, Text, Icon, Link, Stack, Heading, Code } from '@chakra-ui/core';
import Head from "next/head";
import {useAuth} from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import DashboardShell from "@/components/DashboardShell";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import SiteTable from "@/components/SiteTable";
import SiteTableHeader from "@/components/SiteTableHeader";


// import {useAuth} from "@/lib/auth";

const Account = () => {
    const { user } = useAuth();
    // const { data, error } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);
    // console.log(data);
    // if(!data) {
    //     return (
    //         <DashboardShell>
    //             <SiteTableHeader />
    //             <SiteTableSkeleton />
    //         </DashboardShell>
    //     )
    // }

    if(!user) {
        return (
            <DashboardShell>
                <SiteTableSkeleton />
            </DashboardShell>
        )
    }

    return (
        <>
            <Head>
                <title>Account</title>
            </Head>

            <DashboardShell overflow="hidden">
                <Button
                    as="a"
                    // onClick={GoToDashboard}
                    href="/dashboard"
                    backgroundColor="gray.900"
                    color="white"
                    fontWeight="medium"
                    mt={4}
                    maxW="200px"
                    _hover={{ bg: 'gray.700' }}
                    _active={{
                        bg: 'gray.800',
                        transform: 'scale(0.95)'
                    }}
                >
                    View Dashboard
                </Button>
            </DashboardShell>

        </>
    );
};


export default Account;
