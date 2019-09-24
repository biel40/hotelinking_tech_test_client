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
            <q-btn @click="confirm = true" color="primary" text-color="black" > CANJEAR CÓDIGO </q-btn>
          </q-card-actions>

        </q-card>

      </div> 

       <q-dialog v-model="confirm" class="">

        <q-card>
          <q-card-section class="row items-center">
            <span class=""> Esta seguro de que quiere canjear DEFINITIVAMENTE esta oferta? </span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn label="Cancelar" color="negative" v-close-popup />
            <q-btn label="Confirmar" color="primary" v-close-popup v-on:click="submitCode" />
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
      userPromotionalCodes: [],
      confirm: false,
    }
  },

  methods: {
    submitCode() {
      console.log('Submiting code...');
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
          message: 'El código ha sido canjeado correctamente!'
        })
      })
      .catch((error) => {
        this.$q.notify ({
          color: 'red',
          textColor: 'white',
          icon: 'warning',
          message: 'Ha habido un error canjeando el código. Por favor, vuelva a intentarlo más tarde.'
        })
      });
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
