import React,{Component} from 'react';

import '../../sass/details.scss';

class Details extends Component{
    constructor(){
        super();
        this.state={
            txt:[],
            tits:['商品','详情','评论']
        }
    }
    componentWillMount(){
       let arr=window.localStorage.getItem('item');
       this.state.txt.push(JSON.parse(arr))
       console.log(this.state.txt)
    //    let msg=this.state.txt.Content;
    //    let path=JSON.parse(msg);
    //    console.log(msg);
    //    console.log(path);
    
    }
    render(){
        return <div id="details">
            <div id="top">
                {this.state.tits.map((tit,idx)=>(
                <div key={idx}><a>{tit}</a></div>
                ))}
            </div>
            <div id="main">
                {this.state.txt.map(item=>(<ul key={item.ID}>
                    <li><img src={item.ImgUrl}/></li>
                    <li><p>{item.Title}</p></li>
                <li><span style={{color:'#dd137b',fontSize:'16px'}}>￥{item.PreSalePrice}</span><span style={{color:'#555'}}><del>￥{item.MarketPrice}</del></span></li>
                <li><span style={{textAlign:'right'}}>收藏</span></li>
                <li>累计销售量{item.SaleNuber}</li>
                <li>评论数量{item.CommentNumber}</li>
                <li><span>可选规格</span><span>{item.SpecText}</span></li>
                </ul>))}
            </div>
            <div id="xiangqing">
            {this.state.txt.map((path,idx)=>(<div key={idx} dangerouslySetInnerHTML={{__html:path.Content}}></div>))}
            </div>
        </div>
    }
}

export {Details}