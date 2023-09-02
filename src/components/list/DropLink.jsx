import React from "react";

function DropLink() {
  return (
    <ul className="flex flex-col  text-base font-semibold text-stone-800">
      <li className="rounded px-2 py-2 hover:bg-zinc-200">Link1</li>
      <li className="rounded px-2 py-2 hover:bg-zinc-200">Link2</li>
      <li className="rounded px-2 py-2 hover:bg-zinc-200">Link3</li>
      <li className="rounded px-2 py-2 hover:bg-zinc-200">Link4</li>
    </ul>
  );
}

export default DropLink;
