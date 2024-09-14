'use client';

interface Props {
  error: Error;
}

export default function JobDetailError(props: Props) {
  const error = props.error;
  return (
    <>
      <h2>An error occurred when trying to obtain the details for the job!</h2>
      <p>Please address the following error:</p>
      <p>{error.message}</p>
    </>
  );
}
