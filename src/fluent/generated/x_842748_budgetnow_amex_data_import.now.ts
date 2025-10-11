import { StringColumn, Table } from '@servicenow/sdk/core'

export const x_842748_budgetnow_amex_data_import = Table({
    name: 'x_842748_budgetnow_amex_data_import',
    label: 'Amex data import',
    scriptable_table: false,
    allow_web_service_access: true,
    allow_new_fields: false,
    allow_client_scripts: false,
    allow_ui_actions: false,
    extensible: false,
    extends: 'sys_import_set_row',
    actions: ['read'],
    schema: {
        u_amount: StringColumn({
            label: 'Amount',
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Amount',
            },
            maxLength: 40,
        }),
        u_description: StringColumn({
            label: 'Description',
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Description',
            },
            maxLength: 42,
        }),
        u_date: StringColumn({
            label: 'Date',
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Date',
            },
            maxLength: 40,
        }),
    },
})
