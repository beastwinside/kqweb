// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu,Dropdown} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';

import logoyy from '../img/logoyy.png'

var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;






class Top extends Component{

  constructor(props){
    super(props);
   

  
    this.enterproducation=this.enterproducation.bind(this);
    this.enterpage=this.enterpage.bind(this);
     this.enterdevice=this.enterdevice.bind(this);
     this.enterpartner=this.enterpartner.bind(this);
      this.entercontact=this.entercontact.bind(this);
       this.enternews=this.enternews.bind(this);
this.enterjstz=this.enterjstz.bind(this);
this.entertxrz=this.entertxrz.bind(this);

  }



   entertxrz(){
  this.props.history.push({pathname:'/txrz'});
 }


   enterjstz({key}){
switch(key)
{
case "bsxkt":
   this.props.history.push({pathname:'/jstz'});
  break;
case "yyft":
 this.props.history.push({pathname:'/yyft'});
  break;
  case "qcjgj":
 this.props.history.push({pathname:'/qcjgj'});
  break;
  case "xnydcbkt":
 this.props.history.push({pathname:'/xnydcbkt'});
  break;
  case "xnydjkt":
 this.props.history.push({pathname:'/xnydjkt'});
  break;
default:
  break;
}





 }
 enternews(){
  this.props.history.push({pathname:'/news'});
 }
  entercontact(){
    this.props.history.push({pathname:'/contact'});
  }
  enterpartner(){
    this.props.history.push({pathname:'/partner'});
  }

  enterdevice(){
    this.props.history.push({pathname:'/device'});
  }

 enterproducation(){
  this.props.history.push({pathname:'/producation/cp1'});
 }

enterpage(){
this.props.history.push({pathname:'/'});
 }

componentDidMount(){

}


render(){
  var content = '<strong>content</strong>';
  const SubMenu = Menu.SubMenu;



const menu = (
  <Menu style={{borderStyle:'solid',borderColor:"#FC6405",borderWidth:"1.5px"}} onClick={this.enterjstz}>
    <Menu.Item key="bsxkt" style={{backgroundColor:'black',color:'#F94904'}}  >
 变速箱壳体 
     </Menu.Item>
    <Menu.Item key="yyft" style={{backgroundColor:'black',color:'#F4FF27'}}>
     液压阀体
    </Menu.Item>
    <Menu.Item key="qcjgj" style={{backgroundColor:'black',color:'#1DA5FE'}}>
 汽车结构件
    </Menu.Item>
       <Menu.Item key="xnydcbkt" style={{backgroundColor:'black',color:'#F20DCF'}}>
新能源电池包壳体
    </Menu.Item>
       <Menu.Item key="xnydjkt" style={{backgroundColor:'black',color:'#EC3737'}}>
新能源电机壳体
    </Menu.Item>
  </Menu>
);




  return(
    <div style={{width:'100%',left:"0",right:'0',
    margin:'auto',position:'absolute',zIndex:'10',

    borderColor:'#565555',backgroundImage: "linear-gradient(60deg, #010103 0%, #626262 100%)"}}>


          <div  style={{height:'70px',Width:"1300px",zIndex:'100',fontSize:'30px',color:'white',textIndent:'10px'}}>
     <img src={logoyy} style={{height:'80%',left:'10px',top:'10px',zIndex:'100'}} />
    宁波市保税区凯启精密制造有限公司

    </div>

   
   
   

    <div style={{width:"10%",position:'absolute',right:'10px',height:"50%",top:"10px"}}>
        <Button type="ghost" style={{color:'white'}}>切换语言</Button>
    </div>


    <div style={{height:'40px',weight:'100%',backgroundImage: 'linear-gradient(60deg, #910404 0%, #ED9EA4 100%)'}}>
    <Menu
    mode="horizontal"
    defaultSelectedKeys="gykq"
    style={{backgroundColor:"black",color:'white'}}
    >

    <Menu.Item key="gykq" >
      <strong style={{fontSize:"15px",color:'#0FB9D7',marginLeft:'100px',position:'absolute',paddingTop:'10px'}}></strong>
     <div style={{fontSize:'15px',fontFamily:'Arail',marginLeft:'30px'}} onClick={this.enterpage}>
     
    
      <Button style={{backgroundColor:'black',color:'white'}}><Icon type="home" /> 凯启首页</Button>
 
     </div>
    </Menu.Item>
         <Menu.Item key="xwzx">
      <strong style={{fontSize:"15px",color:'#0FB9D7',marginLeft:'100px',position:'absolute',paddingTop:'10px'}}></strong>
         <div style={{fontSize:'15px',fontFamily:'Arail',marginLeft:'30px'}} onClick={this.enternews} >   
         
 <Button style={{backgroundColor:'black',color:'white'}}><Icon type="cloud"  /> 新闻中心</Button></div>
    </Menu.Item>
    <Menu.Item key="gyjsb" >
      <strong style={{fontSize:"15px",color:'#0FB9D7',marginLeft:'100px',position:'absolute',paddingTop:'10px'}}></strong>
     <div style={{fontSize:'15px',fontFamily:'Arail',marginLeft:'30px'}} onClick={this.enterdevice}>
      <Button style={{backgroundColor:'black',color:'white'}}><Icon type="appstore"  />厂区设备</Button></div>
    </Menu.Item>
    
    <Menu.Item key="cpzx" >
      <strong style={{fontSize:"15px",color:'#0FB9D7',marginLeft:'100px',position:'absolute',paddingTop:'10px'}}></strong>
   <div style={{fontSize:'15px',fontFamily:'Arail',marginLeft:'30px'}} onClick={this.enterproducation} >
    <Button style={{backgroundColor:'black',color:'white'}}><Icon type="book"  /> 质量管控</Button></div>
    </Menu.Item>

     <Menu.Item key="xmyf" >
      <strong style={{fontSize:"15px",color:'#0FB9D7',marginLeft:'100px',position:'absolute',paddingTop:'10px'}}></strong>
    <div style={{fontSize:'15px',fontFamily:'Arail',marginLeft:'30px'}}  >
      <Dropdown overlay={menu} placement="bottomLeft" >
     <Button style={{backgroundColor:'black',color:'white'}}><Icon type="lock"  /> 产品中心</Button>
   </Dropdown>
     </div>
    </Menu.Item>








     <Menu.Item key="lxwm">
      <strong style={{fontSize:"15px",color:'#0FB9D7',marginLeft:'100px',position:'absolute',paddingTop:'10px'}}></strong>
    <div  style={{fontSize:'15px',fontFamily:'Arail',marginLeft:'30px'}}  onClick={this.entercontact}>  
     <Button style={{backgroundColor:'black',color:'white'}}><Icon type="heart"  /> 联系我们</Button></div>
    </Menu.Item>

    </Menu>
    </div>

    </div>

    );
}


}

export default Top




