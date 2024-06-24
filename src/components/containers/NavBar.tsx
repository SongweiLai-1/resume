import React, { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import MusicPlayer from './musicPlayer/MusicPlayer';
import playList from './musicPlayer/playList';
const Links = ['Introduction', 'Experience ','Education', 'PhotoGrid', 'Github','Others'];

interface NavLinkProps {
    children: ReactNode;
    onClick: () => void;
}

interface NavBarProps {
    onSectionClick: (section: string) => void;
}

const NavLink = ({ children, onClick }: NavLinkProps) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}
        onClick={onClick}
    >
        {children}
    </Link>
);

const NavBar: React.FC<NavBarProps> = ({ onSectionClick }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleNavClick = (section: string) => {
        onSectionClick(section);
        onClose(); // Close the mobile menu when a link is clicked
    };

    return (
        <>
            <Box>
                <Flex overflow="hidden" h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack>
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <Box>Logo</Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {Links.map((link) => (
                                <NavLink key={link} onClick={() => handleNavClick(link)}>
                                    {link}
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Box m={5}>

                        <Box  h="100%"> <MusicPlayer tracks={playList}/> </Box>

                    </Box>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link} onClick={() => handleNavClick(link)}>
                                    {link}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
};

export default NavBar;
