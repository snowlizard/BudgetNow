import { ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

export const x_842748_budgetnow_budget_choice = Table({
    name: 'x_842748_budgetnow_budget_choice',
    label: 'Budget Choice',
    scriptable_table: false,
    allow_web_service_access: true,
    allow_new_fields: false,
    allow_client_scripts: false,
    allow_ui_actions: false,
    extensible: false,
    accessible_from: 'public',
    actions: ['read'],
    schema: {
        name: StringColumn({
            label: 'Name',
            mandatory: true,
            maxLength: 50,
        }),
        depends_on: ReferenceColumn({
            label: 'Depends on',
            maxLength: 32,
            referenceTable: 'x_842748_budgetnow_budget_choice',
        }),
    },
    display: 'name',
    index: [{ name: 'index', element: 'depends_on', unique: false }],
})