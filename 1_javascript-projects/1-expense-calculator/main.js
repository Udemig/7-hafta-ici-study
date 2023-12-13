//! HTML'den gelenler
const addBtn = document.getElementById('add-btn');
const priceInp = document.getElementById('price-inp');
const titleInp = document.querySelector('#title-inp');
const checkBox = document.querySelector('#checked');
const list = document.querySelector('#list');
const totalSpan = document.querySelector('#price-info');
const select = document.querySelector('select');
const userInp = document.querySelector('#user-inp');

//! Olay İzleyicileri
addBtn.addEventListener('click', addExpense);
list.addEventListener('click', handleUpdate);
select.addEventListener('change', handleFilter);
userInp.addEventListener('change', saveUser);
document.addEventListener('DOMContentLoaded', getUser);

// toplam fiyat bilgisi
let totalPrice = 0;

//! Fonksiyonlar
// hem toplam değişkenini hem arayüzü günceller
function updateTotal(price) {
  // js'de tutulan değişkeni günceller
  totalPrice += price;

  // html'deki toplam alanını günceller
  totalSpan.innerText = totalPrice;
}

// yeni harcama ekler
function addExpense(event) {
  // sayfayı yenilemeyi engeller
  event.preventDefault();

  // inputların değerlerine erişme
  const title = titleInp.value;
  const price = priceInp.valueAsNumber;
  // kopyalama > shift + alt + aşşağı yön tuşu

  //! 1- inputlardan biri dahi boş ise: alert ver ve fonksiyonu durdur
  if (!title || !price) {
    alert('Lütfen formu doldurudunuz');
    return;
  }

  //! 2- inputlar douluysa bir kart oluştur ve html'e gönder
  //a- div oluşturma
  const expenseDiv = document.createElement('div');

  // b- class ekleme
  expenseDiv.classList.add('expense');

  if (checkBox.checked === true) {
    expenseDiv.classList.add('paid');
  }

  // c- div'in içeriğini belirleme
  expenseDiv.innerHTML = `
          <h2 id="title">${title}</h2>
          <h2 id="price">${price}</h2>
          <div class="btns">
            <img id="update" src="/images/money.png" />
            <img id="delete" src="/images/delete.png" />
          </div>
  `;

  //d- oluşan kartı html'e gönderme
  list.appendChild(expenseDiv);

  //e- topalmı güncelle
  updateTotal(price);

  //! 3 Inputları temizle
  titleInp.value = '';
  priceInp.value = '';
  checkBox.checked = false;
}

// harcamayı siler / günceller
function handleUpdate(event) {
  // tıklanılan eleman
  const ele = event.target;

  //  tıklanılan butonun kapsayıcısına / kartına ulaşma
  const parent = ele.parentElement.parentElement;

  // tıklanılan elemanın id!si delete ise çalışır
  if (ele.id === 'delete') {
    // sildiğimiz elemanın fiyatına erişme
    const price = Number(parent.children[1].innerText);

    // toplam'dan sildiğimiz fiyatı çıkarma
    updateTotal(-price);

    // elemanı html'den kaldırma
    parent.remove();
  }

  //   tıklanılşan eleman güncelle ise
  if (ele.id === 'update') {
    parent.classList.toggle('paid');
  }
}

// note'ları filtreler
function handleFilter(event) {
  const selected = event.target.value;
  // listedeki elemanlara erişme
  const items = list.childNodes;

  // listedki her bir eleman için switch ile yapıcağımız
  //  sorgu elemanını gözüküceğine karar vericek
  items.forEach((item) => {
    // seçilen değere göre yapılacak işleme karar verme
    switch (selected) {
      case 'all':
        // class' paid olsada olamasada göster
        item.style.display = 'flex';
        break;
      case 'paid':
        //  class'ında paid olmayanlar gizlenicek
        if (item.classList.contains('paid')) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
        break;
      case 'not-paid':
        //   class'ında paid olanlar gizlenicek
        if (item.classList.contains('paid')) {
          item.style.display = 'none';
        } else {
          item.style.display = 'flex';
        }
        break;
    }
  });
}

// kullanıcıyı kaydeder
function saveUser(event) {
  localStorage.setItem('username', event.target.value);
}

// kullanıcıyı lokalden alıp innputa yazar
function getUser() {
  // local storgae'dan ismi al
  const username = localStorage.getItem('username') || '';

  // kullanıcı ismini inputa aktar
  userInp.value = username;
}
