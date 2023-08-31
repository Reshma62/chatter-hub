"use client"
import { roboto } from "./fonts";

export default function Home ()
{
console.log(roboto.className,"className");
  return (
    <main>
      <h1 className={`${roboto.className} font-bold`}>Hello world </h1>
    </main>
  );
}
