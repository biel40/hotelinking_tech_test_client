<template>

    <div id="mainDiv" class="q-pa-md" style="max-width: 2500px">

    <div class="column items-center">
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

      <q-input filled v-model="passwordConfirmation" type="password" style="width: 500px" hint="Reconfirmación de la contraseña" :rules="[ this.password == this.passwordConfirmation || 'Las contraseñas deben coindidir!']">
        <template v-slot:before>
          <q-icon name="vpn_key" />
        </template>
      </q-input>


      <div>
        <q-btn label="Confirmar" text-color="black" type="submit" color="primary"  class="q-ml-md q-items-center q-pa-xs" style="width: 200px" />
      </div>

    </q-form>

  </div>

</template>

<script>
export default {
  data () {
    return {
         // FIXME: Faltan atributos
      username: "",
      password: "",
      passwordConfirmation: "",
    }
  },

  methods: {
    
  }
}
</script>