// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';
var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;

class Login extends Component{

  constructor(props){
    super(props);
    this.state={
      name:"",
      avatar:"",
      userid:"",

    };

 

  }


 componentDidMount(){




}


render(){
  return(
   <div  >
   21313123132dd3323
   </div>


   );
}


}

export default Login




