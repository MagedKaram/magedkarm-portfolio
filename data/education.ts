import { ICertification, IEducation } from '@/types';

export const EDUCATION: IEducation[] = [
    {
        degree: 'B.Sc., Computer Engineering',
        institution: 'Tanta University',
        year: 'Jun 2024',
        gpa: '3.3 / 4.0 (79%)',
        coursework: [
            'Data Structures & Algorithms',
            'OOP',
            'Design Patterns',
            'Operating Systems',
            'Computer Networks',
            'Database Systems',
        ],
    },
];

export const CERTIFICATIONS: ICertification[] = [
    {
        title: 'Frontend Development Diploma',
        issuer: 'Route Academy',
        year: '2023',
    },
    {
        title: 'The Complete JavaScript Course',
        issuer: 'Udemy — Jonas Schmedtmann',
        year: '2025',
    },
    {
        title: 'React — The Complete Guide',
        issuer: 'Udemy — Jonas Schmedtmann',
        year: '2025',
    },
    {
        title: 'Next.js 15 & React — The Complete Guide',
        issuer: 'Udemy — Maximilian Schwarzmüller',
        year: '2026',
    },
];
