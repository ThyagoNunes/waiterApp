import { useState } from 'react';


import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import { Cart } from '../Cart';

import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  /* FooterContainer */
} from './styles';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Products';


export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  function handleCancelOrder() {
    setSelectedTable('');
  }

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartitems = [...prevState];
      const item = newCartitems[itemIndex];

      newCartitems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartitems;
    });
  }
  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu onAddToCart={handleAddToCart} />
        </MenuContainer>
      </Container>

      <Footer>
        {/* <FooterContainer> */}
        {!selectedTable && (
          <Button onPress={() => setIsTableModalVisible(true)}>
            Novo Pedido
          </Button>
        )}

        {selectedTable && (
          <Cart cartItems={cartItems} />
        )}
        {/* </FooterContainer> */}
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
