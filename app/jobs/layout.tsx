import MainHeader from '@/components/main-header';

export const metadata = {
  title: 'Job Postings',
  description: 'Choose your next adventure',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
