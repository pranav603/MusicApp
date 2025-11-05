document.addEventListener('DOMContentLoaded', () => {
            // Hide Page Loader
            const pageLoader = document.getElementById('pageLoader');
            pageLoader.style.display = 'none';
            
            // DOM Elements
            const audioPlayer = document.getElementById('audioPlayer');
            const playPauseBtn = document.getElementById('playPauseBtn');
            const playIcon = document.getElementById('playIcon');
            const pauseIcon = document.getElementById('pauseIcon');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const shuffleBtn = document.getElementById('shuffleBtn');
            const repeatBtn = document.getElementById('repeatBtn');
            const seekBar = document.getElementById('seekBar');
            const currentTimeEl = document.getElementById('currentTime');
            const durationEl = document.getElementById('duration');
            const albumArtEl = document.getElementById('albumArt');
            const songTitleEl = document.getElementById('songTitle');
            const songArtistEl = document.getElementById('songArtist');
            const playlistEl = document.getElementById('playlist');
            const visualizerCanvas = document.getElementById('visualizerCanvas');
            const bufferingSpinner = document.getElementById('bufferingSpinner');
            const contextMenuEl = document.getElementById('contextMenu');
            const contextPlayBtn = document.getElementById('contextPlay');
            const contextRemoveBtn = document.getElementById('contextRemove');

            // --- 1. HARDCODED PLAYLIST ---
            // Fill this array with your songs.
            // Make sure 'url' and 'artUrl' paths are correct for your repository.
            // Example:
            // If your song is in 'my-repo/songs/my_song.mp3'
            // and your HTML is in 'my-repo/index.html',
            // the url should be './songs/my_song.mp3'
            
           const playlist = [
  {
    name: "505",
    artist: "Rashid Ali", // You'll need to fill in the correct artist for "505" from your music files
    url: "./assets/music/505.mp3",
    artUrl: "./assets/thumbnails/505.jpg",
  },
  {
    name: "adore - did i tell u that i miss u (lyric video) - adore (youtube)",
    artist: "Unknown", // Please fill in the correct artist
    url: "./assets/music/adore - did i tell u that i miss u (lyric video) - adore (youtube).mp3",
    artUrl: "./assets/thumbnails/did i tell u that i miss u.jpg",
  },
  {
    name: "Billie Eilish - WILDFLOWER (Official Lyric Video) - BillieEilishVEVO (youtube)",
    artist: "Billie Eilish",
    url: "./assets/music/Billie Eilish - WILDFLOWER (Official Lyric Video) - BillieEilishVEVO (youtube).mp3",
    artUrl: "./assets/thumbnails/WILDFLOWER.jpg",
  },
  {
    name: "blue (slowed down) - yung kai (youtube)",
    artist: "yung kai",
    url: "./assets/music/blue (slowed down) - yung kai (youtube).mp3",
    artUrl: "./assets/thumbnails/blue - slowed down.jpg",
  },
  {
    name: "Diet Mountain Dew - Lana Del Rey (youtube)",
    artist: "Lana Del Rey",
    url: "./assets/music/Diet Mountain Dew - Lana Del Rey (youtube).mp3",
    artUrl: "./assets/thumbnails/Diet Mountain Dew.jpg",
  },
  {
    name: "Dream, Ivory - Welcome and Goodbye - David Dean Burkhart (youtube)",
    artist: "Dream, Ivory",
    url: "./assets/music/Dream, Ivory - Welcome and Goodbye - David Dean Burkhart (youtube).mp3",
    artUrl: "./assets/thumbnails/welcome and goodbye.jpg",
  },
  {
    name: "Elvis Presley - Can't Help Falling in Love (Lyrics) - 7clouds (youtube)",
    artist: "Elvis Presley",
    url: "./assets/music/Elvis Presley - Can't Help Falling in Love (Lyrics) - 7clouds (youtube).mp3",
    artUrl: "./assets/thumbnails/Can't Help Falling in Love.jpg",
  },
  {
    name: "Eyedress & Dent May - Something About You - David Dean Burkhart (youtube)",
    artist: "Eyedress & Dent May",
    url: "./assets/music/Eyedress & Dent May - Something About You - David Dean Burkhart (youtube).mp3",
    artUrl: "./assets/thumbnails/Something About You.jpg",
  },
  {
    name: "Golden Brown - The Stranglers - Μουσικές Περιηγήσεις (youtube)",
    artist: "The Stranglers",
    url: "./assets/music/Golden Brown - The Stranglers - Μουσικές Περιηγήσεις (youtube).mp3",
    artUrl: "./assets/thumbnails/Golden Brown.jpg",
  },
  {
    name: "Goo Goo Dolls - Iris [Official Music Video] [4K Remaster] - Goo Goo Dolls (youtube) (1)",
    artist: "Goo Goo Dolls",
    url: "./assets/music/Goo Goo Dolls - Iris [Official Music Video] [4K Remaster] - Goo Goo Dolls (youtube) (1).mp3",
    artUrl: "./assets/thumbnails/Iris.jpg",
  },
  {
    name: "I Think They Call This Love (Cover) - Matthew Ifield (youtube)",
    artist: "Matthew Ifield",
    url: "./assets/music/I Think They Call This Love (Cover) - Matthew Ifield (youtube).mp3",
    artUrl: "./assets/thumbnails/I Think They Call This Love - Cover.jpg",
  },
  {
    name: "I Wanna Be Yours - Arctic Monkeys (youtube)",
    artist: "Arctic Monkeys",
    url: "./assets/music/I Wanna Be Yours - Arctic Monkeys (youtube).mp3",
    artUrl: "./assets/thumbnails/I Wanna Be Yours.jpg",
  },
  {
    name: "Indila ~ Love Story (Lyrics) ~ Pizza Music (youtube)",
    artist: "Indila",
    url: "./assets/music/Indila ~ Love Story (Lyrics) ~ Pizza Music (youtube).mp3",
    artUrl: "./assets/thumbnails/Love Story.jpg",
  },
  {
    name: "New West - Those Eyes (Lyrics) - Dan Music (youtube)",
    artist: "New West",
    url: "./assets/music/New West - Those Eyes (Lyrics) - Dan Music (youtube).mp3",
    artUrl: "./assets/thumbnails/Those Eyes.jpg",
  },
  {
    name: "No. 1 Party Anthem - Arctic Monkeys (youtube)",
    artist: "Arctic Monkeys",
    url: "./assets/music/No. 1 Party Anthem - Arctic Monkeys (youtube).mp3",
    artUrl: "./assets/thumbnails/No. 1 Party Anthem.jpg",
  },
  {
    name: "Ravyn Lenae - Love Me Not - Minimal Sounds (youtube)",
    artist: "Ravyn Lenae",
    url: "./assets/music/Ravyn Lenae - Love Me Not - Minimal Sounds (youtube).mp3",
    artUrl: "./assets/thumbnails/Love Me Not (feat. Rex Orange County).jpg",
  },
  {
    name: "Ricky Montgomery - Line Without a Hook (Official Lyric Video) - Ricky Montgomery (youtube)",
    artist: "Ricky Montgomery",
    url: "./assets/music/Ricky Montgomery - Line Without a Hook (Official Lyric Video) - Ricky Montgomery (youtube).mp3",
    artUrl: "./assets/thumbnails/Line Without a Hook.jpg",
  },
  {
    name: "sombr - back to friends (official video) - sombr (youtube)",
    artist: "sombr",
    url: "./assets/music/sombr - back to friends (official video) - sombr (youtube).mp3",
    artUrl: "./assets/thumbnails/back to friends.jpg",
  },
  {
    name: "The Marías - No One Noticed (Visualizer) - The Marías (youtube)",
    artist: "The Marías",
    url: "./assets/music/The Marías - No One Noticed (Visualizer) - The Marías (youtube).mp3",
    artUrl: "./assets/thumbnails/No One Noticed.jpg",
  },
  {
    name: "The Police - Every Breath You Take (Visualiser) - ThePoliceVEVO (youtube)",
    artist: "The Police",
    url: "./assets/music/The Police - Every Breath You Take (Visualiser) - ThePoliceVEVO (youtube).mp3",
    artUrl: "./assets/thumbnails/Every Breath You Take.jpg",
  },
  {
    name: "There is a Light That Never Goes Out (2011 Remaster) - The Smiths (youtube)",
    artist: "The Smiths",
    url: "./assets/music/There is a Light That Never Goes Out (2011 Remaster) - The Smiths (youtube).mp3",
    artUrl: "./assets/thumbnails/There is a Light That Never Goes Out - 2017 Master.jpg",
  },
];


            // Audio Visualizer Setup
            let audioContext, analyser, source, bufferLength, dataArray;
            let visualizerInitialized = false;

            // Player State
            let currentTrackIndex = 0;
            let isPlaying = false;
            let isShuffle = false;
            let isRepeat = false; // 0 = no repeat, 1 = repeat one
            let shufflePlaylist = [];
            let contextMenuIndex = -1; // Index for the context menu target

            // Event Listeners
            playPauseBtn.addEventListener('click', togglePlayPause);
            prevBtn.addEventListener('click', prevSong);
            nextBtn.addEventListener('click', nextSong);
            shuffleBtn.addEventListener('click', toggleShuffle);
            repeatBtn.addEventListener('click', toggleRepeat);
            seekBar.addEventListener('input', seekSong);
            audioPlayer.addEventListener('timeupdate', updateSeekBar);
            audioPlayer.addEventListener('loadedmetadata', updateDuration);
            audioPlayer.addEventListener('ended', handleSongEnd);

            // Context Menu Listeners
            contextPlayBtn.addEventListener('click', playFromMenu);
            contextRemoveBtn.addEventListener('click', removeFromMenu);
            window.addEventListener('click', hideContextMenu); // Hide on any click

            // Buffering Listeners
            audioPlayer.addEventListener('loadstart', showBufferingIndicator);
            audioPlayer.addEventListener('playing', hideBufferingIndicator);
            audioPlayer.addEventListener('waiting', showBufferingIndicator);
            audioPlayer.addEventListener('stalled', showBufferingIndicator);
            audioPlayer.addEventListener('canplay', hideBufferingIndicator);
            audioPlayer.addEventListener('pause', hideBufferingIndicator);
            
            // Updated error listener
            audioPlayer.addEventListener('error', (e) => {
                hideBufferingIndicator();
                console.error("Audio player error:", e);
                console.error("Failed to load audio source:", audioPlayer.src);
                isPlaying = false;
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
            });

            // --- 2. PLAYER INITIALIZATION ---
            function initializePlayer() {
                if (playlist.length > 0) {
                    renderPlaylist();
                    loadTrack(0); // Load the first song
                    updatePlaylistUI();
                } else {
                    playlistEl.innerHTML = '<div class="text-gray-400 text-center p-4">No songs in playlist.</div>';
                    songTitleEl.textContent = 'No Song Loaded';
                    songArtistEl.textContent = 'Playlist is empty';
                    albumArtEl.src = 'https://placehold.co/600x600/1e0033/FFF?text=Music+Player';
                }
            }


            // --- 3. CORE FUNCTIONS ---

            function renderPlaylist() {
                playlistEl.innerHTML = '';
                if (playlist.length === 0) {
                     playlistEl.innerHTML = '<div class="text-gray-400 text-center p-4">Playlist is empty.</div>';
                     return;
                }
                playlist.forEach((song, index) => {
                    const item = document.createElement('div');
                    item.className = 'playlist-item p-3 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-10 transition';
                    item.textContent = song.name;
                    item.dataset.index = index;
                    item.addEventListener('click', () => {
                        loadTrack(index);
                        playSong();
                    });
                    item.addEventListener('contextmenu', (e) => {
                        showContextMenu(e, index);
                    });
                    playlistEl.appendChild(item);
                });
            }

            function loadTrack(index) {
                if (index < 0 || index >= playlist.length) return;
                
                currentTrackIndex = index;
                const currentSong = playlist[currentTrackIndex];

                audioPlayer.src = currentSong.url;
                songTitleEl.textContent = currentSong.name;
                songArtistEl.textContent = currentSong.artist;
                
                // Use embedded art if available, otherwise use placeholder
                if (currentSong.artUrl) {
                    albumArtEl.src = currentSong.artUrl;
                } else {
                    // Placeholder art with first letter
                    albumArtEl.src = `https://placehold.co/600x600/1e0033/FFF?text=${encodeURIComponent(currentSong.name.charAt(0))}`; 
                }
                
                updatePlaylistUI();
            }
            
            function updatePlaylistUI() {
                const items = playlistEl.querySelectorAll('.playlist-item');
                items.forEach((item, index) => {
                    if (index === currentTrackIndex) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }

            function togglePlayPause() {
                if (isPlaying) {
                    pauseSong();
                } else {
                    playSong();
                }
            }

            // Updated playSong function to handle errors
            async function playSong() {
                if (playlist.length === 0) return;
                if (!visualizerInitialized) {
                    initVisualizer();
                }
                
                try {
                    await audioPlayer.play();
                    isPlaying = true;
                    playIcon.classList.add('hidden');
                    pauseIcon.classList.remove('hidden');
                } catch (error) {
                    console.error("Error playing audio:", error);
                    // This catch block will handle the NotSupportedError on play()
                    isPlaying = false;
                    playIcon.classList.remove('hidden');
                    pauseIcon.classList.add('hidden');
                }
            }

            function pauseSong() {
                audioPlayer.pause();
                isPlaying = false;
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
            }

            function nextSong() {
                if (isShuffle) {
                    if (shufflePlaylist.length === 0) {
                        createShufflePlaylist();
                    }
                    currentTrackIndex = shufflePlaylist.pop();
                } else {
                    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
                }
                loadTrack(currentTrackIndex);
                playSong();
            }

            function prevSong() {
                currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
                loadTrack(currentTrackIndex);
                playSong();
            }

            function handleSongEnd() {
                if (isRepeat) {
                    loadTrack(currentTrackIndex);
                    playSong();
                } else {
                    nextSong();
                }
            }
            
            function toggleShuffle() {
                isShuffle = !isShuffle;
                shuffleBtn.classList.toggle('text-white', isShuffle);
                shuffleBtn.classList.toggle('text-gray-400', !isShuffle);
                if (isShuffle) {
                    createShufflePlaylist();
                }
            }

            function createShufflePlaylist() {
                shufflePlaylist = Array.from({ length: playlist.length }, (_, i) => i)
                                    .filter(i => i !== currentTrackIndex);
                // Fisher-Yates shuffle
                for (let i = shufflePlaylist.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shufflePlaylist[i], shufflePlaylist[j]] = [shufflePlaylist[j], shufflePlaylist[i]];
                }
            }
            
            function toggleRepeat() {
                isRepeat = !isRepeat;
                repeatBtn.classList.toggle('text-white', isRepeat);
                repeatBtn.classList.toggle('text-gray-400', !isRepeat);
            }

            function updateSeekBar() {
                if (isNaN(audioPlayer.duration)) return;
                seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
            }
            
            function updateDuration() {
                if (isNaN(audioPlayer.duration)) return;
                durationEl.textContent = formatTime(audioPlayer.duration);
            }

            function seekSong() {
                if (isNaN(audioPlayer.duration)) return;
                audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
            }

            function formatTime(seconds) {
                const minutes = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
            }

            // --- Visualizer Functions ---
            function initVisualizer() {
                try {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    analyser = audioContext.createAnalyser();
                    source = audioContext.createMediaElementSource(audioPlayer);
                    
                    source.connect(analyser);
                    analyser.connect(audioContext.destination);
                    
                    analyser.fftSize = 64;
                    bufferLength = analyser.frequencyBinCount;
                    dataArray = new Uint8Array(bufferLength);
                    
                    visualizerInitialized = true;
                    drawVisualizer();
                } catch (e) {
                    console.error("AudioContext is not supported by this browser.", e);
                }
            }

            function drawVisualizer() {
                if (!visualizerInitialized || !isPlaying) {
                    requestAnimationFrame(drawVisualizer);
                    return; // Don't draw if paused or not init
                }
                
                requestAnimationFrame(drawVisualizer);
                
                analyser.getByteFrequencyData(dataArray);
                
                const canvas = visualizerCanvas;
                const ctx = canvas.getContext('2d');
                const { width, height } = canvas;
                
                ctx.clearRect(0, 0, width, height);
                
                const barWidth = (width / bufferLength) * 1.5;
                let x = 0;
                
                for (let i = 0; i < bufferLength; i++) {
                    const barHeight = (dataArray[i] / 255) * height;
                    
                    ctx.fillStyle = `rgba(35, 213, 171, ${0.3 + dataArray[i]/255})`;
                    ctx.fillRect(x, height - barHeight, barWidth, barHeight);
                    
                    x += barWidth + 2; // Add 2px spacing
                }
            }

            // --- Buffering Indicator ---
            function showBufferingIndicator() {
                bufferingSpinner.classList.remove('hidden');
            }
            function hideBufferingIndicator() {
                bufferingSpinner.classList.add('hidden');
            }

            // --- Context Menu Functions ---
            function showContextMenu(e, index) {
                e.preventDefault(); 
                hideContextMenu(); 
                contextMenuIndex = index;
                
                if (contextMenuIndex === currentTrackIndex && isPlaying) {
                     contextRemoveBtn.style.display = 'none';
                } else {
                     contextRemoveBtn.style.display = 'block';
                }

                contextMenuEl.style.display = 'block';
                
                const menuWidth = contextMenuEl.offsetWidth;
                const menuHeight = contextMenuEl.offsetHeight;
                const winWidth = window.innerWidth;
                const winHeight = window.innerHeight;

                let x = e.pageX;
                let y = e.pageY;

                if (x + menuWidth > winWidth) x = winWidth - menuWidth - 10;
                if (y + menuHeight > winHeight) y = winHeight - menuHeight - 10;

                contextMenuEl.style.left = `${x}px`;
                contextMenuEl.style.top = `${y}px`;
            }

            function hideContextMenu() {
                contextMenuEl.style.display = 'none';
                contextMenuIndex = -1;
            }

            function playFromMenu() {
                if (contextMenuIndex === -1) return;
                loadTrack(contextMenuIndex);
                playSong();
                hideContextMenu();
            }

            function removeFromMenu() {
                if (contextMenuIndex === -1 || (contextMenuIndex === currentTrackIndex && isPlaying)) {
                    hideContextMenu();
                    return;
                }

                playlist.splice(contextMenuIndex, 1);

                if (contextMenuIndex < currentTrackIndex) {
                    currentTrackIndex--;
                } else if (contextMenuIndex === currentTrackIndex) {
                    if (playlist.length === 0) {
                        pauseSong();
                        audioPlayer.src = '';
                        songTitleEl.textContent = 'No Song Loaded';
                        songArtistEl.textContent = 'Please load songs';
                        albumArtEl.src = 'https://placehold.co/600x600/1e0033/FFF?text=Music+Player';
                        currentTimeEl.textContent = '0:00';
                        durationEl.textContent = '0:00';
                        seekBar.value = 0;
                        currentTrackIndex = 0;
                    } else {
                        currentTrackIndex = Math.min(currentTrackIndex, playlist.length - 1);
                        loadTrack(currentTrackIndex);
                        pauseSong();
                    }
                }

                renderPlaylist(); 
                updatePlaylistUI(); 
                hideContextMenu();
            }

            // --- Start the player ---
            initializePlayer();
        });