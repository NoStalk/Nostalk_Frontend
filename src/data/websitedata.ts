


export const dataGrid = [

    {
        headerText: 'Platform',
        textAlign: "Center",
        width: '120',
        

    },

    {
        field: 'Name',
        headerText: 'Name',
        width: '150',
        textAlign: 'Center',
    },

    {
        field: 'Solved',
        headerText: 'Total Solved',
        textAlign: 'Center',
        editType: 'numericedit',
        width: '150',
    },

    {
        field: 'Contest',
        headerText: 'Total Contests',
        textAlign: 'Center',
        editType: 'numericedit',
        width: '150',
    },

    {
        field: 'Rating',
        headerText: 'Current Rating',
        textAlign: 'Center',
        editType: 'numericedit',
        width: '150',
    },

    {
        field: 'Submissions',
        headerText: 'Total Submissions',
        textAlign: 'Center',
        editType: 'numericedit',
        width: '150',
    }
];



export const data = [
    {
        id: 1,
        Name: 'codeforces',
        url: 'https://codeforces.com/',
        Solved: 213,
        Contest: 4,
        Rating: 1440,
        Submissions: 300,

    },
    {
        id: 2,
        Name: 'codechef',
        url: 'https://codechef.com/',
        Solved: 103,
        Contest: 4,
        Rating: 1440,
        Submissions: 300,

    },
    {
        id: 3,
        Name: 'spoj',
        url: 'https://spoj.com/',
        Solved: 52,
        Contest: 4,
        Rating: 1440,
        Submissions: 300,

    },
    {
        id: 4,
        Name: 'hackerearth',
        url: 'https://www.hackerearth.com/',
        Solved: 28,
        Contest: 4,
        Rating: 1440,
        Submissions: 300,

    },
    {
        id: 5,
        Name: 'atcoder',
        url: 'https://atcoder.jp/',
        Solved: 116,
        Contest: 4,
        Rating: 1440,
        Submissions: 300,

    },
    {
        id: 6,
        Name: 'leetcode',
        url: 'https://leetcode.com/',
        Solved: 504,
        Contest: 4,
        Rating: 1440,
        Submissions: 300,

    }
]

export const doughnutData = {
    labels: ['Codeforces', 'Codechef', 'Spoj', 'Hackerearth', 'Atcoder', 'Leetcode'],
    datasets: [
        {
            label: 'No of Questions solved by each platform',
            data: [213, 103, 52, 28, 116, 504],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#23C6C8',
                '#F8FF',
                '#00FF00'
            ],
            borderColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#23C6C8',
                '#F8FF',
                '#00FF00'

            ],
            borderWidth: 1,
        },
    ],

};