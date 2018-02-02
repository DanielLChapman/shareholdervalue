import { GRAB_STOCKS, LOAD_JSON, yearTest, SORT_STATE, customYearBool, customYearLow, customYearHigh } from '../actions/index';

const dateToCompareFor1Year = new Date('2017-12-01').valueOf();
const dateToCompareFor3Year = new Date('2015-12-01').valueOf();
const dateToCompareFor5Year = new Date('2013-12-01').valueOf();

export default function (state = [], action) {
	switch (action.type) {
		case LOAD_JSON:
			state = action.payload;
			state.map((s) => {
			
				s.historic = 0;
				s.current = 0;
				s.dividends = 0;
				s.yield = 0;
				s.appreciation = 0;
				s.tsv = 0;
				
			});
			return [...state];
			break;
		case GRAB_STOCKS:
			let tempData = [];
			let totalDividends = 0;
			//maybe up here set which value to use based on year test
			let datetoUse = dateToCompareFor3Year;
			switch(yearTest) {
				case 1: 
					datetoUse = dateToCompareFor1Year;
					break;
				case 3: 
					datetoUse = dateToCompareFor3Year;
					break;
				case 5: 
					datetoUse = dateToCompareFor5Year;
					break;
				default:
					datetoUse = dateToCompareFor3Year;
			}
			if (action.payload.data) {
				try {
					const symbol = action.payload.data['Meta Data']['2. Symbol'];
					let data = action.payload.data["Monthly Adjusted Time Series"];
					const keys = Object.keys(data);
					keys.map((x) => {
						let tempDate = new Date(x);
						customYearBool ?
						(tempDate.valueOf() >= new Date(customYearLow) && tempDate.valueOf() <= new Date(customYearHigh)) ? tempData.push(data[x]) : null:
						tempDate.valueOf() > datetoUse ? tempData.push(data[x]) : null;
				
					});
					tempData.map((x) => {
						totalDividends += parseFloat(x['7. dividend amount']);
					})
					const historicPrice = parseFloat(tempData[tempData.length - 1]['5. adjusted close']);
					const currentPrice = parseFloat(tempData[0]['5. adjusted close']);
					const yieldValue = parseFloat((totalDividends/historicPrice)*100);
					const priceAppreciation = parseFloat((currentPrice-historicPrice)/historicPrice*100);
					const tsv = yieldValue + priceAppreciation;
					
					state.map((s) => {
						if (s.symbol === symbol) {
							s.historic = historicPrice.toFixed(2);
							s.current = currentPrice.toFixed(2);
							s.dividends = totalDividends.toFixed(2);
							s.yield = yieldValue.toFixed(2);
							s.appreciation = priceAppreciation.toFixed(2);
							s.tsv = tsv.toFixed(2);
						}
					});


				}
				catch(err) {
					console.log(err);
				} finally {
					return [...state];
				}
			}
			return state;
			break;
		case SORT_STATE: 
			state = state.sort(function sortByKey(a, b) {
				return parseFloat(b.tsv) < parseFloat(a.tsv) ? -1
					: parseFloat(b.tsv) > parseFloat(a.tsv) ? 1
					: 0;
			});
			return [...state];
		default:
			return state;
	}
}
