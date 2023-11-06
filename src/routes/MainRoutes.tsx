import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';

// render - page
const Home = Loadable(lazy(() => import('../pages/home')));
const Register = Loadable(lazy(() => import('../pages/register')));
const Leads = Loadable(lazy(() => import('../pages/leads')));
const LeadsEdit = Loadable(lazy(() => import('../pages/leadsedit')));
const Negotiate = Loadable(lazy(() => import('../pages/negotiate')));
const Clients = Loadable(lazy(() => import('../pages/clients')));

const MainRoutes = {
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
        },
        {
            path: 'leadsedit',
            element: <LeadsEdit />
        },
        {
            path: 'negotiate',
            element: <Negotiate />
        },
        {
            path: 'clients',
            element: <Clients />
        }
    ]
}

export default MainRoutes;