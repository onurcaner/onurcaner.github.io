import { type ReactElement } from 'react';

import { Glow } from '@/components/Glow.tsx';
import { RGBBackground } from '@/components/RGB/RGBBackground.tsx';

export function SandboxPage(): ReactElement {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  const lor = 'Lorem';

  return (
    <div className="grid grid-cols-2 bg-neutral-900 p-16">
      <div className="relative grid">
        <div className="relative z-1 col-span-full row-span-full min-h-128">
          <Glow elevationStep={8}>
            <div className="h-full w-full overflow-hidden rounded-2xl">
              <RGBBackground
                ledIndicesMatrix={[
                  [0, 1, 2, 3, 4, 5, 6, 7],
                  [1, null, null, null, null, null, null, 8],
                  [2, null, null, null, null, null, null, 9],
                  [3, null, null, null, null, null, null, 10],
                  [4, null, null, null, null, null, null, 11],
                  [5, null, null, null, null, null, null, 13],
                  [6, null, null, null, null, null, null, 13],
                  [7, 8, 9, 10, 11, 12, 13, 14],
                ]}
                isUsingAlternative={true}
              />
            </div>
          </Glow>
        </div>
      </div>
    </div>
  );
}
