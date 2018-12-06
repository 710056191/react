
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
            ],
            isshow:true,
            currentTab:0
        }
    }

    componentWillMount(){
        //找出对应索引值
        let currentTab = 0;
        this.state.tit.some(idx=>{
        currentTab = idx;
        });
        
        this.setState({
        currentTab
        });
    }
    handlerClick(idx,isshow){
        
        if(idx===1){
            isshow=!isshow;
        }else{
            isshow=true;
        }
        this.setState({
          currentTab:idx
        });
      }

    componentWillReceiveProps(isshow){
        if(this.state.currentTab===1){
          isshow=false;
        }else{
          isshow=true;
        }
        this.setState({
          isshow
        });
      }

    render(){
        return <div className="reg">
            <div className="main">
                <Tabs tabs={this.state.tit}
                initialPage={1}
                tabBarPosition="top"
                tabBarUnderlineStyle={{border:'none'}}
                tabBarActiveTextColor="#dd137b"
                renderTab={tabs => <span>{tabs.name}</span>}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    <Vip />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    <PuTong />
                    </div>
                
                </Tabs>
                
                
            </div>
        </div>
    }
}

export {Reg}
