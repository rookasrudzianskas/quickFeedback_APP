import React from 'react';
import {Box, Code, IconButton, Link, Skeleton, Switch} from '@chakra-ui/core';
import { Table, Tr, Th, Td } from './Table';
import RemoveButton from "@/components/RemoveButton";
import {useRouter} from "next/router";
import FeedbackRow from "@/components/FeedbackRow";


const FeedbackTable = ({ allFeedback }) => {


    // console.log("This is feedback");

    const toggleFeedback = (e) => {
        console.log(e);
    }

    const route = useRouter();
    return (
        <Table>
            <thead>
            <Tr>
                <Th>Name</Th>
                <Th>Feedback</Th>
                <Th>Route</Th>
                <Th>Visible</Th>
                <Th>{''}</Th>
            </Tr>
            </thead>
            <tbody>
            {allFeedback.map((feedback) => (
                <FeedbackRow key={feedback.id} {...feedback} />
            ))}
            </tbody>
        </Table>
    );
};

export default FeedbackTable;
