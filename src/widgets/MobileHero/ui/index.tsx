export function MobileHero() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="absolute inset-0 bg-center"></div>
      <div className="sm:max-w-auto relative px-10 pb-24 pt-24 sm:mx-auto sm:rounded-lg sm:px-20">
        <div className="mx-auto">
          <h1 className="flex flex-col gap-2 text-center text-6xl font-black md:flex-row lg:tracking-tight xl:text-9xl">
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              For
            </span>
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Desktop
            </span>
            <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
              Only.
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
