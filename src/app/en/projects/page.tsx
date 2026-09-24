import { ProjectsPage } from '@/components/project-pages';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('en', '/projects', 'Projects', 'Projects by Gustavo Macías: SIFCAO, POS System API, Barbería, and Android and desktop applications.');
export default function Page() { return <ProjectsPage locale="en"/>; }
