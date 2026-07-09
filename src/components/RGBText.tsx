import type { ReactElement } from 'react';

import { RGBLedBox } from '@/components/RGBLedBox.tsx';
import { ClassNameJoiner } from '@/utils/ClassNameJoiner.ts';

export function RGBText({
  children,
  parentBackgroundClassName,
}: {
  children: ReactElement;
  parentBackgroundClassName: string;
  rgbDiffuserBackgroundClassName: string;
}): ReactElement {
  return (
    <div className="relative grid min-h-40 min-w-120">
      <div
        className={new ClassNameJoiner().join(
          'relative z-3 col-span-full row-span-full text-black mix-blend-screen',
          parentBackgroundClassName,
        )}
      >
        {children}
      </div>

      <div
        className={
          'relative z-2 col-span-full row-span-full bg-black text-white mix-blend-multiply'
        }
        aria-hidden={true}
      >
        {children}
      </div>

      <div className="absolute top-0 right-0 bottom-0 left-0 z-1 bg-(--component-rgb-diffuser-background-color) backdrop-blur-sm" />
      <div className="absolute top-0 right-0 bottom-0 left-0 z-0 grid">
        <div className="grid grid-cols-16">
          {Array.from({ length: 32 }).map((_, index) => (
            <RGBLedBox key={index} ledNumber={index} isAlternative={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

//
// export function RGBText({
//                           children,
//                           parentBackgroundClassName,
//                           rgbDiffuserBackgroundClassName,
//                         }: {
//   children: ReactElement;
//   parentBackgroundClassName: string;
//   rgbDiffuserBackgroundClassName: string;
// }): ReactElement {
//   return (
//     <div className="relative grid min-h-40 min-w-80">
//       <div
//         className={new ClassNameJoiner().join(
//           'relative z-3 col-span-full row-span-full text-black mix-blend-screen',
//           parentBackgroundClassName,
//         )}
//       >
//         {children}
//       </div>
//
//       <div
//         className={
//           'relative z-2 col-span-full row-span-full bg-black text-white mix-blend-multiply'
//         }
//         aria-hidden={true}
//       >
//         {children}
//       </div>
//
//       <div
//         className={new ClassNameJoiner().join(
//           'absolute top-0 right-0 bottom-0 left-0 z-1 backdrop-blur-lg',
//           rgbDiffuserBackgroundClassName,
//         )}
//       />
//       <div className="absolute top-0 right-0 bottom-0 left-0 z-0 grid">
//         <div className="grid grid-cols-8">
//           <div className="bg-transparent"></div>
//           <div className="bg-red-500"></div>
//           <div className="bg-green-500"></div>
//           <div className="bg-blue-500"></div>
//           <div className="bg-transparent"></div>
//           <div className="bg-red-500"></div>
//           <div className="bg-green-500"></div>
//           <div className="bg-blue-500"></div>
//
//           <div className="bg-black"></div>
//           <div className="bg-black"></div>
//           <div className="bg-transparent"></div>
//           <div className="bg-transparent"></div>
//           <div className="bg-transparent"></div>
//           <div className="bg-transparent"></div>
//           <div className="bg-white"></div>
//           <div className="bg-white"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

