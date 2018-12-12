import React,{Component} from 'react'

import { SearchBar} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../../sass/header.scss';


class Header extends Component{
    constructor(){
        super();
        this.state={
            isshow:'true'
        }
    }
    componentWillReceiveProps(isshow){
        let hash=window.location.hash.slice(1);
        if(hash=='/login' || hash=='/reg' || hash=='/user' || hash=='/goodslist'){
          isshow=false;
        }else{
          isshow=true;
        }
        this.setState({
          isshow
        });
      }

    render(){
        return <div className="header">
                {this.state.isshow?<SearchBar 
                placeholder="输入关键字" 
                ref={ref => this.autoFocusInst = ref}/>
                :''}
            </div>
    }
}

export {Header}