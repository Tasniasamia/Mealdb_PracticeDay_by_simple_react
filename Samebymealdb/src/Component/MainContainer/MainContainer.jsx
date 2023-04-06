import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../fakedb';
import Card from '../Card/Card';
import './MainContainer.css'
const MainContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setData(data.categories))
    }, [])
    const [cart, setCart] = useState([])
    console.log(cart);
    function handler(product) {
        addToDb(product.strCategory);
            
        let newcart = [];



        newcart = [...cart, product];
        console.log(cart);
        setCart(newcart);
    }
    const [local, setLocal] = useState(null);
    const [localitem, setLocalitem] = useState([])
    useEffect(() => {
        let getShoppingCarts = getShoppingCart();
        console.log(getShoppingCarts)
        let sum = 0;
        let item = []
        for (let i in getShoppingCarts) {
            sum = sum + getShoppingCarts[i];
            item.push(i)


        }
        setLocal(sum);
        setLocalitem(item);

    }, [data,cart])




    //localstorage value
    // useEffect(()=>{
    //     let shoppingcart=getShoppingCart();
    //     console.log(shoppingcart);
    //    console.log(data);
    //     for(let i in shoppingcart){
    //    let  matchdata= data.find(index=>index.strCategory===i);
    //   console.log(matchdata);

    //     }
    //     setData(matchdata);

    //     console.log(shoppingcart);

    //      },[data])

    // const [name,setName]=useState(null)
    // for(let id of cart){
    //     let name=id.strCategory;

    //     setName(name);
    // }
    // console.log(cart);
    return (
        <div className='container'>
            <div className='card_container'>
                {
                    data.map(index => <Card data={index} key={index.idCategory} handler={handler}></Card>)
                }

            </div>
            <div className='sidebar_container'>
                <p>Total Item: {local}</p>
               <p>Item Name: {localitem.map(index => <p>{index}</p>)}</p>

                {/* {
            cart.map(index=><p>Item Name: {index.strCategory}</p>)
        } */}
            </div>
        </div>
    );
};

export default MainContainer;