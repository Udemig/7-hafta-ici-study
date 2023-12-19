# Kütüphaneler

- axios
- react-router-dom
- json-server
- tailwind

# MVC (Model - View Controller)

- Model:

* - Uygulamanın veri mantığını veya yapsını temsil eder. Örn:
* - Bileşende tutulucak state'in başlangıç değeri
* - Veriyi formatlamaya yarayan fonksiyonlar
* - API' işlemleri tuulabilir

- View:

* - Son Kullanıcın gördüğü tasarımdır.
* - Bileşenlerimdeki return satıtında yazdığımız JSX elemetleri bu bilşende tanımlanır

- Controller:

* - View ile model arasındaki bağlantıyı sağlar
* - Kullanıcı etkileşimiyle tetiklenicek bütün fonksiyonlar burada tanımlanır

# MVC Klasör Yapısı

# # 1.yol

- public
- src
- - pages

- - - MainPage
- - - - MainPageController
- - - - MainPageView
- - - - MainPageModel

- - - Auth
- - - - AuthPageController
- - - - AuthPageView
- - - - AuthPageModel

# # 2.yol

- public
- src

- - models
- - - MainPageModel
- - - AuthPageModel

- - views
- - - MainPageModelView
- - - AuthPageModelView

- - controllers
- - - MainPageController
- - - AuthPageController
