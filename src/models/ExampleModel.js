/*
    Veritabanı için bir SQL'de ki gibi bir tablo oluşturmamız gerekiyor.
    Mongoda bunun için bir şema oluşturacağız.
    'mongoose' paketi içinden `Schema` adlı apiyi çekiyoruz.
    Bunu kullanarak bir şema oluşturacağız.
*/
import mongoose, { Schema } from "mongoose";

/*
    Şema için örnek bir arayüz oluşturuyoruz bunu kullanmadan da oluşturabilirsiniz.
    Ben kullanmayı tercih ediyorum.
*/

//TypeScript
// interface Example {
//   name: string;
//   email: string;
//   avatar?: string;
// }

//Yeni bir Schema oluşturduk.
// const ExampleSchema = new Schema<Example>({
  const ExampleSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});
/*
    Parametrelere zorunlu olarak tür vermemiz gerekiyor.
    Burdaki `required` ifadesi bu parametrenin girilmesinin zorunlu olacağını belirtiyor.
    Eğer veritabanı oluşturma sırasında bu veriyi vermez isek yeni Db oluşmayacak.
*/

/*
    Şemamızı oluşturduk ve Modelimize kaydediyoruz.
    Artık Veritabanımızda Collection'ımız altında `User` isminde tablomuz oluştu
*/
export default mongoose.model("User", ExampleSchema);
