function isValidSudoku(board) {
    // for (let i = 0; i < board.length; i++) {
    //     board[i] = board[i].join('');
    // }
    for (let i = 0; i < board.length; i++) {
        board[i] = board[i].split('');
    }
    let res = splitboard(board);
    // console.log(res);
    // for (let i = 0; i < res.length; i++) {
    //     res[i] = res[i].join('');
    // }
    return res;
}

function splitboard(board) {

    // console.log(board);
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                for (let z = 1; z < 10; z++) {
                    s = z.toString();
                    // console.log('s =',s);
                    if (helper(s, i, j, board)) {
                        board[i][j] = s;
                        // console.log('now board');
                        if (splitboard(board)) {
                            return board;
                        } else {
                            board[i][j] = '.';
                            // return ;
                        }
                    }
                }
                return false;
            }
        }
    }
    return board;
}

function helper(s, i, j, board) {

    // for (let i = 0; i < board.length; i++) {
    //     board[i] = board[i].split('');
    // }
    // console.log('board',board);
    let a = Math.floor(i / 3) * 3;
    let b = Math.floor(j / 3) * 3;
    // console.log('a',a,'b',b);
    let arr = [];
    // console.log(board[0][1]);
    // arr.push(board[0][1]);
    // console.log(arr);

    for (let q = a; q <= a + 2; q++) {
        for (let w = b; w <= b + 2; w++) {
            arr.push(board[q][w]);
            if(board[q][w] === s) return false;
            // console.log('**arr',arr);
        }
    }
    // console.log('arr = ',arr);
    for (let t = 0; t < 9; t++) {
        // console.log('enter judge');
        if (board[i][t] === s || board[t][j] === s || arr.includes(s)) {
            // console.log(board[0][1],'**',s);
            return false;
        }
    }
    return true;
}

let case1 = ["..9748...",
    "7........",
    ".2.1.9...",
    "..7...24.",
    ".64.1.59.",
    ".98...3..",
    "...8.3.2.",
    "........6",
    "...2759.."
]
let case2 = [".87654321",
"2........",
"3........",
"4........",
"5........",
"6........",
"7........",
"8........",
"9........"]
let case3 = ['.5.3.....',
             '.....4.8.',
             '......21.',
             '.2....7.5',
             '.........',
             '1....8...',
             '...2.....',
             '8..57....',
             '6......3.']
// console.log(splitboard(case1));
console.log(isValidSudoku(case1));
