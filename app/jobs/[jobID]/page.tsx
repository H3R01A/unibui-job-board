import { getJobDetails } from '@/actions/actions';
import '../../../app/globals.css';
import styles from './page.module.css';
import JobButton from '@/components/job-button';

interface PageProps {
  params: { jobID: number };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function JobDetail(props: PageProps) {
  const jobID = props.params.jobID;
  const jobDetailData = await getJobDetails(jobID);

  return (
    <>
      <div className={styles.page}>
        <h1>Job Information</h1>
        <h2 className="">{jobDetailData['Job Title']}</h2>
        <p className="">{jobDetailData['Company Name']}</p>
        <p className="">{jobDetailData.Location}</p>
        <p className="">{jobDetailData['Job Description']}</p>
        <p className="">{jobDetailData.Requirements}</p>
        <JobButton />
      </div>
    </>
  );
}
