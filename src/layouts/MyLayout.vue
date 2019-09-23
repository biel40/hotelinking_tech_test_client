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
        <q-chip square id="userDiv" class="q-pa-md" >
        <q-avatar>
          <img src="https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-8/24/018_320_door_exit_logout-512.png">
        </q-avatar>
          {{ this.user.logout }} 
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

          <q-item clickable tag="a" target="_blank">

          <q-item-section avatar>
            <q-icon name="add_circle" style="font-size: 2em;" />
          </q-item-section>

          <q-item-section>
            <q-item-label v-on:click="displayMainPromotionalCode"> Adquirir un Código Promocional </q-item-label>
          </q-item-section>

        </q-item>

        <q-item clickable tag="a" target="_blank">

          <q-item-section avatar>
            <q-icon name="style" style="font-size: 2em;" />
          </q-item-section>

          <q-item-section>
            <q-item-label v-on:click="displayPromotionalCodeList"> Lista de Códigos Promocionales </q-item-label>
          </q-item-section>

        </q-item>

      </q-list>
      
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Aquí puedes poner el icono igual que había en KeepItSafe a la izquierda -->

  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      user: {
        logout:  "Desloguearse"
      },
      menuIsDisplayed: false
    }
  },

  methods: {
    displayPromotionalCodeList: function(event) {
      this.$router.push('/app/productCodeList').catch(err => { console.log('Ya se encuentra en esta página') });
    },
    displayMainPromotionalCode: function(event) {
      this.$router.push('/app/index').catch(err => { console.log('Ya se encuentra en esta página') });
    },
    logoutFunction: function() {
      console.log('Deslogueamos');
      // TODO: Caducamos la session (token y eso)  
      this.$router.push('/')
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
