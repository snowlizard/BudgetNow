import { Table, StringColumn, ListColumn, DecimalColumn, default_view, List } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

export const x_842748_budgetnow_budget = Table({
    name: 'x_842748_budgetnow_budget',
    label: 'Budget',
    extensible: true,
    schema: {
        name: StringColumn({
            active: true,
            label: 'Name',
            maxLength: 40,
            mandatory: true,
        }),

        categories: ListColumn({
            active: true,
            label: 'Categories',
            referenceTable: 'x_842748_budgetnow_budget_choice',
        }),

        spent: DecimalColumn({
            active: true,
            read_only: true,
            label: 'Spent',
            attributes: {
                scale: 2,
            },
            default: '0',
        }),

        target: DecimalColumn({
            active: true,
            label: 'Target',
            attributes: {
                scale: 2,
            },
            default: '0',
        }),
    },

    display: 'name',
})

export default List({
    $id: Now.ID['budget_table_list'],
    view: default_view,
    table: 'x_842748_budgetnow_budget',
    columns: ['name', 'spent', 'target'],
})