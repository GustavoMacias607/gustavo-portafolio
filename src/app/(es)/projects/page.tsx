import { ProjectsPage } from '@/components/project-pages';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('es', '/projects', 'Proyectos', 'Proyectos de Gustavo Macías: SIFCAO, POS System API, Barbería y aplicaciones Android y desktop.');
export default function Page() { return <ProjectsPage locale="es"/>; }
