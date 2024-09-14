'use client';
import { useRouter } from 'next/navigation';

export default function JobButton() {
  const router = useRouter();

  function handleButtonClick() {
    router.push(`/jobs`);
  }

  return <button onClick={handleButtonClick}>Back to Jobs</button>;
}
