const playlist = [
  { title: 'Elegie', file: 'audio/Elegie.mp3', index: 1, cover: 'artwork/HVL_MCK_Elegie_Track01_N0L4B3L.webp' },
  { title: 'IDK', file: 'audio/IDK - RPT MCK.mp3', index: 2, cover: 'artwork/HVL_MCK_IDK_Track02_N0L4B3L.webp' },
  { title: "Wtf Bby I'm Lit", file: "audio/Wtf Bby I'm Lit.mp3", index: 3, cover: 'artwork/HVL_MCK_Wtf_Bby_Im_Lit_Track03_N0L4B3L.webp' },
  { title: 'Anh Không Muốn Nó Dễ Dàng', file: 'audio/Anh Không Muốn Nó Dễ Dàng.mp3', index: 4, cover: 'artwork/HVL_MCK_Anh_Khong_Muon_No_De_Dang_Track04_N0L4B3L.webp' },
  { title: 'Baby (ft. marzuz)', file: 'audio/Baby (feat. marzuz).mp3', index: 5, cover: 'artwork/HVL_MCK_Baby_Track05_N0L4B3L.webp' },
  { title: 'Yêu Anh Giết Anh', file: 'audio/Yêu Anh Giết Anh.mp3', index: 6, cover: 'artwork/HVL_MCK_Yeu_Anh_Giet_Anh_Track06_N0L4B3L.webp' },
  { title: 'Mắt Môi Tay Chân (ft. Tage)', file: 'audio/Mắt Môi Tay Chân (feat. Tage).mp3', index: 7, cover: 'artwork/HVL_MCK_Mat_Moi_Tay_Chan_Track07_N0L4B3L.webp' },
  { title: 'Đao Của Anh Vừa', file: 'audio/Đao Của Anh Vừa.mp3', index: 8, cover: 'artwork/HVL_MCK_Dao_Cua_Anh_Vua_Track08_N0L4B3L.webp' },
  { title: 'Là Gì Của Nhau', file: 'audio/Là Gì Của Nhau.mp3', index: 9, cover: 'artwork/HVL_MCK_La_Gi_Cua_Nhau_Track09_N0L4B3L.webp' },
  { title: 'Night In Prague', file: 'audio/Night In Prague.mp3', index: 10, cover: 'artwork/HVL_MCK_Night_In_Prague_Track10_N0L4B3L.webp' },
  { title: 'Một Cái Ôm', file: 'audio/Một Cái Ôm.mp3', index: 11, cover: 'artwork/HVL_MCK_Mot_Cai_Om_Track11_N0L4B3L.webp' },
  { title: 'Liệm', file: 'audio/Liệm - RPT MCK.mp3', index: 12, cover: 'artwork/HVL_MCK_Liem_Track12_N0L4B3L.webp' },
  { title: 'Nếu Như Ta Chẳng Còn (ft. A$AP Ướt Mi)', file: 'audio/Nếu Như Ta Chẳng Còn (feat. AAP Ướt Mi) - RPT MCK.mp3', index: 13, cover: 'artwork/HVL_MCK_Neu_Nhu_Ta_Chang_Con_Track13_N0L4B3L.webp' },
  { title: 'Ai Mới Là Kẻ Xấu Xa', file: 'audio/Ai Mới Là Kẻ Xấu Xa.mp3', index: 14, cover: 'artwork/HVL_MCK_Ai_Moi_La_Ke_Xau_Xa_Track14_N0L4B3L.webp' },
  { title: 'Slippery (ft. Tùng Dương)', file: 'audio/Slippery (feat. Tùng Dương).mp3', index: 15, cover: 'artwork/HVL_MCK_Slippery_Track15_N0L4B3L.webp' },
  { title: 'Intenpol', file: 'audio/Intenpol.mp3', index: 16, cover: 'artwork/HVL_MCK_Intenpol_Track16_N0L4B3L.webp' },
  { title: 'Tây Thi', file: 'audio/Tây Thi.mp3', index: 17, cover: 'artwork/HVL_MCK_Tay_Thi_Track17_N0L4B3L.webp' },
  { title: 'Hút và Hút', file: 'audio/Hút và Hút.mp3', index: 18, cover: 'artwork/HVL_MCK_Hut_Va_Hut_Track18_N0L4B3L.webp' },
  { title: 'Dưa Chua', file: 'audio/Dưa Chua.mp3', index: 19, cover: 'artwork/HVL_MCK_Dua_Chua_Track19_N0L4B3L.webp' },
  { title: 'Xa Xôi (ft. Obito)', file: 'audio/Xa Xôi (feat. Obito).mp3', index: 20, cover: 'artwork/HVL_MCK_Xa_Xoi_Track20_N0L4B3L.webp' },
  { title: 'Che Phủ', file: 'audio/Che Phủ.mp3', index: 21, cover: 'artwork/HVL_MCK_Che_Phu_Track21_N0L4B3L.webp' },
  { title: 'Oanh M = Thuốc', file: 'audio/Oanh M = Thuoc.mp3', index: 22, cover: 'artwork/HVL_MCK_Oanh_M_Thuoc_Track22_N0L4B3L.webp' },
  { title: 'Ghét Xong Lại Thích', file: 'audio/Ghet Xog Lai Thik.mp3', index: 23, cover: 'artwork/HVL_MCK_Ghet_Xog_Lai_Thik_Track23_N0L4B3L.webp' },
  { title: 'Nhìn Kẻ Thù Của Tao', file: 'audio/Nhìn Kẻ Thù Của Tao.mp3', index: 24, cover: 'artwork/HVL_MCK_Nhin_Ke_Thu_Cua_Tao_Track24_N0L4B3L.webp' },
  { title: 'Envy (ft. THANHDRAW)', file: 'audio/Envy (feat. THANHDRAW).mp3', index: 25, cover: 'artwork/HVL_MCK_Envy_Track25_N0L4B3L.webp' },
  { title: 'Cảm Ơn', file: 'audio/Cảm Ơn.mp3', index: 26, cover: 'artwork/HVL_MCK_Cam_On_Track26_N0L4B3L.webp' },
  { title: 'Không Cần Lo Cho Tao', file: 'audio/Không Cần Lo Cho Tao.mp3', index: 27, cover: 'artwork/HVL_MCK_Khong_Can_Lo_Cho_Tao_Track27_N0L4B3L.webp' },
  { title: 'Huh (ft. RPT ORIJINN & THANHDRAW)', file: 'audio/Huh (feat. RPT Orijinn & THANHDRAW).mp3', index: 28, cover: 'artwork/HVL_MCK_Huh_Track28_N0L4B3L.webp' },
  { title: 'Nguyễn Văn Mười', file: 'audio/Nguyễn Văn Mười.mp3', index: 29, cover: 'artwork/HVL_MCK_Nguyen_Van_Muoi_Track29_N0L4B3L.webp' },
  { title: 'Thịt Lợn', file: 'audio/Thịt Lợn.mp3', index: 30, cover: 'artwork/HVL_MCK_Thit_Lon_Track30_N0L4B3L.webp' }
];

const audio = document.getElementById('audio');
const playlistEl = document.getElementById('playlist');
const nowPlayingTitle = document.getElementById('nowPlayingTitle');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const repeatBtn = document.getElementById('repeatBtn');
const repeatIcon = document.getElementById('repeatIcon');
const shuffleBtn = document.getElementById('shuffleBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const volumeBar = document.getElementById('volumeBar');
const heroCoverImg = document.getElementById('heroCoverImg');
const heroCoverFrame = document.getElementById('heroCoverFrame');

const REPEAT_STATES = {
  NONE: 0,
  ALL: 1,
  ONE: 2,
};

let currentTrackIndex = 0;
let queue = playlist.map((_, index) => index);
let queueIndex = 0;
let isShuffle = false;
let repeatMode = REPEAT_STATES.NONE;
let isUserSeeking = false;

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getCurrentTrack() {
  return playlist[currentTrackIndex];
}

function formatTime(value) {
  if (!Number.isFinite(value) || value < 0) {
    return '0:00';
  }

  const totalSeconds = Math.floor(value);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function updateNowPlaying() {
  const track = getCurrentTrack();
  nowPlayingTitle.textContent = track.title;
  heroCoverImg.src = track.cover;
  heroCoverImg.alt = `Ảnh bìa ${track.title}`;
  heroCoverFrame.classList.remove('cover-missing');

  document.querySelectorAll('.track-item').forEach((item) => {
    const isActive = Number(item.dataset.index) === currentTrackIndex;
    item.classList.toggle('active', isActive);
  });

  const activeTrack = document.querySelector(`.track-item[data-index="${currentTrackIndex}"]`);
  if (activeTrack) {
    activeTrack.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function updateControls() {
  playPauseBtn.textContent = audio.paused ? '▶' : '❚❚';
  playPauseBtn.setAttribute('aria-label', audio.paused ? 'Play' : 'Pause');

  shuffleBtn.classList.toggle('active', isShuffle);

  let repeatText = '↻';
  let title = 'Repeat';

  if (repeatMode === REPEAT_STATES.ALL) {
    repeatText = '🔁';
    title = 'Repeat album';
  } else if (repeatMode === REPEAT_STATES.ONE) {
    repeatText = '🔂';
    title = 'Repeat one';
  }

  repeatIcon.textContent = repeatText;
  repeatBtn.title = title;
  repeatBtn.classList.toggle('active', repeatMode !== REPEAT_STATES.NONE);
}

function renderPlaylist() {
  playlistEl.innerHTML = '';

  playlist.forEach((track) => {
    const item = document.createElement('li');
    item.className = 'track-item';
    item.dataset.index = String(track.index - 1);

    item.innerHTML = `
      <span class="track-number">${track.index}</span>
      <span class="track-cover-wrap">
        <img class="track-cover" src="${track.cover}" alt="Ảnh bìa ${track.title}" loading="lazy" />
      </span>
      <span class="track-title">${track.title}</span>
      <span class="track-status">Now</span>
    `;

    const trackCover = item.querySelector('.track-cover');
    const trackCoverWrap = item.querySelector('.track-cover-wrap');
    if (trackCover && trackCoverWrap) {
      trackCover.addEventListener('error', () => {
        trackCoverWrap.classList.add('is-missing');
      });
    }

    item.addEventListener('click', () => {
      selectTrack(Number(item.dataset.index), true);
    });

    playlistEl.appendChild(item);
  });

  updateNowPlaying();
}

heroCoverImg.addEventListener('error', () => {
  heroCoverFrame.classList.add('cover-missing');
});

function selectTrack(index, autoplay = false) {
  if (index < 0 || index >= playlist.length) {
    return;
  }

  if (isShuffle) {
    if (!queue.includes(index)) {
      const nextQueue = shuffleArray(playlist.map((_, trackIndex) => trackIndex).filter((trackIndex) => trackIndex !== index));
      nextQueue.unshift(index);
      queue = nextQueue;
      queueIndex = 0;
    } else {
      queueIndex = queue.indexOf(index);
    }
  } else {
    queue = playlist.map((_, trackIndex) => trackIndex);
    queueIndex = index;
  }

  currentTrackIndex = index;
  const track = getCurrentTrack();
  audio.src = track.file;
  audio.load();

  if (autoplay) {
    audio.play().catch(() => {});
  }

  updateNowPlaying();
  updateControls();
}

function loadCurrentTrack(autoplay = true) {
  const track = getCurrentTrack();
  audio.src = track.file;
  audio.load();

  if (autoplay) {
    audio.play().catch(() => {});
  }

  updateNowPlaying();
  updateControls();
}

function playNextTrack() {
  if (repeatMode === REPEAT_STATES.ONE) {
    audio.currentTime = 0;
    audio.play();
    return;
  }

  if (isShuffle) {
    const nextQueueIndex = queueIndex + 1;

    if (nextQueueIndex < queue.length) {
      queueIndex = nextQueueIndex;
      currentTrackIndex = queue[queueIndex];
      loadCurrentTrack(true);
      return;
    }

    if (repeatMode === REPEAT_STATES.ALL) {
      queueIndex = 0;
      currentTrackIndex = queue[queueIndex];
      loadCurrentTrack(true);
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    updateControls();
    return;
  }

  const nextIndex = currentTrackIndex + 1;

  if (nextIndex < playlist.length) {
    currentTrackIndex = nextIndex;
    loadCurrentTrack(true);
    return;
  }

  if (repeatMode === REPEAT_STATES.ALL) {
    currentTrackIndex = 0;
    loadCurrentTrack(true);
    return;
  }

  audio.pause();
  audio.currentTime = 0;
  updateControls();
}

function playPreviousTrack() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  if (isShuffle) {
    if (queueIndex > 0) {
      queueIndex -= 1;
      currentTrackIndex = queue[queueIndex];
      loadCurrentTrack(true);
      return;
    }

    if (repeatMode === REPEAT_STATES.ALL) {
      queueIndex = queue.length - 1;
      currentTrackIndex = queue[queueIndex];
      loadCurrentTrack(true);
      return;
    }

    currentTrackIndex = queue[0];
    loadCurrentTrack(true);
    return;
  }

  if (currentTrackIndex > 0) {
    currentTrackIndex -= 1;
    loadCurrentTrack(true);
    return;
  }

  if (repeatMode === REPEAT_STATES.ALL) {
    currentTrackIndex = playlist.length - 1;
    loadCurrentTrack(true);
    return;
  }

  currentTrackIndex = 0;
  loadCurrentTrack(true);
}

function toggleShuffle() {
  isShuffle = !isShuffle;

  if (isShuffle) {
    const current = currentTrackIndex;
    const remaining = playlist.map((_, index) => index).filter((index) => index !== current);
    const shuffled = shuffleArray(remaining);
    shuffled.unshift(current);
    queue = shuffled;
    queueIndex = 0;
  } else {
    queue = playlist.map((_, index) => index);
    queueIndex = currentTrackIndex;
  }

  updateControls();
}

function toggleRepeat() {
  repeatMode = (repeatMode + 1) % 3;
  updateControls();
}

function syncProgress() {
  if (!audio.duration || Number.isNaN(audio.duration)) {
    totalTimeEl.textContent = '0:00';
    return;
  }

  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  totalTimeEl.textContent = formatTime(audio.duration);
}

function handleAudioEnded() {
  if (repeatMode === REPEAT_STATES.ONE) {
    audio.currentTime = 0;
    audio.play();
    return;
  }

  playNextTrack();
}

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch(() => {});
  } else {
    audio.pause();
  }
  updateControls();
});

prevBtn.addEventListener('click', playPreviousTrack);
nextBtn.addEventListener('click', playNextTrack);
repeatBtn.addEventListener('click', toggleRepeat);
shuffleBtn.addEventListener('click', toggleShuffle);

progressBar.addEventListener('input', (event) => {
  if (!audio.duration) return;
  isUserSeeking = true;
  const percentage = Number(event.target.value);
  audio.currentTime = (percentage / 100) * audio.duration;
  syncProgress();
});

volumeBar.addEventListener('input', (event) => {
  audio.volume = Number(event.target.value);
});

audio.addEventListener('loadedmetadata', () => {
  totalTimeEl.textContent = formatTime(audio.duration);
  progressBar.value = 0;
  currentTimeEl.textContent = '0:00';
});

audio.addEventListener('timeupdate', syncProgress);
audio.addEventListener('play', updateControls);
audio.addEventListener('pause', updateControls);
audio.addEventListener('ended', handleAudioEnded);
audio.addEventListener('error', () => {
  console.warn('Không thể tải bài hát:', getCurrentTrack().file);
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    playPauseBtn.click();
  }
});

audio.volume = Number(volumeBar.value);
renderPlaylist();
selectTrack(0, false);
updateControls();
