/*
 ! react bileşenleri:  kullanıcı aryüzünü oluştumak
 * için kullanılan temel yapı taşlarıdır.
 * Bir tane fonksiyon oluşturuyoruz
 * Fonksiyonun ismine bilEşenin ismini veriyoruz.
 * Bileşen ismi her zaman Büyük harfle başlar
 * BileşEnler return satırında kulalnıcınIN görüceği
 * arayüzü döndürmek zorundadır. (JSX - JavaScript XML)
 */

/*
 ! JSX: react tarafında kullanılan bir sözdizmi.
 * JSX Javascript içerisnde HTML benzeri bir yapıyla 
 * arayüzü tanımlamaya yarar.
*/

const Header = () => {
  return (
    <header>
      <img width={40} src="/logo192.png" />
      <nav>
        <a href="/denme">Hakkımızda</a>
        <a href="/denme">Eğitimler</a>
      </nav>
    </header>
  );
};

export default Header;
