app.controller('MainController', ['$scope', function($scope) {
  //MAKE NEW BUTTON FOR CUSTOM DATES
  //PRETTYFY.
  $scope.th = ['Position', 'Symbol', 'Historic Price', 'Current Price', 'Dividends', 'Yield', 'Price Appreciation', 'TSV'];
  //min level, max level
  var d = new Date();
  //current date
  $scope.month = d.getMonth()+1;
  $scope.year = d.getFullYear();
  $scope.day = d.getDate();
  
  $scope.yearSubtract = 3;
  
  //historic search day
  $scope.sYear = $scope.year-3;
  $scope.sMonth = 12;
  $scope.sDay = 31;
  
  //temp day, used in calculate day calculations
  $scope.tempDay = 1;
  $scope.tempMonth = 1;
  $scope.tempYear = 2016;
  
  //Custom Date Range, starts off as custom date
  $scope.customYear= $scope.year;
  $scope.customMonth = $scope.month;
  $scope.customDay = $scope.day;
  
  $scope.historicURL = "";
  $scope.currentURL = "";
  $scope.dividendURL = "";
  
  $scope.customURL = "";
  
  $scope.stockArray = new Array(33);
  
  $scope.swappedNames = false;
  
  $scope.custom = false;
  
  $scope.swapNames = function(){
    //0 and 7
    if (!$scope.swappedNames) {
      for (var i = 0; i < $scope.stockArray.length; i++) {
        var temp = $scope.stockArray[i][0];
        $scope.stockArray[i][0] = $scope.stockArray[i][7];
        $scope.stockArray[i][7] = temp; 
      } 
      $('.Symbol').html("Name");
      $scope.swappedNames = true;
      $scope.th[1] = 'Name';
    }
    else {
      for (var i = 0; i < $scope.stockArray.length; i++) {
        var temp = $scope.stockArray[i][7];
        $scope.stockArray[i][7] = $scope.stockArray[i][0];
        $scope.stockArray[i][0] = temp; 
      } 
      $('.Symbol').html("Symbol");
      $scope.swappedNames = false;
      $scope.th[1] = 'Symbol';
    }
  }
  //Sorting
  /*
  function selectionSort(items, selectVariable) {
    if (selectVariable == 0) {
        items[0].sort();
    }
    else {
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
    
    return items;
  }
  */
  //http://stackoverflow.com/questions/16096872/how-to-sort-2-dimensional-array-by-column-value
  //Better sort function
  function sortByColumn(a, colIndex){

        a.sort(sortFunction);

        function sortFunction(a, b) {
            if (a[colIndex] === b[colIndex]) {
                return 0;
            }
            else {
                return (a[colIndex] < b[colIndex]) ? -1 : 1;
            }
        }

        return a;
    }

  
  $scope.sorted =  [false, false, false, false, false, false, true];
  
  $scope.sortable = function(pointe) {
    if ($scope.sorted[pointe]) {
      $scope.stockArray = sortByColumn($scope.stockArray, pointe);
      $scope.stockArray = $scope.stockArray.reverse();
      $scope.$apply();
      $scope.sorted[pointe] = false;
    }
    else {
      $scope.stockArray = sortByColumn($scope.stockArray, pointe);
      $scope.$apply();
      $scope.sorted[pointe] = true;
    }
  } 

  function output() {

     for (var i = 0; i < $scope.stockArray.length; i++) {
      var BSP = $scope.stockArray[i][1];
      var CSP = $scope.stockArray[i][2];
      var Yield = $scope.stockArray[i][3]/BSP*100;
      var PA = (CSP - BSP)/BSP*100;
      var TSV = Yield + PA;
      $scope.stockArray[i][1] = $scope.stockArray[i][1].toFixed(2);
      $scope.stockArray[i][2] = $scope.stockArray[i][2].toFixed(2);
      $scope.stockArray[i][3] = $scope.stockArray[i][3].toFixed(2);
      $scope.stockArray[i][4] = Yield.toFixed(2);
      $scope.stockArray[i][5] = PA.toFixed(2);
      $scope.stockArray[i][6] = TSV.toFixed(2);
     }
     $scope.stockArray = sortByColumn($scope.stockArray, 6);
     $scope.stockArray = $scope.stockArray.reverse();
     $scope.$apply();
     var temp = "";
     for (var i = 0; i < $scope.stockArray.length; i++) {
      temp += "$scope.stockArray[" + i + "][1] = " + $scope.stockArray[i][1]+"; ";
     }
      
    //console.log(temp);

     //$scope.stockArray.reverse();
     //updateFunction();

  }
  
  function inDateRange(tDate) {
    //for calculating current day or custom day
    var dateDay = $scope.day;
    var dateMonth = $scope.month; 
    var dateYear = $scope.year;
    if ($scope.custom) {
      dateDay = $scope.customDay;
      dateMonth = $scope.customMonth; 
      dateYear = $scope.customYear;
    }
    var tempDate = tDate.split("-");
    //sDates dont change
    if (tempDate[2] < $scope.sDay && tempDate[1] <= $scope.sMonth && tempDate[0] <= $scope.sYear) {
        return false;
    }
    else if (tempDate[2] > dateDay && tempDate[1] >= dateMonth && tempDate[0] >= dateYear) {
      return false;
    }
    else {
        return true;
    }
}
  
  //
  function getDividends() {
     for (var i = 0; i < $scope.stockArray.length; i++) {
        $scope.stockArray[i][3] = 0;
     }
        var url = $scope.dividendURL;
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
                  for (var x = 0; x < $scope.stockArray.length; x++) {
                    if (tempSymbols === $scope.stockArray[x][0]) {
                        $scope.stockArray[x][3]+=parseFloat(dividends);
                        }
                     }	
                  }		
         }
      }
         output();
      })
        .fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        alert("Dividend Failure, please try again later as there might be an API issue");
    });
}
  
  
  //Historic Price
  function getHistoryPrice() {
     /*for (var i = 0; i < $scope.stockArray.length; i++) {
        $scope.stockArray[i][1] = 0;
     }*/
      
        var url = $scope.historicURL;

        $.getJSON(url)
            .done(function (data) {
            var Symbol, count = 0;
            for(Symbol in data.query.results.quote) {
         if(data.query.results.quote.hasOwnProperty(Symbol)) {
           var tempSymbols = data.query.results.quote[Symbol].Symbol;
            var dividends = data.query.results.quote[Symbol].Close;
              for (var x = 0; x < $scope.stockArray.length; x++) {
                if (tempSymbols === $scope.stockArray[x][0]) {
                    $scope.stockArray[x][1]+=parseFloat(dividends);
                  }
               }
          }
        }
        

      getDividends();
        })
            .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            alert("Failed to grab Historical Price. Please try again later as the API may be having issues");  
        });
    
  }
  function getCustomStock() {
    url = $scope.customURL;
      console.log(url);
      $.getJSON(url)
          .done(function (data) {
            var Symbol, count = 0;
            for(Symbol in data.query.results.quote) {
            if(data.query.results.quote.hasOwnProperty(Symbol)) {
            var tempSymbols = data.query.results.quote[Symbol].Symbol;
            var dividends = data.query.results.quote[Symbol].Close;
              for (var x = 0; x < $scope.stockArray.length; x++) {
                if (tempSymbols === $scope.stockArray[x][0]) {
                    $scope.stockArray[x][2]+=parseFloat(dividends);
                  }
               }
            }
          }
        getHistoryPrice();
        })
            .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            alert("Failed to grab Recent Price. Please try again later as the API may be having issues");  
        });
  }
  
  //Current Stock Price
  function getCurrentStock(urlToUse) {
     /*for (var i = 0; i < $scope.stockArray.length; i++) {
        $scope.stockArray[i][2] = 0;
     }*/
    var url = $scope.currentURL;

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
                for (var x = 0; x < $scope.stockArray.length; x++) {
                    if (tempSymbols === $scope.stockArray[x][0]) {
                        $scope.stockArray[x][2]+=parseFloat(dividends);
                    }
                }
         }
      }
      getHistoryPrice();
      })
      .fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        alert("Failed to grab Current Price. Please try again later as the API may be having issues");  
      //$("#result").text('Request failed: ' + err);
      });
  }
  var customDateToday = function() {
    if ($scope.year == $scope.customYear && $scope.month == $scope.customMonth && $scope.day == $scope.customDay) {
      return true;
    }
    return false;
  }
    //URL building
  var buildURLS = function() {
    //ccurrent
    $scope.currentURL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20IN%20(";
    //Calculating the middle
    var intermediate = "";
    for (var i = 0; i < $scope.stockArray.length-1; i++) {
      intermediate+=encodeURIComponent('"');
      intermediate+=$scope.stockArray[i][0];
      intermediate+=encodeURIComponent('"')+"%2C";
    }
    intermediate += encodeURIComponent('"') + $scope.stockArray[$scope.stockArray.length-1][0]+ encodeURIComponent('"');
    
    //putting it together for current
    $scope.currentURL += intermediate + ")&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";
    
    //Historic
    $scope.historicURL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20IN%20(" + intermediate + ")%20and%20startDate%20%3D%20%22"+$scope.sYear+"-"+$scope.sMonth+"-"+$scope.sDay+"%22%20and%20endDate%20%3D%20%22"+$scope.sYear+"-"+$scope.sMonth+"-"+$scope.sDay+"%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";

    if ($scope.custom) {
    
      $scope.customURL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20IN%20(" + intermediate + ")%20and%20startDate%20%3D%20%22"+$scope.customYear+"-"+$scope.customMonth+"-"+$scope.customDay+"%22%20and%20endDate%20%3D%20%22"+$scope.customYear+"-"+$scope.customMonth+"-"+$scope.customDay+"%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";
    
    }
    //dividens
    $scope.dividendURL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.dividendhistory%20where%20symbol%20IN%20("+intermediate+")%20and%20startDate%20%3D%20%22" + $scope.sYear + "-"+ $scope.sMonth +"-"+$scope.sDay +"%22%20and%20endDate%20%3D%20%22" + ($scope.year) + "-"+ $scope.month + "-"+$scope.day+"%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";
    
    //callingfunctions
    if ($scope.custom && !customDateToday()) {
      getCustomStock();
    }
    else {
      getCurrentStock();
    }
  }
  
  //Loading names into code
  var buildNames = function() {
    $scope.stockArray[0][0] = "WMT"; $scope.stockArray[0][7] = "Wal-Mart Stores Inc.";
    $scope.stockArray[1][0] = "CTL"; $scope.stockArray[1][7] = "CenturyLink, Inc. ";
    $scope.stockArray[2][0] = "AXP"; $scope.stockArray[2][7] = "American Express Company";
    $scope.stockArray[3][0] = "CAT";$scope.stockArray[3][7] = "Caterpillar Inc.";
    $scope.stockArray[4][0] = "CVX";$scope.stockArray[4][7] = "Chevron Corporation";
    $scope.stockArray[5][0] = "PG";$scope.stockArray[5][7] = "The Procter & Gamble Company";
    $scope.stockArray[6][0] = "UTX";$scope.stockArray[6][7] = "United Technologies Corporation";
    $scope.stockArray[7][0] = "DD";$scope.stockArray[7][7] = "E. I. du Pont de Nemours and Company";
    $scope.stockArray[8][0] = "IBM";$scope.stockArray[8][7] = "International Business Machines";
    $scope.stockArray[9][0] = "XOM";$scope.stockArray[9][7] = "Exxon Mobil Corporation Company";
    $scope.stockArray[10][0] = "INTC";$scope.stockArray[10][7] = "Intel Corporation";
    $scope.stockArray[11][0] = "GS";$scope.stockArray[11][7] = "The Goldman Sachs Group";
    $scope.stockArray[12][0] = "MMM";$scope.stockArray[12][7] = "3M Company";
    $scope.stockArray[13][0] = "MRK";$scope.stockArray[13][7] = "Merck & Co. Inc.";
    $scope.stockArray[14][0] = "JNJ";$scope.stockArray[14][7] = "Johnson & Johnson";
    $scope.stockArray[15][0] = "KO";$scope.stockArray[15][7] = "The Coca-Cola Company";
    $scope.stockArray[16][0] = "VZ";$scope.stockArray[16][7] = "Verizon Communications Inc.";
    $scope.stockArray[17][0] = "T";$scope.stockArray[17][7] = "AT&T Inc.";
    $scope.stockArray[18][0] = "JPM";$scope.stockArray[18][7] = "JPMorgan Chase & Co.";
    $scope.stockArray[19][0] = "CSCO";$scope.stockArray[19][7] = "Cisco Systems, Inc.";
    $scope.stockArray[20][0] = "TRV";$scope.stockArray[20][7] = "The Travelers Companies, Inc.";
    $scope.stockArray[21][0] = "CMCSA";$scope.stockArray[21][7] = "Comcast Corporation";
    $scope.stockArray[22][0] = "PFE";$scope.stockArray[22][7] = "Pfizer Inc.";
    $scope.stockArray[23][0] = "S";$scope.stockArray[23][7] = "Sprint Corporation";
    $scope.stockArray[24][0] = "MSFT";$scope.stockArray[24][7] = "Microsoft Corporation";
    $scope.stockArray[25][0] = "BA";$scope.stockArray[25][7] = "The Boeing Company";
    $scope.stockArray[26][0] = "GE";$scope.stockArray[26][7] = "General Electric Company";
    $scope.stockArray[27][0] = "UNH";$scope.stockArray[27][7] = "UnitedHealth Group Incorporated";
    $scope.stockArray[28][0] = "V";$scope.stockArray[28][7] = "Visa Inc.";
    $scope.stockArray[29][0] = "HD";$scope.stockArray[29][7] = "The Home Depot, Inc.";
    $scope.stockArray[30][0] = "DIS";$scope.stockArray[30][7] = "The Walt Disney Company";
    $scope.stockArray[31][0] = "MCD";$scope.stockArray[31][7] = "McDonald's Corp.";
    //$scope.stockArray[32][0] = "TWC";$scope.stockArray[32][7] = "Time Warner Cable Inc.";
    $scope.stockArray[32][0] = "NKE";$scope.stockArray[32][7] = "NIKE, Inc.";
    $scope.swappedNames = false;
    $scope.th[1] = 'Symbol';
    buildURLS();
  }
  
  
  
  //Calculating holiday and weekend functions.
  $scope.contains = function(arrayI, item) {
    for (var x = 0; x < arrayI.length; x++) {
      if (arrayI[x] === item) {
        return true;
      }
    }
    return false;
  }
  $scope.rewindDay = function() {
    if ($scope.tempDay <= 0) {
      if ($scope.tempMonth == 1) {
        $scope.tempMonth = 12;
        $scope.tempYear = $scope.tempYear-1;
        $scope.tempDay = 31;
      }
      else {
        $scope.tempMonth -= 1;
        if ($scope.contains([1,3,5,7,8,10,12], $scope.tempMonth)) {
          $scope.tempDay = 31;    
        }
        else if ($scope.tempMonth == 2) {
          if ($scope.tempYear%4 == 0) {
            $scope.tempDay = 29;
          }
          else {
            $scope.tempDay = 28;
          }
        }
        else {
          $scope.tempDay = 30;
          }
        }
      }
    $scope.calculateDay($scope.tempYear, $scope.tempMonth, $scope.tempDay);
  }
  
  $scope.calculateDay = function(fyear, fmonth, fday) {
    /*
    CALCULATING IF THE DAY IS LEGAL
    Should notify the user if the date is changing *IMPORTANT*
    */
    // Modifying https://www.softcomplex.com/forum/viewthread_2814/
    // check simple dates (month/date - no leading zeroes)
    $scope.tempYear = fyear;
    $scope.tempMonth = fmonth;
    $scope.tempDay = fday;
    
    var dt_date = new Date();
    dt_date.setFullYear($scope.tempYear);
    dt_date.setMonth($scope.tempMonth-1);
    dt_date.setDate($scope.tempDay);
    
    
     var n_date = dt_date.getDate();
     n_month = dt_date.getMonth() + 1;
     var s_date1 = n_month + '/' + n_date;
      
    //Rewind on Weekend Days
    if(dt_date.getDay() == 6 || dt_date.getDay() == 0) {
      switch(dt_date.getDay()) {
        case 6:
          $scope.tempDay -= 1;
          break;
        case 0: 
          $scope.tempDay -= 2;
          break;
      }
      $scope.rewindDay();
    };

     if (   s_date1 == '1/1'   // New Year's Day

      || s_date1 == '7/4'   // Independence Day

      || s_date1 == '12/25' // Christmas Day

     ) {
       $scope.tempDay -= 1;
       $scope.rewindDay();
     }

     // weekday from beginning of the month (month/num/day)

     var n_wday = dt_date.getDay(),
      n_wnum = Math.floor((n_date - 1) / 7) + 1;
     var s_date2 = n_month + '/' + n_wnum + '/' + n_wday;
     if (   s_date2 == '1/3/1'  // Birthday of Martin Luther King, third Monday in January
      || s_date2 == '2/3/1'  // Washington's Birthday, third Monday in February
      || s_date2 == '4/1/5'  // Good Friday, First Friday in April
      || s_date2 == '5/5/1'  // Memorial Day, Last Monday
      || s_date2 == '9/1/1'  // Labor Day, first Monday in September
      || s_date2 == '11/4/4' // Thanksgiving Day, fourth Thursday in November
     ) {
       $scope.tempDay -= 1;
       $scope.rewindDay();
     }
    return [$scope.tempYear, $scope.tempMonth, $scope.tempDay];
  }
  

  var swapCustomDays = function() {
    var temp = [$scope.sYear, $scope.sMonth, $scope.sDay];
      $scope.sYear = $scope.customYear;
      $scope.sMonth = $scope.customMonth;
      $scope.sDay = $scope.customDay;
      $scope.customYear = temp[0];
      $scope.customMonth = temp[1];
      $scope.customDay = temp[2];
  }
  
  var futureDate = function(fYear, fMonth, fDay) {
    if ($scope.year < fYear) {
      return true;
      
    }
    else if ($scope.year == fYear) {
      if ($scope.month < fMonth) {
        return true;
        
      }
      else if ($scope.month == fMonth) {
        if ($scope.day < fDay) {
          return true;
        }
      }
    }
    
    return false; 
  }
  
  var currentDay = function() {
    //Get today
    $scope.month = d.getMonth()+1;
    $scope.year = d.getFullYear();
    $scope.day = d.getDate();
    
    var temp = $scope.calculateDay($scope.year, $scope.month, $scope.day);
    $scope.year = temp[0];
    $scope.month = temp[1];
    $scope.day = temp[2];
    
    //Empty out the array
    for (var i = 0; i < 33; i++) {
      $scope.stockArray[i] = [0,0,0,0, 0, 0, 0, ""];
    }
    //Get the past date
    $scope.sYear = $scope.year-$scope.yearSubtract;
    $scope.sMonth = 12;
    $scope.sDay = 31;
    
    //Make sure its legal
    var temp = $scope.calculateDay($scope.sYear, $scope.sMonth, $scope.sDay);
    $scope.sYear = temp[0];
    $scope.sMonth = temp[1];
    $scope.sDay = temp[2];
  }
  
  $scope.build1yrTable = function() {
    $scope.custom = false;
    $scope.yearSubtract = 1;
    currentDay();
    buildNames();
  }
  $scope.build3yrTable = function() {
    //start
    $scope.custom = false;
    $scope.yearSubtract = 3;
    currentDay();
    buildNames();
  }
  $scope.build5yrTable = function() {
    //start
    $scope.custom = false;
    $scope.yearSubtract = 5;
    currentDay();
    buildNames();
  }
  $scope.customTimeline = function() {
    $scope.custom = true;
    for (var i = 0; i < 33; i++) {
      $scope.stockArray[i] = [0,0,0,0, 0, 0, 0, ""];
    }
    //Making sure the custom day isnt a weekend or holiday
    var temp = $scope.calculateDay($scope.customYear, $scope.customMonth, $scope.customDay);
    $scope.customYear = temp[0];
    $scope.customMonth = temp[1];
    $scope.customDay = temp[2];
    
    if(futureDate($scope.sYear, $scope.sMonth, $scope.sDay)) {
      alert("Cant use a future date for your past date, correcting date to a past date");
      //Get the past date
      $scope.sYear = $scope.year-3;
      $scope.sMonth = 12;
      $scope.sDay = 31;

      var temp = $scope.calculateDay($scope.sYear, $scope.sMonth, $scope.sDay);
      $scope.sYear = temp[0];
      $scope.sMonth = temp[1];
      $scope.sDay = temp[2];
    }
    
    if(futureDate($scope.customYear, $scope.customMonth, $scope.customDay)) {
      alert("Cant use a future date, correcting date to current date");
      var temp = $scope.calculateDay($scope.year, $scope.month, $scope.day);
      $scope.customYear = temp[0];
      $scope.customMonth = temp[1];
      $scope.customDay = temp[2];
    }
    
      //Make sure old day is also legal
      var temp = $scope.calculateDay($scope.sYear, $scope.sMonth, $scope.sDay);
      $scope.sYear = temp[0];
      $scope.sMonth = temp[1];
      $scope.sDay = temp[2];

      //if custom year is before sYear, swap
      if ($scope.customYear < $scope.sYear) {
        swapCustomDays();
        buildNames();
      }
      //if they occur in the same year, check the months, then days
      else if ($scope.customYear == $scope.sYear) {
        if ($scope.customMonth < $scope.sMonth) {
          swapCustomDays();
          buildNames();
        }
        else if ($scope.customMonth == $scope.sMonth) {
          if ($scope.customDay < $scope.sDay) {
            swapCustomDays();
            buildNames();
          }
          else if ($scope.customDay == $scope.sDay) {
            alert("Days cant be the same");
          }
          else {
            buildNames();
          }
        }
        else {
          buildNames();
        }
      }
      else {
        buildNames();
      }
    
  }
  
  $scope.start = function() {
    //initialize the new $scope.stockArray
    for (var i = 0; i < 33; i++) {
      $scope.stockArray[i] = [0,0,0,0, 0, 0, 0, ""];
    }
    
    //make sure today is not a holiday or weekend
    var temp = $scope.calculateDay($scope.year, $scope.month, $scope.day);
    $scope.year = temp[0];
    $scope.month = temp[1];
    $scope.day = temp[2];
    
    $scope.build3yrTable();
  }

  //First tried to use : https://www.travismclarke.com/tableexport/ but it wasnt exporting any of the angular data.
  //Found this: 
  //http://stackoverflow.com/questions/21680768/export-to-xls-using-angularjs
  //And it works. No need to change anything right now.
  $scope.exportData = function () {
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        saveAs(blob, "TSV.xls");
    };
}]);