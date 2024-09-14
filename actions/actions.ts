
'use server';
import 'server-only';
// import xss from 'xss';
import { redirect } from 'next/navigation';
//import { revalidatePath } from 'next/cache';
import Papa from 'papaparse';
import { promises as fs } from 'fs';
import path from 'path'
import {Job} from '../utils/types'


export async function getJobData(){
  const csvfilePath = path.join(process.cwd(), 'public', '/data/jobs.csv'); 
  const csvFile = await fs.readFile(csvfilePath, 'utf8');
  const parsedData = Papa.parse<Job>(csvFile , { header: true });
  return parsedData.data

}

export async function getJobDetails(id: number) {
  const csvfilePath = path.join(process.cwd(), 'public', '/data/jobs.csv'); 
  const csvFile = await fs.readFile(csvfilePath, 'utf8');
  const parsedData = Papa.parse<Job>(csvFile , { header: true });
  return parsedData.data[id]
}

export async function handleOrderSubmission(formData: FormData): Promise<void> {
  const userOrder = formData.get('order');
  redirect(`/order/${userOrder}`);
}


