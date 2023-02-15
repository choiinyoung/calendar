// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const writeBtn = document.querySelector("button");
const all = document.querySelectorAll("p");

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

/*all.forEach(function(a){
  a.addEventListener("click",function(e){
    targetEl = e.target.innerHTML;
    date.setAttribute("value",`2023년 2월 ${targetEl}`)
  })
})*/
calendar.addEventListener("click", function(e){
  if (e.target.tagName === "P"){
    targetEl = e.target.innerHTML
    console.log(targetEl)
    date.setAttribute("value",`2023년 2월 ${targetEl}일`)
  } 
})

function writeSchedule(){
  
}