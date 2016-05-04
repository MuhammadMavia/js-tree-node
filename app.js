var data = [
    {
        name: "name",
        child: [
            {
                name: "name", child: [
                {
                    name: "name", child: [
                    {
                        name: "name", child: [
                        {
                            name: "name"
                        },
                        {
                            name: "name"
                        },
                        {
                            name: "name"
                        }
                    ]
                    },
                    {
                        name: "name"
                    },
                    {
                        name: "name"
                    },
                    {
                        name: "name"
                    }
                ]
                },
                {
                    name: "name"
                },
                {
                    name: "name"
                }
            ]
            },
            {
                name: "name"
            },
            {
                name: "name"
            },
            {
                name: "name"
            }
        ]
    },
    {
        name: "name",
        child: [
            {
                name: "name", child: [
                {
                    name: "name"
                }
            ]
            },
            {
                name: "name"
            },
            {
                name: "name"
            },
            {
                name: "name"
            }
        ]
    },
    {
        name: "name",
        child: [
            {
                name: "name", child: [
                {
                    name: "name"
                },
                {
                    name: "name"
                },
                {
                    name: "name"
                }
            ]
            },
            {
                name: "name"
            },
            {
                name: "name"
            },
            {
                name: "name"
            }
        ]
    },
    {
        name: "name",
        child: [
            {
                name: "name", child: [
                {
                    name: "name", child: [
                    {
                        name: "name", child: [
                        {
                            name: "name"
                        },
                        {
                            name: "name"
                        },
                        {
                            name: "name"
                        }
                    ]
                    },
                    {
                        name: "name"
                    },
                    {
                        name: "name"
                    },
                    {
                        name: "name"
                    }
                ]
                },
                {
                    name: "name"
                },
                {
                    name: "name"
                }
            ]
            },
            {
                name: "name"
            },
            {
                name: "name"
            },
            {
                name: "name"
            }
        ]
    },
    {
        name: "name",
        child: [
            {
                name: "name", child: [
                {
                    name: "name"
                }
            ]
            },
            {
                name: "name"
            },
            {
                name: "name"
            },
            {
                name: "name"
            }
        ]
    },
    {
        name: "name",
        child: [
            {
                name: "name", child: [
                {
                    name: "name"
                },
                {
                    name: "name"
                },
                {
                    name: "name"
                }
            ]
            },
            {
                name: "name"
            },
            {
                name: "name"
            },
            {
                name: "name"
            }
        ]
    }
];

var div = document.getElementById('div');
function childAdd(array, tag) {
    for (var i = 0; i < array.length; i++) {
        var details = document.createElement('details');
        var summary = document.createElement('summary');
        var p = document.createElement('p');
        summary.innerHTML = array[i].name + " " + (i + 1);
        details.appendChild(summary);
        details.appendChild(p);

        if (array[i].child) {
            childAdd(array[i].child, p)
        }
        tag.appendChild(details);
    }
}
childAdd(data, div);
