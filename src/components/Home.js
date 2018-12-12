import React,{Component} from 'react';

import axios from 'axios';
import qs from 'querystring';
import { Carousel } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../sass/common.scss';
import '../sass/home.scss';
import {IndexList} from './dome/IndexList';

import {library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{
    faTag,
    faDatabase,
    faIdCard,
    faQrcode
} from '@fortawesome/free-solid-svg-icons'


library.add(
    faTag,
    faDatabase,
    faIdCard,
    faQrcode
)


class Home extends Component{
    constructor(){
        super();
        this.state = {
            ad:[],    //轮播图商品
            goodslist1:[],    //热销列表
            goodslist2:[],
            goodslist:[],
            list:[], // 品牌推荐
            notice:[], // 公告
            item:[], //热销第一波
            data:[]
        }
    }
    
    
    componentWillMount(){
        //http://wechat.qxiaow.com/Tnformation/HeadlineList
    //     //http://wechat.qxiaow.com/Products/ProductsList
    //     //http://wechat.qxiaow.com/Home/GetAlbums
    //     //page: 0.4  code: IndexBanner
        axios.post('/jjapi/Products/ProductsList',qs.stringify({type: 0,
            pagesize: 6,
            page: 0}),{headers:{
            'Accept':'application/json, text/javascript, */*; q=0.01',
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',

        }})
        // axios.get('jjapi/Home/GetAlbums')
        .then(res=>{
            // console.log(res.data);
            this.setState({data:res.data.data})
            console.log(this.state.data);
        });
        axios.post('/jjapi/Home/GetAlbums',qs.stringify({page: 0.4,
            code: 'IndexBanner'}),{headers:{
            'Accept':'application/json, text/javascript, */*; q=0.01',
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',

        }})
        .then(res=>{
            this.setState({ad:res.data.data})
            console.log(this.state.ad);
        });
        
        axios.post('/jjapi/Tnformation/HeadlineList',qs.stringify({pagesize: 4,
            page: 0}),{headers:{
            'Accept':'application/json, text/javascript, */*; q=0.01',
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',

        }})
        // axios.get('jjapi/Home/GetAlbums')
        .then(res=>{
            // console.log(res.data);
            this.setState({goodslist1:res.data.data})
            console.log(this.state.goodslist1);
        });
        axios.post('/jjapi/Products/ProductBrandList',qs.stringify({pagesize: 6,
            page: 0}),{headers:{
            'Accept':'application/json, text/javascript, */*; q=0.01',
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',

        }})
        // axios.get('jjapi/Home/GetAlbums')
        .then(res=>{
            // console.log(res.data);
            this.setState({goodslist2:res.data.data})
            console.log(this.state.goodslist2);
        });
        
    }
    handlerGoToList(id,item){
        this.props.history.push({
            pathname:'/goodslist/'+id
        })
        window.localStorage.setItem("item",JSON.stringify(item))

        console.log(this.state.item)
    }
    handlerClick(id,item){
        this.props.history.push({
            pathname:'/details/'+id
        })
        window.localStorage.setItem("item",JSON.stringify(item))

        console.log(this.state.item)
    }

    render(){
        return <div className="content">
                    <div>
                    <Carousel autoplay={true} infinite >
                        {this.state.ad.map(ad=>(
                            <a
                            key={ad.ID}
                            style={{ display: 'inline-block', width: '100%' }}>
                            <img
                              src={ad.ImgUrl}
                              style={{ width: '100%', verticalAlign: 'top' }}
                              onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                              }}
                            />
                          </a>))}
                    </Carousel>
                        <div className="mnav">
                            <ul>
                                <li><span style={{background:'#fd3d66'}}><FontAwesomeIcon className="icon" icon="qrcode"></FontAwesomeIcon></span>商品分类</li>
                                <li><span style={{background:'#15cea2'}}><FontAwesomeIcon className="icon" icon="database"></FontAwesomeIcon></span>积分商城</li>
                                <li><span style={{background:'#ffce55'}}><FontAwesomeIcon className="icon" icon="id-card"></FontAwesomeIcon></span>讲师查询</li>
                                <li><span style={{background:'#f9874a'}}><FontAwesomeIcon className="icon" icon="tag"></FontAwesomeIcon></span>活动专区</li>
                            </ul>
                        </div>
                        <div className="notice">
                              <b>商城头条</b>
                              <ul>
                                {this.state.goodslist1.map(notice=>(<Carousel autoplay={true} infinite={true} vertical={true}><li key={notice.ID}>[{notice.CategoryTitle}]{notice.Title}</li></Carousel>))}
                              </ul>
                        </div>
                        <div className="xianshi">
                            <div className="tit">
                            <a><img src={require('../imgs/xianshi.png')}/><span>更多></span></a>
                            </div>
                            <p>=>暂时没有限时抢购商品</p>
                        </div>
                        <div className="pinpai">
                              <div className="tit">
                                <a><img src={require('../imgs/pinpaituijian.png')} /><span>更多></span></a>
                                
                              </div>
                              <ul>
                                {this.state.goodslist2.map((val)=>(
                                    <a key={val.ID} href="#" onClick={this.handlerGoToList.bind(this,val.ID,val)}>
                                        <img src={val.Icon} />  
                                    </a>
                                ))}
                              </ul>
                        </div>
                        <div className="hot">
                            <div className="tit">
                                <a><img src={require('../imgs/rexiaochanpin.png')} /><span>更多></span></a>
                            </div>
                            <div className="list1">
                                {this.state.data.map(item=>(<ul key={item.ID} onClick={this.handlerClick.bind(this,item.ID)}>
                                  <li><img src={item.ImgUrl} /></li>
                                  <li>
                                      <span className="nowprice">￥{item.PreSalePrice}</span>
                                      <span className="oldprice"><del>￥{item.MarketPrice}</del></span>
                                  </li>
                                  <li style={{padding:'5px'}}><p>{item.Title}</p></li>
                                </ul>))}
                            </div>
                        </div>
                    </div>
                    <IndexList />
            </div>
    }
}

export {Home}