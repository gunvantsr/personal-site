// @ts-nocheck

import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import rehypeHighlight from 'rehype-highlight';
import '@/app/styles/highlight-js/atom-one-dark.css';

import type { Metadata, ResolvingMetadata } from 'next';

import {
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
} from 'next-share';
import { title } from 'process';

export async function generateMetadata(
  params: { params: { slug: string } },
  parent: ResolvingMetadata
) {
  const title = params.params.slug.split('-').join(' ');
  return {
    title: title + '- gunvant.in',
  };
}

export const PostPage = async ({ params }: { params: { slug: string } }) => {
  try {
    // const { paths } = await getPostPaths();
    const {
      props: { frontMatter, mdxSource },
    } = await getPostProps(params);

    const options = {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight],
      },
    };

    return (
      <>
        <div className="2xs:mx-5 2xs:max-w-prose prose mt-4 text-lg">
          <h1 className="2xs:text-2xl 2xs:pt-5 pt-5">{frontMatter.title}</h1>
          <div>
            <MDXRemote source={mdxSource} options={options} />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error in PostPage:', error);
    return <div>Error loading post</div>;
  }
};
// export const getPostPaths = async () => {
//   const files = fs.readdirSync(path.join(process.cwd(), 'src/app/_posts'));

//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.replace('.mdx', ''),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export async function generateStaticParams({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const files = fs.readdirSync(path.join(process.cwd(), 'src/app/_posts'));

//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.replace('.mdx', ''),
//     },
//   }));
// }

export const getPostProps = async ({ slug }: { slug: string }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), 'src/app/_posts', slug + '.mdx'),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = content;

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default PostPage;
