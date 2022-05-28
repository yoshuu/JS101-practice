# JS101-practice

## 練習一：印出一到九
請你分別用 for loop 以及 while 迴圈，印出 1~9。

預期輸出：

1
2
3
4
5
6
7
8
9

## 練習二：寫一個能夠印出 1~n 的函式
請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n。

print(1) 預期輸出：
1

print(3) 預期輸出：
1
2
3

print(9) 預期輸出：
1
2
3
4
5
6
7
8
9

## 練習三：寫一個能夠印出 n 個 * 的函式
寫一個函式 star，接收一個參數 n，並印出 n 個 *
（禁止使用內建函式 repeat）

star(1) 預期輸出：
*

star(5) 預期輸出：
"*****"
star(10) 預期輸出：
"**********"

## 練習四：寫一個能回傳 n 個 * 的函式
請寫出一個叫做 star 的 function 並且接受一個參數 n，能回傳 n 個 *。

star(1) 會回傳 *
star(5) 會回傳 "*****"

所以 console.log(star(5)) 的預期輸出是：
"*****"

## 練習五：判斷大小寫
請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。

isUpperCase("abcd") 正確回傳值：false

isUpperCase("Abcd") 正確回傳值：true

isUpperCase("ABCD") 正確回傳值：true

isUpperCase("aBCD") 正確回傳值：false

## 練習六：回傳第一個大寫字母以及它的 index
請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1。

position("abcd") 正確回傳值：-1

position("AbcD") 正確回傳值：A 0

position("abCD") 正確回傳值：C 2

## 練習七：回傳陣列裡面所有小於 n 的數的數量
請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n。

findSmallCount([1, 2, 3], 2) 預期回傳值：1

findSmallCount([1, 2, 3, 4, 5], 0) 預期回傳值：0

findSmallCount([1, 2, 3, 4], 100) 預期回傳值：4

## 練習八：回傳陣列裡面所有小於 n 的數的總和
請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和。

findSmallerTotal([1, 2, 3], 3) 正確回傳值：3

findSmallerTotal([1, 2, 3], 1) 正確回傳值：0

findSmallerTotal([3, 2, 5, 8, 7], 999) 正確回傳值：25

findSmallerTotal([3, 2, 5, 8, 7], 0) 正確回傳值：0

## 練習九：回傳陣列裡面所有小於 n 的數
請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）。

findAllSmall([1, 2, 3], 10) 正確回傳值：[1, 2, 3]

findAllSmall([1, 2, 3], 2) 正確回傳值：[1]
findAllSmall([1, 3, 5, 4, 2], 4) 正確回傳值：[1, 3, 2]

## 練習十：回傳陣列總和
請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。

sum([1, 2, 3]) 預期回傳值：6

sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0
