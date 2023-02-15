// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const input = document.getElementById('content');
const writeBtn = document.querySelector("button");
const all = document.querySelectorAll("p");

// 클릭 된 요소를 저장하기 위한 전역 변수 p가아니라 td의 위치를 알아야함
let targetEl;

/*all.forEach(function(a){
  a.addEventListener("click",function(e){
    targetEl = e.target.innerHTML;
    date.setAttribute("value",`2023년 2월 ${targetEl}`)
  })
})*/



calendar.addEventListener("click", function(e){
  if (e.target.tagName === "P"){  
    /*targetEl = e.target.innerHTML
    console.log(targetEl)
    date.setAttribute("value",`2023년 2월 ${targetEl}일`)*/
    date.value = `2023년 2월 ${e.target.textContent}일`;
    console.log("parent",e.target.parentNode);  //클릭한 p의 부모인 해당td가 선택
    targetEl = e.target.parentNode;
  } else if (e.target.tagName === 'TD') {
    const day = e.target.children[0].textContent;
    date.value = `2023년 2월 ${day}일`;
    targetEl = e.target;
  } else if (e.target.tagName === "DIV") {
    e.target.remove();
  } //이렇게 지워도 됨
})

function writeSchedule(){
  if(input.value === "" && date.value === "") {
    input.setAttribute("placeholder","내용을 입력하세요 !");
    date.setAttribute("placeholder","날짜를 선택하세요 !");
    return ;
  } else if (input.value === "") {
    input.setAttribute("placeholder","내용을 입력하세요 !");
    return ;
  } else if (date.value === ""){
    date.setAttribute("placeholder","날짜를 선택하세요 !");
  }
  const addDiv = document.createElement("div");
  addDiv.textContent = input.value;

  /*addDiv.addEventListener("click",function (){
    addDiv.remove();
  })*/

  targetEl.append(addDiv);
  input.value = ""
}