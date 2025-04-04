'use server'

export async function getArtistInfo(artistName: string) {
  const apiKey = process.env.LASTFM_API_KEY;
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${apiKey}&format=json`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
}
