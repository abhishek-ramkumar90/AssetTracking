import {
    Home,
    File,
    Headphones,
    AlertCircle
} from 'react-feather';

export const MENUITEMS = [

    {
        title: 'Home', icon: Home, type: 'link', badgeType: 'primary',path:'/', active: false
    },
    {
        title: 'inwarding', icon: Home, type: 'sub', badgeType: 'primary', active: false, children: [
            { path: '/dashboard/default', title: 'Add Invoice', type: 'link' },
            { path: '/dashboard/default', title: 'Edit Invoice', type: 'link' },
            { path: '/dashboard/default', title: 'Add Software', type: 'link' },
            { path: '/dashboard/default', title: 'Add Assets to Store', type: 'link' },
            { path: '/dashboard/bulkuploadasset', title: 'Bulk Upload of Assets', type: 'link' },
            { path: '/dashboard/default', title: 'Approve Add Assets to Store', type: 'link' },
            { path: '/dashboard/default', title: 'GRN Print', type: 'link' },
            { path: '/dashboard/default', title: 'Edit Asset', type: 'link' },
            { path: '/dashboard/default', title: 'Bulk Edit Assets', type: 'link' },
            { path: '/dashboard/default', title: 'Tag Printing', type: 'link' },
            { path: '/dashboard/default', title: 'Allocation Asset', type: 'link' },
            { path: '/dashboard/default', title: 'Allocation Accessory', type: 'link' },
            { path: '/dashboard/default', title: 'Allocation Software', type: 'link' },
            { path: '/dashboard/default', title: 'Approve Allocation Asset', type: 'link' },
            { path: '/dashboard/default', title: 'Uninstall Asset', type: 'link' },
            { path: '/dashboard/default', title: 'Uninstall Accessory', type: 'link' },
            { path: '/dashboard/default', title: 'Assembly Assets', type: 'link' }
        ]
    },
    {
        title: 'Asset Movements', icon: AlertCircle, type: 'sub', active: false,children: [
            { path: '/dashboard/default', title: 'Repair', type: 'link' },
            { path: '/dashboard/default', title: 'Transfer', type: 'link' },
            { path: '/dashboard/default', title: 'Ownership Transfer', type: 'link' },
            { path: '/dashboard/default', title: 'Disposal', type: 'link' },
            { path: '/dashboard/default', title: 'Gatepass', type: 'link' }
        ]
    },

    {
        title: 'Audit', icon: Headphones, type: 'sub', active: false,children: [
            { path: '/dashboard/default', title: 'Mobile Scanning', type: 'link' },
            { path: '/dashboard/default', title: 'Self Audit Report', type: 'link' },
            { path: '/dashboard/default', title: 'Complete Audit Report', type: 'link' }
        ]
    },

    {
        title: 'My Assets', icon: Headphones, type: 'sub', active: false,children: [
            { path: '/dashboard/default', title: 'My Assets', type: 'link' }           
        ]
    },

    {
        title: 'Reports', icon: Headphones, type: 'sub', active: false,children: [
            { path: '/dashboard/default', title: 'Detailed FAR Report', type: 'link' },
            { path: '/dashboard/default', title: 'Search Assets', type: 'link' },
            { path: '/dashboard/default', title: 'In Transit Report', type: 'link' },
            { path: '/dashboard/default', title: 'Asset By Location', type: 'link' },
            { path: '/dashboard/default', title: 'Transaction', type: 'link' },
            { path: '/dashboard/default', title: 'Assembly', type: 'link' },
            { path: '/dashboard/default', title: 'Software Report', type: 'link' },
            { path: '/dashboard/default', title: 'Inwarding Report', type: 'link' },
            { path: '/dashboard/default', title: 'Accessory Report', type: 'link' },
            { path: '/dashboard/default', title: 'AMC Report', type: 'link' },
            { path: '/dashboard/default', title: 'Asset By Employee', type: 'link' },
            { path: '/dashboard/default', title: 'Incomplete Vendor Registration Report', type: 'link' },
            { path: '/dashboard/default', title: 'Assets By Floor', type: 'link' },
            { path: '/dashboard/default', title: 'Assets By City,Site & Building', type: 'link' },
            { path: '/dashboard/default', title: 'Assets By Department', type: 'link' },
            { path: '/dashboard/default', title: 'Assets By Status', type: 'link' }, 
            { path: '/dashboard/default', title: 'Assets By Condition', type: 'link' }, 
            { path: '/dashboard/default', title: 'Assets By Creation Date', type: 'link' }, 
            { path: '/dashboard/default', title: 'Disposal Report', type: 'link' },
            { path: '/dashboard/default', title: 'Repair Report', type: 'link' }, 
            { path: '/dashboard/default', title: 'Temporary and Permanenet Report', type: 'link' }, 
            { path: '/dashboard/default', title: 'Transaction Report Details', type: 'link' },
            { path: '/dashboard/default', title: 'Transaction Summary Report', type: 'link' }      
        ]
    },

    {
        title: 'Depreciation', icon: Headphones, type: 'link', path: '/support-ticket/supportTicket', active: false
    },

    {
        title: 'Configuration', icon: Headphones, type: 'sub', active: false,children: [
            { path: '/dashboard/default', title: 'Company', type: 'link' },
            { path: '/dashboard/default', title: 'Country', type: 'link' },
            { path: '/dashboard/default', title: 'Designation', type: 'link' },
            { path: '/dashboard/default', title: 'Location', type: 'link' },
            { path: '/dashboard/default', title: 'Group', type: 'link' },
            { path: '/dashboard/default', title: 'Organisation', type: 'link' },
            { path: '/dashboard/default', title: 'Employee', type: 'link' },
            { path: '/dashboard/default', title: 'UoM', type: 'link' },
            { path: '/dashboard/default', title: 'Vendor', type: 'link' },
            { path: '/dashboard/default', title: 'Vendor Approve', type: 'link' },
            { path: '/dashboard/default', title: 'Disposal Approval Levels', type: 'link' },
            { path: '/dashboard/default', title: 'IUT Approval Levels', type: 'link' },
            { path: '/dashboard/default', title: 'Repair Approval Levels', type: 'link' },
            { path: '/dashboard/default', title: 'Tax', type: 'link' },
            { path: '/dashboard/default', title: 'Role Management', type: 'link' },
            { path: '/dashboard/default', title: 'Budget', type: 'link' }, 
            { path: '/dashboard/default', title: 'Self Audit', type: 'link' }   
        ]
    }

]

