ZERODHA.pasteFormulaniftt();
ZERODHA.pasteFormulabniftt();
ZERODHA.pasteFormulafniftt();
ZERODHA.pasteFormulacriftt();
ZERODHA.pasteFormulaseniftt();
ZERODHA.pasteFormulabeniftt();
ZERODHA.pasteFormulaa();
ZERODHA.pasteFormulab();
ZERODHA.pasteFormulac();
ZERODHA.pasteFormulad();
ZERODHA.pasteFormulae();
ZERODHA.pasteFormulaf();

function pasteFormula() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet2');
  var formula = '=YOUR_FORMULA_HERE';
  sheet.getRange('A1').setFormula(formula);
}


function pasteFormulaniftt() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet2');
  var formula = '=FILTER(A1:F,C1:C="NIFTY",E1:E>AE1-100,E1:E<AE1+300,D1:D=AD1)';
  sheet.getRange('AG1').setFormula(formula);
}


function pasteFormulabniftt() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet2');
  var formula = '=FILTER(A1:F,C1:C="BANKNIFTY",E1:E>AE2-300,E1:E<AE2+600,D1:D=AD2)';
  sheet.getRange('AN1').setFormula(formula);
}



function pasteFormulafniftt() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet2');
  var formula = '=FILTER(A1:F,C1:C="FINNIFTY",E1:E>AE3-100,E1:E<AE3+300,D1:D=AD3)';
  sheet.getRange('AU1').setFormula(formula);
}







function pasteFormulaseniftt() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet2');
  var formula = '=FILTER(A1:F,C1:C="SENSEX",E1:E>AE5-100,E1:E<AE5+300,D1:D=AD5)';
  sheet.getRange('BC1').setFormula(formula);
}

function pasteFormulabeniftt() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet2');
  var formula = '=FILTER(A1:F,C1:C="BANKEX",E1:E>AE6-100,E1:E<AE6+700,D1:D=AD6)';
  sheet.getRange('BJ1').setFormula(formula);
}



function pasteFormulacriftt() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet2');
  var formula = '=FILTER(A1:F,C1:C="CRUDEOIL",E1:E>AE4-100,E1:E<AE4+300,D1:D=AD4)';
  sheet.getRange('BQ1').setFormula(formula);
}





function upstox(h,i,j,k,l) {
let formattedDate = j.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' }).replace(/ /g, '').toUpperCase();
  let tradingview='https://tv.upstox.com/charts/NSE_FO|';
let a="<a href='"+tradingview+h+"?isPopup=true'target='_blank'>"+i+" "+formattedDate+" "+k+l+"</a>"
  return a;
  }


function dhan(h,i,j,k,l) {
    if (l === "CE") {
    l = "CALL";
} else if (l === "PE") {
    l = "PUT";
}

if (i === "NIFTY") {
    i = "NSED";
} 
  
else if (i === "BANKNIFTY") {
    i = "NSED";
} 
  
else if (i === "FINNIFTY") {
    i = "NSED";
} 

else if (i === "SENSEX") {
    i = "BSED";
}

  else if (i === "BANKEX") {
    i = "BSED";
}


  
let formattedDate = j.toLocaleDateString('en-GB', { day: '2-digit', month: 'short'}).replace(/ /g, '').toUpperCase();
  let tradingview='https://tv.dhan.co/?symbol=';
let a="<a href='"+tradingview+h+":"+i+" "+formattedDate+" "+k+" "+l+"'target='_blank'>"+i+" "+formattedDate+" "+k+" "+l+"</a>"
  return a;
  }









//custom//
function pasteFormulaa() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet3');
  var formula = '=query(Sheet2!AG1:AL20)';
  sheet.getRange('A1').setFormula(formula);
}

function pasteFormulab() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet3');
  var formula = '=query(Sheet2!AN1:AS20)';
  sheet.getRange('A21').setFormula(formula);
}

function pasteFormulac() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet3');
  var formula = '=query(Sheet2!AU1:AZ20)';
  sheet.getRange('A41').setFormula(formula);
}


function pasteFormulad() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet3');
  var formula = '=query(Sheet2!BC1:BH20)';
  sheet.getRange('A61').setFormula(formula);
}


function pasteFormulae() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet3');
  var formula = '=query(Sheet2!BJ1:BO20)';
  sheet.getRange('A81').setFormula(formula);
}



function pasteFormulaf() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet3');
  var formula = '=query(Sheet2!BQ1:BV20)';
  sheet.getRange('A101').setFormula(formula);
}


                ////

function fillFormulaInColumn() {
  // Get the active spreadsheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet3');

  // Define the formula you want to apply
  var formula = '=if(A1="","",DHAN(A1,C1,D1,E1,F1))';  // Replace with your actual formula

  // Fill the range G1:G60 with the formula
  var range = sheet.getRange('G1:G60');
  range.setFormula(formula);
}







