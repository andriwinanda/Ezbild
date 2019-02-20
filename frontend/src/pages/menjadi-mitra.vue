<template>
  <div>
    <section class="section is-secondary hero banner">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-6 has-text-centered">
              <p class="is-size-3-mobile is-size-2-desktop has-text-centered">Kami menghubungkan anda dengan pelanggan agar usaha anda dapat berkembang pesat</p>
              <br>
              <br>
              <button class="button is-secondary is-medium">
                Daftar Sekarang
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container has-text-centered">
        <p class="is-size-3 has-text-centered">Tips Mendapatkan Pekerjaan</p>
        <div class="columns is-multiline has-text-centered">
          <br>
          <div class="column is-6">
            <img src="https://d3p5pena0pluiy.cloudfront.net/assets/img-winning-profile-0f9c3478ae47aaf23c69f41a3f398ac40b18f1797bd70481ae3479dd36be7f19.png" alt="">
            <p class="is-size-4">
              Ciptakan Profil Menarik
            </p>
            <ul>
              <li>Promosikan pengalaman dan keahlian Anda</li>
              <li>Tampilkan kualifikasi, sertifikat, dan izin usaha Anda</li>
              <li>Sertakan foto diri dan pekerjaan Anda</li>
            </ul>
          </div>
          <div class="column is-6">
            <img src="https://d3p5pena0pluiy.cloudfront.net/assets/img-askreviews-22e8b0bdcd0f5659c1574e44de9e4a98871271cabe6ee997fa68dedfb6e5c30c.png" alt="">
            <p class="is-size-4">
              Berikan Layanan Terbaik & Minta Ulasan
            </p>
            <ul>
              <li>Tanggapi permintaan kerja dan pertanyaan secara cepat</li>
              <li>Tetap berkomunkasi dengan pelanggan</li>
              <li>Minta ulasan dari pelanggan. Ini akan membantu Anda untuk mendapatkan pekerjaan di masa mendatang.</li>
            </ul>
          </div>
          <div class="column is-6">
            <img src="https://d3p5pena0pluiy.cloudfront.net/assets/img-connection-e688050c4860fea72b2516e8d1342e7677edaeb34429d6fcc1b138b72f9ada68.png" alt="">
            <p class="is-size-4">
              Bina Hubungan Pribadi
            </p>
            <ul>
              <li>Promosikan pengalaman dan keahlian Anda</li>
              <li>Tampilkan kualifikasi, sertifikat, dan izin usaha Anda</li>
              <li>Sertakan foto diri dan pekerjaan Anda</li>
            </ul>
          </div>
          <div class="column is-6">
            <img src="https://d3p5pena0pluiy.cloudfront.net/assets/img-followup-ca4f0305db54dc0bfea021aee4225f634ca69ae97278ce3d9e80506f6549d549.png" alt="">
            <p class="is-size-4">
              Komunikasi Dengan Pelanggan
            </p>
            <ul>
              <li>Promosikan pengalaman dan keahlian Anda</li>
              <li>Tampilkan kualifikasi, sertifikat, dan izin usaha Anda</li>
              <li>Sertakan foto diri dan pekerjaan Anda</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg3">
    <div class="container has-text-centered">
      <div class="columns is-vcentered">
        <div class="column is-8">
          <p class="is-size-4 has-text-white">
            Jangan tunda lagi, daftarkan usaha anda agar dapat berkembang pesat
          </p>
        </div>
        <div class="column is-4">
          <button class="button is-primary is-inverted is-large">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>

  </section>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.banner{
  background-image: url('https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #4099FF;
  position: relative;
}
.banner::after{
  content: "";
  background-color: black;
  position: absolute; 
  display: block;
  height: 100%;
  opacity: 0.5;
  /* background-color: rgba(0, 0, 0, 0.39); */
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
}
.hero-body{
  z-index: 1;
}
.column>img{
  margin-top: 3rem !important;
}
@media only screen and (max-width: 780px) {
  .hero-body{
    padding: 0;
  }
}
</style>

