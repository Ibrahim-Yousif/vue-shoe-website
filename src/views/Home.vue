<template>
  <div class="home">
    <NavigationBar />
    <TopPage />
    <Cards />
    <ShoeSpecification />
    <BottomSection />   
    <About /> 
    <Footer />

  </div>
</template>



<script>
// @ is an alias to /src
import TopPage from '../components/TopPage.vue'
import BottomSection from '../components/BottomSection.vue'
import Cards from '../components/Cards.vue'
import Footer from '../components/Footer.vue'
import NavigationBar from '../components/NavigationBar.vue'
import ShoeSpecification from '../components/ShoeSpecification.vue'
import About from '../components/About.vue'

export default {
  name: 'Home',
  components: {
    TopPage,
    BottomSection,
    Cards,
    Footer,
    NavigationBar,
    ShoeSpecification,
    About

  }
}
</script>
