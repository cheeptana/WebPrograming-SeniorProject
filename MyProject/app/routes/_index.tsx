import { useEffect } from 'react';
import type { MetaFunction } from "@remix-run/node";
import Theader from './temp/theader';
import Tfooter from './temp/tfooter';
import HomePage from './page.home';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function main() {
  return (
        <HomePage />
  );
}