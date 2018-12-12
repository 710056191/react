import React,{Component} from 'react';
import '../../sass/reg.scss';

class PuTong extends Component{
    render(){
        return <div className="main-putong">
        <form method="post">
        <div>
            <label><i><img src={require('../../imgs/shouji.png')}/></i></label>
            <input type="text" placeholder="请输入手机号" />
        </div>
        <div>
            <label><i><img src={require('../../imgs/mima.png')}/></i></label>
            <input type="text" placeholder="设置密码" />
        </div>
        <div>
            <label><i><img src={require('../../imgs/mima.png')}/></i></label>
            <input type="text" placeholder="确认密码" />
        </div>
        </form>
    </div>
    }
}

export {PuTong}