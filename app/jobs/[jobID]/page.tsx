import '../../../app/globals.css';
import { getJobDetails } from '@/actions/actions';
import JobButton from '@/components/job-button';

interface PageProps {
  params: { jobID: number };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function JobDetail(props: PageProps) {
  const jobID = props.params.jobID;
  const jobDetailsData = await getJobDetails(jobID);

  return (
    <div className="min-h-screen bg-#0a0a0a py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Class Details
        </h1>
        <div className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
            {jobDetailsData['Job Title']}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
            {jobDetailsData['Company Name']}
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400 mb-4">
            {jobDetailsData.Location}
          </p>
          <div className="w-full border-t border-gray-300 dark:border-gray-700 my-4"></div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Job Description
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            {jobDetailsData['Job Description']}
          </p>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Requirements
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
            {jobDetailsData.Requirements}
          </p>
          <JobButton />
        </div>
      </div>
    </div>
  );
}
