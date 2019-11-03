<template>
  <el-table :data="tableData" :border="true" style="max-width: 600px">
    <el-table-column label="Tabla 1" >
      <el-table-column prop="state" label="N°" width="40"></el-table-column>
      <el-table-column prop="peso" label="Peso" width="120">
        <template slot-scope="scope">
          <el-input v-model="scope.row.peso" placeholder=""></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="angulo" :label="formTabCol3" width="auto">
        <template slot-scope="scope">
          <el-input v-model="scope.row.angulo" placeholder=""></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="angulo" :label="formTabCol4" width="120">
        <template slot-scope="scope">
          <p>{{scope.row.angulo}}&deg; &plusmn; 0.5</p>
        </template>
      </el-table-column>
      <el-table-column prop="angulo" :label="formTabCol5" width="120">
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
  data() {
    return {
      formTabCol3: "\\[Angulo \\ \\theta_{c}\\]",
      formTabCol4: "\\[\\overline{\\theta_{c}}\\ \\pm\\ \\delta \\theta_{c}\\]",
      formTabCol5: "\\[\\mu_{s}\\]",
      tableData: [
        {
          state: "1",
          incertidumbre: "+ 0.5°",
          peso: "100",
          angulo: "45"
        },
        {
          state: "2",
          incertidumbre: "+ 0.5°",
          peso: "100",
          angulo: "45"
        },
        {
          state: "3",
          incertidumbre: "+ 0.5°",
          peso: "100",
          angulo: "45"
        },
        {
          state: "4",
          incertidumbre: "+ 0.5°",
          peso: "100",
          angulo: "45"
        },
        {
          state: "5",
          incertidumbre: "+ 0.5°",
          peso: "100",
          angulo: "45"
        },
        {
          state: "6",
          incertidumbre: "+ 0.5°",
          peso: "100",
          angulo: "50"
        },
        {
          state: "7",
          incertidumbre: "+ 0.5°",
          peso: "100",
          angulo: "45"
        },
        {
          state: "8",
          incertidumbre: "+ 0.5°",
          peso: "100",
          angulo: "45"
        },
        {
          state: "9",
          incertidumbre: "+ 0.5°",
          peso: "100",
          angulo: "45"
        },
        {
          state: "10",
          incertidumbre: "+ 0.5°",
          peso: "100",
          angulo: "45"
        }
      ]
    };
  },
  methods: {
    reRender() {   
      if (window.MathJax) {
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub], () => {});
      }
    },
    getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = 'Costo total';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = '$ ' + values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
  },
  watch: {
    latex: function() {
      this.$nextTick().then(() => {
        this.reRender();
      });
    }
  }
};
</script>