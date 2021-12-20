import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="text-gray-600 mt-8 font-euclid">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              width={40}
              height={50}
              src="/favicon.png"
              alt="logo"
              className="w-10"
            />
          </a>
        </Link>
        <span className="ml-3 text-xl font-adelia">Pets can date</span>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          This site is designed by{" "}
          <Link href="https://twitter.com/urluchy">
            <a className="text-appaccent font-bold underline">Ursula </a>
          </Link>
          and built by{" "}
          <Link href="https://twitter.com/kenny_io">
            <a className="text-appaccent font-bold underline">Ekene.</a>
          </Link>
          <br />
          {`It's hosted on`}{" "}
          <Link href="https://netlify.com">
            <a
              className="text-appaccent font-bold underline"
              href="https://www.netlify.com/"
            >
              Netlify{" "}
            </a>
          </Link>
          as part of the ongoing{" "}
          <Link href="https://www.netlify.com/blog/2021/12/01/dusty-domains-your-forgotten-domains-raise-money-for-charity/">
            <a className="text-appaccent font-bold underline">
              Dusty Domains project.{" "}
            </a>
          </Link>{" "}
          <br />
          Since we are all just doing this for fun, feel free to{" "}
          <Link href="https://github.com/kenny-io/petcandate">
            <a className="text-appaccent font-bold underline">Contribute</a>
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="https://www.twitter.com/kenny_io">
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </Link>
        </span>
      </div>
    </footer>
  );
}
