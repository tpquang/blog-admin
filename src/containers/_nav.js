export default [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Danh bạ',
    route: '/danh-ba',
    icon: 'cil-phone',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Lịch làm việc',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Danh bạ',
        to: '/danh-ba',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Lịch làm việc',
    route: '/lich-lam-viec',
    icon: 'cil-calendar',
    _children: [],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Lịch trực VHKT',
    route: '/lich-truc-vhkt',
    icon: 'cil-calendar',
    _children: [],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Đăng ký ra ngoài',
    route: '/dang-ky-ra-ngoai',
    icon: 'cil-calendar',
    _children: [],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Đăng ký nghỉ phép',
    route: '/dang-ky-nghi-phep',
    icon: 'cil-calendar',
    _children: [],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Đầu tư - mua sắm',
    route: '/dau-tu-mua-sam',
    icon: 'cil-calendar',
    _children: [],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Kho - thiết bị',
    route: '/kho-thiet-bi',
    icon: 'cil-calendar',
    _children: [],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Kế hoạch tác động',
    route: '/ke-hoach-tac-dong',
    icon: 'cil-calendar',
    _children: [],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý khách',
    route: '/quan-ly-khach',
    icon: 'cil-calendar',
    _children: [],
  },

  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Base',
  //   route: '/base',
  //   icon: 'cil-puzzle',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Forms',
  //       to: '/base/forms',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Jumbotron',
  //       to: '/base/jumbotrons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Navs',
  //       to: '/base/navs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Navbars',
  //       to: '/base/navbars',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Progress',
  //       to: '/base/progress-bar',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Switches',
  //       to: '/base/switches',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tabs',
  //       to: '/base/tabs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Buttons',
  //   route: '/buttons',
  //   icon: 'cil-cursor',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Brand buttons',
  //       to: '/buttons/brand-buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Dropdowns',
  //       to: '/buttons/button-dropdowns',
  //     }
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: 'cil-chart-pie'
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Icons',
  //   route: '/icons',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Notifications',
  //   route: '/notifications',
  //   icon: 'cil-bell',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Toaster',
  //       to: '/notifications/toaster'
  //     }
  //   ]
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: 'cil-calculator',
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   _tag: 'CSidebarNavDivider'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Disabled',
  //   icon: 'cil-ban',
  //   badge: {
  //     color: 'secondary',
  //     text: 'NEW',
  //   },
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Labels']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label danger',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-danger'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label info',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-info'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label warning',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-warning'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // }
]

