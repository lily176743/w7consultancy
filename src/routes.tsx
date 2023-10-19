import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// project import
import Loadable from './components/Loadable';
import MainLayout from './layout/MainLayout';

// render - page
const Home = Loadable(lazy(() => import('./pages/home')));
const Register = Loadable(lazy(() => import('./pages/register')));
const Leads = Loadable(lazy(() => import('./pages/leads')));

const Routes = () => {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: 'register',
                    element: <Register />
                },
                {
                    path: 'leads',
                    element: <Leads />
                }
            ]
        }
    ]);
}

export default Routes;