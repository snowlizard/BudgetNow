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
                            "id": "ffe7cb72b24c4bd0bc7902c35e99660f",
                            "key": {
                                "list": "0e611938c3203210d33c33bc050131cf",
                                "element": "date"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "362d32c6064b411b8a03a82749de5edd",
                            "key": {
                                "list": "0e611938c3203210d33c33bc050131cf",
                                "element": "description"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "c18e20ee4fd04381bd3efa60a4f584bd",
                            "key": {
                                "list": "0e611938c3203210d33c33bc050131cf",
                                "element": "category"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "034e3078428f4b548a40bf2a81aaa55e",
                            "key": {
                                "list": "0e611938c3203210d33c33bc050131cf",
                                "element": "amount"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "97a644a5d37a4cb8a9e36e8649aca11c",
                            "key": {
                                "list": "a5e1d5f8c3203210d33c33bc050131c4",
                                "element": "date"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "b32861152f9f4e8091155b8752cf1dc0",
                            "key": {
                                "list": "a5e1d5f8c3203210d33c33bc050131c4",
                                "element": "description"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "30eca3f8ea184212875c5423ad24b927",
                            "key": {
                                "list": "a5e1d5f8c3203210d33c33bc050131c4",
                                "element": "amount"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "c8383a0089fb458f9b83cab44fd81ce8",
                            "key": {
                                "list": "cfa1ddb8c3203210d33c33bc05013150",
                                "element": "date"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "af77b82feeba43f1998ee09055762dee",
                            "key": {
                                "list": "cfa1ddb8c3203210d33c33bc05013150",
                                "element": "description"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "ee9773f945b644259042ca4c3c4827e9",
                            "key": {
                                "list": "cfa1ddb8c3203210d33c33bc05013150",
                                "element": "amount"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "e334f9a62ab44e478b36c8a6a21a028a",
                            "key": {
                                "list": "1339769dc3a87210d33c33bc05013101",
                                "element": "date"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "5a53fd874d66490e9b68f3c02c9536f5",
                            "key": {
                                "list": "1339769dc3a87210d33c33bc05013101",
                                "element": "category"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "dec793ea5674402ebfeb0c0a9fc573e0",
                            "key": {
                                "list": "1339769dc3a87210d33c33bc05013101",
                                "element": "subcategory"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "7faa04af88354414b73a50ce9f90d89b",
                            "key": {
                                "list": "1339769dc3a87210d33c33bc05013101",
                                "element": "description"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "023ca3ac5055454db13637f6a329fe0e",
                            "key": {
                                "list": "1339769dc3a87210d33c33bc05013101",
                                "element": "amount"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "b309b9c8f55c40b0ab513a3cc65f5a5a",
                            "key": {
                                "list": "1339769dc3a87210d33c33bc05013101",
                                "element": "source"
                            }
                        }
                    ];
                deleted: {
                        "sys_ui_list_element": [
                            "071f09b6b41642deaad9f6502be99972",
                            "c0fe1534c7d0449ea41d78c0520c6522",
                            "fe5a549a116749ffa24a1282908b82f9",
                            "8c6985a575f2453f9e85548b3ec57b2d",
                            "99c62d9e92f9425fad3b90bec656c8bf",
                            "43e23c0389124b3ab2af3dcf089a46e3",
                            "11a746a2cfdd47038fc53020468d6885",
                            "280aed16f66b4060ae2f106839dad24b",
                            "da558b3bcf484d01aca0b3f79df76d04",
                            "aa39c8790dcf49a2896b885d580e664d"
                        ]
                    };
            }
        }
    }
}
