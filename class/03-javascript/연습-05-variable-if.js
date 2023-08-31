
// 데이터타입, 연산자 실습
1+1
// 2
1 + "만원"
// '1만원'
1 + "1"
// '11'
1 - "1"
// 0
"코드" + "캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
true || false
// true
!false
// true
!true
// false





// MDN WEB DOCS : 웹개발 공부하면서 문법 헷갈릴 때 문법사전

//조건문 실습 1
if(1 + 1 === 2){
    console.log("정답입니다")
} else{
    console.log("틀렸습니다")
}
// VM799:2 정답입니다
// undefined
if(true){
    console.log("정답입니다")
} else{
    console.log("틀렸습니다")
}
// VM821:2 정답입니다
// undefined
if(!true){
    console.log("정답입니다")
} else{
    console.log("틀렸습니다")
}
// VM824:4 틀렸습니다
// undefined
if(0){
    console.log("정답입니다")
} else{
    console.log("틀렸습니다")
}
// VM828:4 틀렸습니다
// undefined
if(1){
    console.log("정답입니다")
} else{
    console.log("틀렸습니다")
}
// VM860:2 정답입니다
// undefined
if(3){
    console.log("정답입니다")
} else{
    console.log("틀렸습니다")
}
// VM864:2 정답입니다
// undefined
if("앙"){
    console.log("정답입니다")
} else{
    console.log("틀렸습니다")
}
// VM871:2 정답입니다



//조건문 실습 2
const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}
// undefined
profile
// {name: '철수', age: 12, school: '다람쥐초등학교'}
if(profile.name >= 20){
    console.log("성인입니다.")
}else if(profile.age >= 8){
    console.log("학생입니다.")
}else if(profile.age > 0){
    console.log("어린이입니다.")
}else{
    console.log("잘못 입력하셨습니다.")
}
// VM1844:4 학생입니다.
// undefined
