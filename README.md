## 📖 프로젝트명 : 싸이월드 클론코딩 _ 웹 기초 배우기
<img width="1023" alt="Image" src="https://github.com/user-attachments/assets/98cd2289-34fb-4526-8617-2da5e08175ae" />

## 💬 프로젝트 목표  

- 브라우저가 보여주는 **웹 페이지가 기본적으로 어떻게 구성되어 있는지** 학습하기 위해 추억의 서비스 싸이월드를 클론코딩 해보는 **개인 프로젝트** 💪

- HTML, CSS, JS만을 이용해 페이지를 열었을 때 보이는 기본적인 화면을 구현

- HTML, CSS, JS가 각각 웹 페이지에서 어떤 역할을 하는지 학습

<br><br>

## 🔧 구현 기능
div 태그를 이용해 좌/우측, 상/하단 영역 분리 <br>
좌측 영역은 항상 표시, 우측 영역을 세부 화면으로 사용 <br>
***우측 상단 탭 클릭으로 세부 페이지 변경 가능*** <br>
<br>
- 좌측 상단 간단한 프로필 정보 표시
- 좌측 하단 오늘의 기분 선택하여 표현 가능 ( select 태그 활용 )
<br>
### 홈 탭
![Image](https://github.com/user-attachments/assets/9f83a1dd-8bd8-48c8-a8b0-7fccf553ffbe)

- 우측 상단 업데이트 뉴스 ( 최근 게시한 글 ) 표현
- 우측 하단 업로드한 비디오 시청 화면 표현
- HTML 각 태그 종류 및 내부 내용 변경으로 표현 내용 변경 가능

### 쥬크박스 탭
![Image](https://github.com/user-attachments/assets/6607636c-9aab-4099-8dcd-7860df7ec4cb)

- 우측 상단 임의로 추가한 곡 정보 표시 ( 앨범아트, 곡 제목, 아티스트 )
- 우측 하단 재생목록 모방 ( 인풋태그 체크박스타입 활용 )

### 게임 탭
![Image](https://github.com/user-attachments/assets/ca67f60d-daa9-4d05-a84c-0bfb37ece2ed)

- 상단 끝말잇기 게임 플레이 기능
- 하단 랜덤 로또 번호 6가지 추첨 기능
- 기능 구현은 JavaScript 활용, script태그로 소스 적용


## 👊 Trouble Shooting
문제 1. 스타일 코드가 의도하지 않은 곳에 적용됨
* 문제 상황 디테일 : 주크박스 우측 하단 테이블 컬럼명 부분 색상 grey처리가 아래 튜플명 부분에도 적용됨
* 문제 해결 : jukebox.html 파일 태그 및 속성 세분화 (th 태그와 tr태그로 세분화 후 공통 적용할 사항만 동일 클래스로 속성 부여) -> 해결

문제 2. 게임 탭에서 끝말잇기 기능이 작동하지 않음
* 문제 상황 디테일 : 입력 버튼을 눌렀을 때 무반응 현상
* 문제 해결 : script태그 내 game.js파일 경로 오타 발견, 파일 절대 경로 복사 후 붙여넣기하여 해결 -> 해결
<br>
  * 근본적인 문제는 해결했으나 다른 PC로 옮겨 작업했을 때 문제 재발생
  * 파일 경로를 상대 경로로 변경하여 html파일 위치로부터 스크립트파일(game.js)을 찾도록 변경 -> 해결

## ✏️ 프로젝트를 통해 공부한 내용 - 아래 Velog에 상세 정리
<details>
<summary>Velog 링크</summary>
[HTML, CSS, JS가 무엇인가?](https://velog.io/@yechani99/Springboot-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-https-%EB%A1%9C%EC%BB%AC%EB%A1%9C-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
</details>
## 🙋 
1. 왼쪽 공간에서 블로그에 글을 쓰는 것처럼 README를 작성해주세요!   
2. 👆 위에 툴바창에 보이는 다양한 스타일을 적용해보세요!   
3. 다 작성하셨나요? 예쁘게 잘 나왔는지 오른쪽 미리보기 화면에서 확인해보세요.   
4. 오른쪽에 작성한 글 전체를 복사하세요!   
(저장을 원할 경우 `Ctrl + S` / `Command + S` 또는 툴바창 제일 오른쪽에 `공유하기 아이콘`을 클릭해주세요.)   
5. 이제 여러분의 **README.md** 에 붙여넣으세요!   
(저장 또는 공유를 할 경우 링크를 다른 사람에게 전달할 수 있어요! 😀)  

## 🛠 기능 엿보기   

1. [❓ EASYME.md가 뭐예요?  ](#-easymemd가-뭐예요)
2. [🙋‍♀️ 좀 더 구체적으로 가르쳐주세요!](#-좀-더-구체적으로-가르쳐주세요)
3. [🛠 기능 엿보기](#-기능-엿보기)
    - [Header](#header)   
    - [Text Style1](#text-style1)   
    - [Text Stlye2](#text-style2)   
    - [List](#list)      
    - [Link](#link)   
    - [Code Block](#code-block)   
    - [Table](#table)   
   
## Header
- # H1 Header   
- ## H2 Header   
- ### H3 Header   
- #### H4 Header   
- ##### H5 Header   
- ###### H6 Header   

<br>   

## Text Style1
- **진하게** (`Ctrl(Command) + B`)   
- *기울이기* (`Ctrl(Command) + I`)   
- <s>취소선</s> (`Ctrl(Command) + D`)   
- <u>밑줄</u> (`Ctrl(Command) + U`)   

<br>   
   
## Text Style2

>인용문   
   
<details><summary>접고 펴는 기능
</summary>

*Write here!*
</details>

- EASYME.md를 드래그하고 상단에 `Aa` 아이콘을 누르면? 👉 Easyme.md   
- EASYME.md를 드래그하고 상단에 `A` 아이콘을 누르면? 👉 EASYME.MD   
- EASYME.md를 드래그하고 상단에 `a` 아이콘을 누르면? 👉 easyme.md   
   
<br>   
   
## List   
### Table of contents
1. [title1](#write-title-here!)   
2. [title2](#only-lowercase)   
3. [title3](#use"-"instead-of-spacing-words)   
4. [title4](#example)   
    - [❓ EASYME.md가 뭐예요?](#-easymemd가-뭐예요)   
    - [🛠 기능 엿보기](#-기능-엿보기)
   
### Unordered list   
- unordered list1   
- unordered list2   
- unordered list3   
- unordered list4   
   
### Ordered list   
1. ordered list1   
2. ordered list2   
3. ordered list3   
4. ordered list4   
   
<br>   
   
## Link   
### General link
- [🚗 Visit EASYME.md's Repo](https://github.com/EASYME-md/client)   
- [🙋‍♂️ Visit ONE:A's Github](https://github.com/onealog)

### Image link
![onealog](/assets/readme/easyme.png)   
   
<br>   
   
## Code Block   
### Code inline
- `console.log('Hello EASYME.md!');`   
   
### Code block
```js
function makeDeveloper(name, language) {
  if (name === 'ONE:A' && language === 'JavaScript') {
    return 'perfect!';
  }

  return false;
}

makeDeveloper('ONE:A', 'JavaScript');
```

<br>   
   
## Table   


| title1 | title2 | title3 |
| --- | --- | --- |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |


<br>   

