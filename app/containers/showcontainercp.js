// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';

import cp1 from '../img/cp1.jpg'
import cp2 from '../img/cp2.jpg'
import cp3 from '../img/cp3.jpg'
import cp4 from '../img/cp4.jpg'
import cp5 from '../img/cp5.jpg'
import cp6 from '../img/cp6.jpg'



const { Meta } = Card;

class Showcontainercp extends Component{

  constructor(props){
    super(props);
   

  
    this.enterproducation=this.enterproducation.bind(this);
    this.enterpage=this.enterpage.bind(this);
  
    this.imgmousehover=this.imgmousehover.bind(this);
    this.imgmouseleave=this.imgmouseleave.bind(this);

  }

  imgmousehover(e){

    e.target.style.width='80%';
   

  }

  imgmouseleave(e){

   e.target.style.width='55%';

 }

 enterproducation(){
  this.props.history.push({pathname:'./producation'});
 }
enterpage(){
  this.props.history.push({pathname:'./'});
 }

componentDidMount(){


}


render(){
 
  return(
    <div > 
  1
    
    </div>
  

    );
}


}

export default Showcontainercp




