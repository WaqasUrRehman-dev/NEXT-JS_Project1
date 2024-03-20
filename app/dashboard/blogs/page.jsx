
export default function Blogs() {
  return (
    <div className="flex flex-col relative h-screen w-3/4 left-6 ">
      <div className="relative h-[400px] mt-2 mx-2 w-full rounded-md flex items-center justify-center">
        <img
          src="https://media.istockphoto.com/id/1365566381/photo/copper-cable-wire-used-in-electrical-installation.jpg?s=612x612&w=0&k=20&c=nEiYMDmHZdgPmcBvdE8JisVBRPjcNhScAnRnZ_K8wTQ="
          alt="AirMax Pro"
          className="h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute text-center">
          <h1 className="text-3xl font-semibold text-white">
            Powering Connections: <br /> Navigating the World of Electricity
            Cables
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            Read more &rarr;
          </button>
        </div>
      </div>
      <div className="flex flex-col relative text-center items-center justify-center mx-8 mt-4">
        <h2 className="font-bold text-2xl">Types and Uses of Electricity Cables</h2>
        <p className="mt-4 text-center text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula.
        </p>

        <form className="mt-6 flex justify-center items-center">
          <div className="flex max-w-md flex-col space-y-4 justify-center items-center">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Subscribe
            </button>
          </div>
        </form>
        <p className="mt-2 ">
          <span className="text-sm justify-center items-center flex text-gray-600">
            By signing up, you agree to our terms of service and privacy policy.
          </span>
        </p>
      </div>
    </div>
  );
}
