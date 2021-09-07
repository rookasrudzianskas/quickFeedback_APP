import React from 'react';
import { NextSeo } from 'next-seo';

const Page = ({ name, path, children }) => {
    const title = `Quck Feedback – ${name}`;
    const url = `https://quickfeedback.vercel.com${path}`;

    return (
        <>
            <NextSeo
                title={title}
                canonical={url}
                openGraph={{
                    url,
                    title
                }}
            />
            {children}
        </>
    );
};

export default Page;
