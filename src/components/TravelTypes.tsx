import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";

export default function TravelTypes() {
  return (
    <Container
      height={145}
      maxWidth="calc(100% - 280px)"
      justifyItems="center"
      justifyContent="space-between"
      flexDirection="row"
      display="flex"
      marginTop={80.79}
    >
      <VStack>
        <img src="/images/cocktail.svg" alt="Image of cocktail" />
        <Text fontWeight="600" fontSize="2xl" color="dark.headingsAndTexts">
          vida noturna
        </Text>
      </VStack>
      <VStack>
        <img src="/images/surf.svg" alt="Image of surf board" />
        <Text fontWeight="600" fontSize="2xl" color="dark.headingsAndTexts">
          praia
        </Text>
      </VStack>
      <VStack>
        <img src="/images/building.svg" alt="Image of a building" />
        <Text fontWeight="600" fontSize="2xl" color="dark.headingsAndTexts">
          moderno
        </Text>
      </VStack>
      <VStack>
        <img src="/images/museum.svg" alt="Image of a museum" />
        <Text fontWeight="600" fontSize="2xl" color="dark.headingsAndTexts">
          clássico
        </Text>
      </VStack>
      <VStack>
        <img src="/images/earth.svg" alt="Image of the earth" />
        <Text fontWeight="600" fontSize="2xl" color="dark.headingsAndTexts">
          e mais...
        </Text>
      </VStack>
    </Container>
  );
}
