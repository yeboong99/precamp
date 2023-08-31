const fruit = [
    {number: 1, title: "레드향"},
    {number: 2, title: "샤인머스켓"},
    {number: 3, title: "산청딸기"},
    {number: 4, title: "한라봉"},
    {number: 5, title: "사과"},
    {number: 6, title: "애플망고"},
    {number: 7, title: "딸기"},
    {number: 8, title: "천혜향"},
    {number: 9, title: "과일선물세트"},
    {number: 10, title: "귤"}]
// undefined

for(let k = 0; k < fruit.length; k++){
    console.log(fruit[k].number + " " + fruit[k].title)
}
// VM3634:2 1 레드향
// VM3634:2 2 샤인머스켓
// VM3634:2 3 산청딸기
// VM3634:2 4 한라봉
// VM3634:2 5 사과
// VM3634:2 6 애플망고
// VM3634:2 7 딸기
// VM3634:2 8 천혜향
// VM3634:2 9 과일선물세트
// VM3634:2 10 귤
// undefined

for(let k = 0; k < fruit.length; k++){
    console.log(`${fruit[k].number} ${fruit[k].title}`)
}
// VM3695:2 1 레드향
// VM3695:2 2 샤인머스켓
// VM3695:2 3 산청딸기
// VM3695:2 4 한라봉
// VM3695:2 5 사과
// VM3695:2 6 애플망고
// VM3695:2 7 딸기
// VM3695:2 8 천혜향
// VM3695:2 9 과일선물세트
// VM3695:2 10 귤
// undefined



// ``사용 좋은 예 : 문자열과 데이터가 막 섞여서 사용될 때
for(let k = 0; k < fruit.length; k++){
    console.log(`과일 차트 ${fruit[k].number}위는 ${fruit[k].title} 입니다.`)
}
// VM3716:2 과일 차트 1위는 레드향 입니다.
// VM3716:2 과일 차트 2위는 샤인머스켓 입니다.
// VM3716:2 과일 차트 3위는 산청딸기 입니다.
// VM3716:2 과일 차트 4위는 한라봉 입니다.
// VM3716:2 과일 차트 5위는 사과 입니다.
// VM3716:2 과일 차트 6위는 애플망고 입니다.
// VM3716:2 과일 차트 7위는 딸기 입니다.
// VM3716:2 과일 차트 8위는 천혜향 입니다.
// VM3716:2 과일 차트 9위는 과일선물세트 입니다.
// VM3716:2 과일 차트 10위는 귤 입니다.
// undefined
