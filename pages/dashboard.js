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
import UpgradeEmptyState from "@/components/UpgradeEmptyState";
import Page from "@/components/Page";


// import {useAuth} from "@/lib/auth";

const Dashboard = () => {
    const { user } = useAuth();
    const { data, error } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);
    const isPaidAccount = user?.stripeRole;

    // console.log(data);
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

    if(data.sites.length) {
        return (
            <DashboardShell overflow="hidden">
                <SiteTableHeader />
                <SiteTable sites={data.sites} />
            </DashboardShell>
        )
    }

    return (
        <>

            <DashboardShell overflow="hidden">
                <SiteTableHeader isPaidAccount={isPaidAccount} />
                {/*<UpgradeEmptyState />*/}
                {isPaidAccount ? <EmptyState /> : <UpgradeEmptyState />}
            </DashboardShell>

        </>
    );
};

const DashboardPage = () => {
    return (
        <Page name="Dashboard" path="/dashboard">
            <Dashboard />
        </Page>
    )
}

export default DashboardPage;


// it works finally yes
