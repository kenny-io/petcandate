import { server } from "../../config";
import Link from "next/link";
import Head from "next/head";

export async function getStaticPaths() {
  const res = await fetch(`${server}/.netlify/functions/get-pets`);
  const result = await res.json();

  const paths = result.map((pets) => ({
    params: { name: pets.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params.name);
  const res = await fetch(
    `${server}/.netlify/functions/getpet?name=${params.name}`
  );
  const result = await res.json();
  console.log(result);

  return {
    props: {
      pet: result[0],
    },
  };
}

export default function PetDetails({ pet }) {
  const handle = "https://www.twitter.com/kenny_io";
  const petURL = `https://petscan.date/pets/${pet.name}`;

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={pet.funfact}></meta>
        <meta property="og:title" content={pet.name} key="ogtitle" />
        <meta property="og:image" content={pet.image} key="ogimage" />
        <meta property="og:description" content={pet.funfact} key="ogdesc" />
        <title> {pet.name} is looking for friends</title>
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={handle} key="twhandle" />
      </Head>
      <section className="bg-ecllipse text-primary-content body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={pet.name}
              width="400"
              height="500"
              className="object-cover object-center rounded"
              src={pet.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font opacity-70 tracking-widest mb-3">
                Hey, my name is
              </h2>
              <h1 className="text-3xl title-font opacity-70 font-medium mb-3 font-adelia">
                {pet.name}
              </h1>

              <p className="leading-relaxed opacity-70">
                I live in {pet.location} and I&apos;m {pet.age} old. <br></br>
                <br></br>
                {`Here's a funfact about me:`} <br></br>
              </p>
              <div className="flex mb-4 mt-3 text-base leading-relaxed">
                <span className="flex ml-3 pl-3 py-2 opacity-70 border-l-2 space-x-4">
                  <p>{pet.funfact}</p>
                </span>
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <Link href={`https://twitter.com/intent/tweet?url=${petURL}`}>
                  <a>
                    <button
                      type="button"
                      className="bg-appaccent hover:bg-appaccentdark text-black w-52 h-14 font-pumpkin py-2 px-4 rounded-xl"
                    >
                      Help me find a friend?
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
