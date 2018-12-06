import React,{Component} from 'react';

import { List } from 'antd-mobile';
//引入ant-design-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';
import '../sass/common.scss';
import '../sass/nav.scss'

const Item = List.Item;

class Nav extends Component{
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    
    render(){
        return <div className="content">
                    <div className="nav-left">
                        <ul>
                            <li>面部护理</li>
                            <li>魅力彩妆</li>
                            <li>个护香氛</li>
                            <li>男士护理</li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <div className="nav-banner">
                            <a><img src={require('../imgs/a81a85931d64c6bc.jpg')}/></a>
                        </div>
                        <div className="tuijian">
                            <h4>推荐品牌</h4>
                            <ul>
                                <li><img src={require('../imgs/cfd2f844f61ed9c7.jpg')} /></li>
                                <li><img src={require('../imgs/3e6f8e6eee8c21ff.jpg')} /></li>
                                <li><img src={require('../imgs/855ed9df2c5170c7.jpg')} /></li>
                            </ul>
                        </div>
                        <div className="nav-list">
                            <h4>分类列表</h4>
                            <ul>
                            <li><img src={require('../imgs/5d2f358f41deb595.png')} /><p>面膜</p></li>
                                <li><img src={require('../imgs/89dcc5607dc98c7.png')} /><p>洁面</p></li>
                                <li><img src={require('../imgs/3facf009b4a43ec3.png')} /><p>护肤水</p></li>
                                <li><img src={require('../imgs/c6cffb9612085fc5.png')} /><p>面霜</p></li>
                                <li><img src={require('../imgs/15250f191f180451.png')} /><p>眼部护理</p></li>
                                <li><img src={require('../imgs/b14be95127f86a84.jpg')} /><p>精华</p></li>
                                <li><img src={require('../imgs/ef4c5d0fa4b1e928.jpg')} /><p>防晒隔离</p></li>
                                <li><img src={require('../imgs/87481ae489d2c012.jpg')} /><p>护肤套装</p></li>
                                <li><img src={require('../imgs/4ffa1463fcea770.jpg')} /><p>乳液</p></li>
                            </ul>
                        </div>
                    </div>
            </div>
    }
}
    
export {Nav}