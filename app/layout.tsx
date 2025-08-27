import './globals.css';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';

const cairo = Cairo({ 
  subsets: ['arabic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'دروس أونلاين - أحمد أبو زيد | موقع غير رسمي',
  description: 'موقع تعريفي لأحمد أبو زيد من قناة دروس أونلاين - قناة تعليمية متخصصة في اللغة الإنجليزية والجرافيك ديزاين - عمل تطوعي غير رسمي',
  keywords: ['أحمد أبو زيد', 'دروس أونلاين', 'تعليم اللغة الإنجليزية', 'جرافيك ديزاين', 'محتوى تعليمي', 'DroosOnline'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}