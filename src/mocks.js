export const users = [
    {
        userId: 0,
        name: '아구몬',
    },
    {
        userId: 1,
        name: '피카츄',
    },
    {
        userId: 2,
        name: '꼬북이',
    },
    {
        userId: 3,
        name: '파이리',
    },
    {
        userId: 4,
        name: '야도란',
    },
    {
        userId: 5,
        name: '테리어몬',
    },
    {
        userId: 6,
        name: '파닥몬',
    },
    {
        userId: 7,
        name: '가트몬',
    },
    {
        userId: 8,
        name: '메타몽',
    },
    {
        userId: 9,
        name: '내루미',
    },
];
export const voteList = [
    {
        id: 0,
        title: '오늘 뭐 먹지?',
        userId: 0,
        startDate : new Date('2021-05-03'),
        endDate : new Date('2021-05-03'),
        totalVoteCnt : 7,
        voterList : [1,2,3,4,5,6,7],
        voteItem : [
            {
                name: '짜장면',
                count: 2,
            },
            {
                name: '짬뽕',
                count: 1,
            },
            {
                name: '볶음밥',
                count: 4,
            }
        ]
    },
    {
        id: 1,
        title: '내일 뭐하지?',
        userId: 1,
        startDate : new Date('2021-05-15'),
        endDate : new Date('2021-05-25'),
        totalVoteCnt : 7,
        voterList : [1,2,3,4,5,6,7],
        voteItem : [
            {
                name: '영화 보기',
                count: 2
            },
            {
                name: '책 읽기',
                count: 1
            },
            {
                name: '청소하기',
                count: 4
            }
        ]
    }
];