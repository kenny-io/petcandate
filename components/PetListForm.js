import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { ExclamationIcon } from '@heroicons/react/outline'

export default function PetListForm({ showForm }) {
  // recieve props from parent

  const submit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let petForm = document.getElementById("petform");
    let formData = new FormData(petForm);

    console.log(formData.get("name"));

    let newPet = {
      name: formData.get("name"),
      funfact: formData.get("funfact"),
      image: formData.get("image"),
      age: formData.get("age"),
      location: formData.get("location"),
      lookingfor: formData.get("lookingfor"),
      type: formData.get("type"),
    };

    console.log(newPet);

    // setShowForm({ showForm: !showForm });

    try {
      const response = await fetch("/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newPet,
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section class="mt-10 px-24 bg-ecllipse">
      <div class="justify-center items-center flex flex-col mt-8 py-24 ">
        <h1 class="sm:text-2xl text-2xl font-black mb-10 text-center w-screen font-adelia">
          List your furball!
        </h1>
        <p class="mb-8 opacity-70 text-base leading-relaxed text-center w-2/4 font-sfpro">
          Tell us about your pet and we will help you find the perfect partner!
        </p>
        {/* <!-- Create a Tailwind form with inputs for the pets name, age, location, funfact and lookingfor --> */}
        <form
          action="/.netlify/functions/save"
          id="petform"
          name="petform"
          method="POST"
          class="flex flex-col items-center justify-center w-1/2 font-pumpkin"
        >
          <div class="w-2/4 mt-3">
            <label
              class="flex text-start text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              class="shadow text-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
              id="name"
              name="name"
              type="text"
              placeholder="What is your pet's name?"
            />
          </div>
          <div class="w-2/4 mt-3">
            <label
              class="flex text-start text-gray-700 text-sm font-bold mb-2"
              for="image"
            >
              Image
            </label>
            <input
              class="shadow text-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
              id="image"
              name="image"
              type="text"
              placeholder="Link to a fine picture of your pet"
            />
          </div>
          <div class="w-2/4 mt-3">
            <label
              class="flex text-start text-gray-700 text-sm font-bold mb-2"
              for="age"
            >
              Age
            </label>
            <input
              class="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
              id="age"
              name="age"
              type="text"
              placeholder="How old is your pet? e.g (2 months)"
            />
          </div>
          <div class="w-2/4 mt-3">
            <label
              class="flex text-start text-gray-700 text-sm font-bold mb-2"
              for="type"
            >
              Type
            </label>
            <input
              class="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
              id="type"
              name="type"
              type="text"
              placeholder="What type of pet? cat, dog, etc."
            />
          </div>
          <div class="w-2/4 mt-3">
            <label
              class="flex text-start text-gray-700 text-sm font-bold mb-2"
              for="location"
            >
              Location
            </label>
            <input
              class="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
              id="location"
              name="location"
              type="text"
              placeholder="Where is your pet located?"
            />
          </div>
          <div class="w-2/4 mt-3">
            <label
              class="flex text-start text-gray-700 text-sm font-bold mb-2"
              for="funfact"
            >
              Fun Fact
            </label>
            <input
              class="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
              id="funfact"
              name="funfact"
              type="text"
              placeholder="Tell us a fun fact about your pet"
            />
          </div>
          <div class="w-2/4 mt-3">
            <label
              class="flex text-start text-gray-700 text-sm font-bold mb-2"
              for="lookingfor"
            >
              Looking for?
            </label>
            <div class="relative">
              <select
                class="block appearance-none text-xs w-full bg-gray-200 border font-sfpro border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lookingfor"
                name="lookingfor"
              >
                <option>Friedship</option>
                <option>Romance</option>
                <option>Play date</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          {/* <p> */}
          <input
            class="mt-10 bg-appaccent hover:bg-appaccentdark text-black w-52 h-14 font-pumpkin py-2 px-4 rounded-xl"
            type="submit"
            value="Submit"
          />
          {/* </p> */}
          {/* <button type="submit" onClick={submit}>
            Submit
          </button> */}
        </form>
      </div>
    </section>
  );
}
