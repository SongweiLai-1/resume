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
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
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
                        <Box> <MusicPlayer track={playList}/> </Box>
                    </HStack>
                    <Box m={5}>
                        <Menu arrowPadding={5}>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}
                            >
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Testing</MenuItem>
                                <MenuItem>Testing</MenuItem>
                                <MenuDivider />
                                <MenuItem>Testing</MenuItem>
                            </MenuList>
                        </Menu>
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
