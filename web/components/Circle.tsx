import Link from "next/link";
import React from "react";

export function Circle() {
  return (
    <Link href="/play">
      <a className="flex flex-col items-center mx-5 mb-10 group">
        <div className="w-28 h-28 bg-orange-100 border-4 border-black rounded-full mb-1"></div>
        <p className="font-bold underline-offset-2 group-hover:underline">
          Product Hunt
        </p>
        <p className="condensed-font text-sm">23 PLAYERS</p>
      </a>
    </Link>
  );
}
