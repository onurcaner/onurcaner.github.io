import { type ReactElement } from 'react';

export function SandboxPage(): ReactElement {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  return (
    <div className="grid gap-y-4 ease-in">
      <p className="text-0750rem">{lorem}</p>
      <p className="text-0875rem">{lorem}</p>
      <p className="text-1000rem">{lorem}</p>
      <p className="text-1125rem">{lorem}</p>
      <p className="text-1250rem">{lorem}</p>
      <p className="text-1500rem">{lorem}</p>
      <p className="text-1750rem">{lorem}</p>
      <p className="text-2000rem">{lorem}</p>
      <p className="text-2250rem">{lorem}</p>
      <p className="text-2500rem">{lorem}</p>
      <p className="text-3000rem duration-500 ease-in">{lorem}</p>
    </div>
  );
}
