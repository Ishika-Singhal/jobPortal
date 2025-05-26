const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  const connectionUrl = "mongodb://localhost:27017";
  (await mongoose.connect(connectionUrl))
    .then(() => console.log("Job Board Database Connection is Successful"))
    .catch((err) => console.log(err));
};

export default connectToDB;