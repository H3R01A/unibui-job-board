import MainHeader from '@/components/main-header';

export const metadata = {
  title: 'Job Posting',
  description: 'Learn More',
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
