import React from 'react';
import ReactDOM from 'react-dom';
import PageComponent from './Page-Component.jsx';

class MainComponent extends React.Component{

	constructor(props){
		super(props);
		this.state= {
			paginationData: [],
			paginationClasses: [],
			currentPage: 0,
			next: 'active',
			previous: 'not-active',
			entries: [{val:1},{val:2},{val:3},{val:4},{val:5},{val:6},{val:7},{val:8},{val:9},{val:10},{val:11},{val:12},{val:13},{val:14},{val:15},{val:16},{val:17},{val:18},{val:19},{val:20},{val:21},{val:22},{val:23},{val:24},{val:25},{val:26},{val:27},{val:28},{val:29},{val:30}]
		}
	}

	componentDidMount() {
		let temp= [];
		let pageData= [];

		for(let i=1; i<=this.state.entries.length; i++){
			temp.push(this.state.entries[i-1]);
			if(i!==0 && i%10 === 0){
				pageData.push(temp);
				temp= [];
			}

			if(i === this.state.entries.length && temp.length > 0){
				pageData.push(temp);
			}
		}

		this.setState({
			paginationData: pageData
		});

		let paginationClasses= new Array(pageData.length).fill('not-active');
		paginationClasses[0]= 'active'

		this.setState({
			paginationClasses: paginationClasses
		})

		this.setState({
			next: pageData.length === 0 ? 'not-active': 'active'
		})

	}

	getPages() {
		const paginationData= this.state.paginationData;
		return paginationData.map((obj, ind)=>{
			return(<PageComponent pageData={obj} pageClass={this.state.paginationClasses[ind]} key={ind} />);
		});
	}

	getNavNumbers() {
		const paginationData= this.state.paginationData;
		return paginationData.map((obj, ind)=>{
			return(<li><a href="#" key={ind} onClick={this._handlePage.bind(this, ind)} className={this.state.paginationClasses[ind]}>{ind+1}</a></li>);
		});
	}

	_handlePage(ind, elemClass, event) {
		let paginationClasses= new Array(this.state.paginationData.length).fill('not-active');
		let pos=0;

		if(elemClass === 'previous' || elemClass === 'next'){
			pos= this.state.currentPage + Number(ind)
		}
		else {
			pos= ind;
		}

		paginationClasses[pos]= 'active';

		this.setState({
			paginationClasses: paginationClasses
		})

		this.setState({
			currentPage: pos
		})

		if(pos === 0){
			this.setState({
				previous: 'not-active',
				next: 'active'
			});
		}else{
			this.setState({
				previous:'active'
			})
		}

		if(pos === this.state.paginationData.length-1){
			this.setState({
				previous: 'active',
				next: 'not-active'
			});
		}else{
			this.setState({
				next:'active'
			})
		}
	}

	render(){
		return(
			<div className="pagination-wrapper">
				<div className="pagination-container">
					{this.getPages()}
				</div>
				<div className="pagination-buttons">
					<div class="total-pages">
						<span>Page</span>
						<span>#</span>
						<span>of, </span>
						<span>{this.state.paginationData.length}</span>
					</div>
					<div className="button-nav">
						<a href="#" onClick={this._handlePage.bind(this, -1, 'previous')} className={"previous "+this.state.previous}>Previous</a>
						<ul>{this.getNavNumbers()}</ul>
						<a href="#" onClick={this._handlePage.bind(this, 1, 'next')} className={"next "+this.state.next}>Next</a>
					</div>
				</div>
			</div>
		)
	}

}

export default MainComponent;