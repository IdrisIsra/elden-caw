import React, { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { words, templates, conjunctions } from "~/utils/constants";

type TCawInput = {
  template: string;
  words: string;
  conjunctions: string;
};

// gets property from object with bracket notation, otherwise TS complains
function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
  return o[propertyName]; // o[propertyName] is of type T[K]
}

const CawInput = () => {
  const { register, handleSubmit } = useForm<TCawInput>();
  const [data, setData] = useState("");
  const [firstWordsGroup, setFirstWordsGroup] = useState("enemies");

  const onSubmit: SubmitHandler<TCawInput> = (data) => {
    setData(JSON.stringify(data));
  };

  return (
    <div className="caw flex flex-col gap-4 border-y-2 border-[#a2a18b] bg-white/10 px-6 py-2 text-slate-100 md:px-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 text-end"
      >
        <div className="grid grid-cols-12 items-center gap-4">
          <label className="col-span-3">Templates:</label>
          <select
            {...register("template", { required: true })}
            className="col-span-9"
          >
            {Object.keys(templates).map((constant) => (
              <option value={constant} key={constant}>
                {constant}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-12 items-center gap-4">
          <label className="col-span-3">Words:</label>
          <div className="col-span-9 flex gap-1">
            <select
              onChange={(e) => setFirstWordsGroup(e.target.value)}
              className="w-1/2"
            >
              {Object.keys(words).map((word) => (
                <option value={word} key={word}>
                  {word}
                </option>
              ))}
            </select>
            <select
              {...register("words", { required: true })}
              className="w-1/2"
            >
              {Object.entries(getProperty(words, firstWordsGroup)).map(
                (word) => (
                  <option value={word[1]} key={word[1]}>
                    {word[0]}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-4">
          <label className="col-span-3">About You:</label>
          <select
            {...register("conjunctions", { required: true })}
            className="col-span-9"
          >
            {Object.keys(conjunctions).map((conjunction) => (
              <option value={conjunction} key={conjunction}>
                {conjunction}
              </option>
            ))}
          </select>
        </div>
        <p>{data}</p>
        <input type="submit" value={"Caw"} />
      </form>
    </div>
  );
};

export default CawInput;
