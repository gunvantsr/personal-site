import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex 2xs:flex-col 2xs:justify-around sm:flex-row justify-between pt-5">
      <div className="2xs:text-4xl 2xs:text-center sm:text-xl ">
        <Link href="/">Gunvant 🌱</Link>
      </div>
      <ul className="flex flex-row 2xs:pt-5 2xs:justify-evenly text-lg">
        <Link href="/">
          <li className="block px-5 hover:underline">home</li>
        </Link>
        <Link href="/about">
          <li className="block px-5 hover:underline">about</li>
        </Link>
        <Link href="/writing">
          <li className="block px-5 hover:underline">writing</li>
        </Link>
        {/* <Link href="/cv">
          <li className="block px-5 hover:underline">cv</li>
        </Link> */}
      </ul>
    </div>
  );
}
