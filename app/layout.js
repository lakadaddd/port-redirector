import './globals.css';

export const metadata = {
  title: 'Port Redirector',
  description: 'Dark themed redirect dashboard for local services'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
