import Link from 'next/link';

type Post = {
    userId : number,
    id : number,
    title : string,
    body : string
}

function Blogs({ posts } : { posts : Post[]}) {

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
            <Link href={{
              pathname: '/blog/[pid]',
              query: { pid: post.id },
            }}>
            <a>{post.title}</a>
        </Link>
        </li>
      ))}
    </ul>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  // Pass data to the page via props
  return { props: { posts } };
}


export default Blogs