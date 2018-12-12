import React,{Component} from 'react';
import '../../sass/reg.scss';
class Vip extends Component{
    render(){
        return <div className="main-vip">
        <form method="post">
            <div>
                <label><i><img src={require('../../imgs/huiyuan.png')}/></i></label>
                <input type="text" placeholder="请输入用户名" />
            </div>
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
            <div>
                <label><i><img src={require('../../imgs/vipk.png')}/></i></label>
                <input type="text" placeholder="请输入卡号" />
            </div>
            <div>
                <label><i><img src={require('../../imgs/school.png')}/></i></label>
                <input type="text" placeholder="所在院系" />
            </div>
        </form>
    </div>
    }
}

export {Vip}