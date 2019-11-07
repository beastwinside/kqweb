// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu,Carousel,Divider,Anchor,Avatar} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';
import Footer from './footer.js'
import logo from '../img/logo.png';

import topshow from '../img/topshow.png'

import quality from '../img/quality.png'


import vtb from '../img/vt23b.png'
import vtl from '../img/vt23l.png'
import news1 from '../img/nn1.jpg'
import newsbg from '../img/newsbg.jpg'

const data = [

{
  title: '东海之滨 魅力甬城',
  year:'',
  month:'',
  content:'宁波，简称“甬”，位于浙江东部，长江三角洲南翼，是一座美丽的港口城市，也是一座历史文化名城，更是有着丰富资源的著名旅游城市。她古色古香又富有动感，大自然的天趣与都市的跃动融为一体……'
  ,
  url:require('../img/nn2.jpg')
},
{
  title: '青年强则企业强 青年优则企业优',
  year:'',
  month:'',
  content:'五月的天，正是春末夏初，没有入春之初的阵阵寒意，也没有盛夏之时的浮躁与慵懒，天空湛蓝，草木欣然。这样的天气像极了充满着动力与激情，怀揣宏伟志向的青年们，他们既没有孩提时的懵懂，也没有而立之后的优柔'
  ,
  url:require('../img/nn3.jpg') },
  {
    title: '不忘初心，砥砺前行——建党97周年，我们在努力',
    year:'',
    month:'',
    content:'今年“七一”，是建党97周年，也是银亿集团党校成立1周年，集团党委通过上党课、举办培训班、重走长征路等活动，开展党员干.......'
    ,
    url:require('../img/nn4.jpg')},
    {
      title: '满满正能量，青春代言人 ——银亿集团首届十佳青年评比活动圆满落幕',
      year:'',
      month:'',
      content:' 5月11日下午，“青年强，青春show”银亿集团主题团日活动暨首届十佳青年评比活动在金港大酒店拉开帷幕'
      ,
      url:require('../img/nn5.jpg')},
      {
        title: '凝聚青年 共叙发展 ——集团团委组织团建活动',
        year:'',
        month:'',
        content:'3月29日下午，集团团委组织各在甬企业团干部、青年骨干员工，并邀请富邦集团团系统干部一起走进银亿高端制造基地（凯启精密、宁波ARC）参观学习'
        ,
        url:require('../img/nn6.jpg')},
        {
          title: '最美煤矿人 ——送给常年奋战在井下第一线的工人同胞们',
          year:'',
          month:'',
          content:'忙忙碌碌中又过去了一年。去年的一年中，我矿在陈矿的正确引导下，在其他领导的不懈努力下，从地面到井下都发生了巨大的变化。工作画上了圆满的句号。'
          ,
          url:require('../img/nn7.jpg') },
          ];


          var devheight=document.documentElement.clientHeight-80;
          var devwidth=document.documentElement.clientWidth;
          var condevwidth=devwidth*0.8;

          class New extends Component{

            constructor(props){
              super(props);
              this.state={


              };

              this.enterdetail=this.enterdetail.bind(this);

            }

            enterdetail(){
              this.props.history.push({pathname:'/newdetail'});
            }

            componentDidMount(){


              scrollTo(0,0)

            }


            render(){


              return(
                <div  className={styles.animated+' '+styles.slideInUp}  style={{height:"100%",width:"100%",position:'relative'}}>

                <div style={{width:'100%',height:'80%',position:'relative',top:'130px',left:'0',right:'0',margin:'auto',overflow:'hidden',top:'110px'}} >

                <div >    <img   src={newsbg} style={{height:"100%",width:'100%',position:'relative'}}/></div>


                </div>



                <div style={{width:'90%',height:devheight,position:'relative',left:'0px',right:'0px',margin:'auto',top:"20%"}}>

                <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                  <div style={{width:'100%',height:"250px",backgroundColor:"#F0AEF4",position:"relative",boxShadow: '10px 10px 5px #888888',marginBottom:'10%px'}}>



                  <div style={{width:"30%",height:"100%",backgroundColor:"#EEECEC",position:'absolute'}}>
                  <img src={item.url} style={{height:'100%',width:'100%',position:'absolute'}} />
                  <div style={{width:"40%",height:"100%",position:'absolute',textIndent:'20px',fontSize:'30px',textAlign:'center',color:"white",left:'0%',backgroundColor:"transparent"}}>
                  <div style={{width:'100%',height:"70%",position:'absolute',right:'0',backgroundColor:'transparent',zIndex:'100'}}>
                  <strong style={{fontSize:'35px',color:'white'}}> 2018年</strong>
                  <br/>
                  6月7日</div>
                  </div>
                  </div>




                  <div style={{width:"70%",height:"100%",backgroundColor:"#EEECEC",position:'absolute',right:'0',fontSize:"20px",color:"black",}}>
                  <br/>
                  <strong style={{fontSize:'25px',margin:'40px',color:'#191919'}}>{item.title}</strong>
                  <br/>
                  <span style={{fontSize:'18px',margin:'40px',color:'#313130',fontFamily: "Arial"}}>{item.content}</span>
                  <br/>
                  <Button type="primary" style={{width:"100%",height:'40px',left:"0",marginTop:"30px",color:"#F9F9F1",fontSize:'25PX',position:'absolute',bottom:'0'}} onClick={this.enterdetail}>--查看更多--</Button>
                  </div>


                  </div>


                  </List.Item>
                  )}
                />



                </div>




                </div>

                );
            }


          }

          export default New






       
