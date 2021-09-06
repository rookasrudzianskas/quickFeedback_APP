import {getAllFeedback, getAllSites} from "@/lib/db-admin";
import FeedbackLink from "@/components/FeedbackLink";
import Feedback from "@/components/Feedback";
import {Box, Button, FormControl, FormHelperText, FormLabel, Input} from "@chakra-ui/core";
import {useAuth} from "@/lib/auth";
import {useRouter} from "next/router";
import {useRef, useState} from "react";
import {createFeedback} from "@/lib/db";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

const SiteFeedback = ({ initialFeedback }) => {

    const auth = useAuth();
    const router = useRouter();
    const inputEl = useRef(null);
    const [allFeedback, setAllFeedback] = useState(initialFeedback);
    const [value, setValue] = useState("");
    const handleChange = (event) => setValue(event.target.value)



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
        };

        setAllFeedback([newFeedback, ...allFeedback]);
        setValue("");
        createFeedback(newFeedback);
    }

    // console.log(allFeedback);

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
                        <Input placeholder="Leave the comment" value={value} onChange={handleChange} ref={inputEl} type="comment" id="comment" />
                        <Button
                            type="submit"
                            isDisabled={router.isFallback}
                            backgroundColor="gray.900"
                            color="white"
                            fontWeight="medium"
                            mt={4}
                            _hover={{ bg: 'gray.700' }}
                            _active={{
                                bg: 'gray.800',
                                transform: 'scale(0.95)'
                            }}
                        >
                            Leave Feedback
                        </Button>
                    </FormControl>
                </Box>

                {allFeedback?.map((feedback) => (
                        <Feedback key={feedback.createdAt} {...feedback} />
                ))}
            </Box>
    )
};

export async function getStaticProps(context) {

    const siteId = context.params.siteId;
    const { feedback } = await getAllFeedback(siteId);

    return {
        props: {
            initialFeedback: feedback,
        },
        revalidate: 1
    };
}

export async function getStaticPaths() {
    const {sites} = await getAllSites();
    const paths = sites.map(site => ({
        params: {
            siteId: site.id.toString(),
        }
    }));

    return {
        paths,
        fallback: true
    };
}

export default SiteFeedback;

// today's shit done and checks, check if tests works
