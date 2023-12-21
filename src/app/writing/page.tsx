import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'writing' + '- gunvant.in',
};

export default async function Writing() {
  const {
    props: { posts },
  } = await getPostsData();

  return (
    <div className="2xs:px-5 pt-10 text-lg 2xs:pt-5">
      <p className="pt-5 text-2xl">
        some random thoughts, opinions, rants around tech and life!
      </p>
      {posts.map((post, index) => (
        <div key={index} className="mr-1o">
          <Post post={post} />
        </div>
      ))}
    </div>
  );
}

const Post = ({ post }: any) => {
  return (
    <div className="pt-5">
      <Link href={`/writing/${post.slug}`}>
        <h1 className="hover:underline text-xl">{post.frontMatter.title}</h1>
        <p> {post.frontMatter.date} </p>
      </Link>
    </div>
  );
};

const getPostsData = async () => {
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
