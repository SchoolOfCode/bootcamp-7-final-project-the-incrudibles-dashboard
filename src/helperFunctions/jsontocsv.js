
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
