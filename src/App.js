import './App.css';
import {useState} from 'react';
import {nanoid} from 'nanoid';
import Count from "./components/Count/Count";
import Menu from "./components/Menu/Menu";
import Price from "./components/Price/Price";

function App() {
    const [countOfMenu, setCountOfMenu] = useState([
        {name: 'Hamburger', count: 0, price: 60},
        {name: 'Cheeseburger', count: 0, price: 70},
        {name: 'Snack-Salad', count: 0, price: 40},
        {name: 'Fries', count: 0, price: 20},
        {name: 'Coffee', count: 0, price: 50},
        {name: 'Tea', count: 0, price: 30}
    ]);

    const priceOfBooking = () => {
        let sum = 0;
        const arr = [];
        for(let i = 0; i < countOfMenu.length; i++){
            for(let j = 0; j < countOfMenu[i].count; j++){
                arr.push({name: countOfMenu[i].name, id: nanoid(), })
            }
        }
        for(let i = 0; i < countOfMenu.length; i++){
            const count = arr.filter(food => food.name === countOfMenu[i].name);
            sum += count.length * countOfMenu[i].price;
        }
        return sum
    }

    const changePlus= name => {
        setCountOfMenu(prev =>prev.map(p => {
            if(p.name === name){
                return {...p, count: p.count + 1};
            }
            return p;
        }));
        priceOfBooking();
    }
    const changeMinus= name => {
        setCountOfMenu(prev =>prev.map( p => {
            if(p.name === name){
                return {...p, count: p.count - 1};
            }
            return p;
        }));
        priceOfBooking();
    }

    return (
        <div className="container">
            <div className="orderDetails">
                <h1>Order Details</h1>
                <Count countOfMenu={countOfMenu} changeMinus={changeMinus}/>
                <Price priceOfBooking={priceOfBooking}/>
            </div>
            <div className="addItems">
                <h1 className="addItems__header">Add Items</h1>
                <Menu changePlus={changePlus} menu={countOfMenu}/>
            </div>
        </div>
    );
}

export default App;
