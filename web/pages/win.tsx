import { Layout } from "components/layout/Layout";
import Link from "next/link";
import React from "react";
import Creature from "svgs/creature-2.svg";

function Win() {
  return (
    <Layout title="Play | RPS">
      <h1 className="text-4xl text-center font-bold mb-16">YOU WIN</h1>
      <section className="flex flex-col items-center">
        <h3 className="text-xl font-bold">Your_Name</h3>
        <p className="condensed-font mb-2">6 - 0</p>
        <div className="grid place-items-center w-36 h-36 bg-yellow-100 rounded-full">
          <Creature className="w-24 h-24 animate-[wiggle-small_0.5s_infinite]" />
        </div>
        <button
          type="button"
          className="bg-black text-white px-3 py-1 mt-16 rounded"
        >
          Next game
        </button>
        <Link href="/home">
          <a className="text-sm mt-3 underline-offset-2 hover:underline">
            Go home
          </a>
        </Link>
      </section>
    </Layout>
  );
}

export default Win;
