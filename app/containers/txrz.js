// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu,Carousel,Divider,Anchor} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';
import Footer from './footer.js'
import logo from '../img/logo.png';

  import topshow from '../img/topshow.png'


import quality from '../img/quality.png'


import vtb from '../img/vt23b.png'
import vtl from '../img/vt23l.png'

import txzs1 from '../img/txzs1.jpg'
import txzs2 from '../img/txzs2.jpg'
import txzs3 from '../img/txzs3.jpg'
import txzs4 from '../img/txzs4.jpg'


var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;

class Jstz extends Component{

  constructor(props){
    super(props);
    this.state={


    };

    this.imgmousehover=this.imgmousehover.bind(this);
    this.imgmouseleave=this.imgmouseleave.bind(this);

  }

  imgmousehover(e){
    e.target.style.width='110%';
   
  }

  imgmouseleave(e){
   e.target.style.width='100%';
 }

 componentDidMount(){


scrollTo(0,0)

 }


 render(){


  return(
    <div  className={styles.animated+' '+styles.slideInUp}>

        <div style={{width:'100%',height:'360px',position:'relative',top:'110px'}}>
    <div style={{width:'40%',height:'450px',textIndent:'2em',color:'black',
    position:'absolute',right:'5%',paddingTop:'80px',textAlign:'left',
    fontSize: '60px'}}> 
   体系认证
    </div>
    <div style={{width:'50%',height:"330px",borderRadius:'5px ',overflow:'hidden',position:'absolute',left:'5%',top:'0'}}> 
    <img src={topshow}/>
    </div>
    </div>




    


    <Divider style={{color:"black",fontSize:"20PX"}}>相关荣誉证书</Divider>
    <div style={{fontSize:'23PX',width:'100%',height:'50px',textAlign:'center',color:'black'}}>

    </div>

    <div style={{width:'1200px',height:'380px',position:'relative',left:'0',right:"0",margin:'auto',backgroundColor:"#FEF5F5",display: 'flex', justifyContent:'space-around',alignItems:'center',flexWrap: 'wrap',backgroundColor:"#940909"}}>

    <div style={{width:'20%',height:"95%",backgroundColor:"",position:'r'}}><img style={{width:'93%',position:'relative'}} src={txzs1}/> <div style={{fontSize:'30PX',color:'white',fontWeight:'bolder'}}>体系证书1</div></div>
     <div style={{width:'20%',height:"95%",backgroundColor:"",position:'r'}}><img style={{width:'93%',position:'relative'}} src={txzs2}/> <div style={{fontSize:'30PX',color:'white',fontWeight:'bolder'}}>体系证书2</div></div>
      <div style={{width:'20%',height:"95%",backgroundColor:"",position:'r'}}><img style={{width:'93%',position:'relative'}} src={txzs3}/>  <div style={{fontSize:'30PX',color:'white',fontWeight:'bolder'}}>体系证书3</div></div>
       <div style={{width:'20%',height:"95%",backgroundColor:"",position:'r'}}><img style={{width:'93%',position:'relative'}} src={txzs4}/> <div style={{fontSize:'30PX',color:'white',fontWeight:'bolder'}}>体系证书4</div></div>

    </div>


   
    
    
<Footer/>



    </div>

    );
}


}

export default Jstz




