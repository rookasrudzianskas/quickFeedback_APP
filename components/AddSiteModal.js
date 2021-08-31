import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button, FormControl, FormLabel, Input, useDisclosure, Flex, useToast
} from "@chakra-ui/core";
import React from "react";
import {useForm} from "react-hook-form";
import {createSite} from "@/lib/db";
import {useAuth} from "@/lib/auth";



const InitialFocus = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleSubmit, register, errors } = useForm();
    const initialRef = React.useRef();
    const toast = useToast();
    const auth = useAuth();

    const onCreateSite = (values) => {

        createSite({
            authorId: auth.user.uid,
            createdAt: new Date().toISOString(),
            ...values,
        });
        toast({
            title: "Success!",
            description: "We've created added your site.",
            status: "success",
            position: "top-right",
            duration: 5000,
            isClosable: true,
        });
    }

    return (
        <>
            <Button onClick={onOpen} fontWeight="medium" maxW="200px" variant="solid" size="md">
                Add Your First Site
            </Button>
            <Modal rounded="md" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent rounded="md" as="form" onSubmit={handleSubmit(onCreateSite)}>
                    <ModalHeader fontWeight="bold">Add Site</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                id="site-input"
                                placeholder="My site"
                                name="name"
                                ref={register({
                                    required: 'Required'
                                })}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input
                                id="link-input"
                                placeholder="https://website.com"
                                name="url"
                                ref={register({
                                    required: 'Required'
                                })}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} mr={3} fontWeight="medium">
                            Cancel
                        </Button>
                        <Button
                            id="create-site-button"
                            backgroundColor="#99FFFE"
                            color="#194D4C"
                            fontWeight="medium"
                            type="submit"
                        >
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}

export default InitialFocus;