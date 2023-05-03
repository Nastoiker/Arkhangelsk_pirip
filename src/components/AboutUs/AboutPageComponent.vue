
<script  setup lang="ts">
import HtagComponent from "@/components/Htag/HtagComponent.vue";
import PTag from "@/components/PTag/PTag.vue";
</script>
<template>
    <div className="my-20 w-full sspace-y-10">
        <HtagComponent type="h1">Про нас</HtagComponent>
        <div class="mx-auto w-full  grid grid-cols-12 grid-rows-8">
            <div class="row-start-2	 col-start-1 col-end-6">
                    <PTag className="break-words ">aasdaaasdassaasdassaasdassaasd
                      assaasdassaasdassaasdassssaasdaaasdassaasdassaasda
                      ssaasdassaasdassaasdassaasdassssaasdaaasdassaasdassaasdassaasdassaasdassaasdassaasdassssa
                      asdaaasdassaasdassaasdassaasdassaasdassaasdassaasdassssaasdaaasdassaasda
                      ssaasdassaasdassaasdassaasdassaasdassssaasdaaasdassaasdassaasdassaasdassaasdassaasdassaasdassss
                      aasdaaasdassaasdassaasdassaasdassaasdassaasdassaasdass
                      ssaasdaaasdassaasdassaasdassaasdassaasdassaasdassaasdassss</PTag>
            </div>
            <img class="col-start-8 h-full w-full	row-start-1 row-end-6 col-end-13" src="../../assets/About1.jpg" alt="" />
            <img  class="col-start-6 w-full h-full col-end-10 row-start-7 row-end-8 " src="../../assets/About2.jpg" alt="" />
            <div class="bg-greenLight  mt-24 w-20 h-20 row-start-7 row-end-8"></div>
        </div>
    </div>

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
/*.StartSite {*/
/*    background-image: '';*/
/*}*/
</style>