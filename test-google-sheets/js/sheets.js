const sheetsButton = document.getElementById("sheets");

sheetsButton.addEventListener("click", emailTest);

spreadsheetId = "1HR5AV3eOx6wvPA7gN8vfkS8W6IGyAzEbDuHLvaw9FCo";
range = "Sheet1!A:A";
valueInputOption = "RAW";

function emailTest() {
  sheetsButton.innerHTML = "Changed";
  var values = [
    [ // cell values
      ["test@email.com"]
    ],
    // Additional rows ...
    [ // cell values
      ["test2@email.com"]
    ],
  ];

  var body = {
    values: values
  };

  gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: spreadsheetId,
    range: range,
    valueInputOption: valueInputOption,
    resource: body
  }).then((response) => {
    var result = response.result;
    console.log(`${result.updatedCells} cells updated.`);
  });
}