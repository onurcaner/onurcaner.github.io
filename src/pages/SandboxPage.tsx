import { type ReactElement } from 'react';

export function SandboxPage(): ReactElement {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  const lor = 'Lorem';

  return (
    <div className="grid grid-cols-2 bg-neutral-700 p-16">
      <div className="relative grid overflow-hidden">
        <div className="relative z-2 col-span-full row-span-full mix-blend-screen">
          <p className="text-5 bg-neutral-700 text-black">{lorem}</p>
        </div>

        <div className="relative z-1 col-span-full row-span-full mix-blend-multiply">
          <p className="text-5 bg-black text-white">{lorem}</p>
        </div>

        <div className="absolute -top-8 -right-8 -bottom-8 -left-8 z-0 grid grid-cols-12 blur-[2rem]">
          <div className="bg-neutral-400"></div>
          <div className="bg-red-400"></div>
          <div className="bg-green-400"></div>
          <div className="bg-blue-400"></div>
          <div className="bg-neutral-300"></div>
          <div className="bg-red-300"></div>
          <div className="bg-green-300"></div>
          <div className="bg-blue-300"></div>
          <div className="bg-neutral-300"></div>
          <div className="bg-red-300"></div>
          <div className="bg-green-300"></div>
          <div className="bg-blue-300"></div>
        </div>
      </div>

      {/*<div className="relative grid overflow-hidden">*/}
      {/*  <div className="relative z-2 col-span-full row-span-full mix-blend-screen">*/}
      {/*    <p className="text-5 bg-neutral-700 text-black">{lor}</p>*/}
      {/*  </div>*/}

      {/*  <div className="relative z-1 col-span-full row-span-full mix-blend-multiply">*/}
      {/*    <p className="text-5 bg-black text-white">{lor}</p>*/}
      {/*  </div>*/}

      {/*  <div className="absolute top-0 left-0 z-0 grid h-full w-full grid-cols-4">*/}
      {/*    <div className="bg-neutral-300"></div>*/}
      {/*    <div className="bg-red-500"></div>*/}
      {/*    <div className="bg-green-500"></div>*/}
      {/*    <div className="bg-blue-500"></div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}
