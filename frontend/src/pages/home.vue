<template>
<div>
    <section class="hero is-info is-medium banner1">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title is-3">
            “Temukan semua jenis layanan untuk kebutuhan konstruksi Anda”
          </p>
          <p class="subtitle is-5">
            Dari renovasi rumah, design interior, kebutuhan material, sampai konsultasi proyek dan lainnya
          </p>

          <!-- Form Pencarian -->
          <form @submit="cariLayanan">
            <div class="columns is-centered is-gapless">
              <div class="column is-8">
                <div class="columns is-centered is-gapless is-shadowless pencarian">
                  <b-field type="is-secondary is-medium">
                    <div class="field columns">
                      <div class="control column is-5">
                        <b-autocomplete
                            v-model="layanan"
                            :keep-first="true"
                            :data="filteredDataArray"
                            placeholder="Cari layanan"
                            icon="magnify"
                            @select="option => selected = option">
                            <template slot="empty">Jasa tidak ditemukan</template>
                        </b-autocomplete>
                      </div>
                      <div class="control column is-4">
                        <b-autocomplete
                            v-model="lokasi"
                            :keep-first="true"
                            :data="filteredDataArray"
                            placeholder="Lokasi"
                            icon="map-marker"
                            @select="option => selected = option">
                            <template slot="empty">Jasa tidak ditemukan</template>
                        </b-autocomplete>
                      </div>
                      <div class="control column is-3">
                        <button class="button is-secondary is-medium is-fullwidth" type="submit">Cari Layanan</button>
                      </div>
                    </div>
                  </b-field>
                </div>
              </div>
            </div>
          </form>

          <br>

          <!-- Pencarian Terpopuler -->
          <p class="title is-5">
            Pencarian Terpopuler :
          </p>
          <div class="columns is-centered">
            <div class="column is-5 buttons">
              <router-link v-for="(item, key) in populer" class="button is-primary is-inverted" :key="key" :to="'/request/'+item.title">{{item.title}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <section class="section">
      <div class="container">
        <div class="columns is-fluid">
          <div class="column is-6">
            <img class="is-background" src="https://www.sejasa.com/blog/wp-content/uploads/2018/04/Renovasi-Survey-Banner-2-630x190.jpg" alt=""/>
          </div>
          <div class="column is-6">
            <div class="box">

              <p class="title is-5 has-text-centered">Kategori Terpopuler</p>
              <ul class="category">

                <li v-for="(item, key) in populer" :key="key">
                  <router-link :to="'/request/'+item.title">
                    <img src="/static/img/icon-home.png" alt="">
                    <p>{{item.title}}</p>
                  </router-link>
                </li>
        
              </ul>
            </div>
          </div>
        </div>
      </div>
  </section>
 
 
  <!-- Album -->
  <section class="section bg2">
    <div class="container">
      <div class="is-centered album-tab">
        <ul class="buttons is-centered">
          <li class="is-active"><a>Renovasi & Bangun Rumah</a></li>
          <li><a>Interior</a></li>
          <li><a>Perbaikan Rumah</a></li>
          <li><a>Servis Elektronik</a></li>
          <li><a>Lainnya</a></li>
        </ul>
      </div>
   


      <div class="columns is-multiline">
        
        <div class="column is-3">
          <a href="">
            <div class="card album">
              <div class="card-image">
                <img src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342831/44651d4cb77f7149.jpg" alt="Placeholder image">
                <img width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342845/00fd012c145241f3.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342847/baa03ebdc7c69243.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342848/aad93aaa280853fb.jpg" alt="Placeholder image">
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-6 has-text-centered">Renovasi Rumah Ibu Astri</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <div class="column is-3">
          <a href="">
            <div class="card album">
              <div class="card-image">
                <img src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342831/44651d4cb77f7149.jpg" alt="Placeholder image">
                <img width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342845/00fd012c145241f3.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342847/baa03ebdc7c69243.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342848/aad93aaa280853fb.jpg" alt="Placeholder image">
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-6 has-text-centered">Renovasi Rumah Ibu Astri</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <div class="column is-3">
          <a href="">
            <div class="card album">
              <div class="card-image">
                <img src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342831/44651d4cb77f7149.jpg" alt="Placeholder image">
                <img width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342845/00fd012c145241f3.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342847/baa03ebdc7c69243.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342848/aad93aaa280853fb.jpg" alt="Placeholder image">
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-6 has-text-centered">Renovasi Rumah Ibu Astri</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <div class="column is-3">
          <a href="">
            <div class="card album">
              <div class="card-image">
                <img src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342831/44651d4cb77f7149.jpg" alt="Placeholder image">
                <img width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342845/00fd012c145241f3.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342847/baa03ebdc7c69243.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342848/aad93aaa280853fb.jpg" alt="Placeholder image">
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-6 has-text-centered">Renovasi Rumah Ibu Astri</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <div class="column is-3">
          <a href="">
            <div class="card album">
              <div class="card-image">
                <img src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342831/44651d4cb77f7149.jpg" alt="Placeholder image">
                <img width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342845/00fd012c145241f3.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342847/baa03ebdc7c69243.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342848/aad93aaa280853fb.jpg" alt="Placeholder image">
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-6 has-text-centered">Renovasi Rumah Ibu Astri</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <div class="column is-3">
          <a href="">
            <div class="card album">
              <div class="card-image">
                <img src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342831/44651d4cb77f7149.jpg" alt="Placeholder image">
                <img width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342845/00fd012c145241f3.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342847/baa03ebdc7c69243.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342848/aad93aaa280853fb.jpg" alt="Placeholder image">
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-6 has-text-centered">Renovasi Rumah Ibu Astri</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <div class="column is-3">
          <a href="">
            <div class="card album">
              <div class="card-image">
                <img src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342831/44651d4cb77f7149.jpg" alt="Placeholder image">
                <img width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342845/00fd012c145241f3.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342847/baa03ebdc7c69243.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342848/aad93aaa280853fb.jpg" alt="Placeholder image">
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-6 has-text-centered">Renovasi Rumah Ibu Astri</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <div class="column is-3">
          <a href="">
            <div class="card album">
              <div class="card-image">
                <img src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342831/44651d4cb77f7149.jpg" alt="Placeholder image">
                <img width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342845/00fd012c145241f3.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342847/baa03ebdc7c69243.jpg" alt="Placeholder image">
                <img  width="32%" src="https://sejasa-production.s3.amazonaws.com/uploads/attachment/file/1342848/aad93aaa280853fb.jpg" alt="Placeholder image">
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-6 has-text-centered">Renovasi Rumah Ibu Astri</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        
      </div>
    </div>

  </section>
  
  <!-- <section class="section ">

  </section> -->
  
  <section class="section">
    <div class="container">
      <p class="title is-3 has-text-info ">Tiga Langkah Mudah Dengan Ezbild</p> <br>
      <div class="columns">
        <div class="column">
          <div class="box">
            <article class="media">
              <div class="media-left">
                <b-icon icon="book-open" size="is-large" type="is-info"></b-icon>
              </div>
              <div class="media-content">
                <div class="content">
                  <p class="title is-4">1. Isi Form</p>
                  <p class="subtitle is-6">Beritahu kami apa yang anda butuhkan</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="column">
          <div class="box">
            <article class="media">
              <div class="media-left">
                <b-icon icon="file-document-outline" size="is-large" type="is-info"></b-icon>
              </div>
              <div class="media-content">
                <div class="content">
                  <p class="title is-4">2. Dapatkan Penawaran</p>
                  <p class="subtitle is-6">Kami akan memberikan penawaran harga</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="column">
          <div class="box">
            <article class="media">
              <div class="media-left">
                <b-icon icon="calendar-clock" size="is-large" type="is-info"></b-icon>
              </div>
              <div class="media-content">
                <div class="content">
                  <p class="title is-4">3. Atur jadwal ketemu</p>
                  <p class="subtitle is-6">Tim kami akan datang untuk menemui anda</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Subscribe -->
  <section class="section bg3">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6">
          <p class="subtitle is-4 has-text-white">Berlangganan news letter untuk mendapatkan tips & trik dan informasi promo menarik</p>
        </div>
        <div class="column is-6">
          <b-field class="">
            <div class="field has-addons">
              <div class="control is-expanded">
                <b-input placeholder="example@email.com" 
                  type="email">
                </b-input>
              </div>
              <div class="control ">
                <button class="button is-primary">Berlangganan</button>
              </div>
            </div>
          </b-field>
          
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
      populer: [
        {title: 'Material Bangunan'},
        {title: 'Arsitek'},
        {title: 'Pengecatan'},
        {title: 'Furniture'},
        {title: 'Interior Designer'},
        {title: 'Pasang Plafond'},
      ],
      data: [
        'Material Bangunan',
        'Arsitek',
        'Interior Designer',
        'Furniture',
        'Kontraktor Bangunan',
        'Pengecatan',
        'Plafond'
      ],
      layanan: '',
      lokasi: '',
      selected: null
    }
  },
  methods: {
    cariLayanan(event) {
      event.preventDefault()
      this.$router.push('/request/'+this.layanan)
    }
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .indexOf(this.layanan.toLowerCase()) >= 0
      })
    }
  }
}
</script>
<style>
  .banner1{
    background-image: linear-gradient(141deg,#2ECDB3 0,#2399EF 71%,#3287f5 100%);
  }
  .pencarian {
    padding: 25px  !important;
    background-color: rgba(232, 249, 255, 0.6);
    border: none !important
  }
  .category > li{
    display: inline-block;
    width: 32%;
    text-align: center;
    font-size: 11pt;
    margin-bottom: 15px;
  }
  .category > li > a > img{
    margin: 0 auto;
    display: block;
  }
  .album-tab{
    margin-bottom: 2rem
  }
  .album-tab > ul > li{
    margin: 5px
  }
  .album-tab > ul > li > a{
    color: gray;
    padding: 5px 10px;
    font-size: 14pt;
    font-weight: 500;
  }
  .album-tab > ul > li.is-active > a{
    border-bottom: 2px solid #4099FF;
    color: #4099FF;
  }
  .album:hover{
    box-shadow: 2px 8px 8px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15);
  }
  .card-image{
    padding: 5px ;
  }
  .card-content{
    padding: 20px;
    padding-top: 10px !important;
  }
  
  @media only screen and (max-width: 780px) {
    .full-in-mobile{
      display: block;
    }
    .pencarian  .columns .column{
    padding: 5px 20px !important; 
    display: block;
    }
    .pencarian{
      padding-top: 35px !important;
      padding-bottom: 35px !important;
    }
    
  }
  

  
</style>


