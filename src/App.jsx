import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts import
import Layout from './layouts/layout';

// Pages import
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import ProjectDetails from './pages/project-details';
import Services from './pages/services';
import Contact from './pages/contact';

// Components import
import ScrollToTop from './components/common/ScrollToTop';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                <Route
                    path='/'
                    element={<Layout />}
                >
                    <Route
                        exact
                        index
                        element={<Home />}
                    />
                    <Route
                        exact
                        path='about'
                        element={<About />}
                    />
                    {/* Sanity projects page */}
                    <Route
                        exact
                        path='projects'
                        element={<Projects />}
                    />
                    {/* Sanity project details page */}
                    <Route
                        path='projects/:slug'
                        element={<ProjectDetails />}
                    />
                    <Route
                        exact
                        path='services'
                        element={<Services />}
                    />
                    <Route
                        exact
                        path='contact'
                        element={<Contact />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
