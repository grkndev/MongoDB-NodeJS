import mongoose from "mongoose"; //Apimiz
import DataBase from "./models/ExampleModel.js"; //Modelimiz

const url =
  "mongodb+srv://root:RootUser@cluster0.1ztzw3m.mongodb.net/AwesomeCollection";
/*
mongodb.com'dan aldığımız URL.
`AwesomeCollection` Collection'ımızın adı. Bunu değiştirerek farklı isimlerde oluşturabilirsiniz.
*/

main();
async function main() {
  await Connect();
  // await CreateNew();
  await FindOne();
  await UpdateOne();
}
async function Connect() {
  mongoose
    .connect(url)
    .then((con) => {
      console.log("Bağlantı başarılı");
    })
    .catch((err) => {
      console.log("Bağlantı Başarısız. ", err);
    });
}

async function CreateNew() {
  new DataBase({
    name: "Grkn",
    email: "info@rabelcode.net",
    avatar:
      "https://pbs.twimg.com/profile_images/1671511978303430658/0fcxWFub_400x400.jpg",
  })
    .save()
    .then((savedData) => {
      console.log("Veri Başarıyla kaydedildi");
    });
}

async function FindOne() {
  const res = await DataBase.findOne({ email: "info@rabelcode.net" });
  if (!res) return console.log("Database not found");
  console.log("Database founded: ", res);
}

async function FindAll() {
  const res = await DataBase.find();
  console.log("All Db: ", res);
}

async function UpdateOne() {
  const res = await DataBase.findOne({ email: "info@rabelcode.net" });
  if (!res) return console.log("Database not found");
  res
    .updateOne({
      name: "GrknDev-UpdatedData",
    })
    .then((updated) => console.log("Updated: ", updated))
    .catch((err) => console.log("Error", err));
}

async function DeleteOne() {
  const res = await DataBase.findOne({ email: "info@rabelcode.net" });
  if (!res) return console.log("Database not found");
  res
    .deleteOne()
    .then((deleted) => console.log("Deleted: ", deleted))
    .catch((err) => console.log("Error: ", err));
}
