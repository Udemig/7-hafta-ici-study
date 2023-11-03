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

# ve opertorü &&

- - todos && response && todos.map((todo) => <ListItem key={todo.id} />)

# optional chainnig ?.

- - todos?.response?.map((todo) => <ListItem key={todo.id} />)
