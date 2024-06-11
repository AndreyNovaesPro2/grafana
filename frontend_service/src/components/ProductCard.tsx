import { Box, Text, Image, Link, VStack, HStack, Tag, Button } from '@chakra-ui/react';

interface ProductCardProps {
  id: string;
  category: string;
  description: string;
  price: number;
  image: string;
  link: string;
  website: string;
}

const ProductCard = ({ id, category, description, price, image, link, website }: ProductCardProps) => {

  const processDescription = (description: string): void => {
    const words = description.split(' ');
    words.forEach(word => {
      let currentScore = localStorage.getItem(word);
      localStorage.setItem(word, currentScore ? (parseInt(currentScore || "0") + 1).toString() : "1");
    });
  }
  
  const onProductClick = (category: string, description: string): void => {
    let currentScore = localStorage.getItem(category);
    localStorage.setItem(category, currentScore ? (parseInt(currentScore || "0") + 1).toString() : "1");
    processDescription(description);
  }
  
  return (
    <Box
      key={id}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        src={image}
        alt={description}
        maxW="100%"
        maxHeight="200px"
        objectFit="cover"
      />
      <VStack align="center" mt={4}>
        <Text fontSize="xl" fontWeight="bold">
          {description}
        </Text>
          <Text fontSize="lg" fontWeight="bold">
            ${price}
          </Text>
        <HStack>
          <Tag colorScheme="blue" fontSize="sm">
            {category}
          </Tag>
        
          <Tag fontSize="sm" color="gray.500">
            {website}
          </Tag>
        </HStack>
        <Button
          as={Link}
          href={link}
          onClick={() => onProductClick(category, description)}
          isExternal
          mt={2}
          colorScheme="blue"
          variant="solid"
          _hover={{
            bg: 'blue.600',
          }}
        >
          Ir para o site
        </Button>
      </VStack>
    </Box>
  );
};

export default ProductCard;
