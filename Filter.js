ZERODHA.pasteFormulaniftt();
ZERODHA.pasteFormulabniftt();
ZERODHA.pasteFormulafniftt();
ZERODHA.pasteFormulacriftt();
ZERODHA.pasteFormulaseniftt();
ZERODHA.pasteFormulabeniftt();



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




<a href='https://tv.upstox.com/charts/NSE_FO%7C65335'target='_blank'>NIFTY 25JUL24 24350 CE</a>
function upstox(h,i,j,k,l) {
let formattedDate = j.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' }).replace(/ /g, '').toUpperCase();
  let tradingview='https://tv.upstox.com/charts/NSE_FO|';
let a="<a href='"+tradingview+h+"?isPopup=true'target='_blank'>"+i+" "+formattedDate+" "+k+l+"</a>"
  return a;
  }


<a href='https://tv.dhan.co/?symbol=NSED65335:NIFTY 25 JUL 24350 CALL'target='_blank'>NIFTY 25 JUL 24350 CALL</a>
function dhan(h,i,j,k,l) {
    if (l === "CE") {
    l = "CALL";
} else if (l === "PE") {
    l = "PUT";
}
let formattedDate = j.toLocaleDateString('en-GB', { day: '2-digit', month: 'short'}).replace(/ /g, '').toUpperCase();
  let tradingview='https://tv.dhan.co/?symbol=NSED';
let a="<a href='"+tradingview+h+":"+i+formattedDate+k+l+"'target='_blank'>"+i+" "+formattedDate+" "+k+l+"</a>"
  return a;
  }
