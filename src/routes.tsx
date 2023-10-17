import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// project import
import Loadable from './components/Loadable';

// render - page
const Register = Loadable(lazy(() => import('./pages/register')));
const Leads = Loadable(lazy(() => import('./pages/leads')));

const Routes = () => {
    return useRoutes([
        {
            path: '/',
            children: [
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