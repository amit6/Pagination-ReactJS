import React from 'react';
import ReactDOM from 'react-dom';

class PageComponent extends React.Component {

	constructor(props){
		super(props);
	}

	createPage() {
		const pageData= this.props.pageData;
		return pageData.map((obj, ind)=>{
			return(
				<div className="card-container" key={ind}>{obj.val}</div>
			)
		});
	}

	render(){
		return(
			<div className={'page-container '+  this.props.pageClass} >
				{this.createPage()}
			</div>
		)
	}

}

export default PageComponent;