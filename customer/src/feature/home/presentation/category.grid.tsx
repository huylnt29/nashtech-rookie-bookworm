import { Grid, Text, VStack } from "@chakra-ui/react";
import { Image } from "@nextui-org/react";
import AppContainer from "../../../core/component/container";

export type IllustrativeCategory = {
  id: number;
  name: string;
  imagePath: string;
};

const categories: IllustrativeCategory[] = [
  {
    id: 1,
    name: "Thiếu nhi",
    imagePath: "https://www.svgrepo.com/show/493049/kid-dressed-as-a-demon.svg",
  },
  {
    id: 2,
    name: "Tâm lí",
    imagePath: "https://cdn-icons-png.flaticon.com/512/3269/3269636.png",
  },
  {
    id: 3,
    name: "Kĩ năng sống",
    imagePath: "https://cdn-icons-png.flaticon.com/512/6171/6171939.png",
  },
  {
    id: 4,
    name: "Văn học",
    imagePath: "https://cdn-icons-png.flaticon.com/512/13799/13799136.png",
  },
  {
    id: 5,
    name: "Trinh thám",
    imagePath: "https://cdn-icons-png.flaticon.com/512/3067/3067572.png",
  },
  {
    id: 6,
    name: "Ẩm thực",
    imagePath: "https://www.svgrepo.com/show/527639/chef-hat.svg",
  },
  {
    id: 7,
    name: "Khoa học",
    imagePath:
      "https://www.svgrepo.com/show/454730/education-laboratory-school.svg",
  },
  {
    id: 8,
    name: "Du lịch",
    imagePath: "https://cdn-icons-png.flaticon.com/512/854/854894.png",
  },
];

export const CategoryGrid = () => {
  return (
    <VStack
      width="100%"
      paddingX="18%"
      align="start"
      spacing={5}
      marginBottom={8}
    >
      <Text fontSize="3xl" fontWeight="bold">
        You may be interested in...
      </Text>
      <AppContainer width="100%">
        <Grid
          className="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          rowGap={8}
          columnGap={8}
        >
          {categories.map((category) => (
            <CategoryItem key={category.id} {...category} />
          ))}
        </Grid>
      </AppContainer>
    </VStack>
  );
};

const CategoryItem = (category: IllustrativeCategory) => {
  return (
    <VStack cursor="pointer">
      <Image
        src={category.imagePath}
        className="xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-8 md:h-8 sm:w-8 sm:h-8"
      />
      <Text>{category.name}</Text>
    </VStack>
  );
};
