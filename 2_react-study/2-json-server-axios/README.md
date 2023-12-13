# Vite Projesi için Adımlar

- npm create vite > yeni bir klasör içerisine react oluşturur
- npm create vite . > terminalin bulunduğu konuma oluşturur

- npm i > node modules indirme
- npm run dev > proje ayağa kaldırma

# Json-Server

- Kendi Bilgisayarımızda çalışan API oluşturmaya yarar
- Oluşturduğumuz db.json içerisindeki verileri izler
- Her bir dizi için endpoint oluşturur
- Bu endpointler yapılan istekleri izler
- İstekler sonucunda olan değişim db.json dsoayasına kaydedilir

## Faydaları

- Hızlı Protoipleme: Backend oluştulmadan önce uygulamanın temel özelliklerini oluştumak için kullanırız
- Kendimizi geliştirmek için yazdığımız uygulamalrın backend ihtiyacını karşılar

## Json-Server Operatörler

- Filtrelemelerde kullanıleceiğimiz opertorler:
- gte > greater than or equeals ">="
- lte > less than or equals "<="
- ne > not equals "!="

- değişken ismini sonuna ekleriz
- price_gte = 100 : fiyatı 100 den büyük veya eşit olan

## NOT:

- Projede json-server varsa projeyi ayağa kaldırmadan önce server ayağa kaldırlır (npm run server). Sonra projeye ayağa kaldırılır(npm run dev)

# Axios

- HTTP istekleri için modern çözüm
- Yerlişik değil paketini indermek gerekiyor
- npm i axios

  ``
  // fetch ile
  fetch('http://localhost:3000/todos', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(newTodo),
  });

  // axios ile
  axios.post('http://localhost:3000/todos', newTodo);``

# ve opertorü &&

- - todos && response && todos.map((todo) => <ListItem key={todo.id} />)

# optional chainnig ?.

- - todos?.response?.map((todo) => <ListItem key={todo.id} />)

# Altın Kural

- API güncelleniyorsa arayüzde güncellenicek
- Aryüz güncelleniyorsa api de güncelleicek

- Sadece api'yi güncellerseniz.
  Kullanıcı yaptığı işlemin gerçekleştiğini anlayamaz. Örn: alış veriş sepetinde sipraiş ver butonuna tıkldık. Sadce api isteği atarsak sipariş alınır ama bizim bu işlemin başarılı olduğüunu kullanıcıyada bildirmemiz lazım

- Sadece arayüzü güncellerseniz.
  Kullanıcı yaptığı işlemi sayfayı yenilyeince kaybeder. Örn: Alışveriş sepetinde kullanıcya alişveriş başarılı bildirimi verdik ama api'Ye istek atmadık o zman kullanıcı güncelrce bekelsede sipariş eline geçmez

- Olması Gerken:
  Önce api isteği atılır eğerki api isreği başarılı olursa arayüze bu yanıstılır. Başarısız olursa hata uyarısı verilir.
