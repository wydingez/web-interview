## 超长动态显示tooltip
`参考：` [Element-talbe](https://github.com/ElemeFE/element/blob/473ef53f9317ad6ca8c629655982244902751e63/packages/table/src/table-body.js#L241-L274)
```js
handleCellMouseEnter(event, row) {
  const table = this.table;
  const cell = getCell(event);


  if (cell) {
    const column = getColumnByCell(table, cell);
    const hoverState = table.hoverState = { cell, column, row };
    table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
  }


  // 判断是否text-overflow, 如果是就显示tooltip
  const cellChild = event.target.querySelector('.cell');
  if (!(hasClass(cellChild, 'el-tooltip') && cellChild.childNodes.length)) {
    return;
  }
  // use range width instead of scrollWidth to determine whether the text is overflowing
  // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
  const range = document.createRange();
  range.setStart(cellChild, 0);
  range.setEnd(cellChild, cellChild.childNodes.length);
  const rangeWidth = range.getBoundingClientRect().width;
  const padding = (parseInt(getStyle(cellChild, 'paddingLeft'), 10) || 0) +
    (parseInt(getStyle(cellChild, 'paddingRight'), 10) || 0);
  if ((rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) && this.$refs.tooltip) {
    const tooltip = this.$refs.tooltip;
    // TODO 会引起整个 Table 的重新渲染，需要优化
    this.tooltipContent = cell.innerText || cell.textContent;
    tooltip.referenceElm = cell;
    tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
    tooltip.doDestroy();
    tooltip.setExpectedState(true);
    this.activateTooltip(tooltip);
  }
},
```
