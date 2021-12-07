import PetListForm from "./PetListForm";
import { useState } from "react";
export default function PetList({ pets }) {
  const petArray = JSON.parse(pets);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const [showForm, setShowForm] = useState(false);
  //   if (pets.length > 0) {
  return (
    <section class="px-24 mx-auto bg-ecllipse">
      <div class="justify-center items-center flex flex-col mt-8 py-24 ">
        <h1 class="sm:text-4xl text-2xl font-black mb-10 text-center w-2/4 font-adelia">
          Peep our gorgeous pets
        </h1>
        <p class="mb-8 opacity-70 text-base leading-relaxed text-center w-2/4 font-sfpro">
          You know what? take a moment and look through our list of gorgeous
          pets. Assuming you don't spend all day looking at these cuties, go
          ahead and list your own pet!
        </p>
        <button
          className="bg-appaccent hover:bg-appaccentdark text-black w-52 h-14 font-pumpkin py-2 px-4 rounded-xl"
          onClick={toggleShowForm}
        >
          List Your Pet
        </button>
        {showForm ? <PetListForm showForm /> : ""}
      </div>

      <section class="text-white">
        <div class="px-5 mx-auto">
          <div class="flex flex-wrap -m-4">
            {petArray.map((pet) => (
              <div class="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 ">
                <div class="h-full bg-gradient-to-r from-red-500 to-yellow-500 hover:from-yellow-400 hover:to-red-400 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-96 md:h-36 w-full object-cover object-center"
                    src={pet.image}
                    alt="pets"
                  />
                  <div class="p-6 items-center mx-auto">
                    <h1 class="title-font text-lg font-medium mb-3 font-pumpkin">
                      {pet.name}, {pet.age} / {pet.location}
                    </h1>
                    <p class="leading-relaxed mb-3 font-sfpro">{pet.funfact}</p>
                    <button class="flex mt-8 mb-8 mx-auto text-center font-bold py-2 px-4 rounded-full border border-white  font-pumpkin ">
                      Connect with {pet.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
  //   }
}
