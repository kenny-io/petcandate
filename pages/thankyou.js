// import next-link
import Link from "next/link";
// import next-image
import Image from "next/image";
export default function ThankYou() {
  return (
    <section class="text-gray-600 body-font bg-ecllipse h-screen">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font font-adelia sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Thank you!
          </h1>
          <p class="mb-8 leading-relaxed font-sfpro">
            We've listed your pet. Now get ready to fend off dozens of well
            meaning admirers. 😉
          </p>
          <div class="">
            <Link href="/">
              <a class="flex justify-center uppercase bg-appaccent hover:bg-appaccentdark text-black w-52 h-14 font-pumpkin py-2 px-4 rounded-xl">
                Go see your pet
              </a>
            </Link>
            {/* <button class="mt-10 bg-appaccent hover:bg-appaccentdark text-black w-52 h-14 font-pumpkin py-2 px-4 rounded-xl">
              Go see your pet
            </button> */}
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="/corgi.gif"
          />
        </div>
      </div>
    </section>
  );
}
