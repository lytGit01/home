import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
// import ScrollBar from 'scroll.js'
import Asd from './views/aside.vue'; // @ is an alias to /src
let Home = class Home extends Vue {
    constructor() {
        super();
        this.asideChange = false;
        // @ts-ignore
        //  this.scrollClass = new ScrollBar('contPar', 'contBox', {
        //   opacity: 1,
        //   background: 'red'
        // });
    }
    // methods
    asideShow() {
        this.asideChange = !this.asideChange;
    }
    asideHide() {
        this.asideChange = false;
    }
};
Home = __decorate([
    Component({
        components: {
            Asd,
        },
    })
], Home);
export default Home;
//# sourceMappingURL=App.vue.js.map