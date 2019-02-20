<template>
  <div id="app">
    <nav class="navbar is-fixed-top">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" @click.prevent="home()">
            <img src="../static/img/ezbild.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div class="navbar-menu"  :class="{ 'is-active': showNav }">
          <div class="navbar-end">
            <!-- Navbar -->
            <a class="navbar-item"
              v-for="item in items"
              :class="{ 'is-active' : isActive(item.title)}"
              :key="item.title"
              @click.prevent="select(item)"
            >{{item.title}}</a>

            <!-- Jika tidak ada user -->
            <div v-if="!user" class="navbar-item">
              <router-link class="button is-primary" to="/login">Login</router-link>
            </div>

            <!-- Jika ada user -->
            <div v-if="user" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Akun
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item"
                  v-for="item in akun"
                  :class="{ 'is-active' : isActive(item.title)}"
                  :key="item.title"
                  @click.prevent="select(item)"
                >{{item.title}}</a>
                <hr class="navbar-divider">
                <a class="navbar-item" @click.prevent="logout()">Logout</a>
              </div>
            </div>
            <div class="navbar-item tag-copyright">
              <hr>
              <p class="copyright ">© Ezbild. All right reserved</p>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Router view -->
    <div class="view">
      <router-view></router-view>
    </div>

    <!-- Chat-box -->
    <Chatbox class="z-index"></Chatbox>
 
    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column">
            <p class="title is-5">Perusahaan</p>
            <ul>
              <li><a href="/login">Tentang Kami</a></li>
              <li><a href="#">Syarat & Ketentuan</a></li>
              <li><a href="#">Kebijakan Privasi</a></li>
              <li><a href="#">Karir</a></li>
            </ul>
          </div>
          <div class="column">
            <p class="title is-5">Informasi & Bantuan</p>
            <ul>
              <li><a href="#">Cara Pemesanan</a></li>
              <li><a href="#">Tips & Trik</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div class="column">
            <p class="title is-5">Hubungi Kami</p>
            <a href="kontak.html">
              <ul class="footMenu">
                <li>Senin - Jumat </li>
                <li>08.00 - 17.00 WIB</li>
                <li>Phone 061-2255xxxx</li>
                <li>support@ezbild.co.id</li>
              </ul>
            </a>
          </div>
          <div class="column">
            <p class="title is-5">Tersedia di</p>
            <a><img width="150" src="../static/img/playstore.svg"></a> <br>
            <a><img width="150" src="../static/img/appstore.svg"></a>
          </div>
        </div>
        <div class="is-divider"></div>
        <p class="copyright">© Ezbild. All right reserved</p>
      </div>
    </footer>
  
  </div>
</template>

<script>
import Chatbox from './component/chatbox.vue'
export default {
  name: 'app',
  components: {
    Chatbox
  },
  data(){
    return {
      isFullPage: true,
      // If any user
      user: true,
      showNav: false,
      active: '',
      items: [
        {
          title:'Layanan Kami',
          link: '/layanan-kami'
        },
        {
          title:'Menjadi Mitra',
          link: '/menjadi-mitra'
        },
        {
          title:'Bantuan',
          link: '/bantuan'
        }
      ],
      akun: [
        {
          title:'Dashboard',
          link: '/dashboard'
        },
        {
          title:'Edit Profile',
          link: '/edit-profile'
        },
        {
          title:'Ganti Password',
          link: '/ganti-password'
        }
      ]
    }
  },
  methods: {
    home(){
      event.preventDefault()
      this.showNav = false
      this.$router.push("/")
    },
    isActive(name) {
      return this.active === name;
    },
    select(item) {
      event.preventDefault()
      this.showNav = false
      this.active = item.title 
      this.$router.push(item.link)
    },
    logout () {
      event.preventDefault()
      this.showNav = false
      this.user = null
      this.$router.push('/login')
    }
  },
  created() {
    this.user = true
    const loadingComponent = this.$loading.open({
        container: this.isFullPage ? null : this.$refs.element.$el
    })
    setTimeout(() => loadingComponent.close(), 3 * 1000)
  }
}
</script>
<style scoped>
#app{
  min-height: 100vh
}
nav{
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
}
.navbar-item.is-active{
  color: #4099FF !important;
}
.view{
  margin-top: 52px !important;
}
.z-index{
  z-index: 50;
  position: absolute;
}
.footer{
  border-top: 1px solid rgba(214, 214, 214, 0.349);
  background-color: white;
  padding: 3rem 2rem 2rem 2rem !important; 
}
footer a{
  color: black
}
footer a:hover{
  text-decoration: underline;
}

</style>


