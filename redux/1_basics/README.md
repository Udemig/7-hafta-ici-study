# State Yönetimi

- State: Uygulamdaki bileşenlerimizin sahip olduğu bilgi ve özelliklerdir.

- Prop Drilling: Bileşenlerin yukarıdan aşşağıya veri taşıması.

- Context API: Uygulamadki state'i oluştudğumuz merkezlerden yönettiğimiz state yönetim aracı.

- Redux: Bileşenlerin sahip olduğu ve merkezi olarak tutulması gereeken state'leri yöetene merkezi state yönetim aracı

# Neden Redux ?

- Kod tekrarını önler
- Performansı arttırır
- Bileşen içerisindeki karkaışıklığı azaltır
- Hata ayıklama daha kolaydır.
- Orta ve büyük ölçekli uygulamalarda state yönetimini kolaylaştırır

# Eksi Yanı

- Küçük ölçekli uygulamalarda state yönetimini için biraz aşırı bir çözüm olur muadillerine göre daha fazla kod kalabılığına neden olur.

# Redux ile ilgili bilinmesi gerekenler

1. Store: Uygulumanın bğtğn bileşenleri tarafından erişilebilen ve yönetilebilen state deposu.

2. Reducer: Aksiyondan alıdğı talimata göre store da tutuğumuz state'in nasıl değiceğine karar veren yapı.

3. Action: Store'u güncellemek için reducer'a gönderdiğimiz emir/haber

- - Action iki değere sahip bir objedir.
- - type (zorunlu): Action ın görevini tanımlayan string: ("TODO_EKLE")
- - payload (duruma göre): Gönderilen eylemin verisi: {id:1,title:"merhaba"}

4. Dispatch: Action'un gerçekleştiğini reucer'a haber veren method

5. Subscribe: Bileşenlerin store'da tuttulan verilere erişimini sağlama (useContext | useSelector)

6. Provider: Store'da tutulan veirleri uygulamaya sağlar.

# Redux Kullanmak İçin Aşamalar:

- `redux` `react-redux` paketlerini indir √
- reducer / reducer'ların kurulumunu yap √
- store'un kurlumunu yap √
- store'u projeye tanıt √
