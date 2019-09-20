<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          User History
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>

        <q-item-label header> Menú Principal </q-item-label>

        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">

          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>

          <q-item-section>
            <q-item-label> Lista de Ofertas </q-item-label>
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
      leftDrawerOpen: false
    }
  }
}
</script>
