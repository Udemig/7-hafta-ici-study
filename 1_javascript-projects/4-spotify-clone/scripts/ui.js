// html'den gelenler
export const ele = {
  list: document.querySelector('#list'),
  playingInfo: document.querySelector('.playing'),
  searchForm: document.querySelector('#search-form'),
  title: document.querySelector('.songs #title'),
};

// arayüz işlemleri
export const renderCards = (songs) => {
  // eski şarkıları sil
  ele.list.innerHTML = '';

  songs.forEach((song) => {
    // div oluşturma
    const div = document.createElement('div');

    // kart elemanına ileride js'den erişmek
    // için bazı verleri ekliyecez
    // conditional chaining ?.
    div.dataset.url = song.hub?.actions.pop().uri;
    div.dataset.title = song.title;
    div.dataset.photo = song.images.coverart;

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

// müzik bilgilerini ekrana basar
export const renderPlayingInfo = (data) => {
  ele.playingInfo.innerHTML = `
      <div class="info ">
        <img
        class="animate"
          src="${data.photo}"
        />
        <div>
          <p>Şuan Oynatilıyor</p>
          <h3>${data.title}</h3>
        </div> 
      </div>

      <audio controls autoplay>
        <source
          src="${data.url}"
        />
      </audio>
  `;
};

export const renderLoader = () => {
  ele.list.innerHTML = `
 <div class="audio-player">
  <div class="album-cover"></div>
  <div class="player-controls">
    <div class="song-info">
      <div class="song-title">Song Title</div>
      <p class="artist">Artist</p>
    </div>
    <div class="progress-bar">
      <div class="progress"></div>
    </div>
    <div class="buttons">
      <button class="play-btn"><svg viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style="color: white"> <path fill="white" d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path> </svg></button>
      <button class="pause-btn"><svg viewBox="0 0 16 16" class="bi bi-pause-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style="color: white"> <path fill="white" d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path> </svg></button>
    </div>
  </div>
</div>

  `;
};
