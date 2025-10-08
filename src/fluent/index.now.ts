import { Table, StringColumn, DecimalColumn, ChoiceColumn, ReferenceColumn } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'
//import { showStateUpdate } from '../server/script.js'

// Create Account table
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
                },
                savings: {
                    label: 'Savings',
                    inactive: false,
                    sequence: 200,
                },
                credit: {
                    label: 'Credit',
                    inactive: false,
                    sequence: 300,
                }
            }
        }),

        account_owner: ReferenceColumn({
            label: 'Owner',
            mandatory: true,
            referenceTable: 'sys_user',
        })
    }
});