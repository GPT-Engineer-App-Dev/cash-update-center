import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box as="section" bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={4}>
            Featured Article Headline
          </Heading>
          <Text fontSize="lg" mb={6}>
            This is a brief summary of the featured article. It provides an overview of the main points and entices the reader to continue reading.
          </Text>
        </Container>
      </Box>

      {/* Grid Layout for Additional Articles */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box>
              <Heading as="h3" size="lg" mb={2}>Article Title 1</Heading>
              <Text>This is a brief summary of the first article. It provides an overview of the main points.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2}>Article Title 2</Heading>
              <Text>This is a brief summary of the second article. It provides an overview of the main points.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2}>Article Title 3</Heading>
              <Text>This is a brief summary of the third article. It provides an overview of the main points.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2}>Article Title 4</Heading>
              <Text>This is a brief summary of the fourth article. It provides an overview of the main points.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2}>Article Title 5</Heading>
              <Text>This is a brief summary of the fifth article. It provides an overview of the main points.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2}>Article Title 6</Heading>
              <Text>This is a brief summary of the sixth article. It provides an overview of the main points.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={6}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
            <HStack spacing={8}>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;