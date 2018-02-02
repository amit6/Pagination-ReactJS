import React from 'React';
import ReactDOM from 'react-dom';

class CardComponent extends React.Component{

	constructor(props){
		super(props);
		this.state= {
			cards: []
		}
	}

	getCards() {
		const count= this.props.count;
		for(let i=count; i<10+count; i++){
			<div className="card">{{i}}</div>
		}
	}

	render() {
		return(
			<div className="card-container">
				{this.getCards()}
			</div>
		)
	}

}

export default CardComponent;