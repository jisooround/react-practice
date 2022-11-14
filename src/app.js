/* @jsx createElement */

import { createDOM, createElement, render } from "./react";
// Type 1. 직관적인 작성 방식. (리터럴)
// 구조 확인에 용이하다.
// const node = {
//   tag: 'p',
//   props: {},
//   children: [
//     { tag: 'h1',
//       props: {},
//       children: [ "React 만들기"],
//     },
//     {
//       tag: 'ul',
//       props: {},
//       children: [
//         {
//           tag: 'li',
//           props: { 
//             style : "color:red",
//           },
//           children: ["첫 번째 아이템"]
//         },
//         {
//           tag: 'li',
//           props: {
//             style : "color:blue",
//           },
//           children: ["두 번째 아이템"]
//         },
//         {
//           tag: 'li',
//           props: {
//             style : "color:green",
//           },
//           children: ["세 번째 아이템"]
//         },
//       ]
//     }
//   ],
  
// };

// Type 2. 함수를 이용한 구조
// 'Type 1'보다 코드량을 줄였다는 장점이 있다.
// const node = createElement('p', {},
// createElement('h1', {}, "React 만들기"),
// createElement('ul', {},
//   createElement('li', { style : "color:red" }, "첫 번째 아이템"),
//   createElement('li', { style : "color:blue" }, "두 번째 아이템"),
//   createElement('li', { style : "color:green" }, "세 번째 아이템"),
//   )
// ); 

const node = <p>
  <h1>React 만들기</h1>
  <ul>
    <li style="color: red">첫 번째 아이템</li>
    <li style="color: blue">두 번째 아이템</li>
    <li style="color: green">세 번째 아이템</li>
  </ul>
</p>
 
console.log(node);

render(node, document.querySelector('#root'));