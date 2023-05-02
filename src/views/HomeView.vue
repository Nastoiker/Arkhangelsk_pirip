
<script  setup lang="ts">
import '../styles.css';
import TheWelcome from '../components/TheWelcome.vue'
import AboutPageComponent from "@/components/AboutUs/AboutPageComponent.vue";
import CardTour from "@/components/Tour/CardTour.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import HtagComponent from "@/components/Htag/HtagComponent.vue";
import Footer from '@/components/footer/footerLayoutComponent.vue';
import FormNews from '@/components/FollowsOnNews/FollowsOnNews.vue';
import MoodBoard from "@/components/MoodBoard/MoodBoard.vue";
import AdvantageCard from "@/components/Advantage/AdvantageCard.vue";
import AdvanrageImg from '../assets/Advantages/1advantages.jpg';
</script>
<template>
  <main>
        <div className="MainHome block">
            <HtagComponent type="h4">Archanglesk</HtagComponent>
            <h1 className="Logo text-center top-3xl text-5xl my-auto text-white content-center	 font-bold mx-auto">Archanglesk</h1>
            <div className="Scroll "></div>
        </div>
      <AboutPageComponent />
      <CardTour title="asdadasdas" img="asdasd" description="asdasd" />
      <ButtonComponent>asdasdsa</ButtonComponent>
      <FormNews />
      <MoodBoard />
      <AdvantageCard title="asdasdasd" :img=AdvanrageImg description="asdasdasd"/>

      <Footer />
  </main>
</template>
<style>
@media (min-width: 1024px) {
}
main {

    width: 1250px;
    height: 100vh;
}
.MainHome .Logo {
    top: 50%;
}
.MainHome .Scroll {
    top: 90%;
}
.MainHome {
    height: 100vh;
    object-fit: cover;
    background-image: url('../assets/mainHello.jpg');
    max-width: 1250px;
}

</style>