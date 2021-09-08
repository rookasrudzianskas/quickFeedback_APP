const title =
    'Quick Feedback – The easiest way to add comments or reviews to your static site.';
const description = 'Quick Feedback is being built as a part of byRookas startups environment.';

const SEO = {
    title,
    description,
    canonical: 'https://www.quickfeedback.digital',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.quickfeedback.digital',
        title,
        description,
        images: [
            {
                url: 'https://fastfeedback.io/OG.png',
                alt: title,
                width: 1280,
                height: 720
            }
        ]
    }
};

export default SEO;
