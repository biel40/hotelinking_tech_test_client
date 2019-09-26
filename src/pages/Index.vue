<template>
  <q-page class="flex flex-center">

    <div class="column items-center">

      <h5 style=""> Lista de Ofertas</h5>

      <div class="q-pa-md q-ml-xs row items-start q-gutter-xl" >

        <q-card class="my-card" v-for="promotional_code in this.promotionalCodesList" v-bind:key="promotional_code.id">
          <q-card-section class="bg-secondary text-black" style="height: 100px;">
            <div class="text-h6"> <span style="color: black;"> {{ promotional_code.code_title }}  </span> </div>
            <div class="text-subtitle2"> <span style="color: black;">  {{ promotional_code.description }} </span> </div>
          </q-card-section>

          <q-card-actions align="around" class="q-pa-md">
            <q-btn color="secondary" @click="displayModal(promotional_code.id)" text-color="black" > GUARDAR </q-btn>
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
            <q-btn label="Confirmar" color="primary" v-close-popup @click="addCodeToUser()" />
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
      currentPromotional_codeId: 0,
    }
  },

  mounted() {
    this.getAllPromotionalCodes();
  },
  methods: {
    addCodeToUser() {
      this.$axios.post('http://homestead.test/api/addCodeToUser', {
        user_id: JSON.parse(localStorage.getItem('user_id')),
        promotional_code_id: this.currentPromotional_codeId
      })
      .then((response) =>  {
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
      this.$axios.get('http://homestead.test/api/getAllPromotionalCodes')
      .then((response) => {
        this.promotionalCodesList = response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    displayModal(promotionalCodeId) {
      this.checkUserHasPromotionalCode(promotionalCodeId, localStorage.getItem('user_id') );
    },
    checkUserHasPromotionalCode(promotionalCodeId, user_id) {
      this.$axios.get('http://homestead.test/api/checkUserHasPromotionalCode/' + promotionalCodeId + '/' + user_id + '')
      .then((response) => {

        let booleanResponse = response.data;
        if(booleanResponse) {
          this.$q.notify ({
            color: 'red-9',
            textColor: 'white',
            icon: 'warning',
            message: 'Este usuario ya tiene este código, o lo ha canjeado previamente.'
          })
        } else {
          this.confirm = true;
          this.currentPromotional_codeId = promotionalCodeId;
        }
      })
      .catch(function (error) {
        console.log(error);
      })

    }
  }
}

</script>

