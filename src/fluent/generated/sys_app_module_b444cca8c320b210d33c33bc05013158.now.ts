import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: 'b444cca8c320b210d33c33bc05013158',
    table: 'sys_app_module',
    data: {
        active: true,
        application: 'e049b79ac192493ea27c387a32b9900b',
        filter: 'type=withdrawal^source.account_ownerDYNAMIC90d1921e5f510100a9ad2572f2b477fe^EQ',
        link_type: 'LIST',
        mobile_title: 'Withdrawals',
        mobile_view_name: 'Mobile',
        name: 'x_842748_budgetnow_transaction',
        order: 300,
        override_menu_roles: false,
        require_confirmation: true,
        sys_domain: 'global',
        sys_domain_path: '/',
        sys_name: 'Withdrawals',
        title: 'Withdrawals',
        uncancelable: false,
    },
})
