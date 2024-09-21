'use server';
import 'server-only';
import Papa from 'papaparse';
import { promises as fs } from 'fs';
import path from 'path';
import { Job, RawJobData } from '../utils/types';

export async function getJobData(): Promise<Job[] | undefined> {
  try {
    const csvfilePath = path.join(process.cwd(), 'public', '/data/jobs.csv');
    const csvFile = await fs.readFile(csvfilePath, 'utf8');
    const parsedData = Papa.parse<RawJobData>(csvFile, {
      header: true,
      skipEmptyLines: true,
    });

    if (parsedData.errors.length > 0) {
      throw new Error(`CSV parsing error: ${parsedData.errors[0].message}`);
    }

    const jobData: Job[] = parsedData.data.map((job, index) => ({
      ...job,
      jobID: index,
    }));

    return jobData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        `Something went wrong with trying to fetch data. Look into the following error message: ${error.message}`
      );
    } else {
      console.error('An unknown error occur');
    }
  }
}

export async function getJobDetails(id: number) {
  const csvfilePath = path.join(process.cwd(), 'public', '/data/jobs.csv');
  const csvFile = await fs.readFile(csvfilePath, 'utf8');
  const parsedData = Papa.parse<RawJobData>(csvFile, { header: true });

  const jobData: Job = parsedData.data[id] as Job;
  return jobData;
}
