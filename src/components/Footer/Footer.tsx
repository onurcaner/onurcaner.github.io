import { type ReactElement } from 'react';

import { Developer } from '@/components/Developer/Developer.tsx';

import { FooterNavigation } from './FooterNavigation.tsx';

export function Footer(): ReactElement {
  return (
    <footer className="relative z-1 grid min-h-[50vh] content-center bg-(--theme-component-footer-background-color)">
      <div className="max-w-9xl mx-auto grid w-full grid-cols-[repeat(2,minmax(max-content_1fr))] gap-x-16 gap-y-20 px-16 pt-40 pb-20">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 justify-self-start">
          <div className="grid gap-y-1.75">
            <FooterDeveloper />
            <FooterSocials />
          </div>
        </div>

        <div className="col-start-2 col-end-3 row-start-2 row-end-3 justify-self-end">
          <FooterMenu />
        </div>

        <div className="col-start-2 col-end-3 row-start-1 row-end-2 justify-self-end">
          <FooterNavigation />
        </div>

        <div className="col-start-1 col-end-2 row-start-2 row-end-3 justify-self-start">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}

function FooterDeveloper(): ReactElement {
  return <Developer isVertical={true} />;
}

function FooterSocials(): ReactElement {
  return (
    <div className="flex gap-x-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="grid items-center justify-center rounded-(--theme-border-radius) bg-neutral-700 p-(--theme-border-thickness)"
        >
          <div className="grid items-center justify-center rounded-(--theme-border-radius) bg-neutral-800 p-1">
            <div className="size-5 rounded-(--theme-border-radius) bg-neutral-400" />
          </div>
        </div>
      ))}
    </div>
  );
}

function FooterCopyright(): ReactElement {
  return (
    <div className="text-3 grid max-w-144 font-light text-neutral-300">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  );
}

function FooterMenu(): ReactElement {
  return (
    <div className="grid items-center justify-center rounded-(--theme-border-radius) bg-neutral-700 p-(--theme-border-thickness)">
      <div className="grid items-center justify-center rounded-(--theme-border-radius) bg-neutral-800 p-2">
        <div className="size-8 rounded-(--theme-border-radius) bg-neutral-400" />
      </div>
    </div>
  );
}
