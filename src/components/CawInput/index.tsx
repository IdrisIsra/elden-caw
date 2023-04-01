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
  const [secondWordsGroup, setSecondWordsGroup] = useState("enemies");

  const onSubmit: SubmitHandler<TCawInput> = (data) => {
    setData(JSON.stringify(data));
  };

  return (
    <div className="caw flex flex-col gap-4 border-y-2 border-[#a2a18b] bg-white/10 px-6 py-4 text-slate-100 md:px-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 text-end"
      >
        {/* Templates */}
        <div className="grid grid-cols-12 items-center gap-4">
          <label className="col-span-4">Templates:</label>
          <select
            {...register("template", { required: true })}
            className="col-span-8"
          >
            <option value="" disabled selected>
              Select a template
            </option>
            {Object.keys(templates).map((constant) => (
              <option value={constant} key={constant}>
                {constant}
              </option>
            ))}
          </select>
        </div>
        {/* Words */}
        <div className="grid grid-cols-12 items-center gap-4">
          <label className="col-span-4">Words:</label>
          <div className="col-span-8 flex gap-1">
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
        {/* Conjunctions */}
        <div className="grid grid-cols-12 items-center gap-4">
          <label className="col-span-4">Conjugations:</label>
          <select
            {...register("conjunctions", { required: true })}
            className="col-span-8"
          >
            <option value="" disabled selected>
              Optional
            </option>
            {Object.keys(conjunctions).map((conjunction) => (
              <option value={conjunction} key={conjunction}>
                {conjunction}
              </option>
            ))}
          </select>
        </div>
        {/* Templates 2 */}
        <div className="grid grid-cols-12 items-center gap-4">
          <label className="col-span-4">Templates:</label>
          <select
            {...register("template", { required: true })}
            className="col-span-8"
          >
            <option value="" disabled selected>
              Select a template
            </option>
            {Object.keys(templates).map((constant) => (
              <option value={constant} key={constant}>
                {constant}
              </option>
            ))}
          </select>
        </div>
        {/* Words 2 */}
        <div className="grid grid-cols-12 items-center gap-4">
          <label className="col-span-4">Words:</label>
          <div className="col-span-8 flex gap-1">
            <select
              onChange={(e) => setSecondWordsGroup(e.target.value)}
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
              <option value="" disabled>
                Select a template
              </option>
              {Object.entries(getProperty(words, secondWordsGroup)).map(
                (word) => (
                  <option value={word[1]} key={word[1]}>
                    {word[0]}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <p>{data}</p>
        {/* Submit */}
        <input type="submit" value={"Caw"} />
      </form>
    </div>
  );
};

export default CawInput;
