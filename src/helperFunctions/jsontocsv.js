export default function convertJsonToCsv(data) {
  let csvrecord =
    "graduateName,graduteEmail,cohort,graduateuuid,timestamp,isemployed,techrole,currentsalary,currentemployer,lengthofservice,currentrole,jobsatisfaction" +
    "\n";

    data.forEach((graduate) => {
    let { graduatename, graduateemail, cohort } = graduate;
    graduate.responses.forEach((response) => {
      const {
        graduateuuid,
        timestamp,
        isemployed,
        techrole,
        currentsalary,
        currentemployer,
        lengthofservice,
        currentrole,
        jobsatisfaction,
      } = response;
      csvrecord += `${graduatename},${graduateemail},${cohort},${graduateuuid},${timestamp},${isemployed},${techrole},${currentsalary},${currentemployer},${lengthofservice},${currentrole},${jobsatisfaction}\n`;
    });
  });

  return csvrecord;
}
