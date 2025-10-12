import { default_view, List } from '@servicenow/sdk/core'

export default List({
    $id: '1339769dc3a87210d33c33bc05013101',
    view: default_view,
    table: 'x_842748_budgetnow_transaction',
    columns: ['date', 'category', 'subcategory', 'description', 'amount', 'source'],
})
