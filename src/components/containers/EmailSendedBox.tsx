import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Button,
    useColorModeValue,
    Box,
    Text
} from '@chakra-ui/react';

const EmailSendedBox  = () => {

    return (
        <Card
            h="400px"
            w="600px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            overflow="auto"
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow="lg"
            p={4}
            rounded="md"
        >
            <CardHeader>
                <Heading fontSize="xl" textAlign="center">Thanks you for Sending Email</Heading>
            </CardHeader>
            <CardBody>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Text> Click back if you want send anthor</Text>
                    <Button
                        w="full"
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color="white"
                        rounded="md"
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                        onClick={() => window.location.reload()}
                    >
                        Back
                    </Button>
                </Box>
            </CardBody>
        </Card>
    );
};

export default EmailSendedBox;
