import { Layout } from "components/layout/Layout";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Rock from "svgs/rock.svg";
import Paper from "svgs/paper.svg";
import Scissors from "svgs/scissors.svg";
import Creature from "svgs/creature-2.svg";
import clsx from "clsx";

const countdownMsg = ["ROCK...", "PAPER...", "SCISSORS..."] as const;

function Play() {
  const [countdown, setCountdown] = useState<number>(0);
  const [revealHand, setRevealHand] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown + 1 < countdownMsg.length) {
        setCountdown(countdown + 1);
      } else {
        setRevealHand(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, setCountdown]);

  // 528px/33rem tall
  return (
    <Layout title="Play | RPS">
      <div className="flex flex-col grid -botbar h-full max-h-[36rem]">
        <div className="grow-1"></div>
        <h1 className="place-self-center text-4xl text-center font-bold mb- 16">
          {revealHand ? (
            <span className="animate-fade-in">SHOOT!</span>
          ) : (
            <span
              className="animate-[ping_1s_ease-in-out_forwards]"
              key={countdown}
            >
              {countdownMsg[countdown]}
            </span>
          )}
        </h1>
        {/* <div> */}
        <div className="grow-1"></div>
        <section className="grid-midbar w-full">
          <Player isOpponent={false} revealHand={revealHand} isWinner={false} />
          <p className="condensed-font my-auto pt-12">VS</p>
          <Player isOpponent={true} revealHand={revealHand} isWinner={true} />
        </section>
        <div className="grow-1"></div>
        <section className="flex flex-col items-center mt- 16">
          <h6 className="mb-2">Your moves</h6>
          <div className="grid grid-flow-col gap-4 place-items-center">
            <MoveButton icon={Rock} label="ROCK" />
            <MoveButton icon={Paper} label="PAPER" />
            <MoveButton icon={Scissors} label="SCISSORS" />
          </div>
        </section>
        {/* </div> */}
      </div>
    </Layout>
  );
}

type ButtonProps = {
  icon: any;
  label: string;
};

function MoveButton({ icon: Icon, label }: ButtonProps) {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28">
      <div className="absolute bottom-0 w-full h-1/2 border-2 border-black rounded translate-y-2"></div>
      <button
        type="button"
        className="absolute flex flex-col items-center w-full h-full bg-white border-2 border-black p-4 rounded transition-all hover:translate-y-2 hover:bg-black hover:text-background"
      >
        <Icon className="w-12 h-12 fill-current" />
        <span>{label}</span>
      </button>
    </div>
  );
}

type Props = {
  isOpponent: boolean;
  revealHand: boolean;
  isWinner: boolean;
};

function Player({ isOpponent, revealHand, isWinner }: Props) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold">Your_Name</h3>
      <p className="condensed-font mb-2">5 - 0</p>
      <div className="flip-card w-36 h-36">
        <div className={clsx("flip-card-inner", revealHand && "rotate-y-180")}>
          <div className="flip-card-front">
            <div
              className={clsx(
                "grid place-items-center w-full h-full bg-yellow-100 rounded-full mb-3",
                isOpponent && "-scale-x-100"
              )}
            >
              <Creature className="w-24 h-24 animate-[bounce_0.5s_ease-in-out_infinite]" />
            </div>
          </div>
          <div className="flip-card-back">
            <div
              className={clsx(
                "grid place-items-center w-full h-full bg-yellow-100 rounded-full mb-3",
                isOpponent && "-scale-x-100"
              )}
            >
              <Rock
                className={clsx(
                  "w-24 h-24",

                  isWinner && "animate-[wiggle_0.5s_ease-in-out_infinite]"
                )}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid place-items-center w-36 h-36 bg-yellow-100 rounded-full mb-3">
              <Creature className="w-24 h-24 animate-[bounce_0.4s_ease-out_infinite]" />
            </div> */}
    </div>
  );
}

export default Play;
