import React, { Component } from 'react';
import {Switch,Router,withRouter} from 'react-router-dom';

import { TabBar } from 'antd-mobile';
//引入ant-design-mobile的样式
import 'antd-mobile/dist/antd-mobile.css'


import {Home} from './components/Home';
import {Cart} from './components/Cart';
import {Nav} from './components/Nav';
import {Message} from './components/Message';
import {User} from './components/User';

import {library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{
  faHome,
  faShoppingCart,
  faUser,
  faComment,
  faThLarge
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faHome,
  faShoppingCart,
  faUser,
  faComment,
  faThLarge
)

class App extends Component {
  constructor(){
    super();
    this.state = {
      tabs:[
        {
          title:'Home',
          path:'/home',
          icon:'home'
        },
        {
          title:'Nav',
          path:'/nav',
          icon:'th-large'
        },
        {
          title:'Cart',
          path:'/cart',
          icon:'shopping-cart'
        },
        {
          title:'Message',
          path:'/message',
          icon:'comment'
        },
        {
          title:'User',
          path:'/user',
          icon:'user'
        }
      ],
      currentTab:0
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Router path="/Home" component={Home} />
          <Router path="/Nav" component={Nav} />
          <Router path="/Message" component={Message} />
          <Router path="/Cart" component={Cart} />
          <Router path="/User" component={User} />
        </Switch>
        <TabBar tintColor="#f00" noRenderContent={true}>
            {this.state.tabs.map((tab,idx)=>{
              return <TabBar.Item
                title={tab.title}
                key={tab.path}
                icon={<FontAwesomeIcon icon={tab.icon} />}
                selectedIcon={<FontAwesomeIcon icon={tab.icon} />}
                selected={this.state.currentTab===idx}
                >
                {tab.title}
                </TabBar.Item>
            })
          }
        </TabBar>
      </div>
    );
  }
}

App = withRouter(App);

export default App;
