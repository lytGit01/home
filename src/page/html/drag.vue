<template>
    <div class="drag">
        <h3>解释了什么是源对象和目标对象后，回归前端中的拖拽API，由上面的操作我们可以得出几个函数</h3>
        <h4>被拖动的源对象可以触发的事件：</h4>
        (1)ondragstart：源对象开始被拖动<br/>
        (2)ondrag：源对象被拖动过程中(鼠标可能在移动也可能未移动)<br/>
        (3)ondragend：源对象被拖动结束<br/>
       <h3>拖动源对象可以进入到上方的目标对象可以触发的事件:</h3>
        (1)ondragenter：目标对象被源对象拖动着进入<br/>
        (2)ondragover：目标对象被源对象拖动着悬停在上方<br/>
        (3)ondragleave：源对象拖动着离开了目标对象<br/>
        (4)ondrop：源对象拖动着在目标对象上方释放/松手<br/>
        拖拽API总共就是7个函数！！
    </div>
</template>
<style scoped>
.drag {
    font-size: 24px;
}
</style>