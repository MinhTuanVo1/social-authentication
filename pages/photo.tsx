import { useGetPhotos } from "../components/useRequest";
import Image from 'next/image';
type photo = {
    albumId : number,
    id : number,
    title : string,
    url : string,
    thumbnailUrl : string
}


function Photo() {
	const { data: photos, error } = useGetPhotos();

	if (error) return <h1>Something went wrong!</h1>;
    if (!photos) return <h1>Loading...</h1>;

	return (
        <div>
            {photos.map(photoItem => (
                <div key={photoItem.id}>
                    <p>{photoItem.title}</p>
                    <Image
                        src={photoItem.url}
                        alt={photoItem.title}
                        width={100}
                        height={100}
                    />
                </div>
            ))}
        </div>
    );
}

export default Photo;
