import React, { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { api } from "~/utils/api";
import { words, templates, conjunctions } from "~/utils/constants";
import { getProperty } from "~/utils/helpers";

type TCawInput = {
  template: number;
  words: number;
  conjunction: number;
  template2: number;
  words2: number;
};

const CawInput = () => {
  const { register, handleSubmit } = useForm<TCawInput>();
  const [firstWordsGroup, setFirstWordsGroup] = useState("enemies");
  const [secondWordsGroup, setSecondWordsGroup] = useState("enemies");

  const utils = api.useContext();
  const cawMutation = api.main.addCaw.useMutation({
    async onSuccess() {
      // invalidates the question query and then navigates to success page
      await utils.main.getAll.invalidate();
    },
  });

  const onSubmit: SubmitHandler<TCawInput> = async (data) => {
    console.log(data);
    await cawMutation.mutateAsync(data);
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
            {...register("template", { required: true, valueAsNumber: true })}
            className="col-span-8"
          >
            <option value="" disabled selected>
              Select a template
            </option>
            {Object.entries(templates).map((template) => (
              <option value={template[1]} key={template[0]}>
                {template[0]}
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
              {...register("words", { required: true, valueAsNumber: true })}
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
            {...register("conjunction", { valueAsNumber: true })}
            className="col-span-8"
          >
            <option value={0} disabled>
              Optional
            </option>
            {Object.entries(conjunctions).map((conjunction) => (
              <option value={conjunction[1]} key={conjunction[0]}>
                {conjunction[0]}
              </option>
            ))}
          </select>
        </div>
        {/* Templates 2 */}
        <div className="grid grid-cols-12 items-center gap-4">
          <label className="col-span-4">Templates:</label>
          <select
            {...register("template2", { valueAsNumber: true })}
            className="col-span-8"
          >
            <option value={0} disabled>
              Select a template
            </option>
            {Object.entries(templates).map((template) => (
              <option value={template[1]} key={template[1]}>
                {template[0]}
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
              {...register("words2", { valueAsNumber: true })}
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
        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          >
            Caw
          </button>
        </div>
      </form>
    </div>
  );
};

export default CawInput;
