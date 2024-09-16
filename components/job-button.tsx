'use client';
import { useRouter } from 'next/navigation';

export default function JobButton() {
  const router = useRouter();

  function handleButtonClick() {
    router.push(`/jobs`);
  }

  return (
    <>
      <div className="border-solid border-2 px-2 border-orange-500 rounded-md hover:bg-orange-600 text-center transition duration-300 ease-in-out">
        <button onClick={handleButtonClick}>Back to Jobs</button>
      </div>
    </>
  );
}
