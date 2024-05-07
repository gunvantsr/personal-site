import Image from 'next/image';
import Link from 'next/link';

import PostList from './components/post-list';

export default function Home() {
  return (
    <>
      <main className="flex 2xs:flex-col 2xs:items-center pt-5 sm:flex-row-reverse text-lg">
        <div className="sm:pt-10">
          <Image
            src="/avatar.jpeg"
            alt="Avatar"
            width={600}
            height={600}
            className="rounded-full sm:max-w-xs 2xs:max-w-[250px] 2xs:mx-h-[250px]"
          />
        </div>
        <div className="2xs:px-3 2xs:text-xl prose-lg">
          <p className="2xs:text-2xl 2xs:text-center 2xs:mt-4 sm:text-left sm:text-2xl sm:pt-10">
            hello there,
          </p>
          <p>
            i am gunvant sarpate, a software developer, tinkerer and lifelong
            learner. i like building softwares, scaling infra and all things
            about cloud.
          </p>
          <p>
            currently, i'm working as senior software engineer at{' '}
            <Link
              href="https://bambu.co"
              className="font-bold text-link-ext hover:underline"
            >
              {' '}
              bambu,
            </Link>{' '}
            building wealth tech products!
          </p>
          <p className="">
            i'm always open for new challenges and opportunities, we can connect
            on{' '}
            <Link
              href="https://www.linkedin.com/in/gunvantsr"
              className="font-bold text-link-ext hover:underline"
            >
              linkedin{' '}
            </Link>
            or drop me an email at gunvantsr [at] gmail.com
          </p>
        </div>
      </main>
    </>
  );
}
