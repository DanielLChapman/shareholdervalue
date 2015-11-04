var urlD3y = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.dividendhistory%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)%20and%20startDate%20%3D%20%222012-12-31%22%20and%20endDate%20%3D%20%222015-12-31%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";

var urlD1y = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.dividendhistory%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)%20and%20startDate%20%3D%20%222014-12-31%22%20and%20endDate%20%3D%20%222015-12-31%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";

var urlD5y = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.dividendhistory%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)%20and%20startDate%20%3D%20%222010-12-31%22%20and%20endDate%20%3D%20%222015-12-31%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";

var urlCSQ = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";

var urlHSQ1y = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)%20and%20startDate%20%3D%20%222014-12-31%22%20and%20endDate%20%3D%20%222014-12-31%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback="

var urlHSQ3y = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)%20and%20startDate%20%3D%20%222012-12-31%22%20and%20endDate%20%3D%20%222012-12-31%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback="

var urlHSQ5y = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)%20and%20startDate%20%3D%20%222010-12-31%22%20and%20endDate%20%3D%20%222010-12-31%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback="

var url2UseH = "";
var url2UseD = "";

var stockArray = new Array(35);
for (var i = 0; i < 35; i++) {
  stockArray[i] = [0,0,0,0, 0, 0, 0, ""];
}
var nameBool = false;
var sCount=hCount=cCount=dCount=yCount=pCount=tCount=0;
function getDividends(urlToUse) {
	for (var i = 0; i < 35; i++) {
  		stockArray[i][3] = 0;
	}
    var url = urlToUse;

    $.getJSON(url)
        .done(function (data) {
        var Symbol, count = 0;
        for(Symbol in data.query.results.quote) {
 			 if(data.query.results.quote.hasOwnProperty(Symbol)) {
 			  	var tempSymbols = data.query.results.quote[Symbol].Symbol;
				var dividends = data.query.results.quote[Symbol].Dividends
				if (tempSymbols === "WMT") {
					stockArray[0][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "CTL") {
					stockArray[1][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "AXP") {
					stockArray[2][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "CAT") {
					stockArray[3][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "CVX") {
					stockArray[4][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "PG") {
					stockArray[5][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "UTX") {
					stockArray[6][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "DD") {
					stockArray[7][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "IBM") {
					stockArray[8][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "XOM") {
					stockArray[9][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "INTC") {
					stockArray[10][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "GS") {
					stockArray[11][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "MMM") {
					stockArray[12][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "MRK") {
					stockArray[13][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "JNJ") {
					stockArray[14][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "^GSPC") {
					stockArray[15][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "KO") {
					stockArray[16][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "VZ") {
					stockArray[17][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "T") {
					stockArray[18][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "JPM") {
					stockArray[19][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "CSCO") {
					stockArray[20][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "TRV") {
					stockArray[21][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "CMCSA") {
					stockArray[22][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "PFE") {
					stockArray[23][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "S") {
					stockArray[24][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "MSFT") {
					stockArray[25][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "BA") {
					stockArray[26][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "GE") {
					stockArray[27][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "UNH") {
					stockArray[28][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "V") {
					stockArray[29][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "HD") {
					stockArray[30][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "DIS") {
					stockArray[31][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "MCD") {
					stockArray[32][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "TWC") {
					stockArray[33][3]+=parseFloat(dividends);
				}
				else if (tempSymbols === "NKE") {
					stockArray[34][3]+=parseFloat(dividends);
				}
 			 }
		}
		output();
    })
        .fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
            $("#result").text('Request failed: ' + err);
    });
}

function getHistoryPrice(urlToUse) {
	for (var i = 0; i < 35; i++) {
  		stockArray[i][1] = 0;
	}
    var url = urlToUse;

    $.getJSON(url)
        .done(function (data) {
        var Symbol, count = 0;
        for(Symbol in data.query.results.quote) {
 			 if(data.query.results.quote.hasOwnProperty(Symbol)) {
 			  	var tempSymbols = data.query.results.quote[Symbol].Symbol;
				var dividends = data.query.results.quote[Symbol].Close;
				if (tempSymbols === "WMT") {
					stockArray[0][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "CTL") {
					stockArray[1][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "AXP") {
					stockArray[2][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "CAT") {
					stockArray[3][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "CVX") {
					stockArray[4][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "PG") {
					stockArray[5][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "UTX") {
					stockArray[6][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "DD") {
					stockArray[7][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "IBM") {
					stockArray[8][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "XOM") {
					stockArray[9][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "INTC") {
					stockArray[10][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "GS") {
					stockArray[11][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "MMM") {
					stockArray[12][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "MRK") {
					stockArray[13][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "JNJ") {
					stockArray[14][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "^GSPC") {
					stockArray[15][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "KO") {
					stockArray[16][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "VZ") {
					stockArray[17][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "T") {
					stockArray[18][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "JPM") {
					stockArray[19][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "CSCO") {
					stockArray[20][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "TRV") {
					stockArray[21][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "CMCSA") {
					stockArray[22][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "PFE") {
					stockArray[23][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "S") {
					stockArray[24][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "MSFT") {
					stockArray[25][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "BA") {
					stockArray[26][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "GE") {
					stockArray[27][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "UNH") {
					stockArray[28][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "V") {
					stockArray[29][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "HD") {
					stockArray[30][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "DIS") {
					stockArray[31][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "MCD") {
					stockArray[32][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "TWC") {
					stockArray[33][1]+=parseFloat(dividends);
				}
				else if (tempSymbols === "NKE") {
					stockArray[34][1]+=parseFloat(dividends);
				}
 			 }
		}
		getDividends(url2UseD);
    })
        .fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
            $("#result").text('Request failed: ' + err);
    });
}

function getCurrentStock(urlToUse) {
	for (var i = 0; i < 35; i++) {
  		stockArray[i][2] = 0;
	}
    var url = urlToUse;

    $.getJSON(url)
        .done(function (data) {
        var Symbol, count = 0;
        for(Symbol in data.query.results.quote) {
 			 if(data.query.results.quote.hasOwnProperty(Symbol)) {
 			  	var tempSymbols = data.query.results.quote[Symbol].symbol;
 			  	var name = data.query.results.quote[Symbol].Name;
				var dividends = data.query.results.quote[Symbol].LastTradePriceOnly
				if (tempSymbols === "WMT") {
					stockArray[0][0] = tempSymbols;
					stockArray[0][2]+=parseFloat(dividends);
					stockArray[0][7] = name;
				}
				else if (tempSymbols === "CTL") {
					stockArray[1][0] = tempSymbols;
					stockArray[1][2]+=parseFloat(dividends);
					stockArray[1][7] = name;
				}
				else if (tempSymbols === "AXP") {
					stockArray[2][0] = tempSymbols;
					stockArray[2][2]+=parseFloat(dividends);
					stockArray[2][7] = name;
				}
				else if (tempSymbols === "CAT") {
					stockArray[3][0] = tempSymbols;
					stockArray[3][2]+=parseFloat(dividends);
					stockArray[3][7] = name;
				}
				else if (tempSymbols === "CVX") {
					stockArray[4][0] = tempSymbols;
					stockArray[4][2]+=parseFloat(dividends);
					stockArray[4][7] = name;
				}
				else if (tempSymbols === "PG") {
					stockArray[5][0] = tempSymbols;
					stockArray[5][2]+=parseFloat(dividends);
					stockArray[5][7] = name;
				}
				else if (tempSymbols === "UTX") {
					stockArray[6][0] = tempSymbols;
					stockArray[6][2]+=parseFloat(dividends);
					stockArray[6][7] = name;
				}
				else if (tempSymbols === "DD") {
					stockArray[7][0] = tempSymbols;
					stockArray[7][2]+=parseFloat(dividends);
					stockArray[7][7] = name;
				}
				else if (tempSymbols === "IBM") {
					stockArray[8][0] = tempSymbols;
					stockArray[8][2]+=parseFloat(dividends);
					stockArray[8][7] = name;
				}
				else if (tempSymbols === "XOM") {
					stockArray[9][0] = tempSymbols;	
					stockArray[9][2]+=parseFloat(dividends);
					stockArray[9][7] = name;
				}
				else if (tempSymbols === "INTC") {
					stockArray[10][0] = tempSymbols;
					stockArray[10][2]+=parseFloat(dividends);
					stockArray[10][7] = name;
				}
				else if (tempSymbols === "GS") {
					stockArray[11][0] = tempSymbols;
					stockArray[11][2]+=parseFloat(dividends);
					stockArray[11][7] = name;
				}
				else if (tempSymbols === "MMM") {
					stockArray[12][0] = tempSymbols;
					stockArray[12][2]+=parseFloat(dividends);
					stockArray[12][7] = name;
				}
				else if (tempSymbols === "MRK") {
					stockArray[13][0] = tempSymbols;
					stockArray[13][2]+=parseFloat(dividends);
					stockArray[13][7] = name;
				}
				else if (tempSymbols === "JNJ") {
					stockArray[14][0] = tempSymbols;
					stockArray[14][2]+=parseFloat(dividends);
					stockArray[14][7] = name;
				}
				else if (tempSymbols === "^GSPC") {
					stockArray[15][0] = tempSymbols;
					stockArray[15][2]+=parseFloat(dividends);
					stockArray[15][7] = name;
				}
				else if (tempSymbols === "KO") {
					stockArray[16][0] = tempSymbols;
					stockArray[16][2]+=parseFloat(dividends);
					stockArray[16][7] = name;
				}
				else if (tempSymbols === "VZ") {
					stockArray[17][0] = tempSymbols;
					stockArray[17][2]+=parseFloat(dividends);
					stockArray[17][7] = name;
				}
				else if (tempSymbols === "T") {
					stockArray[18][0] = tempSymbols;
					stockArray[18][2]+=parseFloat(dividends);
					stockArray[18][7] = name;
				}
				else if (tempSymbols === "JPM") {
					stockArray[19][0] = tempSymbols;
					stockArray[19][2]+=parseFloat(dividends);
					stockArray[19][7] = name;
				}
				else if (tempSymbols === "CSCO") {
					stockArray[20][0] = tempSymbols;
					stockArray[20][2]+=parseFloat(dividends);
					stockArray[20][7] = name;
				}
				else if (tempSymbols === "TRV") {
					stockArray[21][0] = tempSymbols;
					stockArray[21][2]+=parseFloat(dividends);
					stockArray[21][7] = name;
				}
				else if (tempSymbols === "CMCSA") {
					stockArray[22][0] = tempSymbols;
					stockArray[22][2]+=parseFloat(dividends);
					stockArray[22][7] = name;
				}
				else if (tempSymbols === "PFE") {
					stockArray[23][0] = tempSymbols;
					stockArray[23][2]+=parseFloat(dividends);
					stockArray[23][7] = name;
				}
				else if (tempSymbols === "S") {
					stockArray[24][0] = tempSymbols;
					stockArray[24][2]+=parseFloat(dividends);
					stockArray[24][7] = name;
				}
				else if (tempSymbols === "MSFT") {
					stockArray[25][0] = tempSymbols;
					stockArray[25][2]+=parseFloat(dividends);
					stockArray[25][7] = name;
				}
				else if (tempSymbols === "BA") {
					stockArray[26][0] = tempSymbols;
					stockArray[26][2]+=parseFloat(dividends);
					stockArray[26][7] = name;
				}
				else if (tempSymbols === "GE") {
					stockArray[27][0] = tempSymbols;
					stockArray[27][2]+=parseFloat(dividends);
					stockArray[27][7] = name;
				}
				else if (tempSymbols === "UNH") {
					stockArray[28][0] = tempSymbols;
					stockArray[28][2]+=parseFloat(dividends);
					stockArray[28][7] = name;
				}
				else if (tempSymbols === "V") {
					stockArray[29][0] = tempSymbols;
					stockArray[29][2]+=parseFloat(dividends);
					stockArray[29][7] = name;
				}
				else if (tempSymbols === "HD") {
					stockArray[30][0] = tempSymbols;
					stockArray[30][2]+=parseFloat(dividends);
					stockArray[30][7] = name;
				}
				else if (tempSymbols === "DIS") {
					stockArray[31][0] = tempSymbols;
					stockArray[31][2]+=parseFloat(dividends);
					stockArray[31][7] = name;
				}
				else if (tempSymbols === "MCD") {
					stockArray[32][0] = tempSymbols;
					stockArray[32][2]+=parseFloat(dividends);
					stockArray[32][7] = name;
				}
				else if (tempSymbols === "TWC") {
					stockArray[33][0] = tempSymbols;
					stockArray[33][2]+=parseFloat(dividends);
					stockArray[33][7] = name;
				}
				else if (tempSymbols === "NKE") {
					stockArray[34][0] = tempSymbols;
					stockArray[34][2]+=parseFloat(dividends);
					stockArray[34][7] = name;
				}
 			 }
		}
		getHistoryPrice(url2UseH);
    })
        .fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
            $("#result").text('Request failed: ' + err);
    });
}
function selectionSort(items, selectVariable) {
  var length = items.length;
  
  for (var i = 0; i < length-1; i++) { //Number of passes
    var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
    for (var j = i+1; j < length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
      if(parseFloat(items[j][selectVariable]) < parseFloat(items[min][selectVariable])) { //Compare the numbers
        min = j; //Change the current min number position if a smaller num is found
      }
    }
    if(min != i) { //After each pass, if the current min num != initial min num, exchange the position.
      //Swap the numbers
      var tmp = items[i];
      items[i] = items[min];
      items[min] = tmp;
    }
  }
}
function selectionSortSymbol(items) {
  var length = items.length;
  
  for (var i = 0; i < length-1; i++) { //Number of passes
    var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
    for (var j = i+1; j < length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
      if(items[j][0] < items[min][0]) { //Compare the numbers
        min = j; //Change the current min number position if a smaller num is found
      }
    }
    if(min != i) { //After each pass, if the current min num != initial min num, exchange the position.
      //Swap the numbers
      var tmp = items[i];
      items[i] = items[min];
      items[min] = tmp;
    }
  }
}
function output() {

	for (var i = 0; i < 35; i++) {
		var BSP = stockArray[i][1];
		var CSP = stockArray[i][2];
		var Yield = stockArray[i][3]/BSP*100;
		var PA = (CSP - BSP)/BSP*100;
		var TSV = Yield + PA;
		stockArray[i][4] = Yield;
		stockArray[i][5] = PA;
		stockArray[i][6] = TSV;
	}
	selectionSort(stockArray, 6);
	stockArray.reverse();
	updateFunction();
	
}
function clearList() {
	$('#table2excel').empty();
	$('#table2excel').append('<thead><tr><th>Position</th><th onclick="ssort(\'S\')">Symbol</th><th onclick="ssort(\'H\')">Historic Price</th><th onclick="ssort(\'C\')">Current Price</th><th onclick="ssort(\'D\')">Dividends</th><th onclick="ssort(\'Y\')">Yield</th><th onclick="ssort(\'P\')">Price Appreciation</th><th onclick="ssort(\'T\')">TSV</th></tr></thead><tbody>');
}
function f1yrURL() {
	$('#currentYear').empty();
	clearList();
	$('#currentYear').append("<p>Current Year: 1yr</p>");
	url2UseH = urlHSQ1y;
	url2UseD = urlD1y;
	getCurrentStock(urlCSQ);
	console.log("1 yr");
}
function f3yrURL() {
	$('#currentYear').empty();
	clearList();
	$('#currentYear').append("<p>Current Year: 3yr</p>");
	url2UseH = urlHSQ3y;
	url2UseD = urlD3y;
	getCurrentStock(urlCSQ);
	console.log("3 yr");
}
function f5yrURL() {
	$('#currentYear').empty();
	clearList();
	$('#currentYear').append("<p>Current Year: 5yr</p>");
	url2UseH = urlHSQ5y;
	url2UseD = urlD5y;
	getCurrentStock(urlCSQ);
	console.log("5 yr");
}
function updateFunction() {
	clearList();
	for (var i=0; i< 35; i++ ) {
		for (var q = 1; q <= 6; q++) {
			stockArray[i][q] = parseFloat(stockArray[i][q]).toFixed(2);
		}
		var temp = stockArray[i][0];
		if (nameBool) {
			temp = stockArray[i][7];
			console.log('here');
		}
		$('#table2excel').append("<tr><td>"+(i+1)+"</td><td>" + temp + "</td><td>" + stockArray[i][1] + "</td><td>" + stockArray[i][2] + "</td><td>" + stockArray[i][3] + "</td><td>" + stockArray[i][4] + "%</td><td>" + stockArray[i][5] + "%</td><td>" + stockArray[i][6] + "%</td></tr>");
	}	
	$('#table2excel').append("</tbody>");
}
function toggleNames() {
	nameBool = !nameBool;
	updateFunction();
}
function ssort(identi) {
	if (identi == "H") {
		hCount++;
		selectionSort(stockArray, 1);
		clearList();
		if (hCount%2 == 0) {
			stockArray.reverse();
		}
	} 
	if (identi == "C") {
		cCount++;
		selectionSort(stockArray, 2);
		clearList();
		if (cCount%2 == 0) {
			stockArray.reverse();
		}
	} 
	if (identi == "D") {
		dCount++;
		selectionSort(stockArray, 3);
		clearList();
		if (dCount%2 == 0) {
			stockArray.reverse();
		}
	} 
	if (identi == "Y") {
		yCount++;
		selectionSort(stockArray, 4);
		clearList();
		if (yCount%2 == 0) {
			stockArray.reverse();
		}
	} 
	if (identi == "P") {
		pCount++;
		selectionSort(stockArray, 5);
		clearList();
		if (pCount%2 == 0) {
			stockArray.reverse();
		}
	} 
	if (identi == "T") {
		tCount++;
		selectionSort(stockArray, 6);
		clearList();
		if (tCount%2 == 0) {
			stockArray.reverse();
		}
	} 
	if (identi == "S") {
		sCount++;
		selectionSortSymbol(stockArray);
		clearList();
		if (sCount%2 == 0) {
			stockArray.reverse();
		}
	} 
	updateFunction();
}
var tableToExcel = (function () {
        var uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
        , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
        , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
        return function (table, name, filename) {
            if (!table.nodeType) table = document.getElementById(table)
            var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }

            document.getElementById("dlink").href = uri + base64(format(template, ctx));
            document.getElementById("dlink").download = filename;
            document.getElementById("dlink").click();

        }
    })();
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll == 0) {
    	$('#top-nav').css("height", "3.5em");
    	$('#top-nav ul').css("margin-top", "0");
    }
    else {
    	$('#top-nav').css("height", "3em");
    	$('#top-nav ul').css("margin-top", "0vh");
    }
});
$(document).ready(function() {
	f3yrURL();
	$('#table2excel').on('click', 'tbody tr', function(event) {
   	 $(this).addClass('highlight').siblings().removeClass('highlight');
	});
});

