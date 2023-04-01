import Link from "next/link";
import React from "react";

const Caw = (props: any) => {
  return (
    <Link
      className="caw flex flex-col gap-4 border-y-2 border-[#a2a18b] bg-white/10 px-6 py-2 text-slate-100 hover:bg-white/20 md:px-10"
      href="https://google.com"
      target="_blank"
    >
      <div>
        <p className="text-lg font-semibold">evening,</p>
        <p className="text-lg font-semibold">Tarnished</p>
      </div>
      <div className="flex justify-between">
        <p className="text-lg font-semibold">Rated Good</p>
        <p className="text-lg font-semibold">Appraisals 721</p>
      </div>
      <div className="caw flex justify-center gap-2 border-t border-[#a2a18b] pt-2">
        <div
          className="rounded bg-white/10 p-2 hover:bg-white/30"
          onClick={() => console.log("bla")}
        >
          Good
        </div>
        <div className="rounded bg-white/10 p-2 hover:bg-white/30">Poor</div>
      </div>
    </Link>
  );
};

export default Caw;
