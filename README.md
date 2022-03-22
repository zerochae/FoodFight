# FoodFight

| 개발자 |                            Demo Link                            |        제작 기간        |
| :----: | :-------------------------------------------------------------: | :---------------------: |
| 권영채 | [ctrl 키를 누르고 클릭하세요🚀](https://food-fight.vercel.app/) | 2022-03-16 ~ 2022-03-23 |

## 실행 방법

```
yarn install
yarn dev (json-server 와 같이 실행 됩니다.)
```

## 기술 스택

- React
- Next.js
- TypeScript
- styled-components

## 요구 사항

**화면**

![header-footer](https://user-images.githubusercontent.com/84373490/159482130-8a1fdf85-b12d-4d89-8b81-e12533cba815.jpg)

✔️ 헤더 - 바디 - 푸터 형식으로 표현

✔️ 헤더에는 프로젝트이름(`AWESOME FOOD STORE`)과 메뉴(`ABOUT` + `STORE`) 표현

✔️ 푸터에는 카피라이트 추가(`@ 2020 내이름`)

✔️ ABOUT엔 간단한 프로젝트 소개 문구 표현 (정적 페이지)

![image](https://user-images.githubusercontent.com/84373490/159482465-a0306eea-eed8-4c4d-8e2e-8785dae76bec.png)

✔️ STORE 리스트는 정사각형 이미지 그리드로 표현 (REST API 사용)

![modal](https://user-images.githubusercontent.com/84373490/159482960-2e59328e-5a57-4185-a0e6-729ad355524d.gif)

✔️ 하나의 아이템을 선택하면 팝업을 띄우고 맛집 이름과 사진, 설명, 홈페이지 바로가기(url이 있을 경우)를 표현

✔️ 팝업 오른쪽 위에 X버튼을 넣고 누르면 팝업이 닫힘

![error](https://user-images.githubusercontent.com/84373490/159486006-a4789b1c-b3a3-49ce-954a-ecc0525c5c3b.gif)

✔️ 정의하지 않은 url로 접근시 에러 페이지를 보여주고 5초 후 메인 페이지로 이동

## 개발 중 이슈

1. Next.js with Styled Components

  - 새로고침 시 스타일이 풀려버리는 현상
    - 해결방법: `.babelrc` 추가
  -  초기 렌더링 시 잠시 스타일이 적용되어 있지 않은 현상
  -  ![initialrender](https://user-images.githubusercontent.com/84373490/159487329-0cd31264-7e3e-4ac8-9b09-53129352438a.gif)
  - js(ts)로 쓰여진 스타일을 읽기 전에 서버에서 렌더 되어 화면에 나타나기 때문에 발생하였습니다.
  - 사용자 경험 측면에서 좋지 못합니다.
  - 
  