import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    // <div className="App">
    //     <CartValue/>
    //     <Location/>
    //     <ExpenseList/>
    //     <ItemSelected/>
    // </div>
    <AppProvider>
        <div className='container'>
            <h1 className='mt-3'>Shopping App</h1>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <CartValue />
                </div>
                <div className='col-sm'>
                    <Location/>
                </div>
            </div>
            <h2 className='mt-3'>Shopping Cart</h2>
            <div className='row mt-3'>
                <div classname='col-lg'>
                    <ExpenseList/>
                </div>
            </div>
            <h2 className='mt-3'> Add Items</h2>
            <div className = 'row mt-3'>
                <ItemSelected/>
            </div>
        </div>
    </AppProvider>
  );
}

export default App;