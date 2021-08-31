import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button, FormControl, FormLabel, Input, useDisclosure, Flex,
} from "@chakra-ui/core";
import React from "react";
import {useForm} from "react-hook-form";


const InitialFocus = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleSubmit, register, errors } = useForm();
    const initialRef = React.useRef();

    const createSite = values => console.log(values);

    return (
        <>
            <Button onClick={onOpen} fontWeight="medium" maxW="200px" variant="solid" size="md">
                Add Your First Site
            </Button>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit(createSite)}>
                    <ModalHeader fontWeight="bold">Add Site</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder="My site"
                                name="site"
                                register={register} required
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input
                                placeholder="https://byroookas.com"
                                name="url"
                                register={register} required
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} mr={3} fontWeight="medium">Cancel</Button>
                        <Button backgroundColor="#99FFEE" color="#194D4C" fontWeight="medium" type="submit" >Create</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default InitialFocus;
