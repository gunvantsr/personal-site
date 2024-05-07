import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'about' + '- gunvant.in',
};

export default function About() {
  return (
    <main className="flex flex-col justify-around pt-10 text-lg 2xs:px-3 2xs:pt-5">
      <h1 className="pt-5 text-2xl">a bit about myself 👋 </h1>
      <p className="pt-5 ">
        i was born and raised in a tiny village in the mahrashtra region, where
        i came across this magic box called computers in my high school. i spent
        my teenage doing several odd jobs. sometimes in the local forest
        department and at construction sites. then i finally got a job at an
        internet cafe, which required me to travel a few km daily, but provided
        me something that i was curious​ about: unrestricted access to pc and
        the internet! its the time, when i taught myself to build webpages using
        html, css, and dreamweaver cs6. it felt nice, to build webpage layouts
        using html tables!
      </p>
      <p className="pt-5">
        i went to mgm's college where i graduated with a bachelor's in computer
        science. during my college days, again, i spent most of my in computer
        labs (yeah, for fast internet!). i was privileged enough to be
        surrounded by professors who encouraged me to pursue my intellectual
        curiosities. i tinkered around with web development, wrote some python
        scripts, and listened unhealthy amount of old bollywood songs.
      </p>
      <p className="pt-5">
        after my graduation i joined{' '}
        <Link
          href="https://wipro.com"
          className="font-bold text-link-ext hover:underline text-"
        >
          wipro
        </Link>{' '}
        , where i worked on virtualization and application packaging systems. i
        learnt about working infrastructures and software delivery at enterprise
        scale. then i joined{' '}
        <Link
          href="https://emertech.io"
          className="font-bold text-link-ext hover:underline"
        >
          {' '}
          emertech innovations,
        </Link>{' '}
        an early-stage startup, as first full-time engineer. we built blockchain
        based agri-supply chain platform for small landing and marginal farmer
        groups. during my time with team emertech, i mostly managed cloud
        infrastructure, built backend systems, wandered around grapes and cotton
        fields to test out our software.
      </p>

      <p className="pt-5">
        currently i work with
        <Link
          href="https://bambu.co"
          className="font-bold text-link-ext hover:underline"
        >
          {' '}
          bambu,
        </Link>{' '}
        a singpore based fintech start-up, where i'm working with backend
        engineering team to build b2b robo advisor platform.
      </p>

      <p className="pt-5">
        you can connect with me on{' '}
        <Link
          href="https://www.linkedin.com/in/gunvantsr"
          className="font-bold text-link-ext hover:underline"
        >
          linkedin
        </Link>
        or email me on gunvantsr [at] gmail.com
      </p>
    </main>
  );
}
