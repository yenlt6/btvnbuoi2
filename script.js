console.log("RUN SCRIPT");
// Đổi style của tiêu đề Our companies thành chữ in đậm và kích thước 32px
// Gợi ý: Sử dụng .style.fontWeight và .style.fontSize

document.getElementsByTagName("h2")[0].style.fontWeight = "bold";
document.getElementsByTagName("h2")[0].style.fontSize = "32px";
//hoac lam theo cach o duoi
document.getElementsByClassName("title-section")[0].style.fontWeight="bold"
document.getElementsByClassName("title-section")[0].style.fontWeight="900"
document.getElementsByClassName("title-section")[0].style.fontSize="32px"

// Đổi màu nền của phần footer thành màu #0984e3
// Gợi ý: Sử dụng .style.backgroundColor
document.getElementById("OMG-footer").style.backgroundColor="#0984e3"


// Đổi đoạn text ở footer từ "© 2020 One Mount Group, JSC." thành "© 2021 One Mount Group, JSC."
// Gợi ý: Sử dụng .innerText
document.getElementsByClassName("footer-textarea")[2].innerText="© 2021 One Mount Group, JSC."
// Đổi ảnh đầu tiên thành ảnh onhousing.png
// Gợi ý: Sử dụng .src

document.getElementsByTagName("img")[0].src="img/onhousing.png"