
<script  setup lang="ts">
import '../styles.css';
import 'swiper/css';

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
import ContainerSlider from '@/components/Slider/ContainerSlider.vue'
import CardTourImg from '@/assets/Tours/beachTour.jpg';
import { Swiper, SwiperSlide} from 'swiper/vue';
</script>
<template>
  <main>
        <div className="text-white MainHome p-10 block">
            <HtagComponent type="h4">Archanglesk</HtagComponent>
            <h1 className="Logo text-center top-3xl text-5xl my-auto text-white content-center	 font-bold mx-auto">Archanglesk</h1>
            <div className="Scroll "></div>
          <div class="Bottom">
          <HtagComponent type="h4">Archanglesk</HtagComponent>
          </div>
        </div>
      <AboutPageComponent />
      <CardTour :title="asdadasdas" :img=CardTourImg :description="asdasd" />
      <ButtonComponent>asdasdsa</ButtonComponent>
      <FormNews />
      <MoodBoard />

    <Swiper
    >
      <SwiperSlide>
        <AdvantageCard title="asdasdasd" :img=AdvanrageImg description="asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"/>

      </SwiperSlide>
      <SwiperSlide>
        <AdvantageCard title="asdasdasd" :img=AdvanrageImg description="asdasdasd"/>

      </SwiperSlide>
      <SwiperSlide>
        <AdvantageCard title="asdasdasd" :img=AdvanrageImg description="asdasdasd"/>

      </SwiperSlide>
      <SwiperSlide>
        <AdvantageCard title="asdasdasd" :img=AdvanrageImg description="asdasdasd"/>

      </SwiperSlide>
    </Swiper>
      <ContainerSlider  :slider="[
        {
          image: 'https://picsum.photos/id/1018/800/400',
          title: 'Slide 1',
        },
        {
          image: 'https://picsum.photos/id/1015/800/400',
          title: 'Slide 2',
        },
        {
          image: 'https://picsum.photos/id/1019/800/400',
          title: 'Slide 3',
        },
      ]" />
      <Footer />
  </main>
</template>
<style>
@media (min-width: 1024px) {
}
.Bottom {
  top: 85%;
}
main {

    width: 100%;
    height: 100vh;
}
.MainHome .Logo {
    top: 50%;
}
.MainHome .Scroll {
    top: 90%;
}
.MainHome {
  background-color: #FCFCFC;

  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-image: url('../assets/mainHello.jpg');
}

</style>