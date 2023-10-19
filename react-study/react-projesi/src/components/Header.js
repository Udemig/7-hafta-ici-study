/*
 ! react bileşenleri:  kullanıcı aryüzünü oluştumak
 * için kullanılan temel yapı taşlarıdır.
 * Bir tane fonksiyon oluşturuyoruz
 * Fonksiyonun ismine bilEşenin ismini veriyoruz.
 * Bileşen ismi her zaman Büyük harfle başlar
 * Bileşenler return satırında kulalnıcının görüceği
 * arayüzü döndürmek zorundadır. (JSX - JavaScript XML)
 * Ve bu arayüz tek bir kapsayıcı içserinde olmalıdır.
 */

/*
 ! JSX: react tarafında kullanılan bir sözdizmi.
 * JSX Javascript içerisnde HTML benzeri bir yapıyla 
 * arayüzü tanımlamaya yarar.
 * <> : fragment
 * {} : doğrudan jsx içerisnde js kodu yazabiliyoruz
 * <div/> : bütün etiketler self closing olabilir.
 * className: sınıf tanımlarken kullanılır
 * attribute : bütün özellikler camelCase ile tanımlanır
 * inline css: {{}} çift parantex içeserine alırız / camelCase kullanuruz.
 * olay izleme: izlemek istediğimiz olayları direkt etikette tanımlıyoruz
 */

const Header = () => {
  //  fonksiyonlar değişkenler tanımlanır
  const links = {
    about: 'Hakkımızda',
    edu: 'Eğitimler',
  };

  const uyarıVer = () => {};

  const is_logged = true;

  // return kısmında arayüz tanımlanır
  return (
    <header>
      <img width={40} src="/logo192.png" />
      <nav>
        <a href={`/sayfa/${links.about}`}>{links.about}</a>
        <a href="/sayfa">{links.edu}</a>
      </nav>

      <br />

      <img className="box" />
      {/* 
      <div
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: 'red',
          position: 'absolute',
          top: 0,
        }}
      /> */}

      {is_logged ? (
        <button style={{ background: 'red' }}>Çıkış yap</button>
      ) : (
        <button style={{ background: 'green' }}>Giriş yap</button>
      )}

      {/* 
      <button onClick={uyarıVer}>
        {is_logged ? 'Çıkış Yap' : 'Giriş Yap'}
      </button> */}
    </header>
  );
};

export default Header;
