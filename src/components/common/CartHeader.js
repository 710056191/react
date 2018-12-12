import React,{Component} from 'react'

import 'antd-mobile/dist/antd-mobile.css';
import '../../sass/cart.scss';


class CartHeader extends Component{

    render(){
        return <div className="header">
                    <ul>
                        <li className="cart">购物车</li>
                        <li className="write">编辑</li>
                    </ul>
            </div>
    }
}

export {CartHeader}