import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Avatar,
    Box,
    Text,
    useColorModeValue,
    Badge,
    Wrap,
    WrapItem,
    Button,
    Stack,
} from '@chakra-ui/react';

interface IntroCardProps {
    h?: string;
    w?: string;
    name: string;
    avatarUrl: string;
    username: string;
    description: string;
    skills: string[];
    email: string;
    resume: string;
    onButtonClick: (item: string, action: string) => void;
}

const IntroCard: React.FC<IntroCardProps> = ({
                                                 h = "300px",
                                                 w = "300px",
                                                 name,
                                                 avatarUrl,
                                                 username,
                                                 description,
                                                 skills,
                                                 email,
                                                 resume,
                                                 onButtonClick,
                                             }) => {

    const height = h ;
    const width = w ;
    let action = "";

    return (
        <Card h={height} w={width} display="flex" flexDirection="column" alignItems="center" justifyContent="center" overflow="auto">
            <Box display="flex" justifyContent="center" mt="20px">
                <Avatar size="xl" name={name} src={avatarUrl} />
            </Box>

            <CardHeader textAlign="center">
                <Heading fontSize="2xl" fontFamily="body">{name}</Heading>
            </CardHeader>

            <Text fontWeight={600} color="gray.500" mb={4} textAlign="center">
                @{username}
            </Text>

            <Box textAlign="center"  padding={5}>
                <Text>{description}</Text>
            </Box>

            <CardFooter >
                <Wrap align="center" justify="center" spacing={2} >
                    {skills.map((skill) => (
                        <WrapItem key={skill}>
                            <Badge
                                px={2}
                                py={1}
                                bg={useColorModeValue('gray.50', 'gray.800')}
                                fontWeight={'400'}
                            >
                                #{skill}
                            </Badge>
                        </WrapItem>
                    ))}
                </Wrap>

                <Stack>
                <Button
                    w={'full'}
                    mt={0}
                    bg={useColorModeValue('#151f21', 'gray.900')}
                    color={'white'}
                    rounded={'md'}
                    _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    }}
                    onClick={() => onButtonClick(email, action = "email")}
                >
                    Email Me
                </Button>

                <Button
                    w={'full'}
                    mt={2}
                    bg={useColorModeValue('#151f21', 'gray.900')}
                    color={'white'}
                    rounded={'md'}
                    _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    }}
                    onClick={() => onButtonClick(resume,action = "resume")}
                >
                    Download Resume
                </Button>
                </Stack>
            </CardFooter>
        </Card>
    );
};

export default IntroCard;
