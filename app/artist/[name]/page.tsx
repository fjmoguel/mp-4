import ArtistDisplay from '@/components/ArtistDisplay';
import AlbumsDisplay from '@/components/AlbumsDisplay';
import SimilarArtistsDisplay from '@/components/SimilarArtistsDisplay';
import ArtistSearchForm from '@/components/ArtistSearchForm';

export default async function ArtistPage({ params,}: {params: Promise<{ name: string }>}) { // Thanks Jeffery for the link: !!!! https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
    const { name } = await params;
    const decodedName = decodeURIComponent(name);

    return (
        <>
        <ArtistSearchForm />
        <ArtistDisplay name={decodedName} />
        <AlbumsDisplay name={decodedName} />
        <SimilarArtistsDisplay name={decodedName} />
        </>
    );
}


