import { getArtistInfo } from '@/lib/getArtistInfo';
import { Tag, Props } from '@/types';

export default async function ArtistDisplay({ name }: Props) {
  const data = await getArtistInfo(name);
  const artist = data?.artist;
  if (!artist) {
    return (
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <p>Artist info not available.</p>
      </div>
    );
  }
  return (
    <div style={{ padding: '24px', backgroundColor: 'coral',textAlign: 'center',}}>
      <h2>{artist.name}</h2>
      <p style={{ fontStyle: 'italic', margin: '12px 0' }}>Listeners: {artist.stats?.listeners} | Playcount: {artist.stats?.playcount}</p>
      <p style={{ maxWidth: '800px', margin: '0 auto' }}>
        {artist.bio?.summary
          ? <span dangerouslySetInnerHTML={{ __html: artist.bio.summary }} />
          : 'No biography available.'}
      </p>

      <div style={{ marginTop: '16px' }}>
      {artist.tags?.tag?.slice(0, 5).map((tag: Tag) => (
          <span key={tag.name} style={{backgroundColor: 'red',padding: '4px 8px',margin: '4px',display: 'inline-block',borderRadius: '12px', fontSize: '0.9rem',}}>
            {tag.name}
          </span> ))}
      </div>
    </div>
  );
}
