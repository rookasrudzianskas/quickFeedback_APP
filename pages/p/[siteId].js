import {getAllFeedback} from "@/lib/db-admin";

const SiteFeedback = ({ initialFeedback }) => {
    return (
        'Hello world 🔥'
    )
}

export default SiteFeedback;

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
    return {
        paths : [
            { params: {
                    siteId:
                }
            }
        ],
        fallback: false
    };
}

