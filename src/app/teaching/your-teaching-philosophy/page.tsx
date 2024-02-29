import React from "react";

type Props = {};

const YourTeachingPhilosophy = (props: Props) => {
  return (
    <section className="flex min-h-screen flex-col items-center bg-red-300 pt-[120px]">
      <h1 className="mt-8 text-2xl">TEACHING PHILOSOPHY</h1>
      <div className="flex w-full flex-row">
        <div className="w-[30%] border border-red-500">Nav</div>
        <div className="w-full border border-green-600">Content</div>
      </div>
    </section>
  );
};

export default YourTeachingPhilosophy;
