import React,{Component} from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import qs from 'querystring';
import '../../sass/goodslist.scss';

class GoodsList extends Component{
    constructor(){
        super();
        this.state={
            list:[],
            item:[],
            goodslist:[]
        }
    }
    handlerClick(id,item){
        // this.setState({
        //     list:item
        // });
        // this.props.data.push(item);
        this.props.history.push({
            pathname:'/details/'+id
        })
        window.localStorage.setItem("item",JSON.stringify(item))

        console.log(this.state.item)
    }
    componentWillMount(){
        let arr=window.localStorage.getItem('item');
        this.state.goodslist.push(JSON.parse(arr))
        let id=this.state.goodslist[0].ID;
        axios.post('/jjapi/Products/SearchProductsList',{
                Search: '',
                type: 0,
                pagesize: 20,
                page: 0,
                ParentCategoryID: id,
                BrandID: 0,
                orderSort: ''
            })
        .then(res=>{
            console.log('list:',res.data.data);
            this.setState({
                list:res.data.data
            })
        });
        
    }

    render() {
        return <div className="goodslist">
                {this.state.list.map(list=>(<div className="box" key={list.ID} onClick={this.handlerClick.bind(this,list.ID,list)}>
                    <a><img src={list.ImgUrl} />
                    <p>{list.Title}</p>
                    <small>￥{list.SalePrice}</small>
                    </a>
                    <div>销量{list.SaleNuber}</div>
                </div>))}
        </div>
    }
}
GoodsList=withRouter(GoodsList)
export {GoodsList}