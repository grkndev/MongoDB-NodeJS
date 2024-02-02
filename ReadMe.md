# NodeJS ile MongoDB (Mongoose)

## Hesap Oluşturma 
![Foto](/images/1.png)
- [MongoDB.com](https://mongodb.com) Adresinden kendimize bir hesap oluşturacağız. Linke girip sağ üsten `Try Free` butonuna basarak hesap oluşturma sayfasına giriyoruz. Eğer zaten hesabınız varsa `Sign in` diyebilirsiniz.

![Foto](/images/2.png)
- Açılan sayfada bu formu doldurarak bilgilerinizi girip `Create your Atlas account` butonuna basıp hesabımızı oluşturuyoruz.

## Aktivasyon
![Foto](/images/3.png)
- Formu doldurduktan sonra belirttiğimiz mail adresimize bir doğrulama maili gelecek.

![Foto](/images/4.png)
- Gelen mailde `Verify Email` diyerek aktivasyonu gerçekleştirelim.

![Foto](/images/5.png)
- Hesap aktivasyonumuz gerçekleşti artık hesabımızı kullanabiliriz.

## Hesap detayları
![Foto](/images/6.png)
- Hesabımız hakkında detayları girelim ve devam et diyelim.

## Cloud Bilgileri
![Foto](/images/7.png)
- Veritabanı için sunucu seçimleri yapalım. Ben burda sağlayıcı olarak **`AWS`** ve lokasyon olarak **Ireland(`eu-west-1`)** seçimini yapacağım. Dilerseniz **`name`** kısmında adlandırmayı değiştirebilirsiniz.

## Kullanıcı işlemleri
![Foto](/images/8.png)
- Açılacak sayfada sol menüden **Database Access** kısmına girelim
<br />

![Foto](/images/9.png)
- Açılan menüde **Add new Database user** diyelim.

<br />

![Foto](/images/10.png)
- Bu menüde kullanıcı adı ve parola ayarlıyacağız. Auth işlemlerini hallettikten sonra **Built-in Role** kısmında kullanıcıya rol atayalım. Ben **Read and write any database** rolünü seçtim.

<br />

![Foto](/images/11.png)
- Sol menüden **database** kısmına geri dönelim. Bu sayfada **Connect** butonuna basalım. 