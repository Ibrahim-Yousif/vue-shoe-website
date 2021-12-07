<template>
  <NavigationBar />
  <TopPage />
  <ShoeSpecification />
  <Cards />
  <BottomSection />
  <About />
  <Footer />
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import TopPage from './components/TopPage'
import ShoeSpecification from './components/ShoeSpecification.vue'
import Cards from './components/Cards.vue'
import BottomSection from './components/BottomSection.vue'
import Footer from './components/Footer.vue'
import About from './components/About.vue'




export default {
  name: 'App',
  components: {
    NavigationBar,
    TopPage,
    ShoeSpecification,
    Cards,
    BottomSection,
    About,
    Footer
  }
}
</script>

<style>

</style>
