import { Card, CardBody, Text, Box, Flex } from '@chakra-ui/react';
import { experience } from '../../assets/profile';
import React from 'react';

interface JobProps {
    jobName?: string;
    company?: string;
    date?: string;
    description?: string;
}

const Job = ({ jobName, company, date, description }: JobProps) => {
    return (
        <Box p="4" borderWidth="1px" borderRadius="lg" shadow="md">
            <Flex align="center" justify="space-between">
                <Text fontSize="lg" fontWeight="bold">{jobName}</Text>
                <Text color="gray.500">{date}</Text>
            </Flex>
            <Text mt="2" fontSize="md" color="gray.600">{company}</Text>
            <Text mt="2" fontSize="xs" >{description}</Text>
        </Box>
    );
}

const JobExperienceBox = () => {
    return (
        <>
            {experience.map((job, index) => (
                <Card key={index} my={2}  >
                    <CardBody >
                        <Job
                            jobName={job.occupation}
                            company={job.company_name}
                            date={job.date}
                            description={job.description}
                        />
                    </CardBody>
                </Card>
            ))}
        </>
    );
}

export default JobExperienceBox;
