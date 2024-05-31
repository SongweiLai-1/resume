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
    Button
} from '@chakra-ui/react';

const skills = [
    'React',
    'HT',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'AWS'
];

const IntroCard = () => {
    return (
        <div>
            <Card h="400px" w="300px" display="flex" flexDirection="column" alignItems="center" justifyContent="center"   overflow="auto">
                <Box
                    display="flex"
                    justifyContent="center"
                    mt="20px"
                >
                    <Avatar
                        size="xl"
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                    />
                </Box>

                <CardHeader textAlign="center">
                    <Heading fontSize="2xl" fontFamily="body">Songwei Lai</Heading>
                </CardHeader>

                <Text fontWeight={600} color="gray.500" mb={4} textAlign="center">
                    @Songwei.lai.9
                </Text>

                <CardBody textAlign="center">
                    <Text>Market Trader, Web programmer, Camper and Cafe maker. I like chanllge anything news that inspire me. Email me when you interest my experiences</Text>
                </CardBody>

                <CardFooter>
                    <Wrap align="center" justify="center" spacing={2} mt={6}>
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

                    <Button
                        w={'full'}
                        mt={8}
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                    >
                        Email Me
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default IntroCard;
