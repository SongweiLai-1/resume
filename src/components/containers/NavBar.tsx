import React, { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import MusicPlayer from './musicPlayer/MusicPlayer';
import playList from './musicPlayer/playList';

const Links = ['Introduction', 'Experience', 'Education', 'PhotoGrid', 'Github', 'Others'];

interface NavLinkProps {
    children: ReactNode;
    onClick: () => void;
    href?: string; // Optional href prop to handle external links
}

interface NavBarProps {
    onSectionClick: (section: string) => void;
}

const NavLink = ({ children, onClick, href }: NavLinkProps) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={href}
        onClick={onClick}
        isExternal={!!href} // Add this prop to make it clear that the link is external if href is provided
    >
        {children}
    </Link>
);

const NavBar: React.FC<NavBarProps> = ({ onSectionClick }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleNavClick = (section: string) => {
        if (section === 'Github') {
            window.location.href = 'https://github.com/SongweiLai-1'; // Replace with your GitHub profile URL
        } else {
            onSectionClick(section);
            onClose(); // Close the mobile menu when a link is clicked
        }
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
                                <NavLink
                                    key={link}
                                    onClick={() => handleNavClick(link)}
                                    href={link === 'Github' ? 'https://github.com/SongweiLai-1' : undefined}
                                >
                                    {link}
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Box m={5}>
                        <MusicPlayer tracks={playList} />
                    </Box>
                </Flex>
                {isOpen ? (
                    <Box pb={3} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={2}>
                            {Links.map((link) => (
                                <NavLink
                                    key={link}
                                    onClick={() => handleNavClick(link)}
                                    href={link === 'Github' ? 'https://github.com/SongweiLai-1' : undefined}
                                >
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
