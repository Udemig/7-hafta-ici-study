/*
 * Props (Properties) > Özellikler
 * Dğer bilşenlerle veri iletişimi için kullanırız.
 * React bileşenleri dışarıdan gelen veriye erişmek ve bu verileri
 * kullanmak için props yöntemini kullanırlar.
 * Props, bir bileşinin özellikelrini diğer bielşenlerden alıığı
 * ve beileşnin görünümü veya davranışını belirleşmek içi kullanıdığı mekanizma
 * gönderilen proplar bir obje içerisinde fonkiyona parametre olarak gelir
 */

// Proplar (salt okunur) > değiştirilemez
const Card = (props) => {
  // object desctructuring yöntmeiyle objenin değerine doğrudan erişebiliyoruz
  const { theme, title, category, image, fromNow } = props.item;

  return (
    <div
      style={{
        background: theme === 'dark' ? 'black' : 'white',
      }}
      className="card"
    >
      <div className="card-image">
        <img src={image} />
      </div>
      <div className="category"> {category} </div>
      <div className="heading">
        {title}
        <div className="author">
          <span className="name">Abi</span> tarafından,
          {fromNow && <span>{fromNow}</span>}
        </div>
      </div>
    </div>
  );
};

export default Card;

/*
 * Conditional Rendering (Koşullu Renderlama)
 * Ekrana basılacak içerğin belirli koşullara
 * göre değiştiği durumlarda kullanıyoruz
 ! jsx içersind if else kullanamıyoruz
 * bu yüzden terneray ( ?  : ) veya && kullanılır.
 * else durumu varsa terneray
 * else durumu yoksa && kullanılır
 */
