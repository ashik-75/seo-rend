"use client";

function ErrorComp({ error }: { error: Error }) {
  return <div className="text-rose-700 font-bold">{error.message}</div>;
}

export default ErrorComp;
