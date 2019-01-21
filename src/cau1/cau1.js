var array = [1, 6, 10, 9, 7, 3, 2, 4, 13, 11, 30, 18];
// ! Cách 1: Em tạo 1 array mới bằng cách lấy số X trừ đi từng phần tử của array.
// ! Sau đó kiểm tra tính đối xứng
// ! Có thể sắp xếp trước, sau đó tính 2 cận để loại bỏ những trường hợp input quá lớn hoặc quá nhỏ.
function findPair1(A, X) {
    var B = A.map(function (a) {
        return X - a;
    });
    for (var i = 0; i < A.length; i++) {
        for (var k = 0; k < B.length; k++) {
            if (A[i] === B[k])
                console.log("Cặp vị trí thỏa mãn: (%d, %d) - (%d, %d)", i, k, A[i], A[k]);
        }
    }
}
// ! Cách 2: Em cộng lần lượt
function findPair2(A, X) {
    for (var i = 0; i < A.length - 1; i++) {
        for (var k = i + 1; k < A.length; k++) {
            if (A[i] + A[k] === X)
                console.log("Cặp vị trí thỏa mãn: (%d, %d) - (%d, %d)", i, k, A[i], A[k]);
        }
    }
}
findPair1(array, 13);
console.log("==============================");
findPair2(array, 13);
console.log("============== Cả 2 cách trên đều có độ phức tạp là O(n*n)");
