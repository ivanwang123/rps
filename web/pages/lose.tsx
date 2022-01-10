import { Layout } from "components/layout/Layout";
import React from "react";
import Creature from "svgs/creature-2.svg";
import { DisplayLink } from "components/Link";

function Lose() {
  return (
    <Layout title="Play | RPS">
      <h1 className="text-4xl text-center font-bold mb-16">
        OPPONENT_NAME WINS
      </h1>
      <section>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold">Opponent_Name</h3>
          <p className="condensed-font mb-2">5 - 0</p>
          <div className="grid place-items-center w-36 h-36 bg-yellow-100 rounded-full">
            <Creature className="w-24 h-24 -scale-x-100" />
          </div>
        </div>
      </section>
      <section className="flex justify-center mt-4">
        <div className="w-full max-w-sm">
          <p className="text-center mb-4">
            Check me out. This is something to read while you look around.
          </p>
          <div className="flex flex-col items-center mb-4">
            <DisplayLink />
            <DisplayLink />
            <DisplayLink />
            <DisplayLink />
          </div>
          <div className="flex items-center">
            <p className="condensed-font text-sm">
              Check out a link before going to your next game.
            </p>
            <button
              type="button"
              className="whitespace-nowrap bg-black opacity-30 text-white px-3 py-1 rounded ml-auto"
              disabled
            >
              Next game
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Lose;
