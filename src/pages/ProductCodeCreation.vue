<template>
  <q-page class="flex flex-center">

    <div class="column items-center">

      <h5 style=""> Nueva Oferta </h5>

        <!-- Cambiar el formulario & personalizarlo! -->

      <q-form
        @submit="onSubmit"
        class="q-gutter-md column items-center"
        >

      <q-input filled v-model="name" type="text" style="width: 500px" hint="Nombre de Oferta" >
    
      </q-input>

      <q-input filled v-model="description" type="text" style="width: 500px" hint="Descripción" >
      
      </q-input>

        <q-input filled v-model="price" type="text" style="width: 500px" hint="Precio" >
        
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
        name: '',
        description: '',
        price: 0
    }
  },

  mounted() {

  },
  methods: {
      onSubmit() {
            console.log('Creando....');

            // TODO: Implementar Endpoint para la creación de ofertas.
            this.$axios.post('http://homestead.test/api/createNewPromotionalCode', {
                name: this.name,
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

