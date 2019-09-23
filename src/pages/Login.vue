<template>

    <div id="mainDiv" class="q-pa-md" style="max-width: 2500px">

    <div class="column items-center">
        <h1> Login </h1>
    </div>

    <q-form
      @submit="onSubmit"
      class="q-gutter-md column items-center"
    >
      <q-input
        filled
        v-model="username"
        label="Usuario"
        class="q-gutter-md"
        style="width: 550px"
      />

      <q-input
        filled
        v-model="password"
        label="Contraseña"
        class="q-gutter-md"
        style="width: 550px"
      />

      <div>
        <q-btn label="Login" text-color="" type="submit" color="primary"  class="q-ml-md q-items-center q-pa-xs" style="width: 150px" />
      </div>

    </q-form>

  </div>

</template>

<script>
export default {
  data () {
    return {
      username: "",
      password: "",
    }
  },

  methods: {
    onSubmit () {
      if (this.username == "" || this.password == "") {
        this.$q.notify ({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Por favor, rellena los dos campos para acceder!'
        })
      } else {
        // Método que se dispara al hacer click en el boton de Login:
        // Si todo el Login fuera correcto, redireccionamos a Index.vue: FUNCIONA!
        this.$router.push('/app');
      }
      
    },
  }
}
</script>

<style>

  body {
    background-color: #eef3f5;
  }

</style>