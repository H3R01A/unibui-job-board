'use client';
import { useRouter } from 'next/navigation';

interface Props {
  jobID: number;
}

export default function Button(props: Props) {
  const router = useRouter();
  const jobID = props.jobID;
  function handleButtonClick() {
    router.push(`/jobs/${jobID}`);
  }

  return <button onClick={handleButtonClick}>Click to Find More</button>;
}
