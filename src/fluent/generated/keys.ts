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
                        },
                        "budget_choice_list": {
                            "table": "sys_ui_list",
                            "id": "ad44c6087bc0485698d9608950fd19f3"
                        },
                        "schwab_data_list": {
                            "table": "sys_ui_list",
                            "id": "62e982dabf164f1786332475188ea068"
                        },
                        "amex_data_list": {
                            "table": "sys_ui_list",
                            "id": "a6ac564df0c84175a3ed31b3b62b2993"
                        },
                        "sys_app_module_all_transactions": {
                            "table": "sys_app_module",
                            "id": "5e7e065b967545579c2f31905b04ca24"
                        },
                        "budget_table_list": {
                            "table": "sys_ui_list",
                            "id": "f3e238ea3e3f40da830442a22f3983af"
                        }
                    };
                composite: [
                        {
                            "table": "sys_security_acl_role",
                            "id": "3b171be583e47210066a5d10feaad3b5",
                            "key": {
                                "sys_security_acl": "37171be583e47210066a5d10feaad3b2",
                                "sys_user_role": "282bf1fac6112285017366cb5f867469"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "7f171be583e47210066a5d10feaad3ae",
                            "key": {
                                "sys_security_acl": "b3171be583e47210066a5d10feaad39f",
                                "sys_user_role": "282bf1fac6112285017366cb5f867469"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "f3171be583e47210066a5d10feaad3bc",
                            "key": {
                                "sys_security_acl": "ff171be583e47210066a5d10feaad3b8",
                                "sys_user_role": "282bf1fac6112285017366cb5f867469"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "ff171be583e47210066a5d10feaad399",
                            "key": {
                                "sys_security_acl": "ef171be583e47210066a5d10feaad393",
                                "sys_user_role": "282bf1fac6112285017366cb5f867469"
                            }
                        }
                    ];
                deleted: {
                        "sys_ui_list_element": [
                            "30a49344cc944482984c9c3476661443",
                            "ce7cc24ffbaf4f229b03865a7bcb0d31",
                            "ab5a9738311c4f32ba0e89370f8169a1",
                            "952a746c9b3645d6b26dd46981d4f79f",
                            "cfccba82e4cc482992583a31b70e7407",
                            "03e7d8296cd24a0eb9faf4cc6493722a",
                            "0227fa400f224f0daf8d231422bcac43",
                            "ed9758dc8b044e5ba266e6ee61be77da",
                            "9334b352b33f4c22be84551205923a6d",
                            "2490a0a4cb8a40bea1147c6144325270",
                            "019936227922439585101b33d729ff40",
                            "bd6a5bebaa4c49209b1525347a5565ac",
                            "f2c585900ff04b23bf59d623036fd5bc",
                            "d9c8628a3bb44d4aac4e0f3b07da4c4d",
                            "495feddac68b496a86c7f7678ca4853f",
                            "c506115fea2c438097371708038c1b65",
                            "b08cd5a5857e4a50bc5f863d2754650b",
                            "fd20b5d323084aac9e226eec6a36927e",
                            "ee93ccb8ec5c4176afc0da1cc14a74ae",
                            "17e36c0c17b64654b5e261df75db6c65",
                            "642e92f0b2ce4c9eb5b164eab334fa1d",
                            "15df0b5e5371458eba7583327630d540",
                            "ee2a88d3286b45b0a022e86019ac04f9",
                            "70cd35f3f0a849df9c4f682842ac9d51",
                            "dabc09f291e9431c83f42f75a97bb56b",
                            "209f53f2448d4902b85d94a4a46f09ac",
                            "9c30540a160545e1861c688c68fb29d8",
                            "f8682409b40b412aaf561c2d1ad070e5",
                            "f65bc069a65d47e38734935142219f72",
                            "b6a2e184c4044762bcf8e87f26a974e6",
                            "3c798f2a52cf4d8fb5c3c4d5eb649f42",
                            "b14f4ccdf2974774a548881d9405f480",
                            "be3357834a024afdaf4204064f612715",
                            "5b1a328ab97842d2a45d3febd79f6e42",
                            "b2460fed12ee4f75ba29d18daef62982",
                            "4a1a24e7fb0746948ea66665f1a4fd1d",
                            "bb2ffb9f5a674d8387ce7534054f419b",
                            "a54f1a26fc0141408d3da3ef2640eb17",
                            "e30913b833404162b0ac8e82cd83e07a",
                            "54b50a4730a940618ba732598218d229",
                            "75f852c486eb4734a6c1f789484c49c4",
                            "a651a88d77234881b959adf936443c49",
                            "872bf5f4fa11461dbb82af21c132d595",
                            "bedd69eafe9c4b76be443dff67858448",
                            "4639b4eddccf42f2aa81da9674e0f8a4",
                            "cda97a5e2f164fe38bc4c95e552a755d",
                            "ffe7cb72b24c4bd0bc7902c35e99660f",
                            "362d32c6064b411b8a03a82749de5edd",
                            "c18e20ee4fd04381bd3efa60a4f584bd",
                            "034e3078428f4b548a40bf2a81aaa55e",
                            "97a644a5d37a4cb8a9e36e8649aca11c",
                            "b32861152f9f4e8091155b8752cf1dc0",
                            "30eca3f8ea184212875c5423ad24b927",
                            "c8383a0089fb458f9b83cab44fd81ce8",
                            "af77b82feeba43f1998ee09055762dee",
                            "ee9773f945b644259042ca4c3c4827e9",
                            "e334f9a62ab44e478b36c8a6a21a028a",
                            "5a53fd874d66490e9b68f3c02c9536f5",
                            "dec793ea5674402ebfeb0c0a9fc573e0",
                            "7faa04af88354414b73a50ce9f90d89b",
                            "023ca3ac5055454db13637f6a329fe0e",
                            "b309b9c8f55c40b0ab513a3cc65f5a5a",
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
