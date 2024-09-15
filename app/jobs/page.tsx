import '../../app/globals.css';
import { getJobData } from '@/actions/actions';
import { Job } from '../../utils/types';
import JobDetailsButton from '@/components/job-details-button';

export default async function JobListingsPage() {
  const jobData: Job[] | undefined = await getJobData();

  if (!jobData) {
    throw new Error('Failed to fetch job data');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Choose Your Class</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobData.map((job, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{job['Job Title']}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                {job['Company Name']}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {job.Location}
              </p>
            </div>
            <JobDetailsButton jobID={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
