import { Job } from "@/utils/types";
import JobDetailsButton from "./job-details-button";

interface Props{
    jobData: Job[];
}

export default function Jobs(props: Props){
    const jobData = props.jobData;

    return jobData.map((job, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl font-semibold mb-2">
              {job['Job Title']}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              {job['Company Name']}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {job.Location}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Job ID: {job.jobID}
            </p>
          </div>
          <JobDetailsButton jobID={job.jobID} />
        </div>
      ))
        
}