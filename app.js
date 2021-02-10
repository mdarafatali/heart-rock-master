
const searchSongs = () =>{
    const inputValue = document.getElementById('input-value').value;
    if (inputValue === '') {
        alert("Searh Can't Be Blank")
    }
    else {
        const url = `https://api.lyrics.ovh/suggest/${inputValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySong(data.data))
    }
}


const displaySong = (songs) =>{
    const songsContainer = document.getElementById('songs-container')
    songsContainer.innerHTML = ' ';
    // console.log(songs);
    songs.forEach(song =>
        {
    const songDiv = document.createElement('div');
    songDiv.className = "single-result row align-items-center my-3 p-3";
    songDiv.innerHTML = `
        <div class="col-md-9">
        <h3 class="lyrics-name">${song.title}</h3>
        <p class="author lead">Album by <span>${song.artist.name}</span></p>
        </div>
        <audio controls>
        <source src="${song.preview}" type="audio/mpeg">
        </audio>
        <div class="col-md-3 text-md-right text-center">
        <button onclick = "getLyric('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>`
    songsContainer.appendChild(songDiv);

    })
}

const getLyric = (artist, title) =>{
    console.log(artist, title)
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => getLyrics(data.lyrics))

}

const getLyrics = (lyric) => {
    const lyricDiv = document.getElementById('lyricDiv')
    lyricDiv.innerText = lyric;
}
