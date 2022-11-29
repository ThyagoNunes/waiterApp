import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6373061fa6625f0b9cc2e34b',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668479913589-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6373061fa6625f0b9cc2e34c'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668481104079-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6373061fa6625f0b9cc2e34d'
      }
    ],
  },

  {
    '_id': '6373061fa6625f0b9cc2e34b',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668479913589-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6373061fa6625f0b9cc2e34c'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668481104079-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6373061fa6625f0b9cc2e34d'
      }
    ],
  },
  {
    '_id': '6373061fa6625f0b9cc2e34b',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668479913589-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6373061fa6625f0b9cc2e34c'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668481104079-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6373061fa6625f0b9cc2e34d'
      }
    ],
  },

  {
    '_id': '6373061fa6625f0b9cc2e34b',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668479913589-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6373061fa6625f0b9cc2e34c'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668481104079-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6373061fa6625f0b9cc2e34d'
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
        orders={orders}
      />
      <OrdersBoard
        icon='👨‍🍳'
        title='Em preparação'
        orders={[]}
      />
      <OrdersBoard
        icon='✅'
        title='Pronto'
        orders={[]}
      />
    </Container>
  );
}
