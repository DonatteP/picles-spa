export const filterColumns = [
    {
        name: "type",
        title: "Espécie",
        options: [
            {
                value: "",
                text: "Todos",
            },
            {
                value: "dog",
                text:"Cachorros"
            },
            {
                value: "cat",
                text: "Gatos"
            },
            {
                value: "frog",
                text: "Sapo"
            }
        ],
    },
    {
        name: "size",
        title: "Porte",
        options: [
            {
                value: "",
                text: "Todos"
            },
            {
                value: "little",
                text: "Pequeno"
            },
            {
                value: "medium",
                text: "Médio"
            },
            {
                value: "Large",
                text: "Grande"
            },
        ],
    },
    {
        name: "gender",
        title: "Sexo",
        options: [{
            value: "",
            text: "Todos"
        },
        {
            value: "Female",
            text: "Fêmea"
        },
        {
            value: "Male",
            text: "Macho"
        },
    ]
    },

]