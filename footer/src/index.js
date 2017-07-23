import React, {Component} from 'react';
import {render} from 'react-dom';
import Footer from './components/Footer/Footer.jsx';
import './index.scss';

class App extends Component {
	render(){
		return (
 		<div className="page-content">
 		    <div className="wrap">
 		       <div className="main-content">
 		            <div className="page-item">  Main Content </div>
 		        {/*    <div  className="page-item">  Main Content </div>
 		            <div  className="page-item">  Main Content </div>*/}
 		       </div>
 		    </div>
 			<Footer/>
 		</div>
		)
	}
}

render(
	<App/>,
	document.getElementById('root')
)