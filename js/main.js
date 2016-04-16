var urlCSQ = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";
var yearsBehind = 0;
var sMonth = eMonth = 12;
var sDate = eDate = 31;
var sYear = 2014;
var year = new Date().getFullYear();

var yearSubtract = 3;
//var urlCSQ = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)%20and%20startDate%20%3D%20%22" + (year) + "-" + sMonth + "-"+sDate+"%22%20and%20endDate%20%3D%20%22"+(year)+"-"+eMonth+"-"+eDate+"%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";

// no holidays

var urlD = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.dividendhistory%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)%20and%20startDate%20%3D%20%22" + (year - yearSubtract) + "-"+sMonth+"-"+sDate+"%22%20and%20endDate%20%3D%20%22" + (year) + "-12-31%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";

var urlH = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)%20and%20startDate%20%3D%20%22"+(year-yearSubtract)+"-"+sMonth+"-"+sDate+"%22%20and%20endDate%20%3D%20%22"+(year-yearSubtract)+"-"+sMonth+"-"+sDate+"%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";

var stockArray = new Array(34);
var nameBool = false;
var sCount=hCount=cCount=dCount=yCount=pCount=tCount=0;

for (var i = 0; i < 35; i++) {
  stockArray[i] = [0,0,0,0, 0, 0, 0, ""];
}

function buildNames() {
    stockArray[0][0] = "WMT"; stockArray[0][7] = "Wal-Mart Stores Inc.";
    stockArray[1][0] = "CTL"; stockArray[1][7] = "CenturyLink, Inc. ";
    stockArray[2][0] = "AXP";stockArray[2][7] = "American Express Company";
    stockArray[3][0] = "CAT";stockArray[3][7] = "Caterpillar Inc.";
    stockArray[4][0] = "CVX";stockArray[4][7] = "Chevron Corporation";
    stockArray[5][0] = "PG";stockArray[5][7] = "The Procter & Gamble Company";
    stockArray[6][0] = "UTX";stockArray[6][7] = "United Technologies Corporation";
    stockArray[7][0] = "DD";stockArray[7][7] = "E. I. du Pont de Nemours and Company";
    stockArray[8][0] = "IBM";stockArray[8][7] = "International Business Machines";
    stockArray[9][0] = "XOM";stockArray[9][7] = "Exxon Mobil Corporation Company";
    stockArray[10][0] = "INTC";stockArray[10][7] = "Intel Corporation";
    stockArray[11][0] = "GS";stockArray[11][7] = "The Goldman Sachs Group";
    stockArray[12][0] = "MMM";stockArray[12][7] = "3M Company";
    stockArray[13][0] = "MRK";stockArray[13][7] = "Merck & Co. Inc.";
    stockArray[14][0] = "JNJ";stockArray[14][7] = "Johnson & Johnson";
    stockArray[15][0] = "KO";stockArray[15][7] = "The Coca-Cola Company";
    stockArray[16][0] = "VZ";stockArray[16][7] = "Verizon Communications Inc.";
    stockArray[17][0] = "T";stockArray[17][7] = "AT&T Inc.";
    stockArray[18][0] = "JPM";stockArray[18][7] = "JPMorgan Chase & Co.";
    stockArray[19][0] = "CSCO";stockArray[19][7] = "Cisco Systems, Inc.";
    stockArray[20][0] = "TRV";stockArray[20][7] = "The Travelers Companies, Inc.";
    stockArray[21][0] = "CMCSA";stockArray[21][7] = "Comcast Corporation";
    stockArray[22][0] = "PFE";stockArray[22][7] = "Pfizer Inc.";
    stockArray[23][0] = "S";stockArray[23][7] = "Sprint Corporation";
    stockArray[24][0] = "MSFT";stockArray[24][7] = "Microsoft Corporation";
    stockArray[25][0] = "BA";stockArray[25][7] = "The Boeing Company";
    stockArray[26][0] = "GE";stockArray[26][7] = "General Electric Company";
    stockArray[27][0] = "UNH";stockArray[27][7] = "UnitedHealth Group Incorporated";
    stockArray[28][0] = "V";stockArray[28][7] = "Visa Inc.";
    stockArray[29][0] = "HD";stockArray[29][7] = "The Home Depot, Inc.";
    stockArray[30][0] = "DIS";stockArray[30][7] = "The Walt Disney Company";
    stockArray[31][0] = "MCD";stockArray[31][7] = "McDonald's Corp.";
    stockArray[32][0] = "TWC";stockArray[32][7] = "Time Warner Cable Inc.";
    stockArray[33][0] = "NKE";stockArray[33][7] = "NIKE, Inc.";
    stockArray[34][0] = "TMUS";stockArray[34][7] = "T-Mobile US, Inc.";
}
function inDateRange(tDate) {
    var tempDate = tDate.split("-");
    //check if the years are out of range, if yes, return false. Else, check the months, if those are, return false, else, check the dates.
    if (tempDate[0] < sYear) {
        return false;
    }
    else if (tempDate[0] > year) {
        return false;
    }
    else {
        if (tempDate[1] < sMonth && tempDate[0] <= sYear) {
            return false;
        }
        else if (tempDate[1] > eMonth && tempDate[0] >= year) {
            return false;
        }
        else {
            if (tempDate[2] < sDate && tempDate[1] <= sMonth && tempDate[0] <= sYear) {
                return false;
            }
            else if (tempDate[2] > eDate && tempDate[1] >= eMonth && tempDate[0] >= year) {
                return false;
            }
            else {
                return true
            }
        }
    }
}
function getDividends(urlToUse) {
	for (var i = 0; i < stockArray.length; i++) {
  		stockArray[i][3] = 0;
	}
    var url = urlToUse;

    $.getJSON(url)
        .done(function (data) {
        var Symbol, count = 0;
        for(Symbol in data.query.results.quote) {
 			 if(data.query.results.quote.hasOwnProperty(Symbol)) {
 			  	var tempSymbols = data.query.results.quote[Symbol].Symbol;
				var dividends = data.query.results.quote[Symbol].Dividends;
                var tempDate = data.query.results.quote[Symbol].Date;
                 //console.log(tempDate + " " + inDateRange(tempDate) + " " + sYear + " " + year);
                if (inDateRange(tempDate)) {
                    for (var x = 0; x < stockArray.length; x++) {
                    if (tempSymbols === stockArray[x][0]) {
                        stockArray[x][3]+=parseFloat(dividends);
                    }
                 }	
                }		
 			 }
		}
		output();
    })
        .fail(function (jqxhr, textStatus, error) {
        alert("fail");
        var err = textStatus + ", " + error;
        $("#result").text('Request failed: ' + err);
        for (var i = 0; i < 35; i++) {
  		    stockArray[i][3] = 0;
	   }
        output();
    });
}

function getHistoryPrice(urlToUse) {
	for (var i = 0; i < stockArray.length; i++) {
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
                 for (var x = 0; x < stockArray.length; x++) {
                    if (tempSymbols === stockArray[x][0]) {
                        stockArray[x][1]+=parseFloat(dividends);
                    }
                 }
 			 }
		}
		
		getDividends(urlD);
    })
        .fail(function (jqxhr, textStatus, error) {
        console.log("here");
        var err = textStatus + ", " + error;
            $("#result").text('Request failed: ' + err);
    })
        .error
    ;
}

function getCurrentStock(urlToUse) {
	for (var i = 0; i < stockArray.length; i++) {
  		stockArray[i][2] = 0;
	}
    var url = urlToUse;
    
    $.getJSON(url)
        .done(function (data) {
        var Symbol, count = 0;
        for(Symbol in data.query.results.quote) {
 			 if(data.query.results.quote.hasOwnProperty(Symbol)) {
 			  	var tempSymbols = data.query.results.quote[Symbol].symbol;
 			  	//var tempSymbols = data.query.results.quote[Symbol].Symbol;
 			  	var name = data.query.results.quote[Symbol].Name;
 			  	//var name = "temp";
				var dividends = data.query.results.quote[Symbol].LastTradePriceOnly
				//var dividends = data.query.results.quote[Symbol].Close;
                for (var x = 0; x < stockArray.length; x++) {
                    if (tempSymbols === stockArray[x][0]) {
                        stockArray[x][2]+=parseFloat(dividends);
                    }
                }
 			 }
		}
		
		getHistoryPrice(urlH);
    })
        .fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
            $("#result").text('Request failed: ' + err);
    });
}

function getCustomCurrentPrice(urlToUse) {
	for (var i = 0; i < stockArray.length; i++) {
  		stockArray[i][2] = 0;
	}
    var url = urlToUse;

    $.getJSON(url)
        .done(function (data) {
        var Symbol, count = 0;
        for(Symbol in data.query.results.quote) {
 			 if(data.query.results.quote.hasOwnProperty(Symbol)) {
 			  	var tempSymbols = data.query.results.quote[Symbol].Symbol;
				var dividends = data.query.results.quote[Symbol].Close;
                 for (var x = 0; x < stockArray.length; x++) {
                    if (tempSymbols === stockArray[x][0]) {
                        stockArray[x][2]+=parseFloat(dividends);
                    }
                 }
 			 }
		}
		
		getHistoryPrice(urlH);
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

	for (var i = 0; i < stockArray.length; i++) {
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
    sMonth = eMonth = 12;
    sDate = eDate = 31;
}
function refreshURLS() {
    urlCSQ = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";
    
    urlH = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)%20and%20startDate%20%3D%20%22"+(year-yearSubtract)+"-"+sMonth+"-"+sDate+"%22%20and%20endDate%20%3D%20%22"+(year-yearSubtract)+"-"+sMonth+"-"+sDate+"%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";
    
    urlD = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.dividendhistory%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)%20and%20startDate%20%3D%20%22" + (year - yearSubtract) + "-"+sMonth+"-"+sDate+"%22%20and%20endDate%20%3D%20%22" + (year) + "-"+eMonth+"-"+eDate+"%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";
}

function f1yrURL() {
	$('#currentYear').empty();
	clearList();
	$('#currentYear').append("<p>Current Year: 1yr</p>");
    yearsBehind = 0;
	yearSubtract = 1;
    sDate = eDate = 31;
    sMonth = eMonth = 12;
    year = new Date().getFullYear();
    sYear = year - yearSubtract;
    refreshURLS();
	getCurrentStock(urlCSQ);
	console.log("1 yr");
}
function f3yrURL() {
	$('#currentYear').empty();
	clearList();
	$('#currentYear').append("<p>Current Year: 3yr</p>");
    yearsBehind = 0;
	yearSubtract = 3; 
    sDate = eDate = 31;
    sMonth = eMonth = 12;
    year = new Date().getFullYear();
    sYear = year - yearSubtract;
    refreshURLS();
	getCurrentStock(urlCSQ);
	console.log("3 yr");
}
function f5yrURL() {
	$('#currentYear').empty();
	clearList();
	$('#currentYear').append("<p>Current Year: 5yr</p>");
    yearsBehind = 0;
	yearSubtract = 5; 
    sDate = eDate = 31;
    sMonth = eMonth = 12;
    year = new Date().getFullYear();
    sYear = year - yearSubtract;
    refreshURLS();
	getCurrentStock(urlCSQ);
	console.log("5 yr");
    console.log(urlH);
}
function customYear() {
    $('#currentYear').empty();
	clearList();
	$('#currentYear').append("<p>Current Year: Custom yr</p>");
    yearsBehind = 0;
    eMonth = parseInt(document.getElementById("eMonthBox").value);
    sMonth = parseInt(document.getElementById("sMonthBox").value);
    eDate = parseInt(document.getElementById("eDateBox").value);
    sDate = parseInt(document.getElementById("sDateBox").value);
    sYear = parseInt(document.getElementById("sYearBox").value);
    year = parseInt(document.getElementById("eYearBox").value);
    yearSubtract = year - sYear ; 
    refreshURLS();
    if (yearSubtract == 0) {
        urlD = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.dividendhistory%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)%20and%20startDate%20%3D%20%22" + (year) + "-"+(sMonth-1)+"-"+(sDate)+"%22%20and%20endDate%20%3D%20%22" + (year) + "-"+(eMonth)+"-"+eDate+"%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";
        console.log(urlD);
    }
    var urlCH = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20IN%20(%22WMT%22%2C%22CTL%22%2C%22AXP%22%2C%22CAT%22%2C%22CVX%22%2C%22PG%22%2C%22UTX%22%2C%22DD%22%2C%22IBM%22%2C%22XOM%22%2C%22INTC%22%2C%22GS%22%2C%22MMM%22%2C%22MRK%22%2C%22JNJ%22%2C%22%5EGSPC%22%2C%22KO%22%2C%22VZ%22%2C%22T%22%2C%22JPM%22%2C%22CSCO%22%2C%22TRV%22%2C%22CMCSA%22%2C%22PFE%22%2C%22S%22%2C%22MSFT%22%2C%22BA%22%2C%22GE%22%2C%22UNH%22%2C%22V%22%2C%22HD%22%2C%22DIS%22%2C%22MCD%22%2C%22TWC%22%2C%22NKE%22)%20and%20startDate%20%3D%20%22"+(year)+"-"+eMonth+"-"+eDate+"%22%20and%20endDate%20%3D%20%22"+(year)+"-"+eMonth+"-"+eDate+"%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";
	getCustomCurrentPrice(urlCH);
}
function updateFunction() {
	clearList();
	for (var i=0; i< stockArray.length; i++ ) {
		for (var q = 1; q <= 6; q++) {
			stockArray[i][q] = parseFloat(stockArray[i][q]).toFixed(2);
		}
		var temp = stockArray[i][0];
		if (nameBool) {
			temp = stockArray[i][7];
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
//from a source online, above my head.
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
    console.log(urlH);

    $("#custom-year-box").hide();
    buildNames();
	f3yrURL();
	$('#table2excel').on('click', 'tbody tr', function(event) {
   	 $(this).addClass('highlight').siblings().removeClass('highlight');
	});
});

