<template>
  <q-page class="flex flex-center">

    <div>

      <h5> Esto será la página de la lista de códigos promocionales </h5>

       <!-- Voy a tener que pintar las cards recorriendo un v-for de lo que obtenga de BB.DD -->
      <div class="q-pa-md row items-start q-gutter-xl" >
        <q-card class="my-card">

          <q-card-section class="bg-primary text-black" style="height: 150px;">
            <div class="text-h6"> Código Promocional: #1452141 </div>
          </q-card-section>

          <q-card-actions align="around" >
            <q-btn color="primary"> CANJEAR CÓDIGO </q-btn>
          </q-card-actions>

        </q-card>

        
      </div> 

    </div>
    
  </q-page>
</template>

<script>
export default {
  name: 'ProductCodesList'
}
</script>
