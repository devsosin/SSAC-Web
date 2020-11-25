/*
    변수 스코프 : 변수가 영향을 미치는 범위
     - 글로벌 스코프 : 프로그래밍 영역 전체
     - 로컬 스코프 : 프로그래밍 영역 중 특정 영역
      - 함수 스코프
      - 블럭 스코프
    
    var : 글로벌, 함수 스코프 구분 가능
    let : 글로벌, 함수, 블럭 스코프 구분 가능 (엄격함)
*/

function myfun(){
    var a = 5;
    let b = 10;
    console.log(a+b);
}

myfun();
c = 10;
function test(){
    // console.log(a-b);
    // 블럭 스코프
    if(c>0){
        var d = 5;
        let e = 3;
        console.log(c+d+e);
    }
    console.log(c-d); //e는 인식 못함
}

test();