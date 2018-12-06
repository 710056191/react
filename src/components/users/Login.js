import React,{Component} from 'react';
import '../../sass/login.scss';


class Login extends Component{
    render(){
        return <div className="login">
        <div className="logo"><img src={require('../../imgs/logo.png')}/></div>
        <div className="input">
            <form method="post">
                <div className="user">
                    <label><i><img src={require('../../imgs/huiyuan.png')}/></i></label>
                    <input type="text" placeholder="卡号/手机号/会员名" />
                </div>
                <div className="pass">
                    <label><i><img src={require('../../imgs/mima.png')}/></i></label>
                    <input type="text" placeholder="密码" />
                </div>
            </form>
        </div>
        <div className="btn">
            <p><span>登录</span></p>
        </div>
        <div className="footer">
            <ul>
                <li style={{borderRight:'1px solid #bbb'}}><a>注册新用户</a></li>
                <li><a>找回密码</a></li>
            </ul>
        </div>
    </div>
    }
}

export {Login};