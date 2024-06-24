import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Textarea,
    VStack,
    Wrap,
    WrapItem,
    IconButton
} from '@chakra-ui/react';
import { MdEmail, MdLocationOn, MdOutlineEmail, MdPhone } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import {profiles} from "../../assets/profile";

const Emailbox = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formState);
        // You can further handle the form submission, e.g., send the data to a server
    };

    const linkinUrl = profiles[0].linkin;
    const githubURL = profiles[0].github;
    const insURL = profiles[0].ins;


    return (
        <Container maxW="full" mt={0} centerContent overflow="hidden">
            <Flex>
                <Box
                    bg="grey.300"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 1, md: 2, lg: 4 }}
                    p={{ sm: 5, md: 5, lg: 14 }}
                >
                    <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                        <Box>
                            <HStack spacing={20}>
                                <WrapItem>
                                    <Box>
                                        <Heading>Contact me</Heading>
                                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                            Please message me
                                        </Text>
                                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                            <VStack pl={0} spacing={3} alignItems="flex-start">
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    leftIcon={<MdPhone color="#1970F1" size="20px" />}
                                                >
                                                    61+ 0402214407
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    leftIcon={<MdEmail color="#1970F1" size="20px" />}
                                                >
                                                    songwei.lai.9@gmail
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                                                >
                                                    Sydney-NSW-Aus
                                                </Button>
                                            </VStack>
                                        </Box>
                                        <HStack
                                            mt={{lg: 3, md: 1}}
                                            spacing={5}
                                            px={5}
                                            alignItems="flex-start"
                                        >
                                            <a href={linkinUrl} target="_blank" rel="noopener noreferrer">
                                                <IconButton aria-label='Search Linkedin' icon={<FaLinkedin/>}/>
                                            </a>

                                            <a href={githubURL} target="_blank" rel="noopener noreferrer">
                                            <IconButton aria-label='Search Github' icon={<FaGithub/>}/>
                                            </a>

                                            <a href={insURL} target="_blank" rel="noopener noreferrer">
                                            <IconButton aria-label='Search Instagram' icon={<FaInstagram/>}/>
                                            </a>

                                        </HStack>
                                    </Box>
                                </WrapItem>
                                <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                        <Box m={8} color="#0B0E3F">
                                            <form onSubmit={handleSubmit}>
                                                <VStack pl={0} spacing={3} alignItems="flex-start">
                                                    <FormControl id="name">
                                                        <FormLabel>Your Name</FormLabel>
                                                        <InputGroup borderColor="#E0E1E7">
                                                            <InputLeftElement
                                                                pointerEvents="none"
                                                                children={<BsPerson color="gray.800" />}
                                                            />
                                                            <Input
                                                                type="text"
                                                                size="md"
                                                                name="name"
                                                                value={formState.name}
                                                                onChange={handleChange}
                                                            />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl id="email">
                                                        <FormLabel>Mail</FormLabel>
                                                        <InputGroup borderColor="#E0E1E7">
                                                            <InputLeftElement
                                                                pointerEvents="none"
                                                                children={<MdOutlineEmail color="gray.800" />}
                                                            />
                                                            <Input
                                                                type="email"
                                                                size="md"
                                                                name="email"
                                                                value={formState.email}
                                                                onChange={handleChange}
                                                            />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl id="message">
                                                        <FormLabel>Message</FormLabel>
                                                        <Textarea
                                                            borderColor="gray.300"
                                                            _hover={{ borderRadius: 'gray.300', }}
                                                            placeholder="message"
                                                            name="message"
                                                            value={formState.message}
                                                            onChange={handleChange}
                                                        />
                                                    </FormControl>
                                                    <FormControl id="submit" float="right">
                                                        <Button
                                                            type="submit"
                                                            variant="solid"
                                                            bg="#0D74FF"
                                                            color="white"
                                                            _hover={{}}
                                                        >
                                                            Send Message
                                                        </Button>
                                                    </FormControl>
                                                </VStack>
                                            </form>
                                        </Box>
                                    </Box>
                                </WrapItem>
                            </HStack>
                        </Box>
                    </Wrap>
                </Box>
            </Flex>
        </Container>
    );
}

export default Emailbox;
