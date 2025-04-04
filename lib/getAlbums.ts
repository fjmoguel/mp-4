'use server';

export async function getAlbums(artist: string) {
    const apiKey = process.env.LASTFM_API_KEY;
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${apiKey}&format=json`;

    const res = await fetch(url);
    const data = await res.json();
    return data.topalbums.album.slice(0, 4);
}
