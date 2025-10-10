import { default_view, List } from '@servicenow/sdk/core'
import transfers from './sys_relationship_48405d38c3203210d33c33bc050131f3.now'

export default List({
    $id: 'cfa1ddb8c3203210d33c33bc05013150',
    view: default_view,
    table: 'x_842748_budgetnow_transaction',
    columns: ['date', 'description', 'amount'],
    parent: 'x_842748_budgetnow_account',
    relationship: transfers,
})
