const fileSystem = [
    {
        value: '/app',
        label: 'app',
        children: [
            {
                value: '/app/Http',
                label: 'Http',
                children: [
                    {
                        value: '/app/Http/Controllers',
                        label: 'Controllers',
                        children: [{
                            value: '/app/Http/Controllers/WelcomeController.js',
                            label: 'WelcomeController.js',
                        }],
                    },
                    {
                        value: '/app/Http/routes.js',
                        label: 'routes.js',
                    },
                ],
            },
            {
                value: '/app/Providers',
                label: 'Providers',
                children: [{
                    value: '/app/Providers/EventServiceProvider.js',
                    label: 'EventServiceProvider.js',
                }],
            },
        ],
    },
    {
        value: '/config',
        label: 'config',
        children: [
            {
                value: '/config/app.js',
                label: 'app.js',
            },
            {
                value: '/config/database.js',
                label: 'database.js',
            },
        ],
    },
    {
        value: '/public',
        label: 'public',
        children: [
            {
                value: '/public/assets/',
                label: 'assets',
                children: [{
                    value: '/public/assets/style.css',
                    label: 'style.css',
                }],
            },
            {
                value: '/public/index.html',
                label: 'index.html',
            },
        ],
    },
    {
        value: '/.env',
        label: '.env',
    },
    {
        value: '/.gitignore',
        label: '.gitignore',
    },
    {
        value: '/README.md',
        label: 'README.md',
    },
];
const empires = [
    {
        value: 'favorite-empires',
        label: 'Favorite Empires',
        children: [
            {
                value: 'classical-era',
                label: 'Classical Era',
                children: [
                    {
                        value: 'persian',
                        label: 'First Persian Empire',
                    },
                    {
                        value: 'qin',
                        label: 'Qin Dynasty',
                    },
                    {
                        value: 'spqr',
                        label: 'Roman Empire',
                    },
                ],
            },
            {
                value: 'medieval-era',
                label: 'Medieval Era',
                children: [
                    {
                        value: 'abbasid',
                        label: 'Abbasid Caliphate',
                    },
                    {
                        value: 'byzantine',
                        label: 'Byzantine Empire',
                    },
                    {
                        value: 'holy-roman',
                        label: 'Holy Roman Empire',
                    },
                    {
                        value: 'ming',
                        label: 'Ming Dynasty',
                    },
                    {
                        value: 'mongol',
                        label: 'Mongol Empire',
                    },
                ],
            },
            {
                value: 'modern-era',
                label: 'Modern Era',
                children: [
                    {
                        value: 'aztec',
                        label: 'Aztec Empire',
                    },
                    {
                        value: 'british',
                        label: 'British Empire',
                    },
                    {
                        value: 'inca',
                        label: 'Inca Empire',
                    },
                    {
                        value: 'qing',
                        label: 'Qing Dynasty',
                    },
                    {
                        value: 'russian',
                        label: 'Russian Empire',
                    },
                    {
                        value: 'spanish',
                        label: 'Spanish Empire',
                    },
                ],
            },
        ],
    },
];

const customerNodes = [
    {
        "id":1,
        "name":"compliance",
        "label":"Compliance",
        "schema":null,
        "parent_id":1001,
        "created_at":"2023-03-09T07:26:36.272Z",
        "updated_at":"2023-03-30T03:10:47.379Z",
        "description":"Typology: 31 Indicator: 39",
        "value":1,
        "children":[
            {
                "id":2003,
                "name":"financial_crime",
                "label":"Financial crime",
                "schema":null,
                "parent_id":1,
                "created_at":"2023-04-13T02:49:25.027Z",
                "updated_at":"2023-04-13T02:49:25.027Z",
                "description":"Typology: 0 Indicator: 0",
                "value":2003,
                "children":[
                    {
                        "id":2007,
                        "name":"money_laundering",
                        "label":"Money laundering",
                        "schema":null,
                        "parent_id":2003,
                        "created_at":"2023-04-13T02:50:04.854Z",
                        "updated_at":"2023-04-13T02:50:04.854Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2007
                    },
                    {
                        "id":2008,
                        "name":"fraud",
                        "label":"Fraud",
                        "schema":null,
                        "parent_id":2003,
                        "created_at":"2023-04-13T02:50:15.689Z",
                        "updated_at":"2023-04-13T02:50:15.689Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2008
                    },
                    {
                        "id":2009,
                        "name":"insider_trading",
                        "label":"Insider trading",
                        "schema":null,
                        "parent_id":2003,
                        "created_at":"2023-04-13T02:50:24.970Z",
                        "updated_at":"2023-04-13T02:50:24.970Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2009
                    },
                    {
                        "id":2010,
                        "name":"cybercrime",
                        "label":"Cybercrime",
                        "schema":null,
                        "parent_id":2003,
                        "created_at":"2023-04-13T02:50:35.813Z",
                        "updated_at":"2023-04-13T02:50:35.813Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2010
                    },
                    {
                        "id":2011,
                        "name":"sanctions_evasion",
                        "label":"Sanctions evasion",
                        "schema":null,
                        "parent_id":2003,
                        "created_at":"2023-04-13T02:50:45.057Z",
                        "updated_at":"2023-04-13T02:50:45.057Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2011
                    }
                ]
            },
            {
                "id":2004,
                "name":"reputational_risk",
                "label":"Reputational risk",
                "schema":null,
                "parent_id":1,
                "created_at":"2023-04-13T02:49:35.069Z",
                "updated_at":"2023-04-13T02:49:35.069Z",
                "description":"Typology: 25 Indicator: 0",
                "value":2004,
                "children":[
                    {
                        "id":2012,
                        "name":"anti_child_exploitation",
                        "label":"Anti-Child Exploitation",
                        "schema":null,
                        "parent_id":2004,
                        "created_at":"2023-04-13T02:50:54.383Z",
                        "updated_at":"2023-04-13T02:50:54.383Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2012
                    },
                    {
                        "id":2013,
                        "name":"offensive_materials",
                        "label":"Offensive materials",
                        "schema":null,
                        "parent_id":2004,
                        "created_at":"2023-04-13T02:51:05.645Z",
                        "updated_at":"2023-04-13T02:51:05.645Z",
                        "description":"Typology: 3 Indicator: 0",
                        "value":2013
                    },
                    {
                        "id":2014,
                        "name":"weapons",
                        "label":"Weapons",
                        "schema":null,
                        "parent_id":2004,
                        "created_at":"2023-04-13T02:51:15.276Z",
                        "updated_at":"2023-04-13T02:51:15.276Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2014
                    },
                    {
                        "id":2015,
                        "name":"drugs",
                        "label":"Drugs",
                        "schema":null,
                        "parent_id":2004,
                        "created_at":"2023-04-13T02:51:26.424Z",
                        "updated_at":"2023-04-13T02:51:26.424Z",
                        "description":"Typology: 1 Indicator: 0",
                        "value":2015
                    },
                    {
                        "id":2016,
                        "name":"mlm",
                        "label":"MLM",
                        "schema":null,
                        "parent_id":2004,
                        "created_at":"2023-04-13T02:51:37.635Z",
                        "updated_at":"2023-04-13T02:51:37.635Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2016
                    },
                    {
                        "id":2017,
                        "name":"cv19",
                        "label":"CV-19",
                        "schema":null,
                        "parent_id":2004,
                        "created_at":"2023-04-13T02:51:48.875Z",
                        "updated_at":"2023-04-13T02:51:48.875Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2017
                    }
                ]
            },
            {
                "id":2005,
                "name":"legal_concerns",
                "label":"Legal concerns",
                "schema":null,
                "parent_id":1,
                "created_at":"2023-04-13T02:49:45.001Z",
                "updated_at":"2023-04-13T02:49:45.001Z",
                "description":"Typology: 1 Indicator: 0",
                "value":2005,
                "children":[
                    {
                        "id":2018,
                        "name":"encouraging_illegal_deceptive",
                        "label":"Encouraging illegal & Deceptive",
                        "schema":null,
                        "parent_id":2005,
                        "created_at":"2023-04-13T02:52:00.032Z",
                        "updated_at":"2023-04-13T02:52:00.032Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2018
                    },
                    {
                        "id":2019,
                        "name":"gambling",
                        "label":"Gambling",
                        "schema":null,
                        "parent_id":2005,
                        "created_at":"2023-04-13T02:52:09.519Z",
                        "updated_at":"2023-04-13T02:52:09.519Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2019
                    },
                    {
                        "id":2020,
                        "name":"dating_services",
                        "label":"Dating services",
                        "schema":null,
                        "parent_id":2005,
                        "created_at":"2023-04-13T02:52:19.021Z",
                        "updated_at":"2023-04-13T02:52:19.021Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2020
                    },
                    {
                        "id":2021,
                        "name":"adult",
                        "label":"Adult",
                        "schema":null,
                        "parent_id":2005,
                        "created_at":"2023-04-13T02:52:28.604Z",
                        "updated_at":"2023-04-13T02:52:28.604Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2021
                    },
                    {
                        "id":2022,
                        "name":"medical",
                        "label":"Medical",
                        "schema":null,
                        "parent_id":2005,
                        "created_at":"2023-04-13T02:52:39.585Z",
                        "updated_at":"2023-04-13T02:52:39.585Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2022
                    },
                    {
                        "id":2023,
                        "name":"alcohol",
                        "label":"Alcohol",
                        "schema":null,
                        "parent_id":2005,
                        "created_at":"2023-04-13T02:52:50.842Z",
                        "updated_at":"2023-04-13T02:52:50.842Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2023
                    },
                    {
                        "id":2024,
                        "name":"tobacco_e_cigarettes",
                        "label":"Tobacco & E-Cigarettes",
                        "schema":null,
                        "parent_id":2005,
                        "created_at":"2023-04-13T02:53:01.813Z",
                        "updated_at":"2023-04-13T02:53:01.813Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2024
                    }
                ]
            },
            {
                "id":2006,
                "name":"processor_considerations",
                "label":"Processor considerations",
                "schema":null,
                "parent_id":1,
                "created_at":"2023-04-13T02:49:54.980Z",
                "updated_at":"2023-04-13T02:49:54.980Z",
                "description":"Typology: 2 Indicator: 0",
                "value":2006,
                "children":[
                    {
                        "id":2025,
                        "name":"file_sharing",
                        "label":"File sharing",
                        "schema":null,
                        "parent_id":2006,
                        "created_at":"2023-04-13T02:53:12.591Z",
                        "updated_at":"2023-04-13T02:53:12.591Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2025
                    },
                    {
                        "id":2026,
                        "name":"intellectual_property_rights",
                        "label":"Intellectual Property Rights (IP)",
                        "schema":null,
                        "parent_id":2006,
                        "created_at":"2023-04-13T02:53:23.799Z",
                        "updated_at":"2023-04-13T02:53:23.799Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2026
                    },
                    {
                        "id":2027,
                        "name":"circumvention_products",
                        "label":"Circumvention Products",
                        "schema":null,
                        "parent_id":2006,
                        "created_at":"2023-04-13T02:53:33.492Z",
                        "updated_at":"2023-04-13T02:53:33.492Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2027
                    },
                    {
                        "id":2028,
                        "name":"event_tickets",
                        "label":"Event Tickets",
                        "schema":null,
                        "parent_id":2006,
                        "created_at":"2023-04-13T02:53:42.688Z",
                        "updated_at":"2023-04-13T02:53:42.688Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2028
                    },
                    {
                        "id":2029,
                        "name":"credit_repair",
                        "label":"Credit Repair",
                        "schema":null,
                        "parent_id":2006,
                        "created_at":"2023-04-13T02:53:52.298Z",
                        "updated_at":"2023-04-13T02:53:52.298Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2029
                    },
                    {
                        "id":2030,
                        "name":"personal_information",
                        "label":"Personal Information",
                        "schema":null,
                        "parent_id":2006,
                        "created_at":"2023-04-13T02:54:02.007Z",
                        "updated_at":"2023-04-13T02:54:02.007Z",
                        "description":"Typology: 0 Indicator: 0",
                        "value":2030
                    }
                ]
            },
            {
                "id":2110,
                "name":"test",
                "label":"test",
                "schema":null,
                "parent_id":1,
                "created_at":"2023-04-13T02:49:54.980Z",
                "updated_at":"2023-04-13T02:49:54.980Z",
                "value":2110,
                "children":[

                ]
            }
        ]
    },
    {
        "id":2001,
        "name":"profile",
        "label":"Profile",
        "schema":null,
        "parent_id":1001,
        "created_at":"2023-04-13T02:49:16.167Z",
        "updated_at":"2023-04-13T02:49:16.167Z",
        "description":"Typology: 5 Indicator: 0",
        "value":2001
    },
    {
        "id":2002,
        "name":"risk",
        "label":"Risk",
        "schema":null,
        "parent_id":1001,
        "created_at":"2023-04-13T02:49:20.814Z",
        "updated_at":"2023-04-13T02:49:20.814Z",
        "description":"Typology: 4 Indicator: 0",
        "value":2002
    }
]



export {
    fileSystem,
    empires,
    customerNodes
};
