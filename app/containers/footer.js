// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu,Carousel,Divider,Anchor} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import gswj from '../img/gswj.jpg'



var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;

class Footer extends Component{

  constructor(props){
    super(props);
    this.state={


    };


  }



 componentDidMount(){




 }


 render(){


  return(
    <div  >

      <div style={{width:'100%',height:'120px',position:'relative',backgroundImage:' linear-gradient(to right,  #304352 0%, #d7d2cc 100%)',fontSize:'16px',left:'0px',right:'0px',margin:'auto'}}>
        <div style={{width:'100%',height:'150px',textIndent:'2em',color:'white',paddingTop:'20px',
    position:'absolute',left:'0px',right:'0px',margin:'auto',textAlign:'center',
    fontSize: '22px'}}> 
     <strong> 凯启精密制造有限公司</strong><br/>
     <span style={{fontSize:'18px'}}> 宁波保税区凯启精密制造有限公司 | 电话：025-xxxx-xxxx | 传真：025-xxxx-xxxx | 邮箱： info.xxxxxx@kaiqi.com</span>
    </div>
    </div>

  

    <div style={{width:'100%',height:'150px',backgroundColor:'#755B5B',position:'relative',left:'0px',right:'0px',margin:'auto'}}>
      <img src={gswj} style={{width:'100%',maxHeight:'100%',backgroundColor:'#755B5B',position:'relative'}} />
    </div>

    </div>

    );
}


}

export default Footer






