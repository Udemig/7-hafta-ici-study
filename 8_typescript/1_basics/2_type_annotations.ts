/*
 * Type Annotation:
 * Javascript değişkenin türünü belirleme gibi bir özellik söz konusu değil.
 * Fakat typescript'de tanımladığımız değişkenlerin tiplerini belirleyebiliyoruz.
 
 * Değişkene  değer ataması yaparken belirledeğim tipin dışına çıkamıyoruz. 

*/

let username: string = 'mehmet';

username = 'ali';

// username = true; // hata verir (string şeklinde tanımlanmış)

let age: number = 50;

// age = [34,34,34] // hata verir

/*
 * Types
 * string
 * number
 * boolean
 * array
 * object
 * null
 * undefined
 * function
 * symbol (pek kullanılmaz)
 * bigint (pek kullanılmaz)
 */

let name2: string = 'ali';

let age2: number = 45;

let has_licence: boolean = true;

let student: object = {
  id: 2,
  name: 'Ali',
  year: 2011,
};

let value: null = null;

let value2: undefined;
