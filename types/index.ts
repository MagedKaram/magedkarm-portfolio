export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export interface IProject {
    title: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
}

export interface IExperience {
    title: string;
    company: string;
    duration: string;
    description?: string[];
}

export interface ISkillItem {
    name: string;
    icon: string;
}

export interface IEducation {
    degree: string;
    institution: string;
    year: string;
    gpa?: string;
    coursework?: string[];
}

export interface ICertification {
    title: string;
    issuer: string;
    year: string;
}
