import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'UpWork',
    isTitle: true
  },
  {
    label: 'Projects',
    icon: 'mail',
    subItems: [
      {
        label: 'Add Project',
        link: '/apps/email/inbox',
      },
      {
        label: 'All Projects',
        link: '/apps/email/read'
      }
    ]
  },
  {
    label: 'Testimonials',
    icon: 'message-square',
    link: '/apps/chat',
  },
  {
    label: 'Personal',
    isTitle: true
  },
  {
    label: 'Testimonials',
    icon: 'message-square',
    link: '/apps/chat',
  },
  {
    label: 'My Calender',
    icon: 'message-square',
    link: '/apps/calender',
  },
];
