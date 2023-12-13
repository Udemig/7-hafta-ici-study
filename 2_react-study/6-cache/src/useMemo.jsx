import React, { useMemo, useState } from "react";

/*
 * Cache (ön bellek):
 * Verileri geçici olarak saklamak için kullanılan
 * mekanizmayı ifade eder. Cache, hızzlı erişim sağlamak,
 * veri alışverişini optimize etmek, performansı
 * arttırmak için kullanılır
 * useMemo();
 * useCallback();
 */
const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useMemo():birr değeri hespalamak ve sonucunu önbellekte
  // saklamak için kullanılır
  // her render sırasında hesaplmayı yapmak yerine
  // eğerki bağımllılıklar değişmediyse daha önceki yaptığı
  // hespalamadan elde ettiği sonucu cache'ten getirir
  const newCount = useMemo(() => {
    console.log("fonk çağrıldı.. işlemlerle başladı");
    [new Array(1000000000)].forEach((item) => {});
    return count * 2;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        sayacın değeri {count}
      </button>

      <p>hesaplanan değer: {newCount}</p>
      <br />
      <br />

      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="isminiz"
      />
      <p>isminiz: {name}</p>
    </div>
  );
};

export default MemoExample;
