import { type ReactElement } from 'react';

import { Developer } from '@/components/Developer/Developer.tsx';

export function Footer(): ReactElement {
  return (
    <footer className="relative grid min-h-[50vh] content-center bg-(--theme-component-footer-background-color)">
      <div className="max-w-9xl mx-auto grid w-full grid-cols-[repeat(2,minmax(max-content_1fr))] gap-x-16 px-16 pt-40 pb-20">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 justify-self-start">
          <FooterDeveloper />
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 justify-self-start">
          <FooterSocials />
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-3 justify-self-end">
          <FooterNav />
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-4 justify-self-start">
          <FooterCopyright />
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-4 justify-self-end">
          <FooterMenu />
        </div>
      </div>
    </footer>
  );
}

function FooterDeveloper(): ReactElement {
  return <Developer isVertical={true} />;
}

function FooterSocials(): ReactElement {
  return <div className="text-pink-200">socials</div>;
}

function FooterNav(): ReactElement {
  return (
    <div className="grid text-pink-200">
      <div>Skills</div>
      <div>Education</div>
      <div>Work Experience</div>
    </div>
  );
}

function FooterCopyright(): ReactElement {
  return (
    <div className="text-3 grid max-w-144 text-pink-200">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  );
}

function FooterMenu(): ReactElement {
  return <div className="text-pink-200">MENU??</div>;
}
