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

const Dashboard = () => {
    const { user } = useAuth();
    const { data, error } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);
    console.log(data);
    if(!data) {
        return (
            <DashboardShell>
                <SiteTableHeader />
                <SiteTableSkeleton />
            </DashboardShell>
        )
    }

    if(!user) {
        return (
            <DashboardShell>
                <SiteTableHeader />
                <SiteTableSkeleton />
            </DashboardShell>
        )
    }

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>

            <DashboardShell overflow="hidden">
                <SiteTableHeader />
                {data.sites.length ? <SiteTable sites={data.sites} /> : <EmptyState />}
            </DashboardShell>

        </>
    );
};


export default Dashboard;


// it works
