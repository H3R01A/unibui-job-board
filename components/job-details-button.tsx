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
      <div className="border-solid border-2 px-2 border-orange-500 rounded-md hover:bg-orange-600 text-center transition duration-300 ease-in-out">
        <button onClick={handleButtonClick}>Click to Find More</button>
      </div>
    </>
  );
}
