import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <Head>
        <title>Pets can date</title>
        <meta name="description" content="Pets can date" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className=" py-8 px-4">
        <div className="static">
          <Link href="/">
            <a className="flex ml-32 mb-16 font-adelia uppercase items-center md:justify-start justify-center text-gray-900">
              <Image
                width={40}
                height={50}
                format="webp"
                src="/favicon.png"
                alt="logo"
              />
              <span className="ml-3 text-xl">Pets can date</span>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
