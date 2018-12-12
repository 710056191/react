import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';

import {Login} from './users/Login';
import {Reg} from './users/Reg';

class User extends Component{
    constructor(){
        super();
        this.state={
            my:[
                {
                    title:'登录',
                    path:'/login'
                },
                {
                    title:'注册',
                    path:'/reg'
                }
            ]
        }
    }

    render(){
        return <div>
            <Switch>
            <Route path='/login' component={Login} />
            <Route path='/reg' component={Reg} />
            </Switch>
            <div className="user">
                <div className="personal">
                    你还没有登录哦！
                </div>
            </div>
        </div>
    }
}

export {User};
