"use client";

function Error({ error }: { error: Error }) {
  return (
    <div>
      <h1 className="text-rose-600">{error.message}</h1>
    </div>
  );
}

export default Error;
