import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SmartAccountant — תוכנת הנהלת חשבונות לרואי חשבון ישראלים',
  description: 'ניהול חשבוניות, מע"מ, לקוחות ודוחות — הכל במקום אחד. מותאם לחוקי המס הישראלי.',
  keywords: ['הנהלת חשבונות', 'רואה חשבון', 'חשבוניות', 'מע"מ', 'תוכנה ישראלית'],
  openGraph: {
    title: 'SmartAccountant',
    description: 'תוכנת הנהלת חשבונות חכמה לרואי חשבון ישראלים',
    locale: 'he_IL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
