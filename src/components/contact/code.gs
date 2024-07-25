function doPost(e) {
  const sheet = SpreadsheetApp.openById('1Z-4tUkqHdmj-vsWp5jsQKKjQDE_TttTAQ8GzyOKGNLQ').getSheetByName('Sheet1');
  const params = e.parameter;

  sheet.appendRow([
    params.name,
    params.phoneNo,
    params.email,
    params.subject,
    params.message,
  ]);

  const output = ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);

  // Add CORS headers to allow cross-origin requests
  output.setHeader("Access-Control-Allow-Origin", "*");
  output.setHeader("Access-Control-Allow-Methods", "POST");
  output.setHeader("Access-Control-Allow-Headers", "Content-Type");

  return output;
}

function doGet(e) {
  const output = ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);

  // Add CORS headers to allow cross-origin requests
  output.setHeader("Access-Control-Allow-Origin", "*");
  output.setHeader("Access-Control-Allow-Methods", "GET");
  output.setHeader("Access-Control-Allow-Headers", "Content-Type");

  return output;
}




function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('1LaGWE93ym1im2fDI92NgO78UZzT1t43ZsXBx4V_TBbE').getSheetByName('Sheet1');
    const params = e.parameter;

    sheet.appendRow([
      params.username,
      params.phoneNumber,
      params.email,
      params.subject,
      params.message,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}



https://docs.google.com/spreadsheets/d/1Z-4tUkqHdmj-vsWp5jsQKKjQDE_TttTAQ8GzyOKGNLQ/edit?usp=sharing
https://script.google.com/macros/s/AKfycbx14fQHbtSRFqwriaAO0TuRQ0D-ThPkEcoozoqLZWLEpESgGtmTUl5yafuReS7JvByx/exec