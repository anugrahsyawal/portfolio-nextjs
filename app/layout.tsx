import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
 title: 'Anugrah Syawal Syamdi Putra (kyune) - SysAdmin & Fullstack Developer',
 description: 'Portofolio personal Anugrah Syawal (kyune / kyunedev). Seorang System Administrator, DevOps Specialist (Proxmox, Terraform, Ansible), dan Fullstack Developer (Next.js, React).',
 keywords: [
 'Anugrah Syawal',
 'Anugrah Syawal Syamdi Putra',
 'kyune',
 'kyunedev',
 'kyune_9',
 'System Administrator',
 'DevOps Specialist',
 'Fullstack Developer',
 'Proxmox',
 'Terraform',
 'Ansible',
 'Next.js',
 'React',
 'Portfolio'
 ],
 authors: [{ name: 'Anugrah Syawal Syamdi Putra', url: 'https://github.com/kyunedev' }],
 openGraph: {
 title: 'Anugrah Syawal Syamdi Putra (kyune) - Portofolio',
 description: 'Portofolio seorang System Administrator, DevOps Specialist, dan Fullstack Developer.',
 url: 'https://www.your-domain.com', // Placeholder domain
 siteName: 'Anugrah Syawal Portfolio',
 images: [
 {
 url: '/icon.svg', // We'll use the existing icon as a placeholder OG image
 width: 512,
 height: 512,
 },
 ],
 locale: 'id_ID',
 type: 'website',
 },
 twitter: {
 card: 'summary',
 title: 'Anugrah Syawal Syamdi Putra (kyune) - Portofolio',
 description: 'SysAdmin, DevOps, and Fullstack Developer Portfolio.',
 images: ['/icon.svg'],
 },
 icons: {
 icon: "/favicon.svg",
 apple: "/favicon.svg"
 },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <Toaster position='top-center' richColors />
      </body>
    </html>
  )
}
