import React,{Component} from 'react'


import { SearchBar,WhiteSpace } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../../sass/header.scss';


class Header extends Component{
    render(){
        return <div className="header">
                <SearchBar placeholder="输入关键字" ref={ref => this.autoFocusInst = ref}/>
                <WhiteSpace />
            </div>
    }
}

export {Header}