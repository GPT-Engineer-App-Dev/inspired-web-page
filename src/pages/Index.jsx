import { Container, Text, VStack, Box, Flex, Heading, Button } from "@chakra-ui/react";
import { FaStopwatch } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="brand.900" color="brand.700">
      <Box as="nav" width="100%" p={4} bg="brand.800">
        <Flex justify="space-between" align="center">
          <Heading size="lg" color="brand.900">Stopwatch</Heading>
          <Button leftIcon={<FaStopwatch />} colorScheme="brand" variant="solid">
            Start
          </Button>
        </Flex>
      </Box>
      <VStack spacing={4} mt={10}>
        <Text fontSize="4xl" fontWeight="bold">00:00:00</Text>
        <Text fontSize="lg">A sleek and modern stopwatch inspired by the classic design.</Text>
      </VStack>
    </Container>
  );
};

export default Index;