
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

