import { PERSONAL_INFO } from '@/data/personal';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {PERSONAL_INFO.email}
                </a>

                <div>
                    <p className="text-muted-foreground text-sm">
                        Designed &amp; built by{' '}
                        <a
                            href={PERSONAL_INFO.github}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline hover:text-white"
                        >
                            {PERSONAL_INFO.name}
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
