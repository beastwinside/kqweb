import React,{Component} from 'react'
import styles from '../styles/maincontainer.css';//导入
import{Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import { Carousel } from 'antd';
import { Collapse } from 'antd';
import { Tabs } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import { List, Card,Table} from 'antd';
import Login from './login.js'
import Test from './test.js'
import Top from './top.js'
import Mainpage from './mainpage.js'
import Producation from './Producation.js'
import Showcontainercp from './showcontainercp.js'
import Footer from './footer.js'
import Device from './device.js'
import Partner from './partner.js'
import Contact from './contact.js'
import News from './news.js'
import Newdetail from './newdetail.js'
import Jstz from './jstz.js'
import Txrz from './txrz.js'

import Qcjgj from './qcjgj.js'
import Yyft from './yyft.js'
import Xnydcbkt from './xnydcbkt.js'
import Xnydjkt from './xnydjkt.js'


class Maincontainer  extends Component{
	render(){
		return(

			<div style={{position:'absolute',Left:'0',Right:'0',margin:'auto',width:'100%',height:'100%',Width:"1300px",fontFamily:"KaiTi"}}>
			
			<HashRouter history={hashHistory}>

			<div style={{position:"relative",width:'100%',height:'100%'}}>
			<Route   path="/" component={Top} />
			
			<Route    path="/producation" component={Producation} />
			<Route   exact path="/producation/cp1" component={Showcontainercp} />
			<Route    path="/partner" component={Partner} />
			<Route    path="/device" component={Device} />
			<Route    path="/contact" component={Contact} />
			<Route    path="/news" component={News} />
			<Route    path="/newdetail" component={Newdetail} />
			<Route    path="/jstz" component={Jstz} />
			<Route    path="/txrz" component={Txrz} />
			<Route    path="/qcjgj" component={Qcjgj} />
			<Route    path="/yyft" component={Yyft} />
			<Route    path="/xnydcbkt" component={Xnydcbkt} />
    		<Route    path="/xnydjkt" component={Xnydjkt} />


			
			<Route  exact path="/test" component={Test} />
			<Route  exact path="/login" component={Login} />
			<Route  exact path="/" component={Mainpage} />
		
			</div>
			</HashRouter>

			</div>
			);
	}

}

export default Maincontainer