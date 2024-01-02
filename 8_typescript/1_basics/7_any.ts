/*
 * "Any" Type: Bir değişkene farklı türlrlde değer atanmasını istedğimiz zaman
 * değişkenin türünü any olarak belirleriz. Bu durumda bu değişken javascript'da
 * tanımlanmış gibi davranır. Yani herhangi bir türde veri atamssı yapabiliriz.
 * Bu değişken için tamamlama özelliği devre dışı kalır.
 
 * Normal şartlarda any ts'e aykırıdır.
 * Çünkü ts'deki amaç her değişkenim türünün belili olmaıssıdır.
 
 * Any genelde geçici olarak acil durumlarda tercih edilir.
 * Ör: Api'dan gelen veilereri hızlıcak kullanıcların kullnamaısnı sağşlamamız gerekiyor.
 * Burada geçici oalrak verinin tipini any oalrak belirleyip daha sonra vaktimiz oldğunda
 * tipini detaylı bir şekilde tanımlayabiliriz
 
 * Mutlaka any tipleri bir noktadan sonra koddan kaldırılıp doğru tiplerle tanımalanmalı.
 * Sadece geçici olarak kullanılmalı.
 */

let foo: any;
foo = 'selam';
foo = 34;
foo = undefined;
foo = [];
foo = true;
