<template>
  <q-page class="flex flex-center">

    <div>

      <h5> Página de lista de códigos del usuario </h5>

       <!-- Voy a tener que pintar las cards recorriendo un v-for de lo que obtenga de BB.DD -->
      <div class="q-pa-md row items-start q-gutter-xl" >

        <q-card class="my-card">

          <q-card-section class="bg-primary text-black" style="height: 100px;">
            <div class="text-h6"> <span style="color: black;"> Código Promocional #12345 </span> </div>
          </q-card-section>

          <q-card-actions align="around" class="q-pa-md" >
            <q-btn v-on:click="submitCode" color="primary" text-color="black" > CANJEAR CÓDIGO </q-btn>
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
      userPromotionalCodes: [],
    }
  },

  methods: {
    submitCode() {
      console.log('Submiting code...');
    },
    getAllPromotionalCodesFromUser(userId) {
      // Hacemos el GET al backend para que devuelva una lista de objetos PromotionalCode
      // TODO: Hace falta implementar este Endpoint.
      this.$axios.get('homestead.test/api/getProm')
      .then(function (response) {
        this.userPromotionalCodes = response;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })

    }
  }
}

</script>
