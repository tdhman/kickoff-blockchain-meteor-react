import React from 'react';

export class Overview  extends React.Component {
	constructor(props) {
		super(props);
	    this.state = {};
	}

	componentDidMount() {
		Meteor.call('connectToBlockchain', function(error, result){
	        if (error) {
	          console.log(error);
	        } else if (typeof result !== 'undefined') {
	        	console.log(result);
	        }
	    });
	}

	render() {
		return (
			<div className="overview">
				<div className="overview-page ui-view main" key="overview"> 
			        <a href="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Reports</a> 
			        <h2>Overview <small>Why is Ani Theme so awesome?</small></h2> 
			        <div className="jumbotron"> 
						<h1>Welcome!</h1> I don't want to bloat this Ani Theme Free Edition AngularJS Admin theme with a lot of plugins. To install plugins we have bower. Let's keep it real clean!
						<br /><br /> 
						<p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
			        </div> 
			    </div>
			</div>
		);
	}
}

export default Overview;