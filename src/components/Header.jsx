import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {

    const {isOpen,onClose,onOpen} = useDisclosure()
  return (
    <>
      <Button
      zIndex={100}
        pos={'fixed'}
        top={4}
        left={4}
        colorScheme={'purple'}
        w={'3rem'}
        h={'3rem'}
        p={0}
        borderRadius={'full'}
        onClick={ onOpen }
      >
        <BiMenuAltLeft size={'25'} />
      </Button>
      <Drawer zIndex={100} isOpen={isOpen} placement={'left'} onClose={onClose} >
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerCloseButton width={'3rem'} height={'3rem'} borderRadius={'full'} backgroundColor={'purple.500'} color={'white'} />
            <DrawerHeader >MeTube</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                        <Link to={'/videos'}>Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                        <Link to={'/uplode'}>Uplode Video</Link>
                    </Button>
                </VStack>

                <HStack pos={'absolute'} bottom={10} width={'full'} justifyContent={'space-evenly'} left={0}>
                    <Button onClick={onClose} colorScheme={'purple'}>
                        <Link to= {'/login'}>Login</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                        <Link to= {'/signup'}>Sign up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
