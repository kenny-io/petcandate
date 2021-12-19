import Link from "next/link";
import Image from "next/image";
export default function ThankYou() {
  return (
    <section className="text-gray-600 body-font bg-ecllipse h-screen">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font font-adelia sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Thank you!
          </h1>
          <p className="mb-8 leading-relaxed font-sfpro">
            {`Okay, just give us some time to review your pets details, with any luck, your pet will be listed in about 10 minutes.
            In the meantime, I recommend you start getting ready to fend off dozens of well
            meaning admirers. 😉 `}
          </p>
          <div className="">
            <Link href="/pets">
              <a className="flex justify-center uppercase bg-appaccent hover:bg-appaccentdark text-black w-52 h-14 font-pumpkin py-2 px-4 rounded-xl">
                Continue
              </a>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            width={600}
            height={400}
            format="webp"
            className="object-cover object-center rounded"
            alt="hooray image"
            src="/hooray.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
