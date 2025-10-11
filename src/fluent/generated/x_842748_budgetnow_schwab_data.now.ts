import { StringColumn, Table } from '@servicenow/sdk/core'

export const x_842748_budgetnow_schwab_data = Table({
    name: 'x_842748_budgetnow_schwab_data',
    label: 'Charles Schwab Import',
    scriptable_table: false,
    allow_web_service_access: true,
    allow_new_fields: false,
    allow_client_scripts: false,
    allow_ui_actions: false,
    extensible: false,
    extends: 'sys_import_set_row',
    actions: ['read'],
    schema: {
        u_withdrawal: StringColumn({
            label: 'Withdrawal',
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Withdrawal',
            },
            maxLength: 40,
        }),
        u_date: StringColumn({
            label: 'Date',
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Date',
            },
            maxLength: 40,
        }),
        u_status: StringColumn({
            label: 'Status',
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Status',
            },
            maxLength: 40,
        }),
        u_description: StringColumn({
            label: 'Description',
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Description',
            },
            maxLength: 40,
        }),
        u_type: StringColumn({
            label: 'Type',
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Type',
            },
            maxLength: 40,
        }),
        u_checknumber: StringColumn({
            label: 'CheckNumber',
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'CheckNumber',
            },
            maxLength: 40,
        }),
        u_runningbalance: StringColumn({
            label: 'RunningBalance',
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'RunningBalance',
            },
            maxLength: 40,
        }),
        u_deposit: StringColumn({
            label: 'Deposit',
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Deposit',
            },
            maxLength: 40,
        }),
    },
})
