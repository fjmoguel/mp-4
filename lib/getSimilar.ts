'use server';

export async function getSimilar(artist: string) {
    const apiKey = process.env.LASTFM_API_KEY;
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artist}&api_key=${apiKey}&format=json&limit=4`;

    const res = await fetch(url);
    const data = await res.json();
    return data.similarartists.artist;
}
