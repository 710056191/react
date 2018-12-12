import React, { Component } from 'react';
import {Switch,Route,withRouter,Redirect} from 'react-router-dom';

import { TabBar } from 'antd-mobile';
//引入ant-design-mobile的样式
import 'antd-mobile/dist/antd-mobile.css'
import './sass/page.scss';
import axios from 'axios';

import {Home} from './components/Home';
import {Cart} from './components/Cart';
import {Nav} from './components/Nav';
import {User} from './components/User';
import {Header} from './components/common/Header';
import {NotFound} from './components/pages/page';
import {GoodsList} from './components/pages/GoodsList';
import {Login} from './components/users/Login';
import {Reg} from './components/users/Reg';
import {CartHeader} from './components/common/CartHeader';

import {library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{
  faHome,
  faShoppingCart,
  faUser,
  faThLarge
} from '@fortawesome/free-solid-svg-icons'
import { Details } from './components/pages/Details';


library.add(
  faHome,
  faShoppingCart,
  faUser,
  faThLarge
)
// axios.defaults.baseURL = 'http://localhost:2000'

class App extends Component {
  constructor(){
    super();
    this.state = {
      my:[
        {
            title:'登录',
            path:'/login'
        },
        {
            title:'注册',
            path:'/reg'
        }
      ],
      tabs:[
        {
          title:'首页',
          path:'/home',
          icon:'home'
        },
        {
          title:'分类',
          path:'/nav',
          icon:'th-large'
        },
        {
          title:'购物车',
          path:'/cart',
          icon:'shopping-cart'
        },
        {
          title:'我',
          path:'/user',
          icon:'user'
        }
      ],
      currentTab:0,
      isshow:true
    }
  }

  handlerClick(idx,path){
    this.setState({
      currentTab:idx
    });
    //编程式导航
    //获取history的方式
    //通过Route渲染App
    //利用withRoute高阶组件实现
    this.props.history.push(path);
  }
  componentWillMount(){
    //获取hash值
    let hash=window.location.hash.slice(1);

    //找出对应索引值
    let currentTab = 0;
    this.state.tabs.some((item,idx)=>{
      currentTab = idx;
      return item.path === hash
    });
    
    this.setState({
      currentTab
    });
    // console.log('app props:',this.props);
  }
  componentWillReceiveProps(isshow){
    let hash=window.location.hash.slice(1);
    if(hash=='/login' || hash=='/reg' || hash=='/goodslist' || hash=='/details/:id'){
      isshow=false;
    }
    else{
      isshow=true;
    }
    this.setState({
      isshow
    });
  }

  render() {
    return (
      <div className="container">
          {this.state.currentTab=='2'?<CartHeader />:<Header />}
        <div className="content">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/nav" component={Nav} />
            <Route path="/cart" component={Cart} />
            <Route path="/user" component={User} />
            <Route path='/login' component={Login} />
            <Route path='/details/:id' component={Details}/>
            <Route path='/reg' component={Reg} />
            <Route path='/goodslist/:id' component={GoodsList} />
            <Route path='/404' component={NotFound} />
            <Redirect from="/" to="/home" exact />
            <Redirect to='/404'/>
            {/* <Route path='bannerlist' component={BannerList} /> */}
          </Switch>
        </div>
        {this.state.isshow?<TabBar tintColor="#dd137b" noRenderContent={true}>
            {this.state.tabs.map((tab,idx)=>{
              return <TabBar.Item
                title={tab.title}
                key={tab.path}
                icon={<FontAwesomeIcon icon={tab.icon} />}
                selectedIcon={<FontAwesomeIcon icon={tab.icon} />}
                selected={this.state.currentTab===idx}
                onPress={this.handlerClick.bind(this,idx,tab.path)}
                >
                {tab.title}
                </TabBar.Item>
            })
          }
        </TabBar>:''}
      </div>
    );
  }
}

App = withRouter(App);

export default App;
