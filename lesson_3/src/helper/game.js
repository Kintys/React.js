export default function checkWinner(board) {
    const winningLines = [
        [
            [0, 0],
            [0, 1],
            [0, 2]
        ],
        [
            [1, 0],
            [1, 1],
            [1, 2]
        ],
        [
            [2, 0],
            [2, 1],
            [2, 2]
        ],

        [
            [0, 0],
            [1, 0],
            [2, 0]
        ],
        [
            [0, 1],
            [1, 1],
            [2, 1]
        ],
        [
            [0, 2],
            [1, 2],
            [2, 2]
        ],

        [
            [0, 0],
            [1, 1],
            [2, 2]
        ],
        [
            [0, 2],
            [1, 1],
            [2, 0]
        ]
    ]

    for (const line of winningLines) {
        const [[r1, c1], [r2, c2], [r3, c3]] = line

        const v1 = board[r1][c1]
        const v2 = board[r2][c2]
        const v3 = board[r3][c3]

        if (v1 !== 0 && v1 === v2 && v2 === v3) {
            return v1
        }
    }
    return 0
}
