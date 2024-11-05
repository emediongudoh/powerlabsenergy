import { useState, useEffect } from 'react';

// Third-party imports
import { FiLoader } from 'react-icons/fi';

// Components import
import PageBanner from '../components/common/PageBanner';
import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/projects/ProjectCard';

// Libs import
import client from '../libs/sanityClient';

const CACHE_DURATION = 60 * 60 * 1000;

function Projects() {
    const [projects, setProjects] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSanityProjects = async () => {
            const query = `*[_type == "project"] | order(_createdAt asc) {
                title,
                slug,
                image{
                asset->{
                    _id,
                    url
                },
                alt
                },
                body,
                _createdAt
            }`;

            const projects = await client.fetch(query);

            // Store posts in localStorage with a timestamp
            localStorage.setItem('projects', JSON.stringify(projects));
            localStorage.setItem('postsCacheTimestamp', Date.now());

            setProjects(projects);
            setLoading(false);
        };

        // Check if projects are already in localStorage
        const cachedProjects = localStorage.getItem('projects');
        const cachedTimestamp = localStorage.getItem('projectsCacheTimestamp');

        // Check if the cache exists and is not expired
        if (cachedProjects && cachedTimestamp) {
            const now = Date.now();
            const timeSinceCache = now - cachedTimestamp;

            if (timeSinceCache < CACHE_DURATION) {
                // Use cached projects if they're still valid
                const projects = JSON.parse(cachedProjects);

                setProjects(projects);
                setLoading(false);
                return;
            } else {
                // Cache has expired, clear it
                localStorage.removeItem('projects');
                localStorage.removeItem('projectsCacheTimestamp');
            }
        } else {
            // If no cached data, fetch the projects
            getSanityProjects();
        }

        getSanityProjects();
    }, []);

    return (
        <>
            {loading ? (
                <div className='flex min-h-[80vh] items-center justify-center'>
                    <FiLoader className='size-14 animate-spin text-brand_color' />
                </div>
            ) : (
                <>
                    {/* Projects page banner */}
                    <PageBanner
                        image='/bgs/projects_bg.jpg'
                        title='Projects'
                    />

                    <section className='miniPageWrapper mt-8 flex flex-col items-center gap-8 p-4'>
                        <SectionHeader
                            subtitle='Our projects'
                            textAlign='center'
                        />

                        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            ))}
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export default Projects;
