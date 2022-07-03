


export const MockData = [
    {
        platform: 1,
        Name: 'codeforces',
        url: 'https://codeforces.com/',
        Solved: 213,
        Contest: 4,
        Rating: 1440,
        Submissions: 300,

    },
    {
        platform: 2,
        Name: 'codechef',
        url: 'https://codechef.com/',
        Solved: 103,
        Contest: 4,
        Rating: 1440,
        Submissions: 300,

    },
    {
        platform: 3,
        Name: 'spoj',
        url: 'https://spoj.com/',
        Solved: 52,
        Contest: 4,
        Rating: 1440,
        Submissions: 300,

    },
    {
        platform: 4,
        Name: 'hackerearth',
        url: 'https://www.hackerearth.com/',
        Solved: 28,
        Contest: 4,
        Rating: 1440,
        Submissions: 300,

    },
    {
        platform: 5,
        Name: 'atcoder',
        url: 'https://atcoder.jp/',
        Solved: 116,
        Contest: 4,
        Rating: 1440,
        Submissions: 300,

    },
    {
        platform: 6,
        Name: 'leetcode',
        url: 'https://leetcode.com/',
        Solved: 504,
        Contest: 4,
        Rating: 1440,
        Submissions: 300,

    }
];



export const Columns = [
    {
        Header: 'Platform',
        accessor: 'platform' as const,
    },
    {
        Header: 'Name',
        accessor: 'Name' as const ,
    },
    {
        Header: 'Solved',
        accessor: 'Solved' as const,
    },
    {
        Header: 'Contest',
        accessor: 'Contest' as const,
    },
    {
        Header: 'Rating',
        accessor: 'Rating' as const,
    },
    {
        Header: 'Submissions',
        accessor: 'Submissions' as const,
    }
];



export const doughnutData = {
  labels: [
    "Codeforces",
    "Codechef",
    "Spoj",
    "Hackerearth",
    "Atcoder",
    "Leetcode",
  ],
    datasets: [
      {
        label: "No of Questions solved by each platform",
        data: [213, 103, 52, 28, 116, 504],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#23C6C8",
          "#F8FF",
          "#00FF00",
        ],
        borderColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#23C6C8",
          "#F8FF",
          "#00FF00",
        ],
        borderWidth: 1,
      },
    ],
};