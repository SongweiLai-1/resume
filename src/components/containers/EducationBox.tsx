import React from 'react';
import { Box, Flex, Image, Text, Stack } from '@chakra-ui/react';
import {educationData} from '../../assets/profile';

interface EducationProps {
    schoolLogo: string;
    schoolName: string;
    degree: string;
    time: string;
    description: string;
}

const EducationCard = ({ schoolLogo, schoolName, degree, time, description }: EducationProps) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4} w="600px" bg='white'>
            <Flex direction="row">
                <Image src={schoolLogo} alt={`${schoolName} logo`} boxSize="100px" w="120px" mr={4} />
                <Stack align="start" spacing={2}>
                    <Text color="gray.500" fontWeight="bold">{schoolName}</Text>
                    <Text color="gray.500">{degree}</Text>
                    <Text color="gray.500">{time}</Text>
                    <Text color="gray.500">{description}</Text>
                </Stack>
            </Flex>
        </Box>
    );
}

const EducationSection = () => {


    return (
        <Stack p={4} justifyContent="space-between">
            {educationData.map((education, index) => (
                <EducationCard
                    key={index}
                    schoolLogo={education.schoolLogo}
                    schoolName={education.schoolName}
                    degree={education.degree}
                    time={education.time}
                    description={education.description}
                />
            ))}
        </Stack>
    );
}

export default EducationSection;
