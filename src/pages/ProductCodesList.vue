<template>
  <q-page class="flex flex-center">

    <div class="column items-center">

      <h5 style=""> Tus Códigos Promocionales </h5>

      <div class="q-pa-md row items-start q-gutter-xl" >

        <q-card class="my-card" v-for="promotional_code_user in this.userPromotionalCodes" v-bind:key="promotional_code_user.id">

          <div v-if="promotional_code_user.active == false">

            <q-card-section class="bg-secondary text-black" style="height: 100px;">
              <div class="text-h6"> <span style="color: black;"> {{ promotional_code_user.promotional_code.code_title }} </span> </div>
              <div class="text-subtitle2"> <span style="color: black;">  Código Único: {{ promotional_code_user.code }} </span> </div>
            </q-card-section>

            <q-card-actions align="around" class="q-pa-md" >
              <q-btn @click="showModal(promotional_code_user.id)" color="secondary" text-color="black" > CANJEAR CÓDIGO </q-btn>
            </q-card-actions>

          </div>
        </q-card>

      </div> 

       <q-dialog v-model="confirm" >

        <q-card>
          <q-card-section class="row items-center">
            <span> Esta seguro de que quiere canjear DEFINITIVAMENTE esta oferta? </span>
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
      currentPromotionalCodeUserId: 0
    }
  },
  mounted() {
    this.getAllPromotionalCodesFromUser( localStorage.getItem('user_id') );
  },
  methods: {
    submitCode() {

      this.$axios.post('http://homestead.test/api/activateCode', {
        promotional_code_user_id: this.currentPromotionalCodeUserId
      })
      .then((response) =>  {
          this.$q.notify ({
          color: 'green',
          textColor: 'white',
          icon: 'warning',
          message: 'El código ha sido canjeado y activado correctamente!'
        })
        // Quitamos la carta de forma visual:
        this.userPromotionalCodes.forEach((userPromotionalCode) => {
            if (userPromotionalCode.id == this.currentPromotionalCodeUserId) {
                userPromotionalCode.active = true;
            }
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
      this.$axios.get('http://homestead.test/api/getAllPromotionalCodesFromUser/' + userId)
      .then((response) => {
        this.userPromotionalCodes = response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    showModal(currentPromotionalCodeUserId) {
      this.confirm = true;
      this.currentPromotionalCodeUserId = currentPromotionalCodeUserId;
    }
  }
}

</script>
