import Head from "next/head";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pets can date</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Pets can date"></meta>
        <meta
          property="og:title"
          content="Find love for your pets"
          key="ogtitle"
        />
        <meta property="og:description" content="Pets can date" key="ogdesc" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kennyy/image/upload/v1639768357/site-og_oyyvnz.png"
          key="ogimage"
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          name="twitter:creator"
          content="https://www.twitter.com/kenny_io"
          key="twhandle"
        />
      </Head>

      <section className="py-8 px-4">
        <div className="static">
          <div className="justify-center items-center flex flex-col mt-8">
            <h1 className="sm:text-4xl text-2xl font-black mb-10 text-center w-2/4 font-pumpkin">
              {`Let’s get your baby hooked up with another baby! *winks winks*`}
            </h1>
            <p className="mb-10 opacity-70 text-base leading-relaxed text-center w-2/4 font-sfpro">
              {`You know how one time you met someone amazing, you bonded with
              them and became friends, eventually ya'll fell in love, yeah that
              feeling. Pets deserve it too`}
            </p>

            <Image
              width={500}
              height={400}
              format="webp"
              className="w-full sm:w-1/4 md:w-auto lg:w-auto xl:w-1/3 h-96 mb-10"
              alt="pet"
              src="/pet.png"
            />
            <Link href="/pets">
              <a>
                <input
                  className="cursor-pointer mt-20 bg-appaccent hover:bg-appaccentdark text-black w-52 h-14 font-pumpkin py-2 px-4 rounded-xl"
                  type="button"
                  value="Explore"
                />
              </a>
            </Link>
          </div>
          <div>
            {/* <!-- create a circle to appear on the left of the page with a background color of red --> */}
            <div
              className="absolute top-24 -left-80  bg-ecllipse rounded-full  h-24 w-24"
              style={{ height: "550px", width: "550px" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
