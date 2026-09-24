import { existsSync } from 'node:fs';
import path from 'node:path';
import { bilingual } from '@/content/site';

const files = [
  { id: 'software-development-es', title: bilingual('Desarrollo de software', 'Software development'), language: 'Español', locale: 'es' },
  { id: 'software-development-en', title: bilingual('Desarrollo de software', 'Software development'), language: 'English', locale: 'en' },
  { id: 'it-infrastructure-es', title: bilingual('Soporte e infraestructura TI', 'IT support & infrastructure'), language: 'Español', locale: 'es' },
  { id: 'it-infrastructure-en', title: bilingual('Soporte e infraestructura TI', 'IT support & infrastructure'), language: 'English', locale: 'en' },
] as const;

// Evaluated by Server Components at build time. Add the PDFs and rebuild.
export function getResumes() {
  return files.map((file) => ({ ...file, href: `/resume/${file.id}.pdf`, available: existsSync(path.join(process.cwd(), 'public', 'resume', `${file.id}.pdf`)) }));
}

export type Resume = ReturnType<typeof getResumes>[number];
