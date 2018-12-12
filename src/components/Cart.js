import React,{Component} from 'react';
import {CartHeader} from './common/CartHeader';

class Cart extends Component{
    render(){
        return <div className="cart">
            <div>您的购物车还没有东西哦！</div>
            <div className="cartlist">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    }
}

export {Cart};
