import React,{Component} from 'react';

import axios from 'axios';
import qs from 'qs';
import { Carousel,NoticeBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../sass/common.scss';
import '../sass/home.scss';

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
            goodslist:[],    //商品列表
            list:[],
            notice:[],
            pagesize:4,
            page:0
        }
    }

    componentWillMount(){
        //http://wechat.qxiaow.com/Tnformation/HeadlineList
        //http://wechat.qxiaow.com/Products/ProductsList
        //http://wechat.qxiaow.com/Home/GetAlbums
        //page: 0.4  code: IndexBanner
        console.log(222);
        axios.post('/jjapi/Home/GetAlbums',qs.stringify({page:0.4,
            code:'IndexBanner'}),{headers:{
            'Accept':'application/json, text/javascript, */*; q=0.01',
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',

        }})
        .then(res=>{
            console.log(111);
            console.log(res.data);
            console.log(111)
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }

    // handlerGotoDetails(bannerlist){
    //     let {history} =this.props;
    //     console.log(history);
    //     // history.push({
    //     //     pathname:''
    //     // })
    // }

    render(){
        return <div className="content">
                    <div>
                    <Carousel autoplay={true} infinite >
                        {/* {this.state.ad.map(ad=>( */}
                            <a
                            // key={ad.id}
                            href="#"
                            style={{ display: 'inline-block', width: '100%' }}
                          >
                            <img
                              src={require('../imgs/furniture.png')}
                              style={{ width: '100%', verticalAlign: 'top' }}
                              onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                              }}
                            />
                          </a>
                    </Carousel>
                        <div className="mnav">
                            <ul>
                                <li><span style={{background:'#fd3d66'}}><FontAwesomeIcon className="icon" icon="qrcode"></FontAwesomeIcon></span>商品分类</li>
                                <li><span style={{background:'#15cea2'}}><FontAwesomeIcon className="icon" icon="database"></FontAwesomeIcon></span>积分商城</li>
                                <li><span style={{background:'#ffce55'}}><FontAwesomeIcon className="icon" icon="id-card"></FontAwesomeIcon></span>讲师查询</li>
                                <li><span style={{background:'#f9874a'}}><FontAwesomeIcon className="icon" icon="tag"></FontAwesomeIcon></span>活动专区</li>
                            </ul>
                        </div>
                        <NoticeBar mode="link" onClick={() => alert('1')}>
                              商城头条<span>仟校网APP公测公告</span>
                        </NoticeBar>
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
                                  <li><img src={require('../imgs/cfd2f844f61ed9c7.jpg')} /></li>
                                  <li><img src={require('../imgs/855ed9df2c5170c7.jpg')} /></li>
                                  <li><img src={require('../imgs/b3b11c207d6d098a.jpg')} /></li>
                                  <li><img src={require('../imgs/cfd2f844f61ed9c7.jpg')} /></li>
                                  <li><img src={require('../imgs/855ed9df2c5170c7.jpg')} /></li>
                                  <li><img src={require('../imgs/b3b11c207d6d098a.jpg')} /></li>
                              </ul>
                        </div>
                        <div className="hot">
                            <div className="tit">
                                <a><img src={require('../imgs/rexiaochanpin.png')} /><span>更多></span></a>
                            </div>
                            <div className="list1">
                                <ul>
                                  <li><img src={require('../imgs/9976cc2afb636353.jpg')} /></li>
                                  <li>
                                      <span className="nowprice">￥69</span>
                                      <span className="oldprice"><del>￥98</del></span>
                                  </li>
                                  <li style={{padding:'5px'}}><p>尚兰秀多姿多彩口红 保湿滋润唇膏 买一送一</p></li>
                                </ul>
                                <ul>
                                  <li><img src={require('../imgs/fe09c236d71fbb34.jpg')} /></li>
                                  <li>
                                      <span className="nowprice">￥69</span>
                                      <span className="oldprice"><del>￥98</del></span>
                                  </li>
                                  <li style={{padding:'5px'}}><p>尚兰秀净颜白睡莲洁面慕斯 100ml</p></li>
                                </ul>
                                <ul>
                                  <li><img src={require('../imgs/e2f053a168a2d901.jpg')} /></li>
                                  <li>
                                      <span className="nowprice">￥69</span>
                                      <span className="oldprice"><del>￥98</del></span>
                                  </li>
                                  <li style={{padding:'5px'}}><p>仟校网Vip会员生日礼包一</p></li>
                                </ul>
                                <ul>
                                  <li><img src={require('../imgs/1562377a15610944.png')} /></li>
                                  <li>
                                      <span className="nowprice">￥69</span>
                                      <span className="oldprice"><del>￥98</del></span>
                                  </li>
                                  <li style={{padding:'5px'}}><p>三草两木自然肌理泡沫卸妆液</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="msg">
                            <div className="pro1">
                            <div className="pro1-top">
                                <ul className="pro1-top-lt">
                                    <li><p>面部护理</p></li>
                                    <li><a><img src={require('../imgs/5c1aa6e7b8f1bbde.jpg')} /></a></li>
                                </ul>
                                <ul className="pro1-top-rh">
                                    <li>
                                        <p>SK-II 神仙水<span>￥560</span></p>
                                        <a><img src={require('../imgs/606e6646150f502d.jpg')}/></a>
                                    </li>
                                    <li>
                                        <p>一叶子保湿洁面乳<span>￥39</span></p>
                                        <a><img src={require('../imgs/6cb876c9b4a6bbe7.jpg')}/></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="pro1-fot">
                                <ul>
                                    <li><p>科颜氏 VC精华</p></li>
                                    <li><span>￥650</span></li>
                                    <a><img src={require('../imgs/495133a8787b6dbe.jpg')}/></a>
                                </ul>
                                <ul>
                                    <li><p>科颜氏 VC精华</p></li>
                                    <li><span>￥650</span></li>
                                    <a><img src={require('../imgs/495133a8787b6dbe.jpg')}/></a>
                                </ul>
                                <ul>
                                    <li><p>科颜氏 VC精华</p></li>
                                    <li><span>￥650</span></li>
                                    <a><img src={require('../imgs/495133a8787b6dbe.jpg')}/></a>
                                </ul>
                                <ul>
                                    <li><p>科颜氏 VC精华</p></li>
                                    <li><span>￥650</span></li>
                                    <a><img src={require('../imgs/495133a8787b6dbe.jpg')}/></a>
                                </ul>
                            </div>
                            </div>
                            <div className="pro2">
                            <div className="pro2-top">
                                <ul style={{paddingTop:'20px'}}>
                                    <li><p style={{color:'#e12f8b',fontSize:'16px',textAlign:'center'}}>魅力彩妆</p></li>
                                    <a><img src={require('../imgs/25b8756f9228f39e.jpg')}/></a>
                                </ul>
                                <ul>
                                    <li><p>悦诗风吟矿物质散粉</p></li>
                                    <li><p style={{color: '#db1579'}}>￥50</p></li>
                                    <a><img src={require('../imgs/d4debb9e5ddbf982.jpg')}/></a>
                                </ul>
                                <ul>
                                    <li><p>悦诗风吟纤巧精细睫毛膏</p></li>
                                    <li><p style={{color: '#db1579'}}>￥72</p></li>
                                    <a><img src={require('../imgs/d4debb9e5ddbf982.jpg')}/></a>
                                </ul>
                            </div>
                            <div className="pro2-fot">
                                <ul>
                                    <li><p>玛丽黛佳双头眉笔</p>
                                    <p style={{color: '#db1579'}}>￥58</p></li>
                                    <a><img src={require('../imgs/92e6eb0a8428038d.jpg')}/></a>
                                </ul>
                                <ul>
                                    <li><p>尚兰秀多姿多彩口红</p>
                                    <p style={{color: '#db1579'}}>￥58</p></li>
                                    <a><img src={require('../imgs/9976cc2afb636353.jpg')}/></a>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>

            </div>
    }
}

export {Home}