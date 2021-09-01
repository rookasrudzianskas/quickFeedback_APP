import {getAllFeedback, getAllSites} from "@/lib/db-admin";
import FeedbackLink from "@/components/FeedbackLink";
import Feedback from "@/components/Feedback";
import {Box, Button, FormControl, FormHelperText, FormLabel, Input} from "@chakra-ui/core";
import {useAuth} from "@/lib/auth";
import {useRouter} from "next/router";
import {useRef} from "react";

const SiteFeedback = ({ initialFeedback }) => {

    const auth = useAuth();
    const router = useRouter();
    const inputEl = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log('Hello');
        const newFeedback = {
            author: auth.user.name,
            authorId: auth.user.uid,
            siteId: router.query.siteId,
            text: inputEl.current.value,
            createdAt: new Date().toISOString(),
            provider: auth.user.provider,
            status: 'pending',
        }
    }

    return (
            <Box
                display="flex"
                // alignItems="center"
                flexDirection="column"
                width="full"
                maxWidth="700px"
                margin="0 auto"
            >

                <Box as="form" onSubmit={onSubmit}>
                    <FormControl my={8} id="comment">
                        <FormLabel>Comment</FormLabel>
                        <Input ref={inputEl} type="comment" id="comment" />
                        <Button fontWeight="medium" type="submit" mt={2}>
                            Add Comment
                        </Button>
                    </FormControl>
                </Box>

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
