
export const metadata = {
  title: 'Job Posting',
  description: 'Learn More',
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
