import '../lib/schemas.js'

FlowRouter.route('/', {
	name: "index",
	action: function(params, query_params) {
		Tracker.autorun(function() {
			BlazeLayout.render('default', {content: 'index'});
		})
	}
})

FlowRouter.route('/addcoins', {
	name: "add_coins",
	action: function(params, query_params) {
		Tracker.autorun(function() {
			BlazeLayout.render('default', {content: 'add_coins'});
		})
	}
})

FlowRouter.route('/price_history', {
	name: "price_history",
	action: function(params, query_params) {
		Tracker.autorun(function() {
			BlazeLayout.render('default', {content: 'price_history'});
		})
	}
});
