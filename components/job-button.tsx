'use client';
import { useRouter } from 'next/navigation';

export default function JobButton() {
  const router = useRouter();

  function handleButtonClick() {
    router.push(`/jobs`);
  }

  return (
    <>
      <div className="border-solid border-2 px-12 border-sky-500 text-center">
        <button onClick={handleButtonClick}>Back to Jobs</button>
      </div>
    </>
  );
}
