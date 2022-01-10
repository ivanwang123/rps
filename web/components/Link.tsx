import React from "react";
import EyeOff from "svgs/eye-off.svg";
import Eye from "svgs/eye.svg";
import Cursor from "svgs/cursor.svg";
import Close from "svgs/close.svg";

export function EditLink() {
  return (
    <article className="flex items-center w-full condensed-font my-4">
      <div className="w-8 h-8 bg-yellow-100 rounded-full"></div>
      <h6 className="ml-2">Instagram</h6>
      <div className="grid grid-flow-col gap-2 place-items-center ml-auto">
        <span className="flex items-center bg-black text-white text-sm rounded-full pl-1.5 pr-0.5 ml-auto">
          23
          <Cursor className="w-4 h-4 fill-current" />
        </span>
        <button type="button">
          <EyeOff className="w-4 h-4" />
        </button>
        <button type="button">
          <Close className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
}

export function DisplayLink() {
  return (
    <article className="flex items-center w-full condensed-font my-4">
      <div className="w-8 h-8 bg-yellow-100 rounded-full"></div>
      <h6 className="ml-2">Instagram</h6>
      <span className="flex items-center bg-black text-white text-sm rounded-full pl-1.5 pr-0.5 ml-auto">
        23
        <Cursor className="w-4 h-4 fill-current" />
      </span>
    </article>
  );
}
