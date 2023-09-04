"use client";
import Feed from "./components/Feed";
import Message from "./components/Message";
import { roboto } from "./fonts";

export default function Home() {
  return (
    <main>
      <h1 className={`${roboto.className}`}>
        <Feed />

      </h1>
    </main>
  );
}
