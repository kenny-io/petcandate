export default function PetListForm() {
  return (
    <section className="mt-10 px-24 bg-ecllipse">
      <div className="justify-center items-center flex flex-col mt-8 py-24 ">
        <h1 className="sm:text-2xl text-2xl font-black mb-10 text-center w-screen font-adelia">
          List your furball!
        </h1>
        <p className="mb-8 opacity-70 text-base leading-relaxed text-center w-2/4 font-sfpro">
          Tell us about your pet and we will help you find the perfect partner!
        </p>
        <form
          action="/.netlify/functions/save"
          id="petform"
          name="petform"
          method="POST"
          className="flex flex-col items-center justify-center w-1/2 font-pumpkin"
        >
          <div className="w-2/4 mt-3">
            <label
              className="flex text-start text-gray-700 text-sm font-bold mb-2"
              htmlFor=""
            >
              Name
            </label>
            <input
              className="shadow text-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
              id="name"
              name="name"
              type="text"
              placeholder="What is your pet's name?"
            />
          </div>
          <div className="w-2/4 mt-3">
            <label
              className="flex text-start text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              className="shadow text-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
              id="image"
              name="image"
              type="text"
              placeholder="Link to a fine picture of your pet"
            />
          </div>
          <div className="w-2/4 mt-3">
            <label
              className="flex text-start text-gray-700 text-sm font-bold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
              id="age"
              name="age"
              type="text"
              placeholder="How old is your pet? e.g (2 months)"
            />
          </div>
          <div className="w-2/4 mt-3">
            <label
              className="flex text-start text-gray-700 text-sm font-bold mb-2"
              htmlFor="type"
            >
              Type
            </label>
            <input
              className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
              id="type"
              name="type"
              type="text"
              placeholder="What type of pet? cat, dog, etc."
            />
          </div>
          <div className="w-2/4 mt-3">
            <label
              className="flex text-start text-gray-700 text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
              id="location"
              name="location"
              type="text"
              placeholder="Where is your pet located?"
            />
          </div>
          <div className="w-2/4 mt-3">
            <label
              className="flex text-start text-gray-700 text-sm font-bold mb-2"
              htmlFor="funfact"
            >
              Fun Fact
            </label>
            <input
              className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
              id="funfact"
              name="funfact"
              type="text"
              placeholder="Tell us a fun fact about your pet"
            />
          </div>
          <div className="w-2/4 mt-3">
            <label
              className="flex text-start text-gray-700 text-sm font-bold mb-2"
              htmlFor="lookingfor"
            >
              Looking for?
            </label>
            <div className="relative">
              <select
                className="block appearance-none text-xs w-full bg-gray-200 border font-sfpro border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lookingfor"
                name="lookingfor"
              >
                <option>Friedship</option>
                <option>Romance</option>
                <option>Play date</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <input
            className="mt-10 bg-appaccent hover:bg-appaccentdark text-black w-52 h-14 font-pumpkin py-2 px-4 rounded-xl"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
}
