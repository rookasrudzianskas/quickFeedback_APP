import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button, IconButton
} from "@chakra-ui/core";
import {useRef, useState} from "react";
import {deleteFeedback} from "@/lib/db";
import {mutate} from "swr";
import {useAuth} from "@/lib/auth";


function RemoveButton({feedbackId}) {
    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false);
    const auth = useAuth();
    const onDelete = () => {
        // console.log(feedbackId);
        deleteFeedback(feedbackId);

        mutate(
            ['/api/feedback', auth.user.token],
            async (data) => {
                return { feedback: data.feedback.filter((feedback) => feedback.id !== feedbackId) };
            },
            false
        );

        onClose();
    }
    const cancelRef = useRef()

    return (
        <>
            <IconButton
                aria-label="Delete feedback"
                icon="delete"
                variant="ghost"
                onClick={() => setIsOpen(true)}
            />

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Customer
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" variantColor="red" onClick={onDelete} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default RemoveButton;
