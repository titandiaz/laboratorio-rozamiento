<template>
  <vue-frappe
    v-if="data[0].values.length"
    id="test"
    :labels="mainX"
    title="Minimos cuadrados"
    type="axis-mixed"
    :height="300"
    :colors="['#6dc72a', '#00507d', '#00c7dc']"
    :dataSets="this.data"
  ></vue-frappe>
  <!-- :lineOptions= "{hideLine: 1}" -->
</template>

<script>
import regression from 'regression';
export default {
  props: {
    mainX: Array,
    angulos: Array
  },
  mounted(){
    // this.getPeso()

    /* eslint-disable no-console */
    
  },
  data() {
    return {
      newAngulos:[],
      data: [
        {
          name: "Angulos",
          chartType: "line",
          values: [1,2,3,4,5],
        },
        {
          name: "Angulos2",
          chartType: "line",
          values: [4, 6, 8, 8, 10],
        }
      ],
    };
  },
  methods: {
    findLineByLeastSquares(values_x, values_y) {

      // console.log(values_x);
      
      let x_sum = 0;
      let y_sum = 0;
      let xy_sum = 0;
      let xx_sum = 0;
      let count = 0;

      /*
       * The above is just for quick access, makes the program faster
       */
      let x = 0;
      let y = 0;
      let values_length = values_x.length;

      if (values_length != values_y.length) {
        throw new Error(
          "The parameters values_x and values_y need to have same size!"
        );
      }

      /*
       * Above and below cover edge cases
       */
      if (values_length === 0) {
        return [[], []];
      }

      /*
       * Calculate the sum for each of the parts necessary.
       */
      for (let i = 0; i < values_length; i++) {
        x = values_x[i];
        y = values_y[i];
        x_sum += x;
        y_sum += y;
        xx_sum += x * x;
        xy_sum += x * y;
        count++;
      }

      /*
       * Calculate m and b for the line equation:
       * y = x * m + b
       */
      let m =
        (count * xy_sum - x_sum * y_sum) / (count * xx_sum - x_sum * x_sum);
      let b = y_sum / count - (m * x_sum) / count;

      /*
       * We then return the x and y data points according to our fit
       */
      let result_values_x = [];
      let result_values_y = [];

      for (let i = 0; i < values_length; i++) {
        x = values_x[i];
        y = x * m + b;
        /* eslint-disable no-console */
      console.log(y);
      
        result_values_x.push(x);
        result_values_y.push(y);
      }
      /* eslint-disable no-console */

      // console.log(result_values_x);

      
      this.newAngulos = result_values_y
    // return  [result_values_x, result_values_y];
    }
  },
  watch:{
    angulos(){
      let arr = [[100, 50], [200, 45], [300, 45], [400, 45], [500, 45]];
      
       /* eslint-disable no-console */
      
      this.angulos.forEach( (item, index) => {
        arr.splice(index, 1, [this.mainX[index], this.angulos[index]])
        
        this.data[0].values.splice(index,  1, this.angulos[index])
      })
      const result = regression.linear(arr);
        /* eslint-disable no-console */
        this.$store.commit("SET_RESULT", result)
      // this.findLineByLeastSquares(this.mainX, this.angulos)
      result.points.forEach((item, index) => {
        this.data[1].values.splice(index, 1, result.points[index][1])
      })
      // this.newAngulos.forEach((item, index) => {
      //   this.data[1].values.splice(index, 1, this.newAngulos[index])
      // })
      
    },
  }
};
</script>

<style scoped>
</style>