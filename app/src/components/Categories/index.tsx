import { useState } from 'react';
import { FlatList } from 'react-native';

import { Category } from '../../types/Category';
import { Text } from '../Text';

import { CategoryContainer, Icon } from './styles';

interface CategoriesProps {
  categories: Category[]
  onSelectCategory: (categoryId: string) => Promise<void>
}

export function Categories({categories, onSelectCategory}: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    onSelectCategory(category);
    setSelectedCategory(category);
  }
  return (
    <FlatList
      horizontal  // alinhar horizontalmente
      showsHorizontalScrollIndicator={false} // bar horizontal off
      data={categories} // valores mock
      contentContainerStyle={{ paddingRight: 24 }} // estilizar o containerFlatList
      keyExtractor={category => category._id} // key do .map ( FlatList )
      renderItem={({ item: category }) => { //
        const isSelected = selectedCategory === category._id; // verifica se a categoria está selecionada tem o _ID = ao id da categoria pressionada.
        return (
          <CategoryContainer onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>
                {category.icon}
              </Text>
            </Icon>

            <Text size={14} weight='600' opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </CategoryContainer>
        );
      }}
    />
  );
}
