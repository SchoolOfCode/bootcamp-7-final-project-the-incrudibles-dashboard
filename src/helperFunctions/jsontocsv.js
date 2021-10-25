export default function convertJsonToCsv(jsonData) {
  let csvrecord = Object.keys(jsonData.payload[0]).join(",") + "\n";
  jsonData.payload.forEach(function (jsonrecord) {
    csvrecord += Object.values(jsonrecord).join(",") + "\n";
  });
  return csvrecord;
}
