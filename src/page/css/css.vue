<template>
    <!-- <div id="cssBox">
        <div class="left"></div>
        <div class="right"></div>
    </div> -->
    <div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  mounted() {
      },
  },)
export default class Home extends Vue {
    constructor() {
        super();
    }
     

};
</script>
<style lang="scss" scoped>
// #cssBox{
//     width: 100%;
//     height: 100%;
//     overflow: auto;
// }
// .cont,.left,.right {
//     width: 50vw;
//     height: 10vw;
//     background: #ccc;
//     border: .01rem solid red;
// }
li {
    height: 30px;
    border: 1px solid #ccc;
}


</style>
