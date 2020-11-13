<template>
    <!-- <div id="cssBox">
        <div class="left"></div>
        <div class="right"></div>
    </div> -->
    <ul>
        <li id="id1">1</li>
        <li id="id2">2</li>
        <li id="id3">3</li>
        <li>4</li>
        <li>5</li>
    </ul>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  mounted() {
      let arr : Number[] = [9, 6, 3, 5, 2, 1, 0, 7, 8, 4];
      function sort(arr : Number[]) {
        if (!arr && !Array.isArray(arr)) return;
        for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                const k = arr[i];
                arr[i] = arr[j];
                arr[j] = k;    
            }
        }
        }
        return arr;
      }
      function sort1(arr : Number[]): any{
        // if (!arr && !Array.isArray(arr)) return;
        console.log(arr);
        if (arr.length < 2) return arr;
        const cur : Number = arr[Math.ceil(arr.length/2) - 1];
        let l : Number[]= [], r : Number[] = [];
        arr.forEach(val => {
            if (val < cur) {
                l.push(val);
            } else if(val > cur) {
                r.push(val);
            }
        })
       return sort1(l).concat(cur, sort1(r));
      }
      console.log(sort1(arr));
  },
})
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
