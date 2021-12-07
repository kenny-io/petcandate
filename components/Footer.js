export default function Footer() {
  return (
    <footer class="text-gray-600 mt-8">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img src="/favicon.png" alt="logo" class="w-10" />
          <span class="ml-3 text-xl font-adelia">Pets can date</span>
        </a>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          This site is designed by{" "}
          <a
            class="text-appaccent font-bold underline"
            href="https://twitter.com/urluchy"
          >
            Ursula{" "}
          </a>
          and built by{" "}
          <a
            class="text-appaccent font-bold underline"
            href="https://twitter.com/kenny_io"
          >
            Ekene.
          </a>{" "}
          <br />
          It's hosted on{" "}
          <a
            class="text-appaccent font-bold underline"
            href="https://www.netlify.com/"
          >
            Netlify{" "}
          </a>
          as part of the ongoing{" "}
          <a
            href="https://www.netlify.com/blog/2021/12/01/dusty-domains-your-forgotten-domains-raise-money-for-charity/"
            class="text-appaccent font-bold underline"
          >
            Dusty Domains project.{" "}
          </a>{" "}
          <br />
          Since we are all just doing this for fun, feel free to{" "}
          <a
            class="text-appaccent font-bold underline"
            href="https://twitter.com/kenny_io"
          >
            Contribute
          </a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="/" class="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
