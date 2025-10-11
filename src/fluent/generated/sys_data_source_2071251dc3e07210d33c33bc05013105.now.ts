import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '2071251dc3e07210d33c33bc05013105',
    table: 'sys_data_source',
    data: {
        batch_size: 1000,
        connection_timeout: 0,
        connection_url: 'attachment://sys_data_source:2071251dc3e07210d33c33bc05013105/',
        data_in_single_column: false,
        data_loader: `(function loadData(import_set_table, data_source, import_log, last_success_import_time, partition_info) {

 // Add your code here to insert data to import_set_table 

})(import_set_table, data_source, import_log, last_success_import_time, partition_info);`,
        discard_arrays: true,
        enable_parallel_loading: false,
        expand_node_children: false,
        file_retrieval_method: 'Attachment',
        format: 'CSV',
        glide_keystore: false,
        header_row: 0,
        import_set_table_label: 'Schwab data',
        import_set_table_name: 'x_842748_budgetnow_schwab_data',
        ldapprobe_result_set_rows: 200,
        name: 'Charles Schwab Import',
        offset: 0,
        oracle_port: 1521,
        oracle_sid: 'orcl',
        parallel_loading_script: `(function loadTasks(parallel_job_loader, data_source, import_log, last_success_import_time) {

	// Invoke third party API, create partitions and insert partitions info in parallel job table

})(parallel_job_loader, data_source, import_log, last_success_import_time);`,
        parsing_script: `// The input value can be accessed through the variables named "line", "lineNumber" and "result"
// The function uses result variable to return parse result back. 
(function(line,lineNumber,result) {
	// add code here
})(line,lineNumber,result);`,
        query: 'All Rows from Table',
        query_timeout: 0,
        scp_authentication: 'Username and Password',
        sheet_name: 1,
        sheet_number: 1,
        support_pagination: false,
        sys_name: 'Charles Schwab Import',
        type: 'File',
        use_batch_import: false,
        use_integrated_authentication: false,
        use_last_run_datetime: false,
        zipped: false,
    },
})
