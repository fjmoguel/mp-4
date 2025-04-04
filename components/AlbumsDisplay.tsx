import { getAlbums } from '@/lib/getAlbums';
import { Album, Props } from '@/types';

export default async function AlbumsDisplay({ name }: Props) {
    const albums = await getAlbums(name);

    return (
        <div style={{ padding: '24px', backgroundColor: 'coral', textAlign: 'center', }} >
        <h2>Top Albums</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '16px', }} >

        {albums.map((album: Album) => {
            const img = album.image?.find((i) => i.size === 'large')?.['#text'];
            return (
                <div
                key={album.name}
                style={{
                    backgroundColor: 'aqua',
                    borderRadius: '8px',
                    padding: '12px',
                    width: '200px',
                }} >
                {img && (<img src={img} alt={album.name} style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '8px', }} />)}
                <p>{album.name}</p>
                </div>
            );
            })}
        </div>
        </div>
    );
    }
