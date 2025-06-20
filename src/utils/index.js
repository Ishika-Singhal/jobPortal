import qs from "query-string";

export const recruiterOnboardFormControls = [
  {
    name: "name",
    label: "Name",
    componentType: "input",
    placeholder: "Enter your Name",
  },
  {
    name: "companyName",
    label: "Company Name",
    componentType: "input",
    placeholder: "Enter your Company Name",
  },
  {
    name: "companyRole",
    label: "Company Role",
    componentType: "input",
    placeholder: "Enter your Compnay Role",
  },
];

export const initialRecruiterFormData = {
  name: "",
  companyName: "",
  companyRole: "",
};

export const candidateOnboardFormContols = [
  {
    name: "resume",
    label: "Resume",
    componentType: "file",
    placeholder: "Upload your Resume",
  },
  {
    name: "name",
    label: "Name",
    componentType: "input",
    placeholder: "Enter your Name",
  },
  {
    name: "currentCompany",
    label: "Current Company",
    componentType: "input",
    placeholder: "Enter your Current Company",
  },
  {
    name: "currentJobLocation",
    label: "Current Job Location",
    componentType: "input",
    placeholder: "Enter your Current Job Location",
  },
  {
    name: "preferedJobLocation",
    label: "Prefered Job Location",
    componentType: "input",
    placeholder: "Enter your Prefered Job Location",
  },
  {
    name: "currentSalary",
    label: "Current Salary",
    componentType: "input",
    placeholder: "Enter your Current Salary",
  },
  {
    name: "noticePeriod",
    label: "Notice Period",
    componentType: "input",
    placeholder: "Enter your Notice Period",
  },
  {
    name: "skills",
    label: "Skills",
    componentType: "input",
    placeholder: "Enter your Skills",
  },
  {
    name: "perviousCompanies",
    label: "Previous Companies",
    componentType: "input",
    placeholder: "Enter your Previous Companies",
  },
  {
    name: "totalExperience",
    label: "Total Experience",
    componentType: "input",
    placeholder: "Enter your Total Experience",
  },
  {
    name: "college",
    label: "College",
    componentType: "input",
    placeholder: "Enter your College",
  },
  {
    name: "collegeLocation",
    label: "College Location",
    componentType: "input",
    placeholder: "Enter your College Location",
  },
  {
    name: "graduatedYear",
    label: "Graduated Year",
    componentType: "input",
    placeholder: "Enter your Graduated Year",
  },
  {
    name: "linkedlnProfile",
    label: "LinkedIn Profile",
    componentType: "input",
    placeholder: "Enter your LinkedIn Profile",
  },
  {
    name: "githubProfile",
    label: "GitHub Profile",
    componentType: "input",
    placeholder: "Enter your GitHub Profile",
  },
];

export const initialCandidateAccountFormData = {
  name: "",
  skills: "",
  perviousCompanies: "",
  totalExperience: "",
  college: "",
  collegeLocation: "",
  graduatedYear: "",
  linkedlnProfile: "",
  githubProfile: "",
  noticePeriod: "",
  currentCompany: "",
  currentJobLocation: "",
  currentSalary: "",
  preferedJobLocation: "",
};
export const initialCandidateFormData = {
  name: "",
  resume: "",
  skills: "",
  perviousCompanies: "",
  totalExperience: "",
  college: "",
  collegeLocation: "",
  graduatedYear: "",
  linkedlnProfile: "",
  githubProfile: "",
  noticePeriod: "",
  currentCompany: "",
  currentJobLocation: "",
  currentSalary: "",
  preferedJobLocation: "",
};

export const postNewJobFormControls = [
  {
    name: "companyName",
    label: "Company Name",
    componentType: "input",
    placeholder: "Enter your Company Name",
    disabled: true,
  },
  {
    label: "Title",
    name: "title",
    componentType: "input",
    placeholder: "Enter your Job Title",
  },
  {
    name: "description",
    label: "Job Description",
    componentType: "textarea",
    placeholder: "Enter your Job Description",
  },
  {
    name: "location",
    label: "Location",
    componentType: "input",
    placeholder: "Enter your Job Location",
  },
  {
    name: "experience",
    label: "Experience",
    componentType: "input",
    placeholder: "Enter your Job Experience",
  },
  {
    name: "skills",
    label: "Skills",
    componentType: "input",
    placeholder: "Enter your Job Skills",
  },
  {
    name: "type",
    label: "Job Type",
    componentType: "input",
    placeholder: "Enter your Job Type",
  },
];

export const initialPostNewJobFormData = {
  companyName: "",
  title: "",
  type: "",
  location: "",
  experience: "",
  description: "",
  skills: "",
};

export const filterMenuData = [
  {
    id: "companyName",
    name: "Company Name",
  },
  {
    id: "title",
    name: "Title",
  },
  {
    id: "type",
    name: "Type",
  },
  {
    id: "location",
    name: "Location",
  },
];

export function formUrlQuery({ params, dataToAdd }) {
  let currentURL = qs.parse(params);
  if (Object.keys(dataToAdd).length > 0) {
    Object.keys(dataToAdd).map((key) => {
      if (dataToAdd[key].length === 0) delete currentURL[key];
      else currentURL[key] = dataToAdd[key].join(",");
    });
  }
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentURL,
    },
    {
      skipNull: true,
    }
  );
}
