// html'den gelenler
export const ele = {
  list: document.querySelector('#list'),
};

// arayüz işlemleri
export const renderCards = (songs) => {
  songs.forEach((song) => {
    // div oluşturma
    const div = document.createElement('div');

    // kart elemanına ileride js'den erişmek
    // için bazı verleri ekliyecez
    console.log(song);
    div.dataset.url = '';

    // class verme
    div.className = 'card';

    // içeriği belirleme
    div.innerHTML = `
            <figure>
              <img
                src="${song.images?.coverart}"
              />
              <div class="play">
                <i id="play-btn" class="bi bi-play-fill"></i>
              </div>
            </figure>
            <h4>${song.subtitle}</h4>
            <p>${song.title}</p>
    `;

    ele.list.appendChild(div);
  });
};
