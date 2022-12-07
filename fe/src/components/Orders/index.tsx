import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6373061fa6625f0b9cc2e34b',
    'table': '01',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza de quatro queijos',
          'imagePath': '1670199425951-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '637f8761e9d9d4f00f7cebbc'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1670194070524-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '638d23962efca6e4ff0cdcea'
      }
    ],
  },

  {
    '_id': '6373061fa6625f0b9cc2e34b',
    'table': '02',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Hamburguer',
          'imagePath': '1670210748759-burger-molho-especial.png',
          'price': 29.99,
        },
        'quantity': 2,
        '_id': '638d22922efca6e4ff0cdca8'
      },
      {
        'product': {
          'name': 'Suco de Laranja',
          'imagePath': '1670194153143-suco-de-laranja.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '638d23e92efca6e4ff0cdced'
      }
    ],
  },

  {
    '_id': '6373061fa6625f0b9cc2e34b',
    'table': '03',
    'status': 'DONE',
    'products': [
      {
        'product': {
          'name': 'Cerveja',
          'imagePath': '1670194009327-cerveja.png',
          'price': 7,
        },
        'quantity': 4,
        '_id': '638d406baa7d7313803bbfe8'
      }
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon='🕒'
        title='Fila de espera'
        orders={orders.filter((order) => order.status === 'WAITING')}
      />
      <OrdersBoard
        icon='👨‍🍳'
        title='Em preparação'
        orders={orders.filter((order) => order.status === 'IN_PRODUCTION')}
      />
      <OrdersBoard
        icon='✅'
        title='Pronto'
        orders={orders.filter((order) => order.status === 'DONE')}
      />
    </Container>
  );
}
