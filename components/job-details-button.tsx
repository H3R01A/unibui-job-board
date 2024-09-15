'use client';
import { useRouter } from 'next/navigation';

interface Props {
  jobID: number;
}

export default function JobDetailsButton(props: Props) {
  const router = useRouter();
  const jobID = props.jobID;
  function handleButtonClick() {
    router.push(`/jobs/${jobID}`);
  }

  return (
    <>
      <div className="border-solid border-2 border-sky-500 text-center">
        <button onClick={handleButtonClick}>Click to Find More</button>
      </div>
    </>
  );
}
