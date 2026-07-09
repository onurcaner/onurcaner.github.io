import { type ReactElement } from 'react';

import { RGBText } from '@/components/RGBText.tsx';

// function RGBText({
//   children,
// }: {
//   children: ReactElement;
//   parentBackgroundClassName: string;
//   rgbDiffuserBackgroundClassName: string;
// }): ReactElement {
//   return (
//     <div className="relative grid">
//       <div className="relative z-3 col-span-full row-span-full bg-neutral-700 text-black mix-blend-screen">
//         {children}
//       </div>
//
//       <div
//         className="relative z-2 col-span-full row-span-full bg-black text-white mix-blend-multiply"
//         aria-hidden={true}
//       >
//         {children}
//       </div>
//
//       <div className="absolute top-0 right-0 bottom-0 left-0 z-1 bg-white/50 backdrop-blur-lg" />
//       <div className="absolute top-0 right-0 bottom-0 left-0 z-0 grid">
//         <div className="grid grid-cols-8">
//           <div className="bg-transparent"></div>
//           <div className="bg-red-500"></div>
//           <div className="bg-green-500"></div>
//           <div className="bg-blue-500"></div>
//           <div className="bg-blue-500"></div>
//           <div className="bg-green-500"></div>
//           <div className="bg-red-500"></div>
//           <div className="bg-transparent"></div>
//           {/*<div className="bg-neutral-300"></div>*/}
//           {/*<div className="bg-red-300"></div>*/}
//           {/*<div className="bg-green-300"></div>*/}
//           {/*<div className="bg-blue-300"></div>*/}
//           {/*<div className="bg-neutral-300"></div>*/}
//           {/*<div className="bg-red-300"></div>*/}
//           {/*<div className="bg-green-300"></div>*/}
//           {/*<div className="bg-blue-300"></div>*/}
//         </div>
//       </div>
//     </div>
//   );
// }

export function SandboxPage(): ReactElement {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  const lor = 'Lorem';

  return (
    <div className="grid grid-cols-2 bg-neutral-600 p-16">
      <div className="relative grid">
        <div className="relative z-1 col-span-full row-span-full">
          <RGBText
            rgbDiffuserBackgroundClassName="bg-white/0" /* theme dependent maybe */
            parentBackgroundClassName="bg-neutral-600"
          >
            <p className="text-5">{lorem}</p>
          </RGBText>
        </div>
      </div>
    </div>
  );
}
