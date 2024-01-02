/*
 * Array:
 * Ts tarafında her dizinin alabileceği verinin tipini tanımlayabiliyoruz.
 
 * Tanım:
 * tip[]
 */

const students: string[] = ['Ahmet', 'Ali', 'Mehmet', 'Fatma'];

// bütün dizi methdoları tanımaldığımız tipe uygun çalışır
students.push('Veli');

// students.unshift(66); // hata verir

const ages: number[] = [13, 435, 56, 76, 6];

const licences: boolean[] = [true, false, true];
/*
 * Normalde dizinin alabileceği tek bir tür olması beklenir
 * Bazı durumlarda birden farklı türde veri alan diziler olabilir.
 * Birden fazla tipi birarada kullanaiblmek için union types (birleşmik tipler)
 
 * Union type oluşturmak için | kullanılır. "ya bu type olsun yada bu type"  

*/

// dizideki veriler ya string ya null olsun
var teacher: (string | null | number)[] = [
  'Uğur',
  null,
  'Ahmet',
  'Ali',
  null,
  null,
  34,
];

// ya string dizisi yada number dizisi olsun
let test_arr: string[] | number[];

test_arr = ['asdasd', 'sdf', 'sdfs'];
test_arr = [3245, 56, 78, 89];
