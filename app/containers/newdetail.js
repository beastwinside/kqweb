// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu,Carousel,Divider,Anchor,Avatar} from 'antd';
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
import newsbg from '../img/newsbg.jpg'
import vtb from '../img/vt23b.png'
import vtl from '../img/vt23l.png'
import news1 from '../img/nn1.jpg'

const data = [
{
  title: '端午印象',
  year:'',
  month:'',
  content:'每个节日都有专属的印记，就像月饼会想到中秋，爆竹会想到春节，闻到淡淡的粽香，就会让人有端午的感觉。端午为农历五月初五，又称端阳，端午的习俗有很多......'
},
{
  title: '东海之滨 魅力甬城',
  year:'',
  month:'',
  content:'宁波，简称“甬”，位于浙江东部，长江三角洲南翼，是一座美丽的港口城市，也是一座历史文化名城，更是有着丰富资源的著名旅游城市。她古色古香又富有动感，大自然的天趣与都市的跃动融为一体……'
},
{
  title: '青年强则企业强 青年优则企业优',
  year:'',
  month:'',
  content:'五月的天，正是春末夏初，没有入春之初的阵阵寒意，也没有盛夏之时的浮躁与慵懒，天空湛蓝，草木欣然。这样的天气像极了充满着动力与激情，怀揣宏伟志向的青年们，他们既没有孩提时的懵懂，也没有而立之后的优柔'
},
{
  title: '不忘初心，砥砺前行——建党97周年，我们在努力',
  year:'',
  month:'',
  content:'今年“七一”，是建党97周年，也是银亿集团党校成立1周年，集团党委通过上党课、举办培训班、重走长征路等活动，开展党员干.......'
},
{
  title: '满满正能量，青春代言人 ——银亿集团首届十佳青年评比活动圆满落幕',
  year:'',
  month:'',
  content:' 5月11日下午，“青年强，青春show”银亿集团主题团日活动暨首届十佳青年评比活动在金港大酒店拉开帷幕'
},
{
  title: '凝聚青年 共叙发展 ——集团团委组织团建活动',
  year:'',
  month:'',
  content:'3月29日下午，集团团委组织各在甬企业团干部、青年骨干员工，并邀请富邦集团团系统干部一起走进银亿高端制造基地（凯启精密、宁波ARC）参观学习'
},
{
  title: '最美煤矿人 ——送给常年奋战在井下第一线的工人同胞们',
  year:'',
  month:'',
  content:'忙忙碌碌中又过去了一年。去年的一年中，我矿在陈矿的正确引导下，在其他领导的不懈努力下，从地面到井下都发生了巨大的变化。工作画上了圆满的句号。'
},
];


var devheight=document.documentElement.clientHeight-120;
var devwidth=document.documentElement.clientWidth;
var condevwidth=devwidth*0.8;

class Device extends Component{

  constructor(props){
    super(props);
    this.state={


    };



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





      <div style={{fontSize:'45px',textAlign:"center",color:'black',width:'70%',height:"70px",position:'relative',top:'120px',backgroundColor:'white',right:'0',left:"0",margin:'auto',bottom:'300px',boxShadow: '10px 10px 5px #888888'}}>
      端午印象
      </div>



      <div style={{fontSize:'15px',textAlign:"center",color:'black',width:'70%',height:"30px",position:'relative',top:'120px',backgroundColor:'white',right:'0',left:"0",margin:'auto',bottom:'300px',boxShadow: '10px 10px 5px #888888'}}>
      2018-3-25
      </div>

      <div style={{fontSize:'20px',color:'black',width:'70%',height:"1000px",position:'relative',top:'120px',backgroundColor:'white',right:'0',left:"0",margin:'auto',bottom:'300px',boxShadow: '10px 10px 5px #888888'}}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个节日都有专属的印记，就像月饼会想到中秋，爆竹会想到春节，闻到淡淡的粽香，就会让人有端午的感觉。<br/>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;端午为农历五月初五，又称端阳，端午的习俗有很多，赛龙舟，挂艾草，食粽子等，其中食粽子是为了纪念战国时以身殉国投江的屈原，而其他如挂艾草等则是端午本身作为夏季驱邪，降暑的习俗。<br/>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近几年端午时节都远在他乡，我对端午的印象与小时候相比淡了许多。因为常年不在家，也没法感受家人一起做粽子的感觉，偶尔几年倒是有家人会寄过来肉粽，鉴于习俗，多少还是会吃一点，但是更喜欢的是端午时节前后时间的杨梅，杨梅这东西，味道极好但存在时间短，一年到头能吃的时候就那几天，所以显得格外珍惜。由于身在外，连续几年吃不到家乡的杨梅，到了能回家的时候杨梅却已落市，因此留下了诸多遗憾。<br/>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到了端午，天气也正从春季晴天的温润和雨季的清凉中慢慢转为了夏季的干燥与炎热。一提到端午，就会想到小时候家中端午时开着老式电风扇的呼呼声，然后一家人聚在一起包粽子的情景。时过境迁，不免让人唏嘘岁月的流逝。<br/>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宁波的气候比较独特，夏天的到来总是有种欲迎还拒的感觉，拖拖沓沓，非常不爽快。在你觉得天气有点热疑问是否快到夏天时，就会来一场雨，把感觉又带回春天，扑灭夏天到来的冲动。到了梅雨时节，这种情况更甚。来来回回往复这种热-凉爽-热的交替，大致持续一个多月，到了端午左右，才算真正进入夏天的主场。<br/>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;春天由于刚经过冬天的摧残，突如其来的温暖会让人感到轻松，而往往这种舒服的环境会消沉人的意志，变得懒散没有目标。夏天则相反，极端的天气带来的是热情与冲动，很多年轻气盛的青年也许经历了春日的懒散之后突然感受到夏天的热情，之后会一下子激起某种斗志或目标而奋发努力起来。<br/>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很多时候，如果正感觉每日消沉度日，想奋发努力拼一把的时候，端午，作为夏季的开端，倒也不乏为一个不错的时间点，以此开始，为自己想要的目标去努力拼搏。<br/>



      </div>
      </div>

      );
  }


}

export default Device




<input  id="i1" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i2" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>  
<input  id="i3" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>  
<input  id="i4" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>  
<input  id="i5" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i6" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i7" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>  
<input  id="i8" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>  
<input  id="i9" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>  
<input  id="i10" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i11" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i12" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i13" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox" />  
<input  id="i14" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox" />  
<input  id="i15" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i16" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i17" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i18" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i19" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i20" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>  
<input  id="i21" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>  
<input  id="i22" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>  
<input  id="i23" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i24" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i25" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>  
<input  id="i26" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>  
<input  id="i27" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>  
<input  id="i28" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i29" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i30" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox" />  
<input  id="i31" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox" />  
<input  id="i32" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i33" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i34" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>
<input  id="i35" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i36" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i37" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox" />  
<input  id="i38" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox" />  
<input  id="i39" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i40" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/> 
<input  id="i41" style="width:16%;height:14%;background-color:#FFFAA4" disabled="disabled" class="mini-textbox"/>
 


