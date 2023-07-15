<template>
  <div>
    
    <div>
      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        :autoplay="2000"
        :wrap-around="true"
      >
        <Slide
          v-for="(value, key) in cryptoData"
          :key="key"
          style="font-family: Roboto, sans-serif"
        >
          <div
            style="
              background-color: white;
              box-shadow: 1px 1px 5px rgba(0, 113, 220, 0.15);
            "
            class="carousel__item p-2"
          >
            <div class="d-flex justify-content-bitween">
              <div>
                <img class="img" :src="value.usd_market_cap" alt="logo" />
              </div>
              <div>
                <h4 class="m-0 p-0">{{ key }}</h4>
                <p class="m-0 p-0">Price: {{ value.usd }} $</p>
                <p class="m-0 p-0">
                  Vol: {{ Math.floor(value.usd_24h_vol).toFixed(1) }} $
                </p>
                <p class="m-0 p-0">
                  Chg:
                  <span
                    :class="{
                      'text-success': value.usd_24h_change > 0,
                      'text-danger': value.usd_24h_change < 0,
                    }"
                    >{{ parseFloat(value.usd_24h_change).toFixed(2) }} $</span
                  >
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>

  
  </div>
</template>
<script>
import axios from "axios";
import { defineComponent } from "vue";


import "vue3-carousel/dist/carousel.css";
export default {
 
  data() {
    return {
 
      isLoading:true,
      cryptoData: {},
      settings: {
        itemsToShow: 1.5,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        400: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4.5,
          snapAlign: "start",
        },
      },
    };
  },

  created() {
    
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Ctron%2Cdogecoin%2Ccoredao%2Cmatic-network%2Cethereum&vs_currencies=Usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true"
      )
      .then((response) => {
        
        this.cryptoData = response.data;
        this.cryptoData.bitcoin.usd_market_cap =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEGV3t3ifQQLa4IZxioNX2z-1Pqs86jEznLUDVSM&s";
        this.cryptoData.coredao.usd_market_cap =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTVMEiJtunCfl4NJGSM7K51mjPoaYP60SkcIo95SzDrecj2FPeVivz9vz8ekdzfax4IA&usqp=CAU";
        this.cryptoData.dogecoin.usd_market_cap =
          "https://cryptologos.cc/logos/dogecoin-doge-logo.png";
        this.cryptoData.ethereum.usd_market_cap =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq76prBtlRTRTzqQZEKxUvuL8ECme3MH05IHK97Nze&s";
        this.cryptoData.litecoin.usd_market_cap =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3zF3YUV-qRZ6fnwsAMYZXav4ySWuH8TFnGR1cmI&s";
        this.cryptoData.tron.usd_market_cap =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtakZ9eKNBC0ADpfPuCPNe9oopAee4rcHkjEsTyEQyfpx4LyK_bYMwRyY8dZpksit8mrc&usqp=CAU";
        this.cryptoData["matic-network"].usd_market_cap =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_SrkQp2pfafxYMch5Ot4442gsQ97m92371J1GdQ&s";
        
          this.$setLoading(false);

        });
  },

};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
.img {
  width: 6vw;
  height: 6vw;
}
.color {
  color: brown;
}
</style>
