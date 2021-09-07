import React from 'react';
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading} from "@chakra-ui/core";
import AddSiteModal from "@/components/AddSiteModal";

const SiteTableHeader = ({stripeRole}) => {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink color="gray.700" fontSize="sm">Sites/</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Flex >
                <Heading flexGrow="1" mb={4}>My Sites</Heading>
                {stripeRole && <AddSiteModal>
                    + Add Site
                </AddSiteModal>}
            </Flex>
        </>
    );
};

export default SiteTableHeader;
