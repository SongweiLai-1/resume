import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Input,
    Button,
    useColorModeValue,
    Box
} from '@chakra-ui/react';

interface FormData {
    name: string;
    email: string;
    content: string;
    phoneNumber: string;
}

interface FormProps {
    onFormSubmit: (data: FormData) => void;
}

const Emailbox: React.FC<FormProps> = ({ onFormSubmit }) => {

    const [formState, setFormState] = useState<FormData>({
        name: '',
        email: '',
        content: '',
        phoneNumber: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        onFormSubmit(formState);
        setFormState({
            name: '',
            email: '',
            content: '',
            phoneNumber: '',
        });
    };

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
                <Heading fontSize="xl" textAlign="center">Contact Us</Heading>
            </CardHeader>
            <CardBody>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Input
                        size='sm'
                        placeholder="Enter your name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        mb={4}
                        type="text"
                    />
                    <Input
                        size='sm'
                        placeholder="Enter your email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        mb={4}
                        type="email"
                    />
                    <Input
                        placeholder="Enter your message"
                        name="content"
                        value={formState.content}
                        onChange={handleChange}
                        mb={4}
                        type="text"
                    />
                    <Input
                        size='sm'
                        placeholder="Enter your phone number"
                        name="phoneNumber"
                        value={formState.phoneNumber}
                        onChange={handleChange}
                        mb={4}
                        type="tel"
                    />
                    <Button
                        w="full"
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color="white"
                        rounded="md"
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Box>
            </CardBody>
        </Card>
    );
};

export default Emailbox;
