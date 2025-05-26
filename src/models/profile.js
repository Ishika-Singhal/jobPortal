const { default: mongoose, mongo } = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: String,
  role: String,
  email: String,
  isPremiumUser: Boolean,
  memberShipType: String,
  memberShipStartDate: String,
  memberShipEndDate: String,
  recruiterInfo: {
    name: String,
    companyName: String,
    companyRole: String,
  },
  candidateInfo: {
    name: String,
    resume: String,
    skills: String,
    perviousCompanies: String,
    totalExperience: String,
    college: String,
    collegeLocation: String,
    graduatedYear: String,
    linkedlnProfile: String,
    githubProfile: String,
    noticePeriod: String,
    currentCompany: String,
    currentJobLocation: String,
    currentSalary: String,
    preferedJobLocation: String,
  },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default Profile;
