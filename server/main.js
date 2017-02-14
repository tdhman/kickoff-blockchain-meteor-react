import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({
  connectToBlockchain: function(admin){
  	let web3;

    if (typeof Meteor.settings.blockchain === 'undefined')
		throw new Meteor.Error(500, "ERROR 500: NOT FOUND", "Cannot connect to blockchain server");

	if(typeof web3 === 'undefined'){
		web3 = new Web3.providers.HttpProvider(Meteor.settings.blockchain);
	}

    return web3;
  }
});