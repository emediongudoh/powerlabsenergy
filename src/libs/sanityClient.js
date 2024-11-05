import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'mv22e0lo',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
});

export default client;
