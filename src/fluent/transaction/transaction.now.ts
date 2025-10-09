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
            label: 'Balance',
            attributes: {
                scale: 2,
            },
            default: '0',
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
                }
            },
        }),

        subcategory: ChoiceColumn({
            label: 'Subcategory',
            mandatory: false,
            choices: {
                rent: {
                    label: 'Rent',
                    sequence: 100,
                    dependent_value: 'bill',
                },
                phone: {
                    label: 'Phone',
                    sequence: 200,
                    dependent_value: 'bill',
                },
                utilities: {
                    label: 'Utilities',
                    sequence: 300,
                    dependent_value: 'bill'
                }
            },
        }),

        type: ChoiceColumn({
            label: 'Type',
            mandatory: true,
            choices: {
                withdrawal: {
                    label: 'Withdrawal',
                    sequence: 100,
                },
                transfer: {
                    label: 'Transfer',
                    sequence: 200,
                },
                revenue: {
                    label: 'Revenue',
                    sequence: 300,
                }
            }
        })
    },
    display: 'description',
})