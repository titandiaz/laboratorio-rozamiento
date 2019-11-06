<template>
  <div class="home col-lg-8">
    <h1 class="display-3">Fuerza de fricción estática</h1>
    <ul>
      <li>
        <h4 class="title">Objetivo general</h4>
        <p>Estudiar la fuerza de fricción estática.</p>
      </li>
      <li>
        <h4 class="title">Objetivos específicos</h4>
        <p>Determinar los coeficientes de fricción entre diferentes parejas de materiales.</p>
      </li>
      <li>
        <div class="wrapper">
          <h4 class="title">Teoria</h4>
          <p>
            La fuerza de fricción entre dos cuerpos aparece aún sin que exista movimiento
            relativo entre ellos. Cuando así sucede actúa la fuerza de fricción estática, que
            usualmente se denota como
            <em>
              f
              <sub>s</sub>
            </em> y su magnitud puede tomar valores entre cero y
            un máximo, el cual está dado por
          </p>
          <span>\[f_{s\ max}= \mu_{s}N\]</span>
          <span class="badge badge-secondary">Ecuación 1</span>
          <p>donde µ s es el coeficiente de fricción estático y N es la fuerza normal.</p>
          <p>
            En el caso particular, de un objeto en reposo sobre un plano inclinado, como se
            ilustra en la figura 1. De acuerdo al diagrama de fuerzas, sobre este cuerpo actúan
            tres fuerzas: La normal N , el peso P y la fuerza de fricción estática .
          </p>
          <figure>
            <img class="img-friccion" src="../assets/friccion.png" alt="Trulli" style="width:100%" />
            <figcaption class="badge badge-secondary">Figura 1</figcaption>
          </figure>
          <p>
            Dado que el objeto está en reposo, a partir del diagrama de fuerzas se encuentran
            las ecuaciones:
          </p>

          <div>{{formula1}}</div>
          <span class="badge badge-secondary">Ecuación 2</span>
          <div>{{formula2}}</div>
          <span class="badge badge-secondary">Ecuación 3</span>

          <p>
            Si se aumenta el ángulo de inclinación gradualmente, hasta que el valor θ c ángulo
            al cual el objeto está a punto de iniciar su movimiento, la fuerza de fricción estática
            alcanza su valor máximo dado por la ecuación (1). Despejando la fricción y la
            normal, se tiene:
          </p>
          <span>\[f_{s\ max}= mg\sin\theta_{c}\]</span>
          <span>\[N=mg\cos\theta_{c}\]</span>
          <p>y sustituyendo en la ecuación (1) se obtiene:</p>
          <span>\[\mu_{s}= \tan\theta_{c}\]</span>
          <span class="badge badge-secondary">Ecuación 4</span>
          <p>
            Esta ecuación, permite determinar el coeficiente de fricción estática entre dos
            materiales en contacto.
          </p>
        </div>
      </li>
      <li>
        <div class="wrapper">
          <h4 class="title">Equipo y materiales</h4>
          <ol>
            <li>Plano de inclinación variable</li>
            <li>Placa de aluminio</li>
            <li>Un bloque de madera de masa variable y de caras con diferentes áreas</li>
            <li>Dos "pesas" de 100g de masa</li>
            <li>Trozos de diferentes materiales</li>
          </ol>
          <figure>
            <img class="img-friccion" src="../assets/plano.jpg" alt="Trulli" style="width:100%" />
            <figcaption class="badge badge-secondary">Figura 2</figcaption>
          </figure>
        </div>
      </li>
      <li>
        <div class="wrapper">
          <h4 class="title">Procedimiento</h4>
          <p>
            <strong>ATENCIÓN:</strong> Antes de iniciar las mediciones, es necesario limpiar con un trapo
            limpio y húmedo las superficies que van a estar en contacto. Esto para retirar el
            polvo y suciedad que pudieran afectar los resultados. Dejar secar las superficies
            antes de hacer las mediciones.
          </p>
          <ol>
            <li>
              Colocar el bloque de madera con su cara de mayor área sobre el plano
              inclinado (plástico).
            </li>
            <li>
              Aumentar el ángulo de inclinación gradualmente, hasta que el objeto esté a
              punto de resbalar (ver figura 2) y anotar en la tabla I el valor del ángulo de
              inclinación.
            </li>
            <li>Repetir los pasos anteriores 10 veces</li>
            <li>
              Colocar en el hueco del bloque de madera una masa de 100g y repetir los
              pasos 1, 2 y 3, diez veces. Anotar los ángulos medidos en la tabla I.
            </li>
            <li>
              Colocar otra masa de 100g, para alcanzar 200g y repetir el paso 4. Anotar sus
              resultados en la tabla I.
            </li>
            <li>
              Calcular el coeficiente de fricción utilizando la ecuación (4) y anotar el resultado
              en la última columna de la tabla I.
            </li>
            <li>
              Coloque sobre el plano inclinado cada uno de los diferentes materiales
              disponibles, repita el paso 2 y anote sus resultados en la tabla 2.
            </li>
            <li>Obtener el promedio y la incertidumbre</li>
            <li>
              Coloque la placa de aluminio sobre el plano inclinado, y repita los pasos 7 y 8 y
              anote sus resultados en la tabla 3.
            </li>
          </ol>
        </div>
        <br />
      </li>
      <li>
        <div class="wrapper">
          <h4 class="title">Resultados</h4>
          <div class="wrapper-table">
            <TableLab :tableData="tableData"></TableLab>
            <div class="media">
              <p>
                <strong>Media del ángulo:</strong>
                {{mediaAngulo}}
              </p>
              <p>
                <strong>Media del &mu;:</strong>
                {{mediaFriction}}
              </p>
              <button @click="getMedia" class="btn btn-success" type="button">Calcular media</button>
            </div>
          </div>
          <div class="wrapper-table">
            <TableLab :tableData="tableData2"></TableLab>
            <div class="wrapper">
              <strong v-if="result" class="ecuacion">{{result.string}}</strong>
              <button @click="getDots" class="btn btn-success" type="button">Graficar</button>
            </div>
          </div>
          <Chart :mainX="mainX" :angulos="angulos" />
          <div class="wrapper-table">
            <TableMaterials></TableMaterials>
            <p></p>
          </div>
        </div>
      </li>
      <li>
        <div class="wrapper wrapper-preguntas">
          <h4 class="title">Preguntas</h4>
        <ol>
          <li>
            ¿Qué sucede con el coeficiente de fricción estática al cambiar la masa del
            bloque de madera?
          </li>
          <li>
            ¿Qué sucede con la fuerza de fricción estática máxima al cambiar la masa del
            bloque de madera? Debe de cambiar, porque al cambiar la masa, cambia la
            normal
          </li>
          <li>
            ¿Qué sucede con la fuerza de fricción estática cuando se cambia el ángulo de
            inclinación?
          </li>
          <li>¿Qué sucede con la fuerza normal cuando se cambia el ángulo de inclinación?</li>
        </ol>
        </div>
      </li>
    </ul>
    <!-- <h4 class="display-4">Objetivo general</h4>
    <p class="">Estudiar la fuerza de fricción estática.</p>
    <h4 class="display-4">Objetivos específicos</h4>
    <p class="">Determinar los coeficientes de fricción entre diferentes parejas de materiales.</p>-->
  </div>
</template>

<script>
import TableLab from "@/components/TableLab.vue";
import TableMaterials from "@/components/TableMaterials.vue";
import Chart from "@/components/Chart.vue";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {
    TableLab,
    TableMaterials,
    Chart
    // 'vue-mathjax': VueMathjax
    // HelloWorld
  },
  mounted() {
    this.reRender();
  },
  data() {
    return {
      form: "",
      formula: "$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$",
      formula1: "\\[\\sum F_{x}=mg \\sin\\theta - f_{s}=0\\]",
      formula2: "\\[\\sum F_{y}= N - mg \\cos\\theta=0\\]",
      mainX: [2, 4, 6, 8, 10],
      angulos: [3, 6, 9, 12, 15],
      tableData: [
        {
          state: "1",
          incertidumbre: "+ 0.5°",
          peso: "0",
          angulo: "45"
        },
        {
          state: "2",
          incertidumbre: "+ 0.5°",
          peso: "0",
          angulo: "45"
        },
        {
          state: "3",
          incertidumbre: "+ 0.5°",
          peso: "0",
          angulo: "45"
        },
        {
          state: "4",
          incertidumbre: "+ 0.5°",
          peso: "0",
          angulo: "45"
        },
        {
          state: "5",
          incertidumbre: "+ 0.5°",
          peso: "0",
          angulo: "45"
        },
        {
          state: "6",
          incertidumbre: "+ 0.5°",
          peso: "0",
          angulo: "50"
        },
        {
          state: "7",
          incertidumbre: "+ 0.5°",
          peso: "0",
          angulo: "45"
        },
        {
          state: "8",
          incertidumbre: "+ 0.5°",
          peso: "0",
          angulo: "45"
        },
        {
          state: "9",
          incertidumbre: "+ 0.5°",
          peso: "0",
          angulo: "45"
        },
        {
          state: "10",
          incertidumbre: "+ 0.5°",
          peso: "0",
          angulo: "45"
        }
      ],
      tableData2: [
        {
          state: "1",
          incertidumbre: "+ 0.5°",
          peso: "100",
          angulo: "45"
        },
        {
          state: "2",
          incertidumbre: "+ 0.5°",
          peso: "200",
          angulo: "45"
        },
        {
          state: "3",
          incertidumbre: "+ 0.5°",
          peso: "300",
          angulo: "45"
        },
        {
          state: "4",
          incertidumbre: "+ 0.5°",
          peso: "400",
          angulo: "45"
        },
        {
          state: "5",
          incertidumbre: "+ 0.5°",
          peso: "500",
          angulo: "45"
        }
      ]
    };
  },
  computed: {
    media() {
      return this.$store.state.media;
    },
    mediaAngulo() {
      return this.$store.state.mediaAngulo;
    },
    mediaFriction() {
      return this.$store.state.mediaFriction;
    },
    result() {
      return this.$store.state.result;
    }
  },
  methods: {
    reRender() {
      if (window.MathJax) {
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub], () => {});
      }
    },
    getMedia() {
      this.$store.commit("SET_MEDIA", !this.media);
    },
    getDots() {
      this.getPeso();
      this.getAngulos();
    },
    getPeso() {
      this.mainX = [];
      this.tableData2.forEach(item => {
        this.mainX.push(parseInt(item.peso));
      });
    },
    getAngulos() {
      this.angulos = [];
      this.tableData2.forEach(item => {
        this.angulos.push(parseInt(item.angulo));
      });
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

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin-bottom: 2em;
}
.home {
  box-sizing: border-box;
  padding: 30px;
  margin: 0 auto;
}
.title {
  font-size: 1.5rem;
  font-weight: 600;
}
p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
}
.wrapper {
  display: flex;
  flex-direction: column;
  img {
    align-self: center;
    margin-bottom: 10px;
  }
}
.wrapper-table {
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrapper-table {
  margin-top: 30px;
}
.img-friccion {
  max-width: 300px;
  // filter: grayscale(1);
}
figure {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.media {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ecuacion {
  margin-bottom: 20px;
}
.wrapper-preguntas {
  margin-top: 30px;
  li {
    margin: 20px 0;
  }
}
</style>
