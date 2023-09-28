//! Html'den gelenler
const categoryList = document.querySelector('.categories');
const productList = document.querySelector('.products');
const modal = document.querySelector('.modal-wrapper');
const basketBtn = document.querySelector('#basket-btn');
const closeBtn = document.querySelector('#close-btn');

//! olay izleyicileri
// html'in yüklenme anını izler:
document.addEventListener('DOMContentLoaded', () => {
  fetchCategories();
  fetchProducts();
});

/*
 * kategori bilgilerini alma
 * 1- api'ye istek at
 * 2- gelen veiriyi işle
 * 3- verileri ekran basıcak fonksinu çalıştır
 * 4- hata oluşursa kullanıcı bilgilendir
 */

const baseUrl = 'https://fakestoreapi.com';

function fetchCategories() {
  fetch(`${baseUrl}/products/categories`)
    .then((response) => response.json())
    .then(renderCategories); // then çalıştırıdğı fonksiyon verileri parametre olarak gönderir
  // .catch((err) => alert('Kategorileri alırken bir hata oluştu'));
}

// her bir kategori için ekrana kart oluşturur
function renderCategories(categories) {
  categories.forEach((category) => {
    //1- div oluştur
    const categoryDiv = document.createElement('div');
    //2- dive class ekleme
    categoryDiv.classList.add('category');
    //3- içeriğini belirleme
    const randomNum = Math.round(Math.random() * 1000);
    categoryDiv.innerHTML = `
            <img src="https://picsum.photos/300/300?r=${randomNum}" />
            <h2>${category}</h2>
    `;
    //4- html'e gönderme
    categoryList.appendChild(categoryDiv);
  });
}

// ürünler verisini çeken fonksiyon
async function fetchProducts() {
  try {
    // api'a istek at
    const response = await fetch(`${baseUrl}/products`);
    // gelen cevabı işle
    const data = await response.json();
    // ekrana bas
    renderProducts(data);
  } catch (err) {
    // alert('Ürünleri alırken bir hata oluştu');
  }
}

// ürünleri ekran basre
function renderProducts(products) {
  // her bir ürün için bir ürün kartı oluşturma
  console.log(products);
  const cardsHTML = products
    .map(
      (product) => `
         <div class="card">
            <div class="img-wrapper">
                <img src="${product.image}" />
            </div>
            <h4>${product.title}</h4>
            <h4>${product.category}</h4>
            <div class="info">
              <span>${product.price}$</span>
              <button>Sepete Ekle</button>
            </div>
          </div>
  `
    )
    .join(' ');

  // hazırladığımız html'i ekrana basma
  productList.innerHTML = cardsHTML;
}

//! Sepet İşlemleri
// modal'ı açar
basketBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

// dışarıya veya çarpıya tıklanırsa modal'ı kapatır
document.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('modal-wrapper') ||
    e.target.id === 'close-btn'
  ) {
    modal.classList.remove('active');
  }
});
