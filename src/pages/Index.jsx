import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Phambili Media
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your partner in digital transformation and media solutions.
        </Text>
        <Button colorScheme="brand" size="lg">
          Get Started
        </Button>
        <Box width="100%" textAlign="center">
          <Image src="/images/hero-image.jpg" alt="Hero Image" borderRadius="md" />
        </Box>
        <Flex justifyContent="center" width="100%" mt={4}>
          <Button as="a" href="https://facebook.com" target="_blank" leftIcon={<FaFacebook />} colorScheme="facebook" m={2}>
            Facebook
          </Button>
          <Button as="a" href="https://twitter.com" target="_blank" leftIcon={<FaTwitter />} colorScheme="twitter" m={2}>
            Twitter
          </Button>
          <Button as="a" href="https://instagram.com" target="_blank" leftIcon={<FaInstagram />} colorScheme="pink" m={2}>
            Instagram
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;