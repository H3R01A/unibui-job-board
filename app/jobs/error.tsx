'use client';
import { useEffect } from "react";

export default function JobsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])


  return (
    <div>
      <h3>Something went wrong on our end! We&apos;re working on getting your next adventure back!</h3>
      <h3>Please click below to attempt to get back</h3>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

 
