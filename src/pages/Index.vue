<template>
  <q-page class="flex flex-center">
    <div>

      <h5> Esto será la lista de todas las ofertas  </h5>
      
      <!-- Voy a tener que pintar las cards recorriendo un v-for de lo que obtenga de BB.DD -->
      <div class="q-pa-md row items-start q-gutter-md" >
        <q-card class="my-card">

          <q-card-section class="bg-primary text-black" style="height: 100px;">
            <div class="text-h6"> <span style="color: black;"> Código Promocional #12345 </span> </div>
          </q-card-section>

          <q-card-actions align="around" class="q-pa-md" >
            <q-btn color="primary" v-on:click="addCodeToUser" text-color="black" > GENERAR </q-btn>
          </q-card-actions>

        </q-card>

      </div>

    </div>
  </q-page>
</template>

<script>

export default {
  data () {
    return {
      promotionalCodesList: [],
    }
  },

  methods: {
    addCodeToUser() {
      console.log('Adding code to user!')
    },
    getAllPromotionalCodes() {
      // Hacemos el GET al backend para que devuelva una lista de objetos PromotionalCode
      // TODO: Hace falta implementar este Endpoint!
      this.$axios.get('homestead.test/api/getAllPromotionalCodes')
      .then(function (response) {
        // Si aqui devuelvo un JSON con objetos PromotionalCode, lo que tendré que hacer es ir uno por uno contruyendo objetos PromotionalCode y 
        // añadiendolos 
        this.promotionalCodesList = response;

        console.log(response);
        console.log(this.getAllPromotionalCodes);
      })
      .catch(function (error) {
        console.log(error);
      })

    }
  }
}

</script>

