import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { api } from "~/utils/api";

const Caw = ({
  caw,
  userName,
  id,
  likedBy,
  createdAt,
}: {
  caw: string;
  userName: string;
  id: string;
  likedBy: User[];
  createdAt: Date;
}) => {
  const [appraisals, setAppraisals] = useState(likedBy.length);
  const [isLiked, setIsLiked] = useState(false);
  const { data: sessionData } = useSession();
  const likeMutation = api.main.addLike.useMutation();

  useEffect(() => {
    if (sessionData && likedBy)
      if (likedBy.find((user) => user.id === sessionData?.user?.id)) {
        setIsLiked(true);
      }
  }, [sessionData, likedBy]);

  const handleLike = async (id: string) => {
    await likeMutation.mutateAsync({ id });
    setAppraisals(appraisals + 1);
    setIsLiked(true);
  };

  return (
    <div className="caw flex cursor-pointer flex-col  border-y-2 border-[#a2a18b] bg-white/10 px-6 py-2 text-slate-100 hover:bg-white/20 md:px-12">
      <div className="py-10">
        <p className="text-lg font-semibold">{caw}</p>
      </div>
      <div className="flex justify-between px-6">
        <div>{isLiked && <p>Rated Good</p>}</div>
        <p className="">Appraisals {appraisals}</p>
      </div>
      <div className="caw flex items-center justify-between gap-2 border-t border-[#a2a18b] px-6 pt-2">
        <div className="flex gap-2 text-white/50">
          <p className="font-bold hover:text-white">@{userName}</p>
          <p className="">
            {createdAt.toLocaleString("en-GB", {
              hour: "numeric",
              minute: "numeric",
              year: "2-digit",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="flex gap-2">
          {!isLiked && (
            <>
              <div
                className="rounded bg-white/10 px-2 py-1 hover:bg-white/30"
                onClick={() => handleLike(id)}
              >
                Good
              </div>
              <div className="rounded bg-white/10 px-2 py-1 hover:bg-white/30">
                Poor
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Caw;
