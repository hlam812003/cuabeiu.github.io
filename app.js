const randomButton = document.querySelector('button');
const changeLetter = document.querySelector('h1');
const listContainer = document.querySelector('#result');
const arr = ['Đúng hong nè', 'Sai hẻ', 'Nghĩ kĩ cui', 'Chắc chưa má', 'Hok có thay đổi à nhen', 'Ò hó', 'U là trời đc đấy =))', 'Iu anh hem', 'Hong Có Thay Đổi Lựa Chọn À Nha'];
const arr2 = ['Dưỡng môi', 'Má Hồng', 'Gấu Bông', 'Thịt Nướng', 'Gà Rán Iu Dấu', 'Thịt Bò Siu Thưm Ngon', 'Trang Sức', '100K Đồng', '20K Đồng'];


randomButton.addEventListener('click', function() {
    randomButton.innerText = arr[Math.floor(Math.random() * arr.length)];
    changeLetter.innerText = arr2[Math.floor(Math.random() * arr2.length)];
    const resultRandom = changeLetter.innerText;
    const result = document.createElement('li');
    result.append(resultRandom);
    listContainer.appendChild(result);
});
