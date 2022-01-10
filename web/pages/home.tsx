import { Circle } from "components/Circle";
import { Layout } from "components/layout/Layout";
import React, { useState } from "react";
import { EditLink } from "components/Link";
import Add from "svgs/add.svg";
import Close from "svgs/close.svg";
import User from "svgs/user.svg";
import Creature from "svgs/creature-1.svg";
import clsx from "clsx";

const colors = [
  "bg-yellow-100",
  "bg-sky-100",
  "bg-green-100",
  "bg-red-100",
  "bg-pink-100",
] as const;

function Home() {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [color, setColor] = useState<typeof colors[number]>(colors[0]);

  return (
    <Layout title="Home | RPS">
      <button
        type="button"
        className="flex items-center group"
        onClick={() => setShowProfile(true)}
      >
        <User className="w-4 h-4" />
        <span className="ml-2 underline-offset-2 group-hover:underline">
          Profile
        </span>
      </button>
      <h1 className="text-4xl text-center font-bold mb-10">CIRCLES</h1>
      <section className="flex flex-wrap justify-evenly">
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </section>
      <section
        className={clsx(
          "fixed top-0 bottom-0 left-0 flex flex-col items-center w-full max-w-sm bg-background border-r-2 border-black p-5 pt-3 overflow-auto overscroll-contain transition-all ease-out",
          showProfile
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <button
          type="button"
          className="ml-auto"
          onClick={() => setShowProfile(false)}
        >
          <Close className="w-6 h-6" />
        </button>
        <div className="grid-midbar">
          <div
            className={clsx(
              "col-start-2 grid place-items-center w-36 h-36 rounded-full mb-3",
              color
            )}
          >
            <Creature className="w-24 h-24" />
          </div>
          <div className="grid grid-flow-row gap-2 self-center h-max ml-4">
            {colors.map((c) => (
              <div
                className={clsx(
                  "w-4 h-4 rounded-full",
                  c,
                  color === c && "border-2 border-black"
                )}
                onClick={() => setColor(c)}
                key={c}
              ></div>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Your_Name</h3>
        <p className="text-center">
          A short message to leave for your opponent.
        </p>
        <div className="w-full">
          <h3 className="flex items-center mt-5">LINKS</h3>
          <EditLink />
          <EditLink />
          <EditLink />
          <EditLink />
          <button
            type="button"
            className="flex justify-center items-center w-full border-2 border-black py-1 rounded-full"
          >
            <Add className="w-6 h-6 fill-current" /> Add link
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
