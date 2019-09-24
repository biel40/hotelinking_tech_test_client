<template>

    <div id="mainDiv" class="q-pa-md" style="max-width: 2500px">

      <div class="row items-center">
         <q-btn
            round
            color="primary"
            size="1.1em"
            icon="keyboard_arrow_left"
            v-on:click="backToLogin"
          />

          <span class="q-ml-md"> Volver al login </span>

      </div>

      <div class="column items-center q-ml-md">
          <h3> Página de Registro </h3>
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

        <q-input filled v-model="passwordConfirmation" type="password" style="width: 500px" hint="Reconfirmación de la contraseña" :rules="[ val => val && val.length > 0 || 'Campo Obligatorio']">
          <template v-slot:before>
            <q-icon name="vpn_key" />
          </template>
        </q-input>


        <div>
          <q-btn label="Confirmar" text-color="black" type="submit" color="primary"  class="q-ml-md q-items-center q-pa-xs q-mt-md" style="width: 200px" />
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
      passwordConfirmation: "",
    }
  },

  methods: {
    onSubmit() {
      // Validamos campos
      if (this.password != this.passwordConfirmation) {
        this.$q.notify ({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Las contraseñas deben coincidir!'
        })
      } else {
        // TODO: Cambiar la petición post por la peticion acertada al backend. En este caso, al endpoint para registrar un nuevo usuario.
        // homestead.test/api/loquesea
        this.$axios.post('/user', {
          username: this.username,
          password: this.password,
          // Verifica este campo!!!
          repeatPassword: this.passwordConfirmation
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    backToLogin() {
      this.$router.back();
    }
  }
}

</script>