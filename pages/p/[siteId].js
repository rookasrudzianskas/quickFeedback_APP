import {getAllFeedback, getAllSites} from "@/lib/db-admin";
import FeedbackLink from "@/components/FeedbackLink";
import Feedback from "@/components/Feedback";
import {Box, FormControl, FormHelperText, FormLabel, Input} from "@chakra-ui/core";

const SiteFeedback = ({ initialFeedback }) => {
    return (
            <Box
                display="flex"
                // alignItems="center"
                flexDirection="column"
                width="full"
                maxWidth="700px"
                margin="0 auto"
            >

                <Box>
                    <FormControl my={8} id="comment">
                        <FormLabel>Comment</FormLabel>
                        <Input type="comment" id="comment" />
                    </FormControl>
                </Box>

                <Box
                    alignItems="center"
                >
                {initialFeedback.map((feedback) => (
                        <Feedback key={feedback.id} {...feedback} />
                ))}
                </Box>
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
