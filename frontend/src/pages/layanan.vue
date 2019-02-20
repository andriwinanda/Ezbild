<template>
<div>
  <section class="section">
    <div class="container">
      <p class="title is-2 has-text-grey">Layanan Kami</p>
      <div class="is-divider"></div>
      <div class="columns is-multiline">
          <div class="column is-3" 
            v-for="(card, index) in cards" 
            :key="index" 
            :ref="`card_${index}`">
            <router-link :to="'/request/'+card.title">
              <div class="card" :style="{ 'background-image': 'url(' +card.image+ ')' }">
                <div class="card-image">
                  <!-- <img :src="card.image"> -->
                </div>
                <div class="card-fill">
                  <div class="caption has-text-right">
                  <p class="title is-3 has-text-white">{{ card.title }}</p>
                  <p class="subtitle is-6 has-text-white">Request Sekarang &#187;</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      cards : [
        {title: 'Arsitek', image: 'http://placeimg.com/640/480/arch?t=1550120199448'},
        {title: 'Pasang Wallpaper', image: 'https://placeimg.com/640/480/arch'},
        {title: 'Kitchen Set', image: 'http://placeimg.com/640/480/arch?t=1550120213367'},
        {title: 'Pasang Wallpaper', image: 'https://placeimg.com/640/480/arch'},
        {title: 'Kontraktor Bangunan', image: 'http://placeimg.com/640/480/arch?t=1550120236401'},
        {title: 'Interior Designer', image: 'http://placeimg.com/640/480/arch?t=1550120213367'},
        {title: 'Pasang Plafond', image: 'https://placeimg.com/640/480/arch'},
        {title: 'Pengecatan', image: 'http://placeimg.com/640/480/arch?t=1550120360257'},
        {title: 'Instalasi Listrik', image: 'http://placeimg.com/640/480/arch?t=1550120392440'},
        {title: 'Material Bangunan', image: 'https://placeimg.com/640/480/arch'},
        {title: 'Furniture', image: 'http://placeimg.com/640/480/arch?t=1550120429521'},
        {title: 'Pasang Wallpaper', image: 'https://placeimg.com/640/480/arch'}
      ],
    }
  },
  methods:{
  }
}
</script>
<style scoped>
section{
  padding-top: 1.5rem;
}
.card:hover {
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.4);
}
.card:hover .card-fill .subtitle{
  color: rgb(211, 211, 211) !important;
}
.card{
  position: relative;
  height: 150px;
  border-radius: 10px;
  background-size: cover
}
.card-fill{
  position: absolute !important;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  border-radius: 10px;
  padding: 15px;
  
}
.caption{
  bottom: 20;
  position: relative;
}
</style>


