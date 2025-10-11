import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "package_json": {
                            "table": "sys_module",
                            "id": "4fb2a773785f4be3a648ea42b93466b0"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "7a47abdad97645e19ad5826646cb0e46"
                        },
                        "budgetnow_app": {
                            "table": "sys_app_application",
                            "id": "e049b79ac192493ea27c387a32b9900b"
                        }
                    };
                composite: [
                        {
                            "table": "sys_ui_list_element",
                            "id": "071f09b6b41642deaad9f6502be99972",
                            "key": {
                                "list": "0e611938c3203210d33c33bc050131cf",
                                "element": "date"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "c0fe1534c7d0449ea41d78c0520c6522",
                            "key": {
                                "list": "0e611938c3203210d33c33bc050131cf",
                                "element": "description"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "fe5a549a116749ffa24a1282908b82f9",
                            "key": {
                                "list": "0e611938c3203210d33c33bc050131cf",
                                "element": "category"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "8c6985a575f2453f9e85548b3ec57b2d",
                            "key": {
                                "list": "0e611938c3203210d33c33bc050131cf",
                                "element": "amount"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "99c62d9e92f9425fad3b90bec656c8bf",
                            "key": {
                                "list": "a5e1d5f8c3203210d33c33bc050131c4",
                                "element": "date"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "43e23c0389124b3ab2af3dcf089a46e3",
                            "key": {
                                "list": "a5e1d5f8c3203210d33c33bc050131c4",
                                "element": "description"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "11a746a2cfdd47038fc53020468d6885",
                            "key": {
                                "list": "a5e1d5f8c3203210d33c33bc050131c4",
                                "element": "amount"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "280aed16f66b4060ae2f106839dad24b",
                            "key": {
                                "list": "cfa1ddb8c3203210d33c33bc05013150",
                                "element": "date"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "da558b3bcf484d01aca0b3f79df76d04",
                            "key": {
                                "list": "cfa1ddb8c3203210d33c33bc05013150",
                                "element": "description"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "aa39c8790dcf49a2896b885d580e664d",
                            "key": {
                                "list": "cfa1ddb8c3203210d33c33bc05013150",
                                "element": "amount"
                            }
                        }
                    ];
            }
        }
    }
}
