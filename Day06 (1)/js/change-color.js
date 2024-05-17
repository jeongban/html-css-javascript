// var 자료형 형식 X 숫자, 문자, 문자열, 객체
// heading 변수명
// # 까먹었어요. id heading
var heading = document.querySelector('#heading');
var check = true; // 불리언값 변수 선언
//heading 객체가 클릭이 되면 대입이 되어 있는 
//function  호출 (함수)
// 함수 아무때 동작을 호출 할 수 있는 블록, 
// 메소드 클래스 안에서 동작 호출 할 수 있는 블록
heading.onclick = function() {
    if(check == true){
        // heading h1 객체 style color => red
        heading.style.color = "red";
        // check false 변경
        check =false;
    }
    else{
        heading.style.color = "blue";
        check = true;
    }
    
}