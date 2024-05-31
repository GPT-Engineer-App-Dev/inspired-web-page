import { Container, Text, VStack, Box, Flex, Heading, Button } from "@chakra-ui/react";
import { FaStopwatch } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="black" color="yellow">
      <Box as="nav" width="100%" p={4} bg="green.500">
        <Flex justify="space-between" align="center">
          <Heading size="lg" color="black">Stopwatch</Heading>
          <Button leftIcon={<FaStopwatch />} colorScheme="yellow" variant="solid">
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