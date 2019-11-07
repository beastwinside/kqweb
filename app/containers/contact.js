// main.js
import React,{Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import { Button ,Input,List, Card,Icon,Menu,Carousel,Divider,Anchor,Collapse} from 'antd';
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import styles from '../styles/animate.css';
import Footer from './footer.js'
import hzhb from '../img/hzhb.png';
import contactbg from '../img/contactbg.jpg';
const Panel = Collapse.Panel;
var devheight=document.documentElement.clientHeight;
var devwidth=document.documentElement.clientWidth;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;




class Contact extends Component{

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

      <div >    <img   src={contactbg} style={{height:"100%",width:'100%',position:'relative'}}/></div>
 

    </div>


    <div style={{width:'100%',height:'110px',position:'relative',top:'80px'}}>

    </div>

    <div style={{width:'100%',height:'40px',position:'relative',backgroundColor:'white'}}>

    </div>

        <div style={{width:'95%',height:'60px',position:'relative',backgroundColor:'#850202',textAlign:'CENTER',color:"#FFFFFF",
        padding:'15px',fontSize:'18px',left:'0',right:'0',margin:'auto'}}>
     招聘公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | 
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  招聘职位 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    职位需求 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&
    工作地点&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  发布日期

    </div> 
    <Collapse accordion style={{width:'95%',left:'0',right:'0',margin:'auto'}} >
    <Panel header={
         <div style={{width:'95%',height:'60px',position:'relative',textAlign:'CENTER',
        padding:'15px',fontSize:'16px',left:'-50px',right:'0',margin:'auto'}}>
           贸易事业部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;贸易事业部副总经理（风控方向）
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">查看更多</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         银亿集团经营管理范围内&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 2018-03-24

    </div> 
    } key="1">
      <div style={{width:"100%",height:"100px",backgroundColor:"#F0EDED",color:'red',position:'relative',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作地点 ： 银亿集团经营管理范围内</div> 
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>薪资待遇 : 30000-40000元/月</div>
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>发布日期 : 2018-03-24</div> 
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作经验 ： 10年以上</div>
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>学历 ： 本科</div> 
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>招聘人数 : 1人</div>


      </div>

       <div style={{width:"95%",left:'0',right:'0',margin:'auto',height:"150px",backgroundColor:'#FFFFFF',fontSize:'15px',textIndent:'10px'}}>

      <strong style={{textIndent:"30px"}}> 岗位职责</strong><br/>
1、男性，年龄40岁以下，人资、行政或财务相关专业； 2、全日制本科及以上学历，持有国家一级人力资源管理师证书； 3、具备5年以上规模企业全面绩效管理工作； 4、能进行薪酬、绩效考核等方案制作并有效执行； 5、有外企工作经验，英语能作为工作语言。
        <br/><br/>
          <Button type="ghost" style={{marginLeft:'10%',width:'120px',height:"40px"}}> <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">立即申请</a> </Button>
       </div>
    </Panel>

   <Panel header={
           <div style={{width:'95%',height:'60px',position:'relative',textAlign:'CENTER',
        padding:'15px',fontSize:'16px',left:'-50px',right:'0',margin:'auto'}}>
           战略投资部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;贸易事业部副总经理（风控方向）
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">查看更多</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         银亿集团经营管理范围内&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 2018-03-24

    </div> 
    } key="2">
         <div style={{width:"100%",height:"100px",backgroundColor:"#F0EDED",color:'red',position:'relative',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作地点 ： 银亿集团经营管理范围内</div> 
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>薪资待遇 : 30000-40000元/月</div>
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>发布日期 : 2018-03-24</div> 
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作经验 ： 10年以上</div>
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>学历 ： 本科</div> 
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>招聘人数 : 1人</div>


      </div>

            <div style={{width:"95%",left:'0',right:'0',margin:'auto',height:"150px",backgroundColor:'#FFFFFF',fontSize:'15px',textIndent:'10px'}}>

      <strong style={{textIndent:"30px"}}> 岗位职责</strong><br/>
1、男性，年龄40岁以下，人资、行政或财务相关专业； 2、全日制本科及以上学历，持有国家一级人力资源管理师证书； 3、具备5年以上规模企业全面绩效管理工作； 4、能进行薪酬、绩效考核等方案制作并有效执行； 5、有外企工作经验，英语能作为工作语言。
        <br/><br/>
          <Button type="ghost" style={{marginLeft:'10%',width:'120px',height:"40px"}}> <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">立即申请</a> </Button>
       </div>
    </Panel>

<Panel header={
          <div style={{width:'95%',height:'60px',position:'relative',textAlign:'CENTER',
        padding:'15px',fontSize:'16px',left:'-50px',right:'0',margin:'auto'}}>
           综合管理部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;贸易事业部副总经理（风控方向）
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">查看更多</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         银亿集团经营管理范围内&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 2018-03-24

    </div> 
    } key="3">
   <div style={{width:"100%",height:"100px",backgroundColor:"#F0EDED",color:'red',position:'relative',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作地点 ： 银亿集团经营管理范围内</div> 
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>薪资待遇 : 30000-40000元/月</div>
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>发布日期 : 2018-03-24</div> 
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作经验 ： 10年以上</div>
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>学历 ： 本科</div> 
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>招聘人数 : 1人</div>


      </div>

      
          <div style={{width:"95%",left:'0',right:'0',margin:'auto',height:"150px",backgroundColor:'#FFFFFF',fontSize:'15px',textIndent:'10px'}}>

      <strong style={{textIndent:"30px"}}> 岗位职责</strong><br/>
1、男性，年龄40岁以下，人资、行政或财务相关专业； 2、全日制本科及以上学历，持有国家一级人力资源管理师证书； 3、具备5年以上规模企业全面绩效管理工作； 4、能进行薪酬、绩效考核等方案制作并有效执行； 5、有外企工作经验，英语能作为工作语言。
        <br/><br/>
          <Button type="ghost" style={{marginLeft:'10%',width:'120px',height:"40px"}}> <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">立即申请</a> </Button>
       </div>
    </Panel>

    <Panel header={
           <div style={{width:'95%',height:'60px',position:'relative',textAlign:'CENTER',
        padding:'15px',fontSize:'16px',left:'-50px',right:'0',margin:'auto'}}>
           进出口贸易&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;贸易事业部副总经理（风控方向）
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">查看更多</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         银亿集团经营管理范围内&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 2018-03-24

    </div> 
    } key="4">
     <div style={{width:"100%",height:"100px",backgroundColor:"#F0EDED",color:'red',position:'relative',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作地点 ： 银亿集团经营管理范围内</div> 
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>薪资待遇 : 30000-40000元/月</div>
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>发布日期 : 2018-03-24</div> 
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作经验 ： 10年以上</div>
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>学历 ： 本科</div> 
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>招聘人数 : 1人</div>


    
      </div>
          <div style={{width:"95%",left:'0',right:'0',margin:'auto',height:"150px",backgroundColor:'#FFFFFF',fontSize:'15px',textIndent:'10px'}}>

      <strong style={{textIndent:"30px"}}> 岗位职责</strong><br/>
1、男性，年龄40岁以下，人资、行政或财务相关专业； 2、全日制本科及以上学历，持有国家一级人力资源管理师证书； 3、具备5年以上规模企业全面绩效管理工作； 4、能进行薪酬、绩效考核等方案制作并有效执行； 5、有外企工作经验，英语能作为工作语言。
        <br/><br/>
          <Button type="ghost" style={{marginLeft:'10%',width:'120px',height:"40px"}}> <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">立即申请</a> </Button>
       </div>
    </Panel>

    <Panel header={
           <div style={{width:'95%',height:'60px',position:'relative',textAlign:'CENTER',
        padding:'15px',fontSize:'16px',left:'-50px',right:'0',margin:'auto'}}>
           贸易事业部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;贸易事业部副总经理（风控方向）
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">查看更多</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         银亿集团经营管理范围内&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 2018-03-24

    </div> 
    } key="5">
      <div style={{width:"100%",height:"100px",backgroundColor:"#F0EDED",color:'red',position:'relative',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作地点 ： 银亿集团经营管理范围内</div> 
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>薪资待遇 : 30000-40000元/月</div>
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>发布日期 : 2018-03-24</div> 
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作经验 ： 10年以上</div>
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>学历 ： 本科</div> 
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>招聘人数 : 1人</div>


    
      </div>
          <div style={{width:"95%",left:'0',right:'0',margin:'auto',height:"150px",backgroundColor:'#FFFFFF',fontSize:'15px',textIndent:'10px'}}>

      <strong style={{textIndent:"30px"}}> 岗位职责</strong><br/>
1、男性，年龄40岁以下，人资、行政或财务相关专业； 2、全日制本科及以上学历，持有国家一级人力资源管理师证书； 3、具备5年以上规模企业全面绩效管理工作； 4、能进行薪酬、绩效考核等方案制作并有效执行； 5、有外企工作经验，英语能作为工作语言。
        <br/><br/>
          <Button type="ghost" style={{marginLeft:'10%',width:'120px',height:"40px"}}> <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">立即申请</a> </Button>
       </div>
    </Panel>

    <Panel header={
           <div style={{width:'95%',height:'60px',position:'relative',textAlign:'CENTER',
        padding:'15px',fontSize:'16px',left:'-50px',right:'0',margin:'auto'}}>
           贸易事业部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;贸易事业部副总经理（风控方向）
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">查看更多</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         银亿集团经营管理范围内&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 2018-03-24

    </div> 
    } key="6">
      <div style={{width:"100%",height:"100px",backgroundColor:"#F0EDED",color:'red',position:'relative',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作地点 ： 银亿集团经营管理范围内</div> 
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>薪资待遇 : 30000-40000元/月</div>
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>发布日期 : 2018-03-24</div> 
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作经验 ： 10年以上</div>
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>学历 ： 本科</div> 
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>招聘人数 : 1人</div>


    
      </div>
          <div style={{width:"95%",left:'0',right:'0',margin:'auto',height:"150px",backgroundColor:'#FFFFFF',fontSize:'15px',textIndent:'10px'}}>

      <strong style={{textIndent:"30px"}}> 岗位职责</strong><br/>
1、男性，年龄40岁以下，人资、行政或财务相关专业； 2、全日制本科及以上学历，持有国家一级人力资源管理师证书； 3、具备5年以上规模企业全面绩效管理工作； 4、能进行薪酬、绩效考核等方案制作并有效执行； 5、有外企工作经验，英语能作为工作语言。
        <br/><br/>
          <Button type="ghost" style={{marginLeft:'10%',width:'120px',height:"40px"}}> <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">立即申请</a> </Button>
       </div>
    </Panel>

    <Panel header={
            <div style={{width:'95%',height:'60px',position:'relative',textAlign:'CENTER',
        padding:'15px',fontSize:'16px',left:'-50px',right:'0',margin:'auto'}}>
           贸易事业部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;贸易事业部副总经理（风控方向）
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">查看更多</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         银亿集团经营管理范围内&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 2018-03-24

    </div> 
    } key="7">
    <div style={{width:"100%",height:"100px",backgroundColor:"#F0EDED",color:'red',position:'relative',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作地点 ： 银亿集团经营管理范围内</div> 
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>薪资待遇 : 30000-40000元/月</div>
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>发布日期 : 2018-03-24</div> 
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作经验 ： 10年以上</div>
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>学历 ： 本科</div> 
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>招聘人数 : 1人</div>


    
      </div>
          <div style={{width:"95%",left:'0',right:'0',margin:'auto',height:"150px",backgroundColor:'#FFFFFF',fontSize:'15px',textIndent:'10px'}}>

      <strong style={{textIndent:"30px"}}> 岗位职责</strong><br/>
1、男性，年龄40岁以下，人资、行政或财务相关专业； 2、全日制本科及以上学历，持有国家一级人力资源管理师证书； 3、具备5年以上规模企业全面绩效管理工作； 4、能进行薪酬、绩效考核等方案制作并有效执行； 5、有外企工作经验，英语能作为工作语言。
        <br/><br/>
          <Button type="ghost" style={{marginLeft:'10%',width:'120px',height:"40px"}}> <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">立即申请</a> </Button>
       </div>
    </Panel>

    <Panel header={
            <div style={{width:'95%',height:'60px',position:'relative',textAlign:'CENTER',
        padding:'15px',fontSize:'16px',left:'-50px',right:'0',margin:'auto'}}>
           贸易事业部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;贸易事业部副总经理（风控方向）
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">查看更多</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         银亿集团经营管理范围内&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 2018-03-24

    </div> 
    } key="8">
      <div style={{width:"100%",height:"100px",backgroundColor:"#F0EDED",color:'red',position:'relative',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作地点 ： 银亿集团经营管理范围内</div> 
     <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>薪资待遇 : 30000-40000元/月</div>
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>发布日期 : 2018-03-24</div> 
      <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>工作经验 ： 10年以上</div>
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>学历 ： 本科</div> 
       <div style={{textAlign:'center',fontSize:'10px',width:'33%',height:"45%",backgroundColor:'#FFFFFF',color:'#373737'}}>招聘人数 : 1人</div>


    
      </div>
          <div style={{width:"95%",left:'0',right:'0',margin:'auto',height:"150px",backgroundColor:'#FFFFFF',fontSize:'15px',textIndent:'10px'}}>

      <strong style={{textIndent:"30px"}}> 岗位职责</strong><br/>
1、男性，年龄40岁以下，人资、行政或财务相关专业； 2、全日制本科及以上学历，持有国家一级人力资源管理师证书； 3、具备5年以上规模企业全面绩效管理工作； 4、能进行薪酬、绩效考核等方案制作并有效执行； 5、有外企工作经验，英语能作为工作语言。
        <br/><br/>
          <Button type="ghost" style={{marginLeft:'10%',width:'120px',height:"40px"}}> <a href="http://hr.chinayinyi.com:8080/scripts/mgrqispi.dll?Appname=HRsoft2000&Prgname=REC2_RESUME_ENTRY&ARGUMENTS=-A,-A,-A49,-A3,-A">立即申请</a> </Button>
       </div>
    </Panel>


</Collapse>

<Footer/>

    </div>

    );
}


}

export default Contact




 
