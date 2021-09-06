import React from 'react';
import {Box, Divider, Heading, Text} from "@chakra-ui/core";
import {format, parseISO} from "date-fns";

const Feedback = ({ author, text, createdAt }) => {
    return (
        <Box borderRadius={4} maxWidth="700px" w="full">
           <Heading size="sm" as="h3" mb={0} color="gray.900" fontWeight="bold" >
               {author}
           </Heading>

            <Text color="gray.500" mb={4} fontSize="xs">
                {format(parseISO(createdAt), 'PPpp')}
            </Text>
            <Text color="gray.800"   mb={6}>{text}</Text>
            <Divider borderColor="gray.200" backgroundColor="white" mb={6}/>
        </Box>
    );
};

export default Feedback;
