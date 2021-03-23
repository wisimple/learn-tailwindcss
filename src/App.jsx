import React from "react";
import DestionationCard from "./components/DestionationCard";
import popularDestions from "./data/populerDestinations";

const App = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-lg lg:max-w-full lg:mt-6 xl:mr-0 2xl:col-span-2">
          <img className="h-10" src="/img/logo-brand.svg" alt="Workcation" />
          <div className="xl:max-w-xl">
            <img
              className="mt-6 rounded-lg shadow-lg sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
              src="/img/beach-work.jpg"
              alt="Working women"
            />
            <h1 className="mt-6 text-2xl font-headline tracking-tight font-semibold text-gray-900 sm:text-4xl sm:mt-8 lg:text-4xl lg:mt-8">
              You can work from anywhere. <br />
              <span className="text-brand">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-lg text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
              nice weather even when you're not on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a className="btn btn-primary shadow-lg" href="#">
                Book Your Escape
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="/img/beach-work.jpg"
            alt="Working women"
          />
        </div>
      </div>
      <div className="px-8 py-8 mx-auto max-w-md sm:max-w-xl lg:max-w-6xl lg:px-12">
        <h2 className="text-xl text-gray-900">Popular Destionations</h2>
        <p className="mt-2 text-gray-600">
          A selection of great work-friendly cities with lots to see and explore.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {popularDestions.map((destination) => (
            <DestionationCard destination={destination} key={destination.city} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
