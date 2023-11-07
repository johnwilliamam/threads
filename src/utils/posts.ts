export const posts = [{
    id: 1,
    user: {
        profilePicture: {
            src: 'https://github.com/johnwilliamam.png',
            initials: 'JW',
        },
        name: 'johnwilliamam',
    },
    createdAt: '2023-09-23T20:33:00',
    content: `Olha só que incrivel esse clone da última rede social, promissora diga-se de passagem, do gênio Mark Zuckerberg!
    Você já usa o Threads ou ainda prefere a X? 
    :D`,
    replies: {
        count: 2,
        avatars: [{
            src: 'https://github.com/johnwilliamam.png',
            fallbackInitials: 'JW',
        },
        {
            src: 'https://github.com',
            fallbackInitials: 'JW',
        }]
    },
    likes: 99,
},
{
    id: 2,
    user: {
        profilePicture: {
            src: 'https://github.com',
            initials: 'JW',
        },
        name: 'johnwilli_am',
    },
    createdAt: '2023-09-23T20:33:00.00Z',
    content: `Que interessante não?`,
    replies: {
        count: 1,
        avatars: [{
            src: 'https://github.com/johnwilliamam.png',
            fallbackInitials: 'JW',
        }]
    },
    likes: 5,
}
]