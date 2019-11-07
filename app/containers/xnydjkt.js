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


import bsq1 from '../img/bsq1.jpg'
import bsq2 from '../img/bsq2.jpg'


var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;

class Xnydjkt extends Component{

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
    <div  className={styles.animated+' '+styles.slideInUp} style={{width:'100%',height:'100%',position:'relative'}}>

        <div style={{width:'100%',height:'500px',position:'relative',top:'150px'}}>
    <div style={{width:'50%',height:'450px',textIndent:'2em',color:'black',
    position:'absolute',right:'5%',paddingTop:'80px',textAlign:'left',
    fontSize: '60px'}}> 
新能源电机壳体
    </div>
    <div style={{width:'50%',height:"330px",borderRadius:'5px ',overflow:'hidden',position:'absolute',left:'5%',top:'0'}}> 
    <img src={topshow}/>
    </div>
    </div>


<div style={{width:'100%',height:'200%',position:'relative',backgroundColor:'#F4F2F2'}}>

<div style={{width:'90%',height:'70%',position:'relative',backgroundColor:'#FFCACA',left:'0',right:'0',margin:'auto'}}>
<div   id="bsxtop" style={{width:'100%',height:'50%',position:'relative',backgroundColor:'#F4F2F2',left:'0',right:'0',margin:'auto',display:'flex',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap'}}>
<div style={{width:'45%',height:'90%',backgroundColor:'WHITE'}}>
<div style={{width:'100%',height:'20%',top:"20%",position:'relative',backgroundColor:"WHITE",fontSize:'30PX',textAlign:'center',fontFamily: "PingFang SC"}}>
变速器壳体系列</div>

<div style={{width:'100%',height:'20%',top:"15%",position:'relative',fontSize:'30PX',textAlign:'center',fontFamily: "PingFang SC",fontSize:'15px'}}>
相关产品
</div>
<div style={{width:'100%',height:'30%',top:"0%",position:'relative',fontSize:'30PX',textAlign:'center',fontFamily: "PingFang SC"}}>
<Button style={{backgroundColor:'#5BDA58',color:'white',width:"30%",height:'40%',position:'absolute',left:'0',right:'0',top:'0',bottom:'0',margin:'auto',fontSize:'20px'}}>查看更多</Button>

</div>

</div>
<div style={{width:'22%',height:'90%',backgroundColor:'white',position:'relative'}}>
  <div style={{width:'90%',height:'50%',position:'absolute',top:"10%",left:'0',right:'0',margin:'auto',backgroundColor:'#FCFCFC'}}>
<img  style={{height:'100%',width:'100%'}} src={bsq1} />
  </div>
  <div style={{width:'90%',height:'20%',position:'absolute',bottom:"10%",left:'0',right:'0',margin:'auto',backgroundColor:'white',color:'#000000',
  fontSize:'20PX',textAlign:'center',fontFamily: "PingFang SC"}}>变速器壳体1</div>

</div>
<div style={{width:'22%',height:'90%',backgroundColor:'white',position:'relative'}}>
  <div style={{width:'90%',height:'50%',position:'absolute',top:"10%",left:'0',right:'0',margin:'auto',backgroundColor:'#FCFCFC'}}>
  <img  style={{height:'100%',width:'100%'}} src={bsq2} /></div>
  <div style={{width:'90%',height:'20%',position:'absolute',bottom:"10%",left:'0',right:'0',margin:'auto',backgroundColor:'white',color:'#000000',
  fontSize:'20PX',textAlign:'center',fontFamily: "PingFang SC"}}>变速器壳体2</div>

</div>




   </div>
  <div id="bsxbot" style={{width:'100%',height:'50%',position:'relative',backgroundColor:'#F4F2F2',left:'0',right:'0',margin:'auto',display:'flex',justifyContent:'space-around',alignItems:'center'}}>

<div style={{width:'45%',height:'90%',backgroundColor:'WHITE'}}>
<div style={{width:'100%',height:'20%',top:"20%",position:'relative',backgroundColor:"WHITE",fontSize:'30PX',textAlign:'center',fontFamily: "PingFang SC"}}>
离合器壳体系列</div>

<div style={{width:'100%',height:'20%',top:"15%",position:'relative',fontSize:'30PX',textAlign:'center',fontFamily: "PingFang SC",fontSize:'15px'}}>
相关产品
</div>
<div style={{width:'100%',height:'30%',top:"0%",position:'relative',fontSize:'30PX',textAlign:'center',fontFamily: "PingFang SC"}}>
<Button style={{backgroundColor:'#5BDA58',color:'white',width:"30%",height:'40%',position:'absolute',left:'0',right:'0',top:'0',bottom:'0',margin:'auto',fontSize:'20px'}}>查看更多</Button>

</div>

</div>

<div style={{width:'22%',height:'90%',backgroundColor:'white',position:'relative'}}>
  <div style={{width:'90%',height:'50%',position:'absolute',top:"10%",left:'0',right:'0',margin:'auto',backgroundColor:'#FCFCFC'}}>
<img  style={{height:'100%',width:'100%'}} src={bsq2} />
  </div>
  <div style={{width:'90%',height:'20%',position:'absolute',bottom:"10%",left:'0',right:'0',margin:'auto',backgroundColor:'white',color:'#000000',
  fontSize:'20PX',textAlign:'center',fontFamily: "PingFang SC"}}>离合器壳体1</div>

</div>
<div style={{width:'22%',height:'90%',backgroundColor:'white',position:'relative'}}>
  <div style={{width:'90%',height:'50%',position:'absolute',top:"10%",left:'0',right:'0',margin:'auto',backgroundColor:'#FCFCFC'}}>
  <img  style={{height:'100%',width:'100%'}} src={bsq1} /></div>
  <div style={{width:'90%',height:'20%',position:'absolute',bottom:"10%",left:'0',right:'0',margin:'auto',backgroundColor:'white',color:'#000000',
  fontSize:'20PX',textAlign:'center',fontFamily: "PingFang SC"}}>离合器壳体2</div>

</div>


   </div>



   </div>
    


   </div>
    
    


<Footer/>

    </div>

    );
}


}

export default Xnydjkt




