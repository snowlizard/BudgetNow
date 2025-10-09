import { ChoiceColumn, DecimalColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

export const x_842748_budgetnow_account = Table({
    name: 'x_842748_budgetnow_account',
    label: 'Account',
    extensible: true,
    schema: {
        name: StringColumn({
            active: true,
            label: 'Name',
            maxLength: 40,
            mandatory: true,
        }),

        balance: DecimalColumn({
            active: true,
            label: 'Balance',
            attributes: {
                scale: 2,
            },
            default: '0',
        }),

        type: ChoiceColumn({
            active: true,
            label: 'Type',
            mandatory: true,
            choices: {
                checking: {
                    label: 'Checking',
                    inactive: false,
                    sequence: 100,
                    inactive_on_update: false,
                },
                savings: {
                    label: 'Savings',
                    inactive: false,
                    sequence: 200,
                    inactive_on_update: false,
                },
                credit: {
                    label: 'Credit',
                    inactive: false,
                    sequence: 300,
                    inactive_on_update: false,
                },
            },
        }),

        account_owner: ReferenceColumn({
            label: 'Owner',
            mandatory: true,
            referenceTable: 'sys_user',
            attributes: {
                encode_utf8: false,
            },
            reference_qual: 'active=true^EQ',
            dynamic_default_value: 'bdcb83a85f220100a9ad2572f2b4773d',
            default: 'javascript:gs.getUserID();',
        }),
    },
    display: 'name',
    index: [{ name: 'index', element: 'account_owner', unique: false }],
})
