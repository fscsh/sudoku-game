function test() {
    let width = [];
    let board = [];
    // console.log(board);


    //对角线生成随机数；
    ///left-top;
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let j = 0;
    let ranNums = [];
    let count = 0;
    let tmp = 9
    for (let t = 0; t < 3; t++) {
        j = 0;
        ranNums = [];
        count = 0;
        for (let i = tmp; i > 0; i--) {
            if (count === 3) {
                break;
            }
            j = Math.floor(Math.random() * (i));
            ranNums.push(nums[j] + '');
            // console.log('i', i, 'j', j, 'nums[j]' ,nums[j]+'');
            nums.splice(j, 1);
            count++;
            // console.log('ranNums', ranNums);
            // console.log('');
        }
        tmp = tmp - 3;
        for (let i = 8; i >= 3; i--) {
            ranNums.push('.');
        }

        board.push(ranNums.slice());
    }

    //middle;

    nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    tmp = 8;
    for (let t = 3; t < 6; t++) {

        let j = 0;
        let ranNums = [];
        let count = 0;
        for (let i = 0; i <= 2; i++) {
            ranNums.push('.');
        }
        for (let i = tmp; i >= 0; i--) {
            if (count === 3) {
                break;
            }
            j = Math.floor(Math.random() * (i + 1));
            ranNums.push(nums[j] + '');
            nums.splice(j, 1);
            count++;

        }
        tmp = tmp - 3;

        for (let i = 6; i <= 8; i++) {
            ranNums.push('.');
        }

        board.push(ranNums.slice());
    }

    //right-bottom;

    nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    tmp = 8;
    for (let t = 6; t < 9; t++) {

        let j = 0;
        let ranNums = [];
        let count = 0;
        for (let i = 0; i <= 5; i++) {
            ranNums.push('.');
        }
        for (let i = tmp; i >= 0; i--) {
            if (count === 3) {
                break;
            }
            j = Math.floor(Math.random() * (i + 1));
            ranNums.push(nums[j] + '');
            nums.splice(j, 1);
            count++;

        }
        tmp = tmp - 3;

        board.push(ranNums.slice());
    }
    return board;
    // return splitboard(board);
}
//填充其他并检查；

// function splitboard(board) {
//
//     // console.log(board);
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             if (board[i][j] === '.') {
//                 // let sucesscreat = 0;
//                 // while (sucesscreat = 0) {
//                 //应该是这里错
//                 while (i !== 9 && j !== 9) {
//                     // for (let s = 1; s < 10; s++) {
//                     let s = Math.floor(Math.random() * (8)) + 1; //随机填充其他；
//                     s = s.toString();
//                     console.log(board);
//                     if (helper(s, i, j, board)) {
//                         board[i][j] = s;
//                         // console.log('now board');
//                         if (splitboard(board)) {
//                             // sucesscreat =1;
//                             return board;
//                         } else {
//                             board[i][j] = '.';
//                             // return ;
//                         }
//                         // }
//
//                     }
//
//                 }
//                 // return false;
//             }
//         }
//     }
//     return board;
// }

function helper(s, i, j, board) {

    // for (let i = 0; i < board.length; i++) {
    //     board[i] = board[i].split('');
    // }
    // console.log('board',board);
    let a = Math.floor(i / 3) * 3;
    let b = Math.floor(j / 3) * 3;
    // console.log('a',a,'b',b);
    // let arr = [];
    // console.log(board[0][1]);
    // arr.push(board[0][1]);
    // console.log(arr);

    for (let q = a; q <= a + 2; q++) {
        for (let w = b; w <= b + 2; w++) {
            // arr.push(board[q][w]);
            if (board[q][w] === s) return false;
            // console.log('**arr',arr);
        }
    }
    // console.log('arr = ',arr);
    for (let t = 0; t < 9; t++) {
        // console.log('enter judge');
        if (board[i][t] === s || board[t][j] === s) {
            // console.log(board[0][1],'**',s);
            return false;
        }
    }
    return true;
}



console.log(test());
