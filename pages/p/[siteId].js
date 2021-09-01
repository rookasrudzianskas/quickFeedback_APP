import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import {useAuth} from "@/lib/auth";
import DashboardShell from "@/components/DashboardShell";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import Head from "next/head";
import SiteTable from "@/components/SiteTable";
import EmptyState from "@/components/EmptyState";

const SiteFeedback = () => {
    return (
        'Hello world'
    )
}

export default SiteFeedback;

export async function getStaticProps(context) {
    return {
        props: {
            initialFeedback: []
        }
    };
}

export async function getStaticPaths() {
    return {
        paths : [
            { params: {
                siteId: 'CHpFwbzUUuNhCZHHbxX1'
            }
          }
        ],
        fallback: false
    };
}
