export interface RawJobData {
  'Job Title': string;
  'Company Name': string;
  Location: string;
  'Job Description': string;
  Requirements: string;
}

export interface Job extends RawJobData {
  jobID: number;
}

