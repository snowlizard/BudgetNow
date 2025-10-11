import { BusinessRule } from "@servicenow/sdk/core";

export default BusinessRule({
    $id: "548f2209c3643210d33c33bc0501312d",
    action: ["update","insert"],
    filter_condition:`type=transfer^EQ`,
    script: `(function executeRule(current, previous /*null when async*/ ) {

    let sourceAccount = new GlideRecord('x_842748_budgetnow_account');
    if (sourceAccount.get(current.source.sys_id)) {
        if (previous) {
            if (previous.source.sys_id != current.source.sys_id) {
                let prevGR = new GlideRecord("x_842748_budgetnow_account");
                if (prevGR.get(previous.source.sys_id)) {
                    prevGR.balance -= previous.amount;
					prevGR.update();
                }
            } else {
                sourceAccount.balance += previous.amount;
            }
        }
        sourceAccount.balance += current.amount * -1;
        sourceAccount.update();
    }

    let destinationAccount = new GlideRecord('x_842748_budgetnow_account');
    if (destinationAccount.get(current.destination.sys_id)) {
        if (previous) {
            if (previous.destination.sys_id != current.destination.sys_id) {
                let prevGR = new GlideRecord("x_842748_budgetnow_account");
                if (prevGR.get(previous.destination.sys_id)) {
                    prevGR.balance -= previous.amount;
					prevGR.update();
                }
            } else {
                destinationAccount.balance -= previous.amount;
            }
        }
        destinationAccount.balance += current.amount;
        destinationAccount.update();
    }

})(current, previous);`,
    table: "x_842748_budgetnow_transaction",
    name: "Handle transfer",
    order: 100,
    when: "before",
    active: true,
    add_message: false,
    abort_action: false
});
