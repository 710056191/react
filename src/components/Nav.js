import React,{Component} from 'react';
import axios from 'axios';
import qs from 'querystring';

import { List } from 'antd-mobile';
//引入ant-design-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';
import '../sass/common.scss';
import '../sass/nav.scss';

class Nav extends Component{
    constructor(){
        super();
        this.state={
            list:[],
            classlist:[],
            tits:['面部护理','魅力彩妆','个护香氛','男士护理'],
            num:1,
            item:[]
        }
    }
    handlerClick(idx,list,classlist){
        let num=idx+1;
        this.setState({
            num,
            list:list,
            classlist:classlist
        })
        
        console.log(this.state.list)
        console.log(this.state.classlist)
    }
    handlerGoToList(id,item){
        this.props.history.push({
            pathname:'/goodslist/'+id
        })
        window.localStorage.setItem("item",JSON.stringify(item))

        console.log(this.state.item)
    }
    //http://wechat.qxiaow.com/Products/ProductBrandList  
    //CategoryID: 1
    //http://wechat.qxiaow.com/Products/ClassifyList
    //ParentID: 1
   
    componentWillMount(){
        axios.post('/jjapi/Products/ProductBrandList',qs.stringify({CategoryID:this.state.num}),{headers:{
            'Accept':'application/json, text/javascript, */*; q=0.01',
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',

        }})
        // axios.get('jjapi/Home/GetAlbums')
        .then(res=>{
            // console.log(res);
            this.setState({list:res.data.data})
            console.log(this.state.list);
        });
        axios.post('/jjapi/Products/ClassifyList',qs.stringify({ParentID: 1}),{headers:{
            'Accept':'application/json, text/javascript, */*; q=0.01',
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',

        }})
        // axios.get('jjapi/Home/GetAlbums')
        .then(res=>{
            // console.log(res);
            this.setState({classlist:res.data.data})
            console.log(this.state.classlist);
        });
    }

    render(){
        return <div className="content">
                    <div className="nav-left">
                        <ul>
                            {this.state.tits.map((tits,idx)=>(<li key={idx} onClick={this.handlerClick.bind(this,idx,this.state.list,this.state.classlist)}>{tits}</li>))}
                        </ul>
                    </div>
                    <div className="nav-right">
                        <div className="nav-banner">
                            <a><img src={require('../imgs/a81a85931d64c6bc.jpg')}/></a>
                        </div>
                        <div className="tuijian">
                            <h4>推荐品牌</h4>
                            <ul>
                                {this.state.list.map(list=>(<li key={list.ID}><img src={list.Icon} /></li>))}
                            </ul>
                        </div>
                        <div className="nav-list">
                            <h4>分类列表</h4>
                            <ul>
                            {this.state.classlist.map(item=>(<li key={item.ID} onClick={this.handlerGoToList.bind(this,item.ID,item)}><img src={item.ImgUrl} /><p>{item.CategoryTitle}</p></li>))}
                            </ul>
                        </div>
                    </div>
            </div>
    }
}
    
export {Nav}