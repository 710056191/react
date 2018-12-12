
import React,{Component} from 'react';

import { Tabs } from 'antd-mobile';
//引入ant-design-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';
import '../../sass/reg.scss';
import { Vip } from '../pages/Vip';
import {PuTong} from '../pages/PuTong';

class Reg extends Component{
    constructor(){
        super();
        this.state={
            tit:[
                {
                    name:'VIP会员注册',
                    sub:'1'
                },
                {
                    name:'普通会员注册',
                    sub:'2'
                }
            ]
        }
    }
    render(){
        return <div className="reg">
            <div className="main">
                <Tabs tabs={this.state.tit}
                initialPage={0}
                tabBarPosition="top"
                tabBarTextStyle={{fontWeight:'bold'}}
                tabBarUnderlineStyle={{border:'none'}}
                tabBarActiveTextColor="#dd137b"
                renderTab={tabs => <span>{tabs.name}</span>}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                    <Vip />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                    <PuTong />
                    </div>
                
                </Tabs>
                <div className="footer">
                    <div>
                        <label><input type="checkbox" />我已阅读并同意<i>《仟校商城用户协议》</i></label>
                    </div>
                    <div>
                        <input type="submit" value="注册" />
                    </div>
                    <div>
                        <div>已有账户登录</div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export {Reg}
