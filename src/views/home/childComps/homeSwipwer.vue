<template>
      <Swiper>
      <Swiper-Item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </Swiper-Item>
    </Swiper>
</template>

<script>
    import {Swiper, SwiperItem} from '../../../components/common/swiper'
export default {
    name: "homeSwiper",
    props: {
        banners: {
            type: Array,
            default () {
                return []
            }
        }
    },
    components:{
        Swiper, 
        SwiperItem
    }
}
</script>

<style>

</style>