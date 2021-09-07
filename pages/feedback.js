import Image from 'next/image'
import { Box, Button, Flex, Text, Icon, Link, Stack, Heading, Code } from '@chakra-ui/core';
import Head from "next/head";
import {useAuth} from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import DashboardShell from "@/components/DashboardShell";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import FeedbackTable from "@/components/FeedbackTable";
import FeedbackTableHeader from "@/components/FeedbackTableHeader";


// import {useAuth} from "@/lib/auth";

const Feedback = () => {
    const { user } = useAuth();
    const { data, error } = useSWR(user ? ['/api/feedback', user.token] : null, fetcher);
    console.log(data);
    if(!data) {
        return (
            <DashboardShell>
                <FeedbackTableHeader />
                <SiteTableSkeleton />
            </DashboardShell>
        )
    }

    if(!user) {
        return (
            <DashboardShell>
                <FeedbackTableHeader />
                <SiteTableSkeleton />
            </DashboardShell>
        )
    }

    return (
        <>

            <DashboardShell overflow="hidden">

                <FeedbackTableHeader />

                {data?.feedback ? <FeedbackTable allFeedback={data.feedback} /> : <EmptyState />}
            </DashboardShell>

        </>
    );
};


export default Feedback;
