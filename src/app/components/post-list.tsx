import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default async function PostList() {
  const {
    props: { posts },
  } = await getPostsData();

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="2xs:px-3">
          <Post post={post} />
        </div>
      ))}
    </div>
  );
}

export const Post = ({ post }: any) => {
  return (
    <Link href={`/writing/${post.slug}`}>
      <p className="hover:underline text-lg pt-5">{post.frontMatter.title}</p>
      <p className="py-0 text-lg"> {post.frontMatter.date} </p>
    </Link>
  );
};

export const getPostsData = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/app/_posts'));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'src/app/_posts', filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
