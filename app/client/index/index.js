var CoinMarketCap = require("node-coinmarketcap");
var coinmarketcap = new CoinMarketCap();

Template.index.onRendered(function() {

});

Template.index.helpers({
	coins: function() {
		var result = []

		coins = Coins.find({}).fetch();
		coins.map(function(coin) {
			// Get price of coin
			result.push({
				coin_symbol: coin.coin_symbol,
				holdings: coin.holdings,
				fiat_value: coin.holdings*10
			})
		})
		
		
		return result;
	}
})
