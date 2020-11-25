const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega
// para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const customerInfo = (obj) => `Olá ${obj.name}, Telefone: ${obj.phoneNumber}, ${obj.address.street}, nº ${obj.address.number}, ap. ${obj.address.apartment}.`;

console.log(customerInfo(order));

// Complete a função orderModifier() para que seu retorno seja similar a
// "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

const orderModifier = (obj) => `Olá ${obj.name}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ ${obj.payment.total},00.`;

order.name = 'Luiz Silva';
order.payment.total = 50;

console.log(orderModifier(order));
