import {getAllFeedback, getAllSites} from "@/lib/db-admin";
import FeedbackLink from "@/components/FeedbackLink";
import Feedback from "@/components/Feedback";
import {Box} from "@chakra-ui/core";

const SiteFeedback = ({ initialFeedback }) => {
    return (
            <Box
                display="flex"
                flexDirection="column"
                width="full"
                maxWidth="1000px"
                margin="0 auto"
            >
                {initialFeedback.map((feedback) => (
                        <Feedback key={feedback.id} {...feedback} />
                ))}
            </Box>
    )
};

export async function getStaticProps(context) {

    const siteId = context.params.siteId;
    const feedback = await getAllFeedback(siteId);

    return {
        props: {
            initialFeedback: feedback,
        }
    };
}

export async function getStaticPaths() {
    const sites = await getAllSites();
    const paths = sites.map(site => ({
        params: {
            siteId: site.id.toString(),
        }
    }));

    return {
        paths,
        fallback: false
    };
}

export default SiteFeedback;
