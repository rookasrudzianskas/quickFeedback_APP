import React from 'react';
import {Box, Link, Skeleton} from '@chakra-ui/core';
import { Table, Tr, Th, Td } from './Table';
import {format, parseISO} from "date-fns";


const SiteTable = ({ sites }) => {
    return (
        <Table>
            <thead>
            <Tr>
                <Th>Name</Th>
                <Th>Site Link</Th>
                <Th>Feedback Link</Th>
                <Th>Date Added</Th>
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
                        <Link color="teal.500">View Feedback</Link>
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

export default SiteTable;
