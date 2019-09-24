<template>

    <div id="mainDiv" class="q-pa-md" style="max-width: 2500px">

    <div class="column items-center q-mt-md">
        <h3> Login </h3>
    </div>

    <q-form
      @submit="onSubmit"
      class="q-gutter-md column items-center"
    >
      <q-input filled v-model="username" type="email" style="width: 500px" hint="Nombre de Usuario" :rules="[ val => val && val.length > 0 || 'Campo Obligatorio']">
        <template v-slot:before>
          <q-icon name="mail" />
        </template>
      </q-input>

      <q-input filled v-model="password" type="password" style="width: 500px" hint="Contraseña del Usuario" :rules="[ val => val && val.length > 0 || 'Campo Obligatorio']">
        <template v-slot:before>
          <q-icon name="vpn_key" />
        </template>
      </q-input>

      <div>
        <q-btn label="Login" text-color="white" type="submit" color="primary"  class="q-ml-md q-items-center q-pa-xs" style="width: 200px" />
      </div>


      <div>
        <q-btn label="Registrate!" v-on:click="redirectSignIn" text-color="black" type="button" color="secondary"  class="q-ml-md q-mt-md q-items-center q-pa-xs" style="width: 200px" />
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
      //TODO: Llamamos a una función que hará el login con Axios
      this.axiosLogin();

      if (this.username == "" || this.password == "") {
        this.$q.notify ({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Por favor, rellena los dos campos para acceder!'
        })
      } 
      else {
        // Método que se dispara al hacer click en el boton de Login:
        // Si todo el Login fuera correcto, redireccionamos a Index.vue: FUNCIONA!
        this.$router.push('/app/index');
      }
      
    },
    axiosLogin: function() {
      // TODO:
      console.log('Haciendo el login con axios!')
    },
    redirectSignIn: function () {
      this.$router.push('/register');
    }
  }
}
</script>

<style>

  body {
    background-color: #f0f5f7;
  }

</style>