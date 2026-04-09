import { ISkillItem } from '@/types';

export const MY_STACK: Record<string, ISkillItem[]> = {
    languages: [
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'HTML5', icon: '/logo/html.svg' },
        { name: 'CSS3', icon: '/logo/css.svg' },
        { name: 'SQL', icon: '/logo/sql.svg' },
    ],
    frameworks: [
        { name: 'React.js', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Redux Toolkit', icon: '/logo/redux.png' },
        { name: 'React Query', icon: '/logo/react-query.svg' },
        { name: 'Framer Motion', icon: '/logo/framer-motion.png' },
        { name: 'Axios', icon: '/logo/axios.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'GitHub', icon: '/logo/github.png' },
        { name: 'Vite', icon: '/logo/vite.svg' },
        { name: 'Figma', icon: '/logo/figma.svg' },
        { name: 'ESLint', icon: '/logo/eslint.svg' },
    ],
    backend: [
        { name: 'Supabase', icon: '/logo/supabase.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'Node.js', icon: '/logo/node.png' },
    ],
};
