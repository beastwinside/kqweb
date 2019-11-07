// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu,Carousel,Divider,Anchor} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';

import bg2 from '../img/bg2.jpg';
import News from './news.js'

import cqzl from '../img/cqzl.jpg';
import jjcj1 from '../img/jjcj1.jpg';
import jjcj2 from '../img/jjcj2.jpg';
import jjcj3 from '../img/jjcj3.jpg';
import jjcj4 from '../img/jjcj4.jpg';
import jjcj5 from '../img/jjcj5.jpg';
import jjcj6 from '../img/jjcj6.jpg';
import yzcj from '../img/yzcj.jpg';
import quality from '../img/quality.png'


import topshow from '../img/topshow.jpg'





import logo from '../img/logo.jpg'



import txzs1 from '../img/txzs1.jpg'
import txzs2 from '../img/txzs2.jpg'
import txzs3 from '../img/txzs3.jpg'
import txzs4 from '../img/txzs4.jpg'
import txzs5 from '../img/txzs5.jpg'
import txzs6 from '../img/txzs6.jpg'

import sybg1 from '../img/sybg1.jpg'
import sybg2 from '../img/sybg2.jpg'
import sybg3 from '../img/sybg3.jpg'

import hz1 from '../img/hz1.png'
import hz2 from '../img/hz2.png'
import hz3 from '../img/hz3.png'
import hz4 from '../img/hz4.png'
import hz5 from '../img/hz5.png'
import hz6 from '../img/hz6.png'
import hz7 from '../img/hz7.png'
import hz8 from '../img/hz8.png'
import hz9 from '../img/hz9.png'
import hz10 from '../img/hz10.png'
import hz11 from '../img/hz11.png'




import cp1 from '../img/cp1.jpg'
import cp2 from '../img/cp2.jpg'
import cp3 from '../img/cp3.jpg'
import cp4 from '../img/cp4.jpg'
import cp5 from '../img/cp5.jpg'
import cp6 from '../img/cp6.jpg'

import logo_ft from '../img/logo_ft.jpg'
import logo_dj from '../img/logo_dj.jpg'
import logo_dcbkt from '../img/logo_dcbkt.jpg'
import logo_jgj from '../img/logo_jgj.jpg'
import gswj from '../img/gswj.jpg'




var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;

class Mainpage extends Component{

  constructor(props){
    super(props);
    this.state={


    };

    this.imgmousehover=this.imgmousehover.bind(this);
    this.imgmouseleave=this.imgmouseleave.bind(this);
    this.enterproducation=this.enterproducation.bind(this);
      this.enterdetail=this.enterdetail.bind(this);

}

enterdetail(){
  this.props.history.push({pathname:'/newdetail'});
}


 enterproducation(){
  this.props.history.push({pathname:'./producation'});
 }

imgmousehover(e){

    e.target.style.opacity='1';
     e.target.style.width='130%';
      e.target.style.height='130%';


}

imgmouseleave(e){

   e.target.style.opacity='0.95';
    e.target.style.width='100%';
     e.target.style.height='100%';

}


componentDidMount(){

    scrollTo(0,0)


}

render(){


  return(
    <div  style={{height:"100%",width:"100%",position:'relative'}}>

    



    <div style={{width:'100%',height:'80%',position:'relative',top:'130px',left:'0',right:'0',margin:'auto',overflow:'hidden',top:'110px'}} >

          <Carousel autoplay style={{width:'100%',height:'100%',position:'relative'}}>
      <div >    <img   src={sybg1} style={{height:"100%",width:'100%',position:'relative'}}/></div>
      <div >    <img   src={sybg2} style={{height:"100%",width:'100%',position:'relative'}}/></div>
      <div >    <img   src={sybg3} style={{height:"100%",width:'100%',position:'relative'}}/></div>

        </Carousel>
    </div>















    <div style={{width:'90%',left:"0",right:'0',margin:'auto',height:'240px',position:'relative',top:'100px',backgroundColor:'white',marginBottom:'70px'}}>

    <Divider>主要产品</Divider>

    <div style={{width:"100%",height:"100%",position:'relative',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>

<div style={{width:"77%",height:"50%",position:'absolute',left:'0',right:"0",margin:'auto',backgroundColor:'white',top:"10px",opacity:'0.95'}} >
  <Link to="./yytf">
<img   style={{width:"100%",height:"100%",transition: 'width 0.5s, height 0.5s',position:'absolute',left:'0',right:'0',top:'0',bottom:'0',margin:'auto',cursor:'pointer'}} onMouseEnter={this.imgmousehover}  onMouseLeave={this.imgmouseleave} src={logo_ft} />
</Link>
</div>
<div style={{width:"95%",height:"30%",position:'absolute',left:'0',right:"0",margin:'auto',backgroundColor:'white',bottom:"10px",color:'black',fontWeight:'bolder',textAlign:'center',fontSize:'16px'}}>

液压阀体</div>

    </div>
    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
<div style={{width:"77%",height:"50%",position:'absolute',left:'0',right:"0",margin:'auto',backgroundColor:'white',top:"10px",opacity:'0.95'}}>
  <Link to="./jstz">
<img   style={{width:"100%",height:"100%",transition: 'width 0.5s, height 0.5s',position:'absolute',left:'0',right:'0',top:'0',bottom:'0',margin:'auto',cursor:'pointer'}} onMouseEnter={this.imgmousehover}  onMouseLeave={this.imgmouseleave} src={topshow}/>
</Link></div>
<div style={{width:"95%",height:"30%",position:'absolute',left:'0',right:"0",margin:'auto',backgroundColor:'white',bottom:"10px",color:'black',fontWeight:'bolder',textAlign:'center',fontSize:'16px'}}>
变速箱壳体</div>
    </div>
    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
<div style={{width:"77%",height:"50%",position:'absolute',left:'0',right:"0",margin:'auto',backgroundColor:'white',top:"10px",opacity:'0.95'}}>
  <Link to="./qcjgj">
<img  style={{width:"100%",height:"100%",transition: 'width 0.5s ,height 0.5s',position:'absolute',left:'0',right:'0',top:'0',bottom:'0',margin:'auto',cursor:'pointer'}} onMouseEnter={this.imgmousehover}  onMouseLeave={this.imgmouseleave} src={logo_jgj} />
</Link></div>
<div style={{width:"95%",height:"30%",position:'absolute',left:'0',right:"0",margin:'auto',backgroundColor:'white',bottom:"10px",color:'black',fontWeight:'bolder',textAlign:'center',fontSize:'16px'}}>
车身上下结构件</div>
    </div>
 

    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
<div style={{width:"77%",height:"50%",position:'absolute',left:'0',right:"0",margin:'auto',backgroundColor:'white',top:"10px",opacity:'0.95'}}>
  <Link to="./xnydjkt">
<img    style={{width:"100%",height:"100%",transition: 'width 0.5s, height 0.5s',position:'absolute',left:'0',right:'0',top:'0',bottom:'0',margin:'auto',cursor:'pointer'}} onMouseEnter={this.imgmousehover}  onMouseLeave={this.imgmouseleave} src={logo_dj}/>
</Link></div>
<div style={{width:"95%",height:"30%",position:'absolute',left:'0',right:"0",margin:'auto',backgroundColor:'white',bottom:"10px",color:'black',fontWeight:'bolder',textAlign:'center',fontSize:'16px'}}>
新能源电机壳体</div>
    </div>
    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
<div style={{width:"77%",height:"50%",position:'absolute',left:'0',right:"0",margin:'auto',backgroundColor:'white',top:"10px",opacity:'0.95'}}>
  <Link to="./XNYDCBKT">
<img  style={{width:"100%",height:"100%",transition: 'width 0.5s, height 0.5s',position:'absolute',left:'0',right:'0',top:'0',bottom:'0',margin:'auto',cursor:'pointer'}} onMouseEnter={this.imgmousehover}  onMouseLeave={this.imgmouseleave} src={logo_dcbkt} />
</Link>
</div>
<div style={{width:"95%",height:"30%",position:'absolute',left:'0',right:"0",margin:'auto',backgroundColor:'white',bottom:"10px",color:'black',fontWeight:'bolder',textAlign:'center',fontSize:'16px'}}>
新能源电池包壳体
</div>
    </div>

    </div>
    </div>







    

    <div style={{width:'95%',left:"0",right:'0',margin:'auto',height:'350px',position:'relative',top:'100px'}}>

    <div style={{width:'42%',position:'absolute',left:'0',}}>
   
     <div style={{width:'100%',height:"10%",position:'relative',backgroundImage: "linear-gradient(to top, #272424 0%, #050505 100%)",fontSize:'16px',textAlign:'left',textIndent:'5px',color:'white'}}>
     <Icon type="flag" />
   厂区总览 | Factory Overview</div>

    <img src={cqzl} style={{width:'100%',borderBottom:'solid 1px  #101010',borderRight:'solid 1px  #101010',boxShadow: '10px 10px 5px #888888'}} />
    <div style={{fontSize:'18px',color:'black'}}><br/>
     &nbsp;&nbsp;&nbsp;&nbsp;   宁波保税区凯启精密制造有限公司是银亿集团下属全资子公司，占地面积<strong style={{color:'blue'}}>50000平方米</strong>,注册资金：<strong style={{color:'blue'}}>4500万元</strong>，投资总额<strong style={{color:'red'}}>1.1亿美元</strong>，主要生产汽车变速箱，离合器壳体，新能源电机壳，电池包壳体及结构件，年产能规划达<strong style={{color:'red'}}>80万套</strong>。</div>
    </div>


    <div style={{width:'55%',position:'absolute',right:'0',height:'100%',backgroundImage: "linear-gradient(to top, #272424 0%, #050505 100%)",fontSize:'16px',}}>

     <div style={{width:'100%',height:"10%",position:'relative',backgroundImage: "linear-gradient(to top, #272424 0%, #050505 100%)",fontSize:'16px',fontSize:'16px',textAlign:'left',textIndent:'5px',color:'white'}}>
     <Icon type="flag" />
   新闻| News</div>
  
  
  
   <div style={{width:'100%',height:"90%",position:'relative',backgroundImage:' linear-gradient(to right,  #304352 0%, #d7d2cc 100%)',fontSize:'16px',}}>

     <div style={{width:'100%',height:'100%',display: 'flex', justifyContent:'space-between',alignItems:'center',flexWrap: 'wrap',backgroundColor:"white",color:'black'}}>
  <div style={{height:'30%',width:'46%',position:'relative'}}>
  <div style={{width:'40%',height:'100%',backgroundColor:'green',position:'absolute',left:'0'}}><img src={require('../img/nn7.jpg')} style={{height:'100%',width:'100%',position:'absolute'}} /></div>
   <div style={{width:'60%',height:'100%',backgroundColor:"#F6F6F6",position:'absolute',right:'0',fontFamily:'Arial',textIndent:'5px'}}>
东海之滨 魅力甬城
<Button style={{width:'100%',position:'absolute',bottom:"0",left:'0',backgroundColor:'#484848'}} type="primary">查看更多 </Button>
   </div>
  </div>

 <div style={{height:'30%',width:'46%',position:'relative'}}>
  <div style={{width:'40%',height:'100%',backgroundColor:'green',position:'absolute',left:'0'}}><img src={require('../img/nn2.jpg')} style={{height:'100%',width:'100%',position:'absolute'}} /></div>
   <div style={{width:'60%',height:'100%',backgroundColor:"#F6F6F6",position:'absolute',right:'0',fontFamily:'Arial',textIndent:'5px'}}>
青年强则企业强 青年优则企业优
<Button style={{width:'100%',position:'absolute',bottom:"0",left:'0',backgroundColor:'#484848'}} type="primary">查看更多 </Button>
   </div>
  </div>

   <div style={{height:'30%',width:'46%',position:'relative'}}>
  <div style={{width:'40%',height:'100%',backgroundColor:'green',position:'absolute',left:'0'}}><img src={require('../img/nn3.jpg')} style={{height:'100%',width:'100%',position:'absolute'}} /></div>
   <div style={{width:'60%',height:'100%',backgroundColor:"#F6F6F6",position:'absolute',right:'0',fontFamily:'Arial',textIndent:'5px'}}>
不忘初心，砥砺前行——建党97周年，我们在努力
<Button style={{width:'100%',position:'absolute',bottom:"0",left:'0',backgroundColor:'#484848'}} type="primary">查看更多 </Button>
   </div>
  </div>

   <div style={{height:'30%',width:'46%',position:'relative'}}>
  <div style={{width:'40%',height:'100%',backgroundColor:'green',position:'absolute',left:'0'}}><img src={require('../img/nn4.jpg')} style={{height:'100%',width:'100%',position:'absolute'}} /></div>
   <div style={{width:'60%',height:'100%',backgroundColor:"#F6F6F6",position:'absolute',right:'0',fontFamily:'Arial',textIndent:'5px'}}>
凝聚青年 共叙发展 ——集团团委组织团建活动
<Button style={{width:'100%',position:'absolute',bottom:"0",left:'0',backgroundColor:'#484848'}} type="primary">查看更多 </Button>
   </div>
  </div>

   <div style={{height:'30%',width:'46%',position:'relative'}}>
  <div style={{width:'40%',height:'100%',backgroundColor:'green',position:'absolute',left:'0'}}><img src={require('../img/nn5.jpg')} style={{height:'100%',width:'100%',position:'absolute'}} /></div>
   <div style={{width:'60%',height:'100%',backgroundColor:"#F6F6F6",position:'absolute',right:'0',fontFamily:'Arial',textIndent:'5px'}}>
最美煤矿人 ——送给常年奋战在井下第一线的工人同胞们
<Button style={{width:'100%',position:'absolute',bottom:"0",left:'0',backgroundColor:'#484848'}} type="primary">查看更多 </Button>
   </div>
  </div>

   <div style={{height:'30%',width:'46%',position:'relative'}}>
  <div style={{width:'40%',height:'100%',backgroundColor:'green',position:'absolute',left:'0'}}><img src={require('../img/nn6.jpg')} style={{height:'100%',width:'100%',position:'absolute'}} /></div>
   <div style={{width:'60%',height:'100%',backgroundColor:"#F6F6F6",position:'absolute',right:'0',fontFamily:'Arial',textIndent:'5px'}}>
砥砺前行——建党97周年，我们在努力
<Button style={{width:'100%',position:'absolute',bottom:"0",left:'0',backgroundColor:'#484848'}} type="primary">查看更多 </Button>
   </div>
  </div>


    </div>


   </div>
    </div>

    </div>




















        <div id="hzhb" style={{height:'50%',width:'100%',position:'relative',marginTop:"17%"}}>
        <div style={{height:'30%',position:'relative',width:'100%',fontSize:'32px',textAlign:'center',fontWeight:'bolder',color:'#3B0404'}}>

        开启科技未来      &nbsp;  &nbsp;&nbsp;&nbsp; ——— 合作伙伴  ——— &nbsp;&nbsp;&nbsp;&nbsp;      创新传动世界
    </div>

    <div style={{height:'70%',position:'relative',width:'100%',fontSize:'32px',textAlign:'center',fontWeight:'bolder',color:'#000000',backgroundColor:"#EE4610"}}>

<div style={{width:'100%',height:'50%',position:"relative",backgroundColor:"white",display:'flex',justifyContent:'space-around',alignItems:'center'}}>
    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
    <img  style={{width:'100%'}} src={hz1} />


    </div>

<div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
<img  style={{width:'100%'}} src={hz2} />


    </div>
    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
    <img  style={{width:'100%'}} src={hz3} />


    </div>
    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
    <img  style={{width:'100%'}} src={hz4} />


    </div>
    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
    <img  style={{width:'100%'}} src={hz5} />


    </div>
    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
    <img  style={{width:'100%'}} src={hz6} />


    </div>






</div>
<div style={{width:'100%',height:'50%',position:"relative",backgroundColor:"white",display:'flex',justifyContent:'space-around',alignItems:'center'}}>
    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
    <img  style={{width:'100%'}} src={hz7} />


    </div>

<div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
<img  style={{width:'100%'}} src={hz8} />


    </div>
    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
    <img  style={{width:'100%'}} src={hz9} />


    </div>
    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
    <img  style={{width:'100%'}} src={hz10} />


    </div>
    <div style={{width:'11%',height:"80%",backgroundColor:'white',position:'relative'}}>
    <img  style={{width:'100%'}} src={hz11} />


    </div>


</div>

    </div>

      </div>






























    


  <div style={{fontSize:'23PX',width:'100%',height:'50px',textAlign:'center',color:'black',position:'relative'}}>

    </div>


    <Divider> 荣誉证书</Divider>


    <div style={{width:'100%',height:'40%',position:'relative',left:'0',right:"0",margin:'auto',display: 'flex', justifyContent:'space-around',alignItems:'center',flexWrap: 'wrap',backgroundImage:' linear-gradient(to right,  #304352 0%, #d7d2cc 100%)'}}>


    <div style={{width:'100px',height:"80%",backgroundColor:"",paddingTop:"1%"}}><img style={{width:'93%',position:'relative'}} src={txzs1}/> <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书1</div></div>
     <div style={{width:'200px',height:"80%",backgroundColor:"",paddingTop:"1%"}}><img style={{width:'93%',position:'relative'}} src={txzs2}/> <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书2</div></div>
    
       <div style={{width:'100px',height:"80%",backgroundColor:"",paddingTop:"1%"}}><img style={{width:'93%',position:'relative'}} src={txzs4}/> <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书4</div></div>
         <div style={{width:'200px',height:"80%",backgroundColor:"",paddingTop:"1%"}}><img style={{width:'93%',position:'relative'}} src={txzs3}/>  <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书3</div></div>
        <div style={{width:'100px',height:"80%",backgroundColor:"",paddingTop:"1%"}}><img style={{width:'93%',position:'relative'}} src={txzs5}/>  <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书5</div></div>
    <div style={{width:'100px',height:"80%",backgroundColor:"",paddingTop:"1%"}}><img style={{width:'93%',position:'relative'}} src={txzs6}/> <div style={{fontSize:'13PX',color:'white',fontWeight:'bolder',textAlign:'center'}}>体系证书6</div></div>

    </div>









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

export default Mainpage



