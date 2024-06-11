import { Box, Flex } from '@chakra-ui/react';
import DropdownMenu from '../components/DropDownMenu';
import ColorModeSwitcher from '../components/LightDarkMode';
import { resetCache } from '../services/apiServices';
interface FilterSectionProps {
  categories: string[];
  websites: string[];
  selectedCategory: string;
  selectedWebsite: string;
  handleCategoryChange: (newCategory: string) => void;
  handleWebsiteChange: (newWebsite: string) => void;
}

const FilterSection = ({ categories, websites, selectedCategory, selectedWebsite, handleCategoryChange, handleWebsiteChange } : FilterSectionProps) => {
  const handleResetCacheClick = async () => {
    try {
      await resetCache();
      alert('Cache reset successfully.');
    } catch (error) {
      alert('Failed to reset cache.');
      console.error(error);
    }
  };

  return (
    <Flex
      marginTop={12}
      direction={{ base: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      wrap={{ base: 'wrap', md: 'nowrap' }}
    >
      <DropdownMenu
        title="Categoria"
        options={categories}
        selected={selectedCategory}
        onChange={handleCategoryChange}
      />
      <Box mx={{ base: 0, md: 4 }} my={{ base: 2, md: 0 }} />
      <DropdownMenu
        title="Website"
        options={websites}
        selected={selectedWebsite}
        onChange={handleWebsiteChange}
      />
      <ColorModeSwitcher />

      <Box mx={{ base: 0, md: 4 }} my={{ base: 2, md: 0 }} />
        <Box
          as="button"
          onClick={handleResetCacheClick}
          padding={2}
          borderRadius="md"
          bg="gray.200"
          _hover={{ bg: 'gray.300' }}
        >
          Reset Cache
      </Box>
      
    </Flex>
  );
};

export default FilterSection;
