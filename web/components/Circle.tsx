import React from "react";

export function Circle() {
  return (
    <article className="mx-5 mb-10">
      <button type="button" className="flex flex-col items-center group">
        <div className="w-28 h-28 bg-orange-100 border-4 border-black rounded-full mb-1"></div>
        <p className="font-bold underline-offset-2 group-hover:underline">
          Product Hunt
        </p>
        <p className="condensed-font text-sm">23 PLAYERS</p>
      </button>
    </article>
  );
}
