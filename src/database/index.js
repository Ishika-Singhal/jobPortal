const { default: mongoose } = require("mongoose");

const database_url = process.env.DB_URL;



const connectToDB = async () => {
  const connectionUrl = database_url;

  await mongoose
    .connect(connectionUrl)
    .then(() => console.log("Job Board Database Connection is Successful"))
    .catch((err) => console.log(err));
};

export default connectToDB;
