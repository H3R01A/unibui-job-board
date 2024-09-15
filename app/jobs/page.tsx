import '../../app/globals.css';
//import styles from './page.module.css';
import { getJobData } from '@/actions/actions';
import { Job } from '../../utils/types';
import JobDetailsButton from '@/components/job-details-button';

export default async function JobListingsPage() {
  
  const jobData: Job[] | undefined = await getJobData();

  if (!jobData) {
    throw new Error('Failed to fetch job data');
  }

  return (
    <div className="flex items-stretch">
      <h1 className="text-3xl font-bold underline">Choose Your Class</h1>
      {jobData.map((job, index) => (
        <div key={index} className="">
          <h2 className="">{job['Job Title']}</h2>
          <p className="">{job['Company Name']}</p>
          <p className="">{job.Location}</p>
          <JobDetailsButton jobID={index}/>
        </div>
      ))}
    </div>
  );
}
