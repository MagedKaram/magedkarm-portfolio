import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/data/projects';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return { title: 'Project Not Found' };
    }

    return {
        title: `${project.title} — Maged Karam`,
        description: project.description?.replace(/<[^>]+>/g, '').slice(0, 160),
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetails project={project} />;
}
