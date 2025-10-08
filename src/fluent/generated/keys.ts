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
                        }
                    };
            }
        }
    }
}
