'use client';
import NavLink from '@/components/nav-link';
import { useEffect, useState } from 'react';
import Jobs from '@/components/jobs';
export default function Home() {
  const [favrotieJobs, setFavoriteJobs] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedJobs: [] = JSON.parse(
        localStorage.getItem('savedJobs') as string
      );
      setFavoriteJobs(savedJobs);
    }
  }, []);

  return (
    <div className="min-h-screen bg-#0a0a0a py-8 px-4 flex flex-col gap-5 items-center">
      <h1 className="text-3xl font-bold underline">Welcome to Job Board 2.0</h1>
      <div className="border-orange-500 hover:text-orange-600 transition duration-300 ease-in-out">
        <NavLink href={'/jobs'}>
          Click to find your next adventure
        </NavLink>
      </div>
      <h2 className="text-2xl font-bold underline">Saved Jobs</h2>
      <div>
        {favrotieJobs === null ? (
          'You have no saved jobs'
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Jobs jobData={favrotieJobs} />
          </div>
        )}
      </div>
    </div>
  );
}
