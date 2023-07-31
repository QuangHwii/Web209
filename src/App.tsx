import { useState } from 'react';
import './App.css';
import { ICar } from './components/interface/car';
import { Button, List } from './components';
import Form from './components/form';
import Table from './components/Table/table';
import ProductsList from './components/productsList';
import Counter from './components/count';
import Cart from './components/cart';

function App() {



  const [cars, setCar] = useState<ICar[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<null>(null);

  const addCar = (car: ICar) => {
    setCar([...cars, car])
  };
  const removeCar = (id: number | string) => {
    setCar(cars.filter((item) => item.id !== id))
  };




  return (
    <>
      <div className='w-96 mx-auto border border-gray-500 p-2'>
        {/* <Form onAdd={addCar} />
        <List data={cars} onRemove={removeCar} />
        <hr /> */}
        {/* <Table columns={columns} dataSource={carsData} /> */}
        {/* <Table columns={columns1} dataSource={postData}/> */}
        {/* <ProductsList /> */}
        <hr className='m-3' />
        <Counter />
        <hr className='m-3' />
        {/* <Cart /> */}
      </div>
    </>
  );
}
/**
 * Customize Table Component
 * Router
 * use reduce
 */

export default App;
