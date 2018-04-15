module.exports = {
	Robinhood: {
		User: require('./objects/robinhood/User'),
		Instrument: require('./objects/robinhood/Instrument'),
		Fundamentals: require('./objects/robinhood/Fundamentals'),
		Market: require('./objects/robinhood/Market'),
		Order: require('./objects/robinhood/Order'),
		Portfolio: require('./objects/robinhood/Portfolio'),
		OptionOrder: require('./objects/robinhood/OptionOrder'),
		OptionInstrument: require('./objects/robinhood/OptionInstrument')
	},
	Data: {
		OptionsChain: require('./objects/data/OptionsChain'),
		Stream: require('./objects/data/Stream'),
		Query: require('./objects/data/Query'),
		AlphaVantage: require('./objects/data/AlphaVantage')
	}
};