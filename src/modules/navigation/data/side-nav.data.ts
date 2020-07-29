import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['dashboard'],
    },
    {
        text: 'INTERFACE',
        items: ['layouts', 'pages'],
    },
    {
        text: 'ADDONS',
        items: ['charts', 'tables'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        submenu: [
                {
                    icon: 'tachometer-alt',
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                 {
                    icon: 'tachometer-alt',
                    text: 'Dashboard1',
                    link: '/dashboard/dashboard1',
                },
                {
                    icon: 'tachometer-alt',
                    text: 'Dashboard2',
                    link: '/dashboard/dashboard2',
                },
                {
                    icon: 'tachometer-alt',
                    text: 'Dashboard3',
                    link: '/dashboard/dashboard3',
                },
                {
                    icon: 'tachometer-alt',
                    text: 'Dashboard4',
                    link: '/dashboard/dashboard4',
                },
                {
                    icon: 'tachometer-alt',
                    text: 'Dashboard5',
                    link: '/dashboard/dashboard5',
                },
                {
                    icon: 'tachometer-alt',
                    text: 'Dashboard6',
                    link: '/dashboard/dashboard6',
                },
                {
                    icon: 'tachometer-alt',
                    text: 'Dashboard7',
                    link: '/dashboard/dashboard7',
                },
        ],
    },

    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables',
    },
};
