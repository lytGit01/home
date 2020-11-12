import Vue from 'vue';
Vue.mixin({
  methods: {
    ctrlC: function (e) {
      const curNOde = e.target;
      const div = curNOde.nodeName === 'EM' ? curNOde.parentNode.nextElementSibling : curNOde.nextElementSibling;
      // @ts-ignore
      if (document.body.createTextRange) {
        // @ts-ignore
        const range = document.body.createTextRange();
        range.moveToElementText(div);
        range.select();
      } else if (window.getSelection) {
        const selections: any = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(div);
        selections.removeAllRanges();
        selections.addRange(range);
      } else {
        throw new Error('none');
      }
      document.execCommand('Copy'); // 执行浏览器复制命令
    },
  },
});
