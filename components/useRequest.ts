import useSWR from 'swr';

type photo = {
    albumId : number,
    id : number,
    title : string,
    url : string,
    thumbnailUrl : string
}

const fetcher = (url : string) => fetch(url).then((res) => res.json());

const url = 'https://jsonplaceholder.typicode.com/photos';

export const useGetPhotos = () => {
  const { data, error } = useSWR<photo[]>(url, fetcher);

  return { data, error };
};