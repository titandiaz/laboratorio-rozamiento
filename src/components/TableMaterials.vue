<template>
  <el-table :data="tableData" style="max-width: 600px">
    <el-table-column label="Tabla de materiales" >
      <el-table-column prop="state" label="N°" width="40"></el-table-column>
      <el-table-column prop="materiales" label="Materiales" width="auto">
        <template slot-scope="scope">
          <el-input v-model="scope.row.peso" placeholder=""></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="angulo" :label="formTabCol3" width="120">
        <template slot-scope="scope">
          <el-input v-model="scope.row.angulo" placeholder=""></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="angulo" :label="formTabCol4" width="100">
        <template slot-scope="scope">
          <p>{{scope.row.angulo}}&deg; &plusmn; 0.5</p>
        </template>
      </el-table-column>
      <el-table-column prop="angulo" :label="formTabCol5" width="100">
        <template slot-scope="scope">
          <p>{{Math.tan(scope.row.angulo * Math.PI/180).toFixed(2)}}</p>
        </template>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  mounted() {
    this.reRender();
  },
  props:{
    // tableData: Array
  },
  data() {
    return {
      mediaAngulo: null,
      mediaFriction: null,
      formTabCol3: "\\[Angulo \\ \\theta_{c}\\]",
      formTabCol4: "\\[\\overline{\\theta_{c}}\\ \\pm\\ \\delta \\theta_{c}\\]",
      formTabCol5: "\\[\\mu_{s}\\]",
      tableData: [
        {
          state: "1",
          incertidumbre: "+ 0.5°",
          materiales: "0",
          angulo: "45"
        },
        {
          state: "2",
          incertidumbre: "+ 0.5°",
          materiales: "0",
          angulo: "45"
        },
        {
          state: "3",
          incertidumbre: "+ 0.5°",
          materiales: "0",
          angulo: "45"
        },
        {
          state: "4",
          incertidumbre: "+ 0.5°",
          materiales: "0",
          angulo: "45"
        }
      ]
    };
  },
  computed:{
    media(){
      return this.$store.state.media
    }
  },
  methods: {
    reRender() {   
      if (window.MathJax) {
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub], () => {});
      }
    },
    getMedia(){
      this.getMediaAngulo()
      this.getMediaFriction()
    },
    getMediaAngulo(){
      let sumAngulo = 0;
      this.tableData.forEach(item => {
        sumAngulo += parseInt(item.angulo);
      })
      this.mediaAngulo = sumAngulo / this.tableData.length
      this.$store.commit("SET_MEDIA_ANGULO", this.mediaAngulo)
    },
    getMediaFriction(){
      let sumFriction = 0;
      this.tableData.forEach(item => {
        sumFriction += Math.tan(parseInt(item.angulo) * Math.PI/180)
        /* eslint-disable no-console */ 
      })
      this.mediaFriction = sumFriction / this.tableData.length
      this.$store.commit("SET_MEDIA_FRICTION", this.mediaFriction.toFixed(2))
    }
  },
  watch: {
    latex: function() {
      this.$nextTick().then(() => {
        this.reRender();
      });
    },
    media(){
      this.getMediaAngulo();
      this.getMediaFriction();
    }
  }
};
</script>