/*
 * React ugyulaamlarında  bileşen içerisnde yaptığımız
 * değişikliklerin arayüz üzerinde değişim yapması için
 * bileşenin tekradan render olması greklidir.
 * State: bileşen içerisdneki verileri saklamay ve yönetmeye yarar.
 * State her değiştiğinde bielşen otamatik oalrak terkra render olur
 * Eğerki tutuğumu değişkenin değerinde değim olunca
 * arayazün değişmesi gerekiyorsa o zman state 'i tercih ederiz
 * State doğrudan değiştilemez
 * her zman yanında glen set methodu kullanılmalıdır
 */
import { useState } from 'react'; // hook > özel yetenekli fonksyionlar

const Counter = () => {
  // use state diiz içerisnde iki değer dödürür
  // tutuğumuz verinin güncel hali
  // veriyi değiştirmey yarayan fonksiyon
  const [count, setCount] = useState(0);

  const remove = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <button disabled={count === 0} onClick={remove}>
        Eksi
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 10)}>Artı</button>
      <button onClick={() => setCount(0)}>Sıfırla</button>
    </div>
  );
};

export default Counter;
