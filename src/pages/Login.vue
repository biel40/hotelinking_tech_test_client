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
        style="width: 600px"
      />

      <q-input
        filled
        v-model="password"
        label="Contraseña"
        class="q-gutter-md"
        style="width: 600px"
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
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted'
        })
      }
    },
  }
}
</script>

<style>
   body {
       background-color: #e1f5fe;
    }
</style>