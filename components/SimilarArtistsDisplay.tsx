import { getSimilar } from '@/lib/getSimilar';
import { SimilarArtist, Props } from '@/types';

export default async function SimilarArtistsDisplay({ name }: Props) {
    const artists = await getSimilar(name);

    return (
        <div style={{
            padding: '24px',
            backgroundColor: 'coral',
            textAlign: 'center',
        }}>
        <h2>Similar Artists</h2>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '16px',
            }}>
            {artists.map((artist: SimilarArtist) => (
            <div
                key={artist.name}
                style={{
                backgroundColor: 'aqua',
                borderRadius: '8px',
                padding: '12px',
                width: '200px',
                }}>
                <p>{artist.name}</p>
            </div>
            ))}
        </div>
        </div>
    );
}

