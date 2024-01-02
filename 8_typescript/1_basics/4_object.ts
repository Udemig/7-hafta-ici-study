/*
 * Object Type:
 * Normalde typescript'de bir object type'ı mevcut. 
 * Javascript'de bir çok yapı objelerden meydana geldiği için
 * object type'ı ucu çok açık bir tip. Bu yüzden bunu kullanmayı
 * tercih etmeyiz.
 
 * Biz genelde daha spesifik bir şekilde özellikleri belirli olan
 * objelerle çalışır.
 * Bu sayede hem özelliklerinin type'ları belirli olan objeler tanımlamış
 * oluruz hem typescript'İn otomatik tamamlama desteği sayesinde yazım
 * hatalarından kurulup hızlanırız
 
*/

// let student_1: object; TERCİH EDİLMEZ

let student_1: {
  id: number;
  firstname: string;
  lastname: string;
  isGraduated: boolean;
} = {
  id: 12,
  firstname: 'Ahmet',
  lastname: 'Yıldız',
  isGraduated: false,
};

let student_2: {
  id: number;
  firstname: string;
  lastname: string;
  isGraduated: boolean;
};

student_2 = {
  id: 342,
  firstname: 'ali',
  lastname: 'yıdlırım',
  isGraduated: true,
};

// Örnek: API'DAN GELEN BİR VERİNİN TİPİNİ TANIMLA

// tip ataması
let user: {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string | number;
    city: string;
    zipcode: string | number;
    geo: {
      lat: string | number;
      lng: string | number;
    };
  };
  phone: string | number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// değer ataması
user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

// Otomatik tamamlama desteği

console.log(user.website);
console.log(user.email);
