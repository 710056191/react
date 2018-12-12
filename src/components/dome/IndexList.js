import React,{Component} from 'react';

import axios from 'axios';
import qs from 'querystring';
import '../../sass/indexlist.scss';

class IndexList extends Component{
    constructor(){
        super();
        this.state={
            goods1:[],
            goods2:[],
            goods3:[],
            goods4:[],
            tits:['面部护理','魅力彩妆','个护香氛','男士护理']
        }
    }
    
    componentWillMount(){
        //http://wechat.qxiaow.com/Tnformation/HeadlineList
    //     //http://wechat.qxiaow.com/Products/ProductsList
    //     //http://wechat.qxiaow.com/Home/GetAlbums
    //     //page: 0.4  code: IndexBanner
    axios.post('/jjapi/Products/ProductsList',qs.stringify({type: 0,
        pagesize: 6,
        page: 0,
        ParentCategoryID: 1}),{headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',

    }})
    .then(res=>{
        this.setState({goods1:res.data.data})
        console.log("goods1:",this.state.goods1);
    });
    axios.post('/jjapi/Products/ProductsList',qs.stringify({type: 0,
        pagesize: 6,
        page: 0,
        ParentCategoryID: 2}),{headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',

    }})
    .then(res=>{
        this.setState({goods2:res.data.data})
        console.log("goods2:",this.state.goods2);
    });
    axios.post('/jjapi/Products/ProductsList',qs.stringify({type: 0,
        pagesize: 6,
        page: 0,
        ParentCategoryID: 3}),{headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',

    }})
    .then(res=>{
        this.setState({goods3:res.data.data})
        console.log("goods3:",this.state.goods3);
    });
    axios.post('/jjapi/Products/ProductsList',qs.stringify({type: 0,
        pagesize: 6,
        page: 0,
        ParentCategoryID: 11}),{headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',

    }})
    .then(res=>{
        this.setState({goods4:res.data.data})
        console.log("goods4:",this.state.goods4);
    });
    }

    render(){
        return <div className="msg">
        <div className="pro1">
            <ul className="pro1-top-lt">
                <li><p>{this.state.tits[0]}</p></li>
                <li><a><img src={require('../../imgs/5c1aa6e7b8f1bbde.jpg')} /></a></li>
            </ul>
            {this.state.goods1.map(goods1=>(
            <ul key={goods1.ID}>
                <li>
                    <p>{goods1.Subtitle}<span>￥{goods1.PreSalePrice}</span></p>
                    <a><img src={goods1.ImgUrl}/></a>
                </li>
            </ul>
        ))}
        </div>
        <div className="pro2">
           <ul className="pro2-top-lt" style={{paddingTop:'20px'}}>
                <li><p style={{color:'#e12f8b',fontSize:'16px',textAlign:'center'}}>{this.state.tits[1]}</p></li>
                <a><img src={require('../../imgs/5c1aa6e7b8f1bbde.jpg')}/></a>
            </ul>
             {this.state.goods2.map(goods2=>(<ul key={goods2.ID}>
                <li><p>{goods2.Subtitle}</p></li>
                <li><p style={{color: '#db1579'}}>￥{goods2.PreSalePrice}</p></li>
                <a><img src={goods2.ImgUrl}/></a>
            </ul>))}
            
        </div>
        <div className="pro1">
            <ul className="pro1-top-lt">
                <li><p>{this.state.tits[2]}</p></li>
                <li><a><img src={require('../../imgs/5c1aa6e7b8f1bbde.jpg')} /></a></li>
            </ul>
            {this.state.goods3.map(goods1=>(
            <ul key={goods1.ID}>
                <li>
                    <p>{goods1.Subtitle}<span>￥{goods1.PreSalePrice}</span></p>
                    <a><img src={goods1.ImgUrl}/></a>
                </li>
            </ul>
        ))}
        </div>
        <div className="pro2">
           <ul className="pro2-top-lt" style={{paddingTop:'20px'}}>
                <li><p style={{color:'#e12f8b',fontSize:'16px',textAlign:'center'}}>{this.state.tits[3]}</p></li>
                <a><img src={require('../../imgs/5c1aa6e7b8f1bbde.jpg')}/></a>
            </ul>
             {this.state.goods4.map(goods2=>(<ul key={goods2.ID}>
                <li><p>{goods2.Subtitle}</p></li>
                <li><p style={{color: '#db1579'}}>￥{goods2.PreSalePrice}</p></li>
                <a><img src={goods2.ImgUrl}/></a>
            </ul>))}
            
        </div>
    </div>
    }
}

export {IndexList}

