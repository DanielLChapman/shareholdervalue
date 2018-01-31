const axios = require('axios');
const apiKey = process.env.API_KEY;

exports.homePage = (req, res) => {
	res.render('index', {title: 'Index'});
}

exports.fetchStockInformation = (req, res) => {
	const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${req.query.stock}&apikey=${process.env.API_KEY}`;

	axios.get(url)
			.then((response) => {
				//let responseData = prepareData(response.data);
				res.json(response.data);
			})
			.catch((err) => {
				console.log(err);
				res.send({err});
			});

}