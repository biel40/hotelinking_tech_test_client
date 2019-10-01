<template>
  <q-page class="flex flex-center">

    <div class="column items-center">

      <h4 style="color:#ffb74d "> Nueva Oferta </h4>

      <q-form
        @submit="onSubmit"
        class="q-gutter-md column items-center"
        >

      <q-input  v-model="code_title" type="text" style="width: 400px" hint="Título de la Oferta" >
    
      </q-input>

      <q-input  v-model="description" type="text" style="width: 400px" hint="Descripción" >
      
      </q-input>

      <q-input filled v-model="price" type="text" style="width: 100px" hint="Precio (€)" >
        
      </q-input>


      <div>
        <q-btn label="CREAR" text-color="white" type="submit" color="primary" class="q-ml-md q-items-center q-pa-xs" style="width: 200px" />
      </div>
      
    </q-form>

    </div>
  </q-page>
</template>

<script>

export default {
  data () {
    return {
      code_title: '',
      description: '',
      price: 0.0
    }
  },

  mounted() {

  },
  methods: {
      onSubmit() {
            console.log('Creando....');

            // TODO: Implementar Endpoint para la creación de ofertas.
            this.$axios.post('http://homestead.test/api/newPromotionalCode', {
                code_title: this.code_title,
                description: this.description,
                price: this.price,
            })
            .then((response) => {
                this.$q.notify ({
                    color: 'green',
                    textColor: 'white',
                    icon: 'warning',
                    message: 'Nueva oferta generada correctamente!'
                })
            })
            .catch((error) => {
                this.$q.notify ({
                    color: 'red',
                    textColor: 'white',
                    icon: 'warning',
                    message: 'No se ha podido introducir la nueva oferta. Por favor, intentelo de nuevo.'
                })
            });
      }
  }
}

</script>

