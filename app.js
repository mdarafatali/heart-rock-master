
const searchSongs = () =>{
    const inputValue = document.getElementById('input-value').value;
    if (inputValue === '') {
        alert("Searh Can't Be Blank")
    }
    else {
        fetch(`https://api.lyrics.ovh/suggest/${inputValue}`)
            .then(res => res.json())
            .then(data => displaySong(data.data))
    }
}


const displaySong = (songs) =>{
    const songsContainer = document.getElementById('songs-container')
    console.log(songs);
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
        <button onclick = "getLyric('${song.title}', '${song.artist.name}')" class="btn btn-success">Get Lyrics</button>
        </div>`
    songsContainer.appendChild(songDiv);

    })
}

const getLyric = (title, artist) =>{
    console.log(title, artist);

}
