// export default function convertJsonToCsv(jsonData) {
//   let csvrecord = [Object.keys(jsonData.payload[0])].join(",") + "\n";

//   jsonData.payload.forEach(function (jsonrecord) {
//     csvrecord += Object.values(jsonrecord).join(",") + "\n";
//   });

//   return csvrecord;
// }

// set csv headers using dot notiaton to access the keys of the datat points that we want in the csv
//for each graduate:
//for each response:
//create a new row, using  response data points + parent graduate info

export default function convertJsonToCsv(jsonData) {
  let csvrecord =
    "graduateName,graduteEmail,cohort," +
    Object.keys(jsonData.payload[0].responses[0]).join(",") +
    "\n";

  jsonData.payload.forEach((graduate) => {
    let { graduatename, graduateemail, cohort } = graduate;
    graduate.responses.forEach((response) => {
      csvrecord +=
        `${graduatename},${graduateemail},${cohort}` +
        Object.values(response).join(",") +
        "\n";
    });
  });

  return csvrecord;
}
