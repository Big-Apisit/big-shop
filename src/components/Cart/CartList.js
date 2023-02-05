import React from 'react';
import CartItem from './CartItem';
import axios from 'axios';

export default function CartList({value}) {
    const { cart} =value;
    async function buy(){
        const length_of_cart = cart.length;
        console.log(length_of_cart);
        console.log("Cart", cart)
        // console.log("Cart id", cart[0].id)
        // console.log("Cart title", cart[0].title)
        // console.log("Cart count", cart[0].count)
        let count_bag = 0;
        let count_campingchair = 0;
        let count_campingtent = 0;
        let count_ongcoffee = 0;
        let count_shirt = 0;
        for(let i=0; i < cart.length;i++){
            if(cart[i].title == "Bag"){
                count_bag = cart[i].count;
            }
            else if(cart[i].title == "Camping Chair"){
                count_campingchair = cart[i].count;
            }
            else if(cart[i].title == "Camping Tent"){
                count_campingtent = cart[i].count;
            }
            else if(cart[i].title == "Ong Coffee"){
                count_ongcoffee = cart[i].count;
            }
            else if(cart[i].title == "Shirt"){
                count_shirt = cart[i].count;
            }
        }
        console.log("count_bag", count_bag);
        console.log("count_campingchair", count_campingchair);
        console.log("count_campingtent", count_campingtent);
        console.log("count_ongcoffee", count_ongcoffee);
        console.log("count_shirt", count_shirt);
        const result = await axios.patch('http://localhost:2565/buy_product_from_web',
        {
            Bag: count_bag,
            Campingchair: count_campingchair,
            Campingtent: count_campingtent,
            Ongcoffee: count_ongcoffee,
            Shirt: count_shirt
        }
        );
        
    }
    
    return (
     <div className="container-fluid">
        
         {cart.map(item=>{
             return <CartItem key={item.id} item={item} value={value}/>

         })} 
  
         <button
            className="btn btn-dark text-uppercase mb-3 px-4"
            type="button"
            onClick={() => {
                buy();
            }}>
            buy product
        </button>
    </div>
    
    );
}
