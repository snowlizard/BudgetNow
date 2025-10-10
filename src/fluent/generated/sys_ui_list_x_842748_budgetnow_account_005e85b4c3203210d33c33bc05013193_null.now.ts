import { default_view, List } from '@servicenow/sdk/core'
import withdrawals from './sys_relationship_005e85b4c3203210d33c33bc05013193.now'

export default List({
    $id: '0e611938c3203210d33c33bc050131cf',
    view: default_view,
    table: 'x_842748_budgetnow_transaction',
    columns: ['date', 'description', 'category', 'amount'],
    parent: 'x_842748_budgetnow_account',
    relationship: withdrawals,
})
