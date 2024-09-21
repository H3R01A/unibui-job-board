'use client';
import { useRouter } from 'next/navigation';
import { Job } from '@/utils/types';

interface Props{
  jobDetails: Job;
  jobID: number;
}

export default function JobButton(props: Props) {
  const jobDetails = props.jobDetails;
  const jobID = props.jobID;
  const router = useRouter();

  function handleButtonClick() {
    router.push(`/jobs`);
  }

  function handleJobSave(){

    if(typeof window !== "undefined" && window.localStorage){
      let jobCache = [];
      if(window.localStorage.getItem('savedJobs')){
        jobCache = JSON.parse(window.localStorage.getItem('savedJobs') as string);
      }
    
      if(!jobCache.find((job: Job) => job.jobID === jobID)){
        jobCache.push({...jobDetails, jobID});

      }

      window.localStorage.setItem(`savedJobs`, JSON.stringify(jobCache));
    }
  }

  return ( 
    <>
      <div className="border-solid border-2 px-2 border-orange-500 rounded-md hover:bg-orange-600 text-center transition duration-300 ease-in-out">
        <button onClick={handleButtonClick}>Back to Jobs</button>
      </div>
      <div className="border-solid border-2 px-2 border-orange-500 rounded-md hover:bg-orange-600 text-center transition duration-300 ease-in-out">
        <button onClick={handleJobSave}>Save Job</button>
      </div>
    </>
  );
}
