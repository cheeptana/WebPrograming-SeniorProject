import HomePage from './User.Home';
import { MetaFunction } from '@remix-run/react';

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