import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

function Blog({ post }: { post: Post }) {

	return (
		<div>
            <p>PostId : {post.id}</p>
			<p>Title : {post.title}</p>
			<p>Body : {post.body}</p>
		</div>
	);
}

export async function getServerSideProps(context: { params: ParsedUrlQuery }) {
    
    const id = context.params.slug;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
	
    return {
		props: { post }, // will be passed to the page component as props
	};
}

export default Blog;
