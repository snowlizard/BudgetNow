import '@servicenow/sdk/global'
import { List, default_view } from '@servicenow/sdk/core'

// Create list view for Budget Choice table (if not already generated)
List({
    $id: Now.ID['budget_choice_list'],
    table: 'x_842748_budgetnow_budget_choice',
    view: default_view,
    columns: [
        { element: 'name', position: 0 },
        { element: 'depends_on', position: 1 },
    ],
})

// Create list view for Schwab import data (if not already generated)
List({
    $id: Now.ID['schwab_data_list'],
    table: 'x_842748_budgetnow_schwab_data',
    view: default_view,
    columns: [
        { element: 'u_date', position: 0 },
        { element: 'u_description', position: 1 },
        { element: 'u_withdrawal', position: 2 },
        { element: 'u_deposit', position: 3 },
        { element: 'u_type', position: 4 },
        { element: 'u_status', position: 5 },
    ],
})

// Create list view for Amex import data (if not already generated)
List({
    $id: Now.ID['amex_data_list'],
    table: 'x_842748_budgetnow_amex_data_import',
    view: default_view,
    columns: [
        { element: 'u_date', position: 0 },
        { element: 'u_description', position: 1 },
        { element: 'u_amount', position: 2 },
    ],
})