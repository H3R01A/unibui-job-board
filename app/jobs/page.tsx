import '../../app/globals.css';
import styles from './page.module.css';
import { getJobData } from '@/actions/actions';
import Button from '@/components/button';

export default async function JobListingPage() {
  
  const jobData = await getJobData();

  return (
    <>
      <div className={styles.page}>
        <h1>Choose Your Class</h1>
        {jobData.map((job, index) => (
          <div key={index} className="">
            <h2 className="">{job["Job Title"]}</h2>
            <p className="">{job["Company Name"]}</p>
            <p className="">{job.Location}</p>
            <p>{index}</p>
            <Button jobID = {index}></Button>
          </div>
        ))}
     
      </div>
    </>
  );
}
