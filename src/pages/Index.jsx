import { Container, Text, VStack, Box, Flex, Heading, Button } from "@chakra-ui/react";
import { FaStopwatch } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="#264653" color="#E9C46A">
      <Box as="nav" width="100%" p={4} bg="#2A9D8F">
        <Flex justify="space-between" align="center">
          <Heading size="lg" color="#264653">Stopwatch</Heading>
          <Button leftIcon={<FaStopwatch />} colorScheme="orange" variant="solid">
            Start
          </Button>
        </Flex>
      </Box>
      <VStack spacing={4} mt={10}>
        <Text fontSize="4xl" fontWeight="bold" color="#E9C46A">00:00:00</Text>
        <Text fontSize="lg" color="#E9C46A">A sleek and modern stopwatch inspired by the classic design.</Text>
      </VStack>
    </Container>
  );
};

export default Index;