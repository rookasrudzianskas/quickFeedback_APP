import React from 'react';
import {Box, Code, IconButton, Link, Skeleton, Switch} from '@chakra-ui/core';
import { Table, Tr, Th, Td } from './Table';
import RemoveButton from "@/components/RemoveButton";


const FeedbackRow = ({ id, author, text, route, status }) => {


    // console.log("This is feedback");

    const toggleFeedback = (e) => {
        console.log(e);
    }

    return (
        <Box key={id} as="tr">
            <Td fontWeight="medium">
                {author}
            </Td>
            <Td>
                {text}
            </Td>
            <Td>
                <Code>{route || '/'}</Code>
            </Td>

            <Td>
                <RemoveButton feedbackId={id} />
            </Td>
        </Box>
    );
};

export default FeedbackRow;
