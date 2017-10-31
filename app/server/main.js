import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	Coins.remove({});
	Coins.insert({
		coin_symbol: "BTC",
		holdings: 1.1
	})
});
