import { useState, useEffect } from 'react';

// Third-party imports
import { useParams } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi';
import { PortableText } from '@portabletext/react';

// Libs import
import client from '../libs/sanityClient';

// Components import
import PageBanner from '../components/common/PageBanner';

const CACHE_DURATION = 24 * 60 * 60 * 1000;

function ProjectDetails() {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSanityProject = async () => {
            const query = `*[_type == "project" && slug.current == $slug]{
                title,
                image{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                body,
            }`;

            const params = { slug };
            const project = await client.fetch(query, params);

            setProject(project);

            // Cache the fetched project and timestamp
            localStorage.setItem(`project-${slug}`, JSON.stringify(project));
            localStorage.setItem(`project-${slug}-timestamp`, Date.now());
            setLoading(false);
        };

        // Check if project is already in localStorage
        const cachedProject = localStorage.getItem(`project-${slug}`);
        const cachedTimestamp = localStorage.getItem(
            `project-${slug}-timestamp`
        );
        const now = Date.now();

        if (cachedProject && cachedTimestamp) {
            const timeSinceCached = now - cachedTimestamp;

            if (timeSinceCached < CACHE_DURATION) {
                setProject(JSON.parse(cachedProject));
                setLoading(false);
                return;
            } else {
                localStorage.removeItem(`project-${slug}`);
                localStorage.removeItem(`project-${slug}-timestamp`);
            }
        } else {
            getSanityProject();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className='flex min-h-[80vh] items-center justify-center'>
                <FiLoader className='size-14 animate-spin text-brand_color' />
            </div>
        );
    }

    if (!project) {
        return (
            <div className='flex min-h-[80vh] items-center justify-center text-center'>
                Post not found
            </div>
        );
    }

    // Define how you want to handle rendering specific block types
    const components = {
        block: {
            h2: ({ children }) => (
                <h2 className='text-3xl font-semibold'>{children}</h2>
            ),
            h3: ({ children }) => (
                <h3 className='mb-4 mt-4 text-2xl'>{children}</h3>
            ),
            normal: ({ children }) => (
                <p className='mt-2.5 leading-loose'>{children}</p>
            ),
        },
    };

    return (
        <>
            <PageBanner
                image={project[0]?.image?.asset?.url}
                title={project[0]?.title}
            />

            <section className='miniPageWrapper mt-8 p-4'>
                {/* Render the Portable Text */}
                <PortableText
                    value={project[0]?.body}
                    components={components}
                />
            </section>
        </>
    );
}

export default ProjectDetails;
