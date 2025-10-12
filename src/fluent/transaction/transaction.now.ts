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

        category: ChoiceColumn({
            label: 'Category',
            mandatory: true,
            choices: {
                bill: {
                    label: 'Bill',
                    inactive: false,
                    sequence: 100,
                    inactive_on_update: false,
                },
                bullshit: {
                    label: 'Bullshit',
                    inactive: false,
                    sequence: 200,
                    inactive_on_update: false,
                },
                toiletries: {
                    label: 'Toiletries',
                    inactive: false,
                    sequence: 300,
                    inactive_on_update: false,
                },
                miscellaneous: {
                    label: 'Miscellaneous',
                    inactive: false,
                    sequence: 400,
                    inactive_on_update: false,
                },
                paycheck: {
                    label: 'Paycheck',
                    inactive: false,
                    sequence: 500,
                    inactive_on_update: false,
                },
                payment: {
                    label: 'Payment',
                    inactive: false,
                    sequence: 600,
                    inactive_on_update: false,
                },
            },
        }),

        subcategory: ChoiceColumn({
            label: 'Subcategory',
            mandatory: false,
            choices: {
                rent: {
                    label: 'Rent',
                    sequence: 0,
                    dependent_value: 'bill',
                    inactive_on_update: false,
                },
                phone: {
                    label: 'Phone',
                    sequence: 1,
                    dependent_value: 'bill',
                    inactive_on_update: false,
                },
                utilities: {
                    label: 'Utilities',
                    sequence: 2,
                    dependent_value: 'bill',
                    inactive_on_update: false,
                },
                internet: {
                    label: 'Internet',
                    sequence: 3,
                    dependent_value: 'bill',
                    inactive_on_update: false,
                },
                gasoline: {
                    label: 'Gasoline',
                    sequence: 4,
                    dependent_value: 'bill',
                    inactive_on_update: false,
                },
                healthcare: {
                    label: 'Healthcare',
                    sequence: 5,
                    dependent_value: 'bill',
                    inactive_on_update: false,
                },
                groceries: {
                    label: 'Groceries',
                    sequence: 6,
                    dependent_value: 'bill',
                    inactive_on_update: false,
                },
                insurance: {
                    label: 'Insurance',
                    sequence: 7,
                    dependent_value: 'bill',
                    inactive_on_update: false,
                },
                drinks: {
                    label: 'Drinks',
                    sequence: 0,
                    dependent_value: 'bullshit',
                    inactive_on_update: false,
                },
                food: {
                    label: 'food',
                    sequence: 1,
                    dependent_value: 'bullshit',
                    inactive_on_update: false,
                },
                auto: {
                    label: 'Auto',
                    sequence: 4,
                    dependent_value: 'bullshit',
                    inactive_on_update: false,
                },
                mtg: {
                    label: 'MTG',
                    sequence: 5,
                    dependent_value: 'bill',
                    inactive_on_update: false,
                },
            },
            dependent_on_field: 'category',
            dynamic_value_definitions: {
                type: 'dependent_field',
                column_name: 'category',
            },
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
    },
    display: 'description',
    index: [
        { name: 'index', element: 'destination', unique: false },
        { name: 'index2', element: 'source', unique: false },
    ],
})
