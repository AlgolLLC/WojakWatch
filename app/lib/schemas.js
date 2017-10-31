import SimpleSchema from 'simpl-schema';
var Schemas = {}

Schemas.Coins = new SimpleSchema({
	coin_symbol: {
		type: String,
		label: "Coin",
		allowedValues: ["BTC", "LTC", "ETH"]
	},
	holdings: {
		type: Number,
		defaultValue: 0
	}
})

Schemas.PriceHistory = new SimpleSchema({
	coin_symbol: {
		type: String,
		label: "Coin",
		allowedValues: ["BTC", "LTC", "ETH"]
	},
	time: {
		type: String,
		label: "Unix Timestamp"
	}
})

Coins = new Mongo.Collection("coins");
Coins.attachSchema(Schemas.Coins);

PriceHistory = new Mongo.Collection("price_history");
PriceHistory.attachSchema(Schemas.PriceHistory);
