'use strict';
// function getElementWidth(content, padding, border) {
//   const contentWidthg = Number.parseInt(content);
//   const paddingWidth = Number.parseInt(padding);
//   const borderWidth = Number.parseInt(border);

//   const value = contentWidthg + paddingWidth * 2 + borderWidth * 2;
//   return value;
// }

// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200

// не знайшла цього в конспекті чи можливо пропустила, підскажіть де шукати?
function getElementWidth(content, padding, border) {
  const contentWidth = Number.parseFloat(content);
  const paddingWidth = Number.parseFloat(padding);
  const borderWidth = Number.parseFloat(border);

  const value = contentWidth + paddingWidth * 2 + borderWidth * 2;
  return value;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
