import React from 'react';
import {Box, Link, Skeleton} from '@chakra-ui/core';
import { Table, Tr, Th, Td } from './Table';
import {format, parseISO} from "date-fns";
import NextLink from 'next/link'


const FeedbackTable = ({ sites }) => {
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
            {sites.map(site => (

                <Box key={site.id} as="tr">
                    <Td fontWeight="medium">
                        {site.name}
                    </Td>
                    <Td>
                        {site.url}
                    </Td>
                    <Td>
                        <NextLink href="/p/[siteId]" as={`/p/${site.id}`} passHref>
                            <Link color="teal.500">View Feedback</Link>
                        </NextLink>
                    </Td>
                    <Td>
                        {format(parseISO(site.createdAt), 'PPpp')}
                    </Td>
                </Box>
            ))}
            </tbody>
        </Table>
    );
};

export default FeedbackTable;
