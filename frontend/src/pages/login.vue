<template>
<div class="bg1">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-two-fifths">
        <section class="section">
          <h1 class="has-text-centered is-size-3">Login</h1>
          <br>
          <a class="button is-facebook is-fullwidth is-medium">
            <b-icon icon="facebook"></b-icon>
            <span>Masuk dengan facebook</span>
          </a>
          <div class="is-divider" data-content="OR"></div>
          <form class="form" @submit="login">
            <b-field>
              <b-input placeholder="Email"
                v-model="email"
                type="email"
                size="is-medium"
                required
                >
              </b-input>
            </b-field>

            <b-field>
              <b-input placeholder="Password"
                v-model="password"
                type="password"
                size="is-medium"
                required
                password-reveal>
              </b-input>
            </b-field>

            <b-field class="has-text-right">
              <router-link to="/reset-password">Lupa Password ?</router-link>
            </b-field>

            <b-field>
              <button class="button is-secondary is-fullwidth is-medium">Login</button>
            </b-field>
          </form>
          <div class="is-divider"></div>
          <p class="has-text-centered">Belum punya akun? <router-link to="/register">Daftar</router-link></p>
        </section>
      </div>
    </div>
  </div>
</div>


</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      isFullPage: true,
      }
  },
  mounted() {
    console.log(this.$route.path)
  },
  methods: {
    login(event){
      event.preventDefault()
      this.$toast.open({
          message: 'Login berhasil',
          position: 'is-bottom',
          queue: false
      })
      const loadingComponent = this.$loading.open({
          container: this.isFullPage ? null : this.$refs.element.$el
      })
      setTimeout(() => loadingComponent.close(), 3 * 1000)
      this.$router.push('/')
    }
  }
}
</script>
<style>
section{
  position: relative;
  top: 10%;
}
@media only screen and (max-width: 780px) {
  section{
    position: relative;
    top: 0 !important;
    padding-top: 1rem !important
  }
}
</style>

