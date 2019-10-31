<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="change">change</button>
    <button @click="changeLast"> change lat name</button>
      <h1>
        {{name}}
      </h1>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Home extends Vue {
     public fistName: string;
     public lastName: string;
     public num: number;
     constructor() {
       super();
       this.fistName = 'Li';
       this.lastName = 'Tao';
       this.num = 0;
     }

     // methods
     private change(): void {
         this.num++;
     }
     private changeLast(): void {
         this.lastName = 'Yun Tao';
     }

     // computed
     private get name(): string {
         if (this.num > 0) {
             return this.fistName + ',' + this.lastName;
         }
         return 'Place click change';
     }
 }
</script>
