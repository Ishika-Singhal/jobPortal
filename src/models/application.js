const { default: mongoose } = require("mongoose");

const applicationSchema = new mongoose.Schema({
    recruiterUserID :String,
    name:String,
    email:String,
    candidateUserId:String,
    status:Array,
    jobID:String,
    jobApplicationDate:String 
})

const Application = mongoose.models?.Application ?? mongoose.model("Application", applicationSchema);

export default Application