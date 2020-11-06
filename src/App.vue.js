import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import Asd from './views/aside.vue'; // @ is an alias to /src
let Home = class Home extends Vue {
    constructor() {
        super();
        this.asideChange = false;
    }
    // methods
    asideShow() {
        this.asideChange = !this.asideChange;
    }
    asideHide() {
        this.asideChange = false;
    }
};
Home = tslib_1.__decorate([
    Component({
        components: {
            Asd,
        },
    })
], Home);
export default Home;
//# sourceMappingURL=App.vue.js.map