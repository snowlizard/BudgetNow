import { ApplicationMenu } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

ApplicationMenu({
    $id: Now.ID['budgetnow_app'],
    title: 'BudgetNow',
    hint: 'Taquitos!',
    description: 'Manage your finances on the now platform',
    roles: ['itil'],
    active: true,
})
