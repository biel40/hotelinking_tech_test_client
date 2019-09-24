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

          <q-card-actions align="around" class="q-pa-md">
            <q-btn color="primary" @click="confirm = true" text-color="black" > GENERAR </q-btn>
          </q-card-actions>

        </q-card>

      </div>

      <q-dialog v-model="confirm">

        <q-card>
          <q-card-section class="row items-center">
            <span class=""> Esta seguro de que quiere seleccionar esta oferta? </span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn label="Cancelar" color="negative" v-close-popup />
            <q-btn label="Confirmar" color="primary" v-close-popup v-on:click="addCodeToUser" />
          </q-card-actions>
        </q-card>

      </q-dialog>

    </div>
  </q-page>
</template>

<script>

export default {
  data () {
    return {
      promotionalCodesList: [],
      confirm: false,
    }
  },

  methods: {
    addCodeToUser() {
      // TODO:
      this.$axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then( (response) =>  {
          this.$q.notify ({
          color: 'green',
          textColor: 'white',
          icon: 'warning',
          message: 'El código ha sido añadido correctamente!'
        })
      })
      .catch((error) => {
        this.$q.notify ({
          color: 'red',
          textColor: 'white',
          icon: 'warning',
          message: 'Ha habido un error añadiendo el código. Por favor, vuelva a intentarlo más tarde.'
        })
      });
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

