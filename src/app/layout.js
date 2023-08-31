import './globals.css'


export const metadata = {
  title: 'Chatter Hub',
  description: 'Social Media Applicaton',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
