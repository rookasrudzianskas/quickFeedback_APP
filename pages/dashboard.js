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


// import {useAuth} from "@/lib/auth";

const Dashboard = () => {
    const { data, error } = useSWR('/api/sites', fetcher);
    console.log(data);
    if(!data) {
        // return (
        //     <DashboardShell>
        //         <SiteTableSkeleton />
        //     </DashboardShell>
        // )
    }

    const auth = useAuth();
    if(!auth.user) {
        return (
            <DashboardShell>
                <SiteTableSkeleton />
            </DashboardShell>
        )
    }

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>

            <DashboardShell>
                {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
            </DashboardShell>

        </>
    );
};


export default Dashboard;
