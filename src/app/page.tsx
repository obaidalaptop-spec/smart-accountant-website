'use client';

// ─── Update these before deploying ────────────────────────────────────────────
const GITHUB_RELEASE_URL = 'https://github.com/obaidalaptop-spec/smart-accountant-releases/releases/download/v1.0.0/SmartAccountant-1.0.0-Setup.exe';
const CONTACT_EMAIL      = 'smartacctant@gmail.com';
const WHATSAPP_NUMBER    = '972559492403'; // without + sign
// ──────────────────────────────────────────────────────────────────────────────

import { useState } from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Reviews />
        <Download />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  ['בית',       '#hero'],
  ['תכונות',    '#features'],
  ['תמחור',     '#pricing'],
  ['חוות דעת', '#reviews'],
  ['צור קשר',  '#contact'],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="glass-nav sticky top-0 z-50 border-b border-slate-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl text-white" style={{ background: 'linear-gradient(135deg,#6366f1,#7c3aed)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
          <span className="text-lg font-black tracking-tight bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg,#4f46e5,#7c3aed)' }}>SmartAccountant</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} className="px-3 py-2 rounded-lg text-sm font-medium text-slate-500 transition-all hover:text-indigo-600 hover:bg-indigo-50">{label}</a>
          ))}
        </nav>

        <a href="#download" className="hidden md:inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
           style={{ background: 'linear-gradient(135deg,#6366f1,#7c3aed)', boxShadow: '0 4px 15px rgba(99,102,241,0.3)' }}>
          הורד חינם
        </a>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(o => !o)} className="md:hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 space-y-1 md:hidden">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
               className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">{label}</a>
          ))}
          <a href="#download" onClick={() => setOpen(false)}
             className="block mt-2 rounded-xl px-4 py-3 text-center text-sm font-bold text-white"
             style={{ background: 'linear-gradient(135deg,#6366f1,#7c3aed)' }}>הורד חינם</a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-24 pb-32" style={{ background: 'linear-gradient(180deg,#f0f0ff 0%,#ffffff 100%)' }}>
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: '#6366f1', transform: 'translate(30%,-30%)' }}/>
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-15 blur-3xl" style={{ background: '#7c3aed', transform: 'translate(-30%,30%)' }}/>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 reveal">
          <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"/>
          <span className="text-xs font-bold text-indigo-700">גרסה 1.0 · עברית מלאה · Windows</span>
        </div>

        <h1 className="reveal delay-1 mb-6 text-5xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
          הנהלת חשבונות{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg,#6366f1,#7c3aed)' }}>חכמה</span>
          <br/>לרואי חשבון ישראלים
        </h1>

        <p className="reveal delay-2 mx-auto mb-10 max-w-2xl text-xl text-slate-500 leading-relaxed">
          ניהול חשבוניות, מע&quot;מ, לקוחות ודוחות — הכל במקום אחד.<br/>
          מותאם לחוקי המס הישראלי. עובד אופליין. מהיר ומאובטח.
        </p>

        <div className="reveal delay-3 flex flex-wrap justify-center gap-4">
          <a href="#download"
             className="inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-1 hover:shadow-2xl"
             style={{ background: 'linear-gradient(135deg,#6366f1,#7c3aed)', boxShadow: '0 8px 30px rgba(99,102,241,0.35)' }}>
            <DownloadIcon /> הורד חינם — 7 ימי ניסיון
          </a>
          <a href="#pricing"
             className="inline-flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-700 transition-all hover:border-indigo-300 hover:text-indigo-700">
            ראה תמחור ←
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-400">ללא כרטיס אשראי · Windows 10/11 64-bit · הורדה חינמית</p>

        {/* App mockup */}
        <div className="mt-20 float">
          <div className="overflow-hidden rounded-2xl shadow-2xl border border-slate-200 mx-auto max-w-4xl"
               style={{ boxShadow: '0 40px 100px rgba(99,102,241,0.15)' }}>
            {/* Chrome bar */}
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-400"/><div className="h-3 w-3 rounded-full bg-amber-400"/><div className="h-3 w-3 rounded-full bg-emerald-400"/>
              <div className="mx-auto flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-1 text-xs text-slate-400">
                <span>🔒</span> SmartAccountant v1.0
              </div>
            </div>
            {/* Fake navbar */}
            <div className="flex items-center gap-6 border-b border-slate-100 bg-white px-6 py-3" dir="rtl">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg" style={{ background: 'linear-gradient(135deg,#6366f1,#7c3aed)' }}/>
                <div className="h-3 w-24 rounded bg-slate-200"/>
              </div>
              {['לוח בקרה','לקוחות','חשבוניות','הוצאות'].map(t => (
                <div key={t} className="h-2.5 rounded" style={{ width: `${t.length * 8}px`, background: t==='לוח בקרה'?'#6366f1':'#e2e8f0' }}/>
              ))}
            </div>
            {/* Fake dashboard */}
            <div className="bg-slate-50 p-6" dir="rtl">
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[['סה״כ הכנסות','₪ 148,500','#6366f1'],['מע״מ לתשלום','₪ 12,390','#f59e0b'],['לקוחות','24','#10b981'],['חשבוניות','87','#8b5cf6']].map(([l,v,c])=>(
                  <div key={l} className="rounded-xl bg-white border border-slate-100 p-4">
                    <p className="text-xs text-slate-500 mb-1">{l}</p>
                    <p className="text-2xl font-bold text-slate-800">{v}</p>
                    <div className="mt-2 h-1 w-full rounded-full bg-slate-100">
                      <div className="h-full rounded-full" style={{ width:'65%', background: c }}/>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-white border border-slate-100 p-4">
                <div className="h-3 w-32 rounded bg-slate-200 mb-4"/>
                {[80,60,90,45,70].map((w,i)=>(
                  <div key={i} className="flex items-center gap-3 mb-2.5">
                    <div className="h-2 flex-1 rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-indigo-400" style={{ width:`${w}%` }}/>
                    </div>
                    <div className="h-2 w-20 rounded bg-slate-100"/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────

const FEATURES = [
  { icon:'📄', title:'חשבוניות דיגיטליות', desc:'הפקת כל סוגי החשבוניות הישראליות — חשבונית מס, קבלה, חשבון עסקה — בלחיצת כפתור עם PDF מוכן להדפסה.' },
  { icon:'💰', title:'חישוב מע"מ אוטומטי', desc:'חישוב 17% מע"מ עסקאות ותשומות, יצירת דוח מוכן לדיווח לרשות המסים. תזכורת לדד-ליין ה-15.' },
  { icon:'👥', title:'ניהול לקוחות', desc:'מעקב מלא אחר לקוחות — עוסק מורשה, עוסק פטור, חברה בע"מ — כולל כל ההגדרות הרלוונטיות.' },
  { icon:'🔍', title:'OCR חכם', desc:'סריקת קבלות והוצאות ישירות מהמצלמה, עם זיהוי טקסט אוטומטי ומיון לקטגוריות.' },
  { icon:'📊', title:'דוחות ואנליטיקה', desc:'לוח בקרה עם גרפים ומגמות, דוחות רווח והפסד, ייצוא ל-Excel לכל הנתונים.' },
  { icon:'🔒', title:'פרטיות מלאה', desc:'כל הנתונים שמורים אך ורק על המחשב שלך. ללא שרת, ללא ענן, ללא שיתוף מידע.' },
];

function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-600">תכונות</p>
          <h2 className="text-4xl font-black text-slate-900 mb-4">כל מה שרואה חשבון צריך</h2>
          <p className="mx-auto max-w-xl text-lg text-slate-500">פותח במיוחד לשוק הישראלי, עם כל הדרישות החוקיות והמס הרלוונטיות.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f,i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-100 p-6 transition-all hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1"
                 style={{ background: 'linear-gradient(135deg,#fafafa,#f5f5ff)' }}>
              <div className="mb-4 text-4xl">{f.icon}</div>
              <h3 className="mb-2 text-base font-bold text-slate-800 group-hover:text-indigo-700">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              {/* Hover accent */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: 'linear-gradient(135deg,rgba(99,102,241,0.04),rgba(124,58,237,0.04))' }}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────

const STEPS = [
  { n:'01', icon:'📨', title:'קבל קוד', desc:'שלח לנו הודעה, נייצר עבורך קוד רישיון ונשלח אותו ישירות לאימייל שלך.' },
  { n:'02', icon:'⬇️', title:'הורד והתקן', desc:'הורד את installer ל-Windows, הרץ אותו ותוך דקות האפליקציה מוכנה לשימוש.' },
  { n:'03', icon:'🔑', title:'הכנס קוד', desc:'בהפעלה הראשונה, הכנס את קוד הרישיון שקיבלת. הקוד מאמת ומחבר את האפליקציה לחשבונך.' },
  { n:'04', icon:'🚀', title:'התחל לנהל', desc:'הוסף לקוחות, הפק חשבוניות, עקוב אחרי מע"מ — הכל מוכן ומחכה לך.' },
];

function HowItWorks() {
  return (
    <section id="how" className="py-24" style={{ background: 'linear-gradient(180deg,#f8f8ff,#ffffff)' }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-600">איך זה עובד</p>
          <h2 className="text-4xl font-black text-slate-900">מתחילים תוך דקות</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s,i) => (
            <div key={i} className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="text-3xl font-black mb-3" style={{ color: '#e0e0f0' }}>{s.n}</div>
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              {i < STEPS.length - 1 && <div className="absolute -left-3 top-1/2 hidden -translate-y-1/2 text-slate-300 text-xl lg:block">←</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ───────────────────────────────────────────────────────────────

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-600">תמחור</p>
          <h2 className="text-4xl font-black text-slate-900 mb-4">מחירים פשוטים ושקופים</h2>
          <p className="mx-auto max-w-md text-slate-500">צרו איתנו קשר לקבלת קוד הרישיון שלכם</p>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Trial */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-8">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
              ⏱️ ניסיון
            </div>
            <div className="my-3 text-4xl font-black text-slate-900">חינם</div>
            <p className="mb-6 text-sm text-slate-500">7 ימי ניסיון · כל התכונות · ללא כרטיס אשראי</p>
            <ul className="mb-8 space-y-3">
              {['כל תכונות התוכנה','7 ימים מלאים','ללא כרטיס אשראי','תמיכה מלאה'].map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600"><CheckIcon className="text-emerald-500"/>{item}</li>
              ))}
            </ul>
            <a href={`mailto:${CONTACT_EMAIL}?subject=קוד ניסיון SmartAccountant`}
               className="block w-full rounded-xl border-2 border-slate-200 py-3 text-center text-sm font-bold text-slate-700 transition-all hover:border-indigo-400 hover:text-indigo-700">
              📧 בקש קוד ניסיון חינמי
            </a>
          </div>

          {/* Lifetime */}
          <div className="relative overflow-hidden rounded-2xl p-8 text-white"
               style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', boxShadow: '0 20px 60px rgba(99,102,241,0.3)' }}>
            <div className="absolute -top-1 -start-1 rounded-br-xl rounded-tl-xl bg-amber-400 px-3 py-1 text-xs font-black text-amber-900">⭐ הכי פופולרי</div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">♾️ לצמיתות</div>
            <div className="my-3 text-4xl font-black">תשלום חד-פעמי</div>
            <p className="mb-6 text-sm text-indigo-200">ללא דמי מנוי · עדכונים חינם · לצמיתות</p>
            <ul className="mb-8 space-y-3">
              {['כל תכונות התוכנה','עדכונים לצמיתות','רישיון קבוע למחשב אחד','עדיפות בתמיכה'].map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/90"><CheckIcon className="text-amber-300"/>{item}</li>
              ))}
            </ul>
            <a href={`mailto:${CONTACT_EMAIL}?subject=רישיון לצמיתות SmartAccountant`}
               className="block w-full rounded-xl bg-white py-3 text-center text-sm font-bold text-indigo-700 transition-all hover:bg-indigo-50">
              📧 קבל רישיון לצמיתות
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          לאחר פנייה נשלח קוד רישיון אישי לאימייל שלך ·{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-500 hover:underline">{CONTACT_EMAIL}</a>
        </p>
      </div>
    </section>
  );
}

// ─── Reviews ───────────────────────────────────────────────────────────────

const REVIEWS = [
  { name:'ד"ר משה כהן', role:'רואה חשבון, תל אביב', stars:5, text:'סוף סוף תוכנה שמבינה את השוק הישראלי. חישוב המע"מ האוטומטי חסך לי שעות של עבודה בכל חודש.' },
  { name:'שרה לוי', role:'רואת חשבון, ירושלים', stars:5, text:'הממשק בעברית ו-RTL מושלם. לאחר שנים של תוכנות שמיועדות לשוק זר, סוף סוף יש פתרון ישראלי.' },
  { name:'אבי גולדברג', role:'משרד רואי חשבון, חיפה', stars:5, text:'20 לקוחות, כולם מנוהלים בצורה מסודרת. הדוחות ל-מע"מ נוצרים אוטומטית, פשוט מדהים.' },
];

function Stars({ n }: { n: number }) {
  return <div className="flex gap-0.5">{Array.from({length:n}).map((_,i)=><span key={i} className="text-amber-400 text-sm">★</span>)}</div>;
}

function Reviews() {
  return (
    <section id="reviews" className="py-24" style={{ background: 'linear-gradient(180deg,#f8f8ff,#ffffff)' }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-600">חוות דעת</p>
          <h2 className="text-4xl font-black text-slate-900 mb-4">מה אומרים המשתמשים</h2>
          <p className="text-slate-500">רואי חשבון ישראלים שכבר עובדים עם SmartAccountant</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r,i) => (
            <div key={i} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
              <Stars n={r.stars} />
              <p className="my-4 text-slate-600 leading-relaxed text-sm">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                     style={{ background: `linear-gradient(135deg,hsl(${i*60+200},60%,50%),hsl(${i*60+240},60%,40%))` }}>
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Download ──────────────────────────────────────────────────────────────

function Download() {
  return (
    <section id="download" className="py-24 text-white relative overflow-hidden"
             style={{ background: 'linear-gradient(135deg,#4f46e5 0%,#7c3aed 100%)' }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background:'#ffffff', transform:'translate(20%,-20%)' }}/>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background:'#ffffff', transform:'translate(-20%,20%)' }}/>
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-black mb-4">מוכן להתחיל?</h2>
        <p className="text-indigo-200 text-lg mb-10">הורד את SmartAccountant עכשיו ותתחיל לנהל את המשרד שלך בחכמה</p>
        <a href={GITHUB_RELEASE_URL} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-indigo-700 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
          <DownloadIcon className="text-indigo-600" size={22} />
          הורד לWindows — חינם
        </a>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-indigo-200">
          <span>✓ Windows 10/11</span><span>✓ 64-bit</span><span>✓ עברית מלאה</span><span>✓ RTL מובנה</span><span>✓ עובד אופליין</span>
        </div>
        <p className="mt-4 text-xs text-indigo-300">הורדה מ-GitHub Releases · קוד מאובטח</p>
      </div>
    </section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-600">צור קשר</p>
        <h2 className="text-4xl font-black text-slate-900 mb-4">אנחנו כאן לעזור</h2>
        <p className="text-slate-500 mb-10 text-lg">שאלות על התוכנה? רוצה קוד ניסיון? שלח לנו הודעה</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-lg mx-auto">
          <a href={`mailto:${CONTACT_EMAIL}`}
             className="flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white p-5 text-slate-700 font-semibold transition-all hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md">
            <span className="text-2xl">📧</span>
            <div className="text-start">
              <p className="text-sm font-bold">אימייל</p>
              <p className="text-xs text-slate-500">{CONTACT_EMAIL}</p>
            </div>
          </a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white p-5 text-slate-700 font-semibold transition-all hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md">
            <span className="text-2xl">💬</span>
            <div className="text-start">
              <p className="text-sm font-bold">WhatsApp</p>
              <p className="text-xs text-slate-500">שלח הודעה</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg flex items-center justify-center text-white text-xs" style={{ background: 'linear-gradient(135deg,#6366f1,#7c3aed)' }}>📊</div>
          <span className="font-bold text-slate-700">SmartAccountant</span>
        </div>
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} SmartAccountant · כל הזכויות שמורות</p>
        <div className="flex gap-5 text-xs">
          {[['אימייל', `mailto:${CONTACT_EMAIL}`], ['GitHub', GITHUB_RELEASE_URL], ['WhatsApp', `https://wa.me/${WHATSAPP_NUMBER}`]].map(([l,h])=>(
            <a key={l} href={h} className="text-slate-400 hover:text-indigo-600 transition-colors" rel="noopener noreferrer">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Icons ─────────────────────────────────────────────────────────────────

function DownloadIcon({ className='', size=18 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

function CheckIcon({ className='' }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
