import {createContext, useReducer, useContext} from 'react';
import faker from 'faker';
import {CartReducer} from './Reducers';

const Cart = createContext();
faker.seed(99) //seed renders only one type of data

const Context = ({ children}) => {

  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(CartReducer,
    {
        products: products,
        cart:[]  //initially cart state is empty, after adding items the state will change
    });

  return <Cart.Provider value = {{state, dispatch}}>
    {children}
  </Cart.Provider>
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
}
