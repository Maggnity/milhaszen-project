import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    MenuButton,

} from '@chakra-ui/react'
import React from 'react'

export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (

        <div className='sidebar'>
            <Button
                className='sidebar__button btn btn--sidebar'
                //@ts-ignore
                ref={btnRef}
                colorScheme='teal'
                onClick={onOpen}
            >
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                //@ts-ignore
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}