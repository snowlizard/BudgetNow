import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: Now.ID['sys_app_module_all_transactions'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: 'e049b79ac192493ea27c387a32b9900b',
        filter: '',
        link_type: 'LIST',
        mobile_title: 'Withdrawals',
        mobile_view_name: 'Mobile',
        name: 'x_842748_budgetnow_transaction',
        order: 250,
        override_menu_roles: false,
        require_confirmation: true,
        sys_domain: 'global',
        sys_domain_path: '/',
        sys_name: 'all_transactions',
        title: 'All',
        uncancelable: false,
    },
})
