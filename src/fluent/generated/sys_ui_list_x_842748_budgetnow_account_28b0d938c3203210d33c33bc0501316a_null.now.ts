import { default_view, List } from '@servicenow/sdk/core'
import revenue from './sys_relationship_28b0d938c3203210d33c33bc0501316a.now'

export default List({
    $id: 'a5e1d5f8c3203210d33c33bc050131c4',
    view: default_view,
    table: 'x_842748_budgetnow_transaction',
    columns: ['date', 'description', 'amount'],
    parent: 'x_842748_budgetnow_account',
    relationship: revenue,
})
