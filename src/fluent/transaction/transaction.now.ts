import { ChoiceColumn, DateColumn, DecimalColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

export const x_842748_budgetnow_transaction = Table({
    name: 'x_842748_budgetnow_transaction',
    label: 'Transaction',
    extensible: true,
    schema: {
        description: StringColumn({
            active: true,
            label: 'Description',
            maxLength: 200,
            mandatory: true,
        }),

        source: ReferenceColumn({
            label: 'Source Account',
            mandatory: false,
            referenceTable: 'x_842748_budgetnow_account',
            attributes: {
                encode_utf8: false,
            },
            reference_qual: '',
        }),

        destination: ReferenceColumn({
            label: 'Destination Account',
            mandatory: false,
            referenceTable: 'x_842748_budgetnow_account',
            attributes: {
                encode_utf8: false,
            },
            reference_qual: '',
        }),

        date: DateColumn({
            label: 'Date',
            mandatory: true,
        }),

        amount: DecimalColumn({
            active: true,
            label: 'Amount',
            attributes: {
                scale: 2,
            },
            default: '0',
            mandatory: true,
        }),

        type: ChoiceColumn({
            label: 'Type',
            mandatory: true,
            choices: {
                withdrawal: {
                    label: 'Withdrawal',
                    sequence: 100,
                    inactive_on_update: false,
                },
                transfer: {
                    label: 'Transfer',
                    sequence: 200,
                    inactive_on_update: false,
                },
                revenue: {
                    label: 'Revenue',
                    sequence: 300,
                    inactive_on_update: false,
                },
            },
            read_only: true,
        }),
        subcategory: ReferenceColumn({
            label: 'Subcategory',
            reference_qual: 'depends_onISNOTEMPTY',
            maxLength: 40,
            referenceTable: 'x_842748_budgetnow_budget_choice',
            dynamic_value_definitions: {
                type: 'dependent_field',
                column_name: 'category',
            },
        }),
        category: ReferenceColumn({
            label: 'Category',
            mandatory: true,
            reference_qual: 'depends_onISEMPTY',
            maxLength: 40,
            referenceTable: 'x_842748_budgetnow_budget_choice',
        }),
    },
    display: 'description',
    index: [
        { name: 'index', element: 'description', unique: false },
        { name: 'index2', element: 'destination', unique: false },
        { name: 'index3', element: 'source', unique: false },
    ],
})
