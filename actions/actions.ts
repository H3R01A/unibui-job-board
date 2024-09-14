'use server';
import 'server-only';
import Papa from 'papaparse';
import { promises as fs } from 'fs';
import path from 'path';
import { Job } from '../utils/types';

// import xss from 'xss';
//import { redirect } from 'next/navigation';
//import { revalidatePath } from 'next/cache';

export async function getJobData(): Promise<Job[] | undefined> {
  try {
    const csvfilePath = path.join(process.cwd(), 'public', '/data/jobs.csv');
    const csvFile = await fs.readFile(csvfilePath, 'utf8');
    const parsedData = Papa.parse<Job>(csvFile, { header: true });
    return parsedData.data;
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
  const parsedData = Papa.parse<Job>(csvFile, { header: true });
  return parsedData.data[id];
}
