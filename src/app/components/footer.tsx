import Image from 'next/image';

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center sticky top-[100vh] pb-10 pt-10">
      <hr />
      <p>built with ❤️ using </p>
      <div className="flex flex-row justify-between">
        <Image
          src="/next.svg"
          alt="next.js logo"
          width={50}
          height={50}
          className="pt-2"
        />
      </div>
    </div>
  );
}
