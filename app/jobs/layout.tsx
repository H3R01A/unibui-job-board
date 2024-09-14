
export const metadata = {
  title: 'Job Postings',
  description: 'Choose your next adventure',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
