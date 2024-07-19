function pasteFormula() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('apk');
  var formula = '=YOUR_FORMULA_HERE';
  sheet.getRange('A1').setFormula(formula);
}
