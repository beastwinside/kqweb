// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu,Carousel,Divider,Anchor} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';
  import topshow from '../img/topshow.png'
import hzhb from '../img/hzhb.png';
import Footer from './footer.js'



var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;

class Partner extends Component{

  constructor(props){
    super(props);
    this.state={


    };


  }



 componentDidMount(){




 }


 render(){


  return(
    <div className={styles.animated+' '+styles.slideInUp}>

       <div style={{width:'100%',height:'390px',position:'relative',top:'110px'}}>
    <div style={{width:'40%',height:'390px',textIndent:'2em',color:'black',
    position:'absolute',right:'5%',paddingTop:'80px',textAlign:'left',
    fontSize: '60px'}}> 
   合作伙伴
    </div>
    <div style={{width:'50%',height:"330px",borderRadius:'5px ',overflow:'hidden',position:'absolute',left:'5%',top:'0'}}> 
    <img src={topshow}/>
    </div>
    </div>



     <Divider style={{color:"black",fontSize:"20PX"}}>目前凯启的合作伙伴</Divider>
       <div style={{width:'100%',height:'550px',position:'relative'}}>
    
    <div style={{width:'1000px',position:'relative',left:'0px',right:'0px',margin:'auto'}}>
    <img src={hzhb} style={{width:'1000px'}} />
    </div>
    </div>


<Footer/>

    </div>

    );
}


}

export default Partner




