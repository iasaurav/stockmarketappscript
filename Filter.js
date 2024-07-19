ZERODHA.pasteFormulaniftt();
ZERODHA.pasteFormulabniftt();


function pasteFormula() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet2');
  var formula = '=YOUR_FORMULA_HERE';
  sheet.getRange('A1').setFormula(formula);
}


function pasteFormulabniftt() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet2');
  var formula = '=FILTER(A1:F,C1:C="BANKNIFTY",E1:E>AE2-300,E1:E<AE2+600,D1:D=AD2)';
  sheet.getRange('AN1').setFormula(formula);
}
