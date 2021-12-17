import Head from "next/head";
import PetList from "../components/PetList";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { server } from "../config";

export async function getStaticProps() {
  const res = await fetch(`${server}/.netlify/functions/get-pets`);
  const result = await res.json();

  return {
    props: {
      pets: JSON.stringify(result),
    },
    revalidate: 1,
  };
}

export default function Home({ pets }) {
  return (
    <div>
      <Head>
        <title>Pets can date</title>
        <meta name="description" content="Pets can date" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="py-8 px-4">
        <div className="static">
          <Link href="/">
            <a className="flex ml-32 mb-16 font-adelia uppercase items-center md:justify-start justify-center text-gray-900">
              <Image width={40} height={50} src="/favicon.png" alt="logo" />
              <span className="ml-3 text-xl">Pets can date</span>
            </a>
          </Link>

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
          </div>
          <div>
            {/* <!-- create a circle to appear on the left of the page with a background color of red --> */}
            <div
              className="absolute top-24 -left-80  bg-ecllipse rounded-full  h-24 w-24"
              style={{ height: "550px", width: "550px" }}
            />
            {/* <div
              className="absolute top-96 left-3/4  bg-ecllipse rounded-full  h-24 w-24"
              style={{ height: "550px", width: "550px" }}
            /> */}
          </div>
        </div>
        <PetList pets={pets} />
        <Footer />
      </section>
    </div>
  );
}
