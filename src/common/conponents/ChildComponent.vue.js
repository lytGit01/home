v - model;
"a";
"$emit('update:p', a)" /  >
    Message;
is: {
    {
        a;
    }
}
/p>
    < /div>
    < /template>
    < script >
;
export default {
    model: {
        prop: 'p',
        event: 'change'
    },
    props: {
        // 这将允许 `value` 属性用于其他用途
        value: String,
        // 使用 `title` 代替 `value` 作为 model 的 prop
        p: {
            default: 'Default title'
        }
    },
    data: () => {
        return {
            a: 0
        };
    },
    mounted() {
        this.a = this.p;
    }
}
    < /script>;
//# sourceMappingURL=ChildComponent.vue.js.map