<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated class="row justify-between" >

      <q-toolbar class="" style="width: 300px">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          style="color: black;"
          aria-label="Menu"
        />

        <q-toolbar-title style="color: black;">
          User History App
        </q-toolbar-title>

      </q-toolbar>

      <div class="q-mt-xs q-pa-xs" v-on:click="logoutFunction">
        <q-chip square id="userDiv" class="q-pa-md" v-on:click="logoutFunction" >
        <q-avatar>
          <img src="https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-8/24/018_320_door_exit_logout-512.png">
        </q-avatar >
          <span> Logout </span>
        </q-chip>
      </div>
         
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-3"
    >
      <q-list>

        <q-item-label header > Menú Principal </q-item-label>

          <q-item clickable tag="a" >

          <q-item-section avatar>
            <q-icon name="add_circle" style="font-size: 2em;" />
          </q-item-section>

          <q-item-section>
            <q-item-label v-on:click="displayMainPromotionalCode"> Todas las Ofertas </q-item-label>
          </q-item-section>

        </q-item>

        <q-item clickable tag="a">

          <q-item-section avatar>
            <q-icon name="style" style="font-size: 2em;" />
          </q-item-section>

          <q-item-section>
            <q-item-label v-on:click="displayPromotionalCodeList"> Tus Códigos Promocionales </q-item-label>
          </q-item-section>

        </q-item>

          <!-- Item que solo se muestra si el rol del usuario es Administrador -->
         <q-item v-if="localStorage.getItem('user_role') == 'ADMIN'" clickable tag="a">

          <q-item-section avatar>
            <q-icon name="style" style="font-size: 2em;" />
          </q-item-section>

          <q-item-section>
            <q-item-label v-on:click="displayPromotionalCodeCreation"> Creación de Ofertas </q-item-label>
          </q-item-section>

        </q-item>

      </q-list>
      
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      menuIsDisplayed: false,
    }
  },

  methods: {
    displayPromotionalCodeList(event) {
      this.$router.push('/app/productCodeList').catch(err => { console.log('Ya se encuentra en esta página') });
    },
    displayMainPromotionalCode (event) {
      this.$router.push('/app/index').catch(err => { console.log('Ya se encuentra en esta página') });
    },
    logoutFunction: function() {

      this.$axios.post('http://homestead.test/api/logout')
      .then((response) => {
        this.$router.push('/');
      })
      .catch((error) => {
         this.$q.notify ({
            color: 'red',
            textColor: 'white',
            icon: 'warning',
            message: 'Ha ocurrido un error. Por favor, inténtelo más tarde.'
          })
      });  
      
    },
    displayPromotionalCodeCreation (event) {
      this.$router.push('/app/productCodeCreation').catch(err => { console.log('Ya se encuentra en esta página') });
    }
  }
}
</script>

<style>
  #userDiv:hover {
    cursor: pointer;
    background-color: #cfc0e9;
  }
</style>
