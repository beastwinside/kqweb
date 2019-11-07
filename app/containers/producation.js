
// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu,Carousel,Divider,Anchor} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';

import logo from '../img/logo.png';

  import topshow from '../img/topshow.png'
import jjcj1 from '../img/jjcj1.jpg';
import jjcj2 from '../img/jjcj2.jpg';
import jjcj3 from '../img/jjcj3.jpg';
import jjcj4 from '../img/jjcj4.jpg';
import jjcj5 from '../img/jjcj5.jpg';
import jjcj6 from '../img/jjcj6.jpg';

import quality from '../img/quality.png'

import vtb from '../img/vt23b.png'
import vtl from '../img/vt23l.png'
import Footer from './footer.js'
import qualitybg from '../img/quality.jpg'


var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;

class Device extends Component{

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
    <div  className={styles.animated+' '+styles.slideInUp}  style={{height:"100%",width:"100%",position:'relative'}}>

       <div style={{width:'100%',height:'80%',position:'relative',top:'130px',left:'0',right:'0',margin:'auto',overflow:'hidden',top:'110px'}} >

      <div >    <img   src={qualitybg} style={{height:"100%",width:'100%',position:'relative'}}/></div>
 

    </div>




     <div style={{width:'100%',height:'30%',position:'relative'}}></div>


    <Divider style={{color:"black",fontSize:"20PX"}}>质量管控</Divider>

    <div style={{width:'90%',left:"0",right:'0',margin:'auto',height:'120%',position:'relative'}}>
    <div style={{width:'1000px',position:'relative',left:'0px',right:'0px',margin:'auto'}}>
    <div style={{width:'90%',height:'150px',textIndent:'2em',color:'black',
    position:'relative',left:'0px',right:'0px',margin:'auto',paddingTop:'10px',
    fontSize: '22px'}}> 公司拥有铝锭熔化、压铸、机加工、后处理等各工序检测设备，并严格按照检验规范进行检测，确保产品质量。</div>
    <img src={quality} style={{width:'100%'}} />
    </div>
    </div>

       <div style={{width:'90%',left:"0",right:'0',margin:'auto',height:'95%',position:'relative'}}>
        <div style={{width:'70%',height:'60px',textIndent:'2em',color:'black',
    position:'relative',left:'0px',right:'0px',margin:'auto',paddingTop:'10px',textAlign:'center',
    fontSize: '22px'}}> 变速箱壳体加工流程</div>
    <div style={{width:'90%',position:'relative',left:'0px',right:'0px',margin:'auto'}}>
    <img src={vtb} style={{width:'100%'}} />
    </div>
    </div>

      <div style={{width:'90%',left:"0",right:'0',margin:'auto',height:'600px',position:'relative'}}>
       <div style={{width:'70%',height:'60px',textIndent:'2em',color:'black',
    position:'relative',left:'0px',right:'0px',margin:'auto',paddingTop:'10px',textAlign:'center',
    fontSize: '22px'}}> 离合器壳体加工流程</div>
    <div style={{width:'90%',position:'relative',left:'0px',right:'0px',margin:'auto'}}>
    <img src={vtl} style={{width:'100%'}} />
    </div>
    </div>
    

    <Footer/>


    </div>

    );
}


}

export default Device




