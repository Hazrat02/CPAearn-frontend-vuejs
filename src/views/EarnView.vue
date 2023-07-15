<template>
  <div>
    <HomeLayout>
      <!-- Team Section - Home Page -->
      <section class="">
        <div class="container section-title" data-aos="fade-up">
          <h2>Earn</h2>
          <p>
            Daily show ads.
          </p>
          <div>
            <!-- test -->
            <ins
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-5750829707835473"
              data-ad-slot="3151991226"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>
      </section>
    </HomeLayout>
  </div>
</template>

<script>
import GoogleAds from "../components/earn/GoogleAds.vue";
export default {
  components: {
    GoogleAds,
  },
  mounted() {
    (adsbygoogle = window.adsbygoogle || []).push({});
  },
  data() {
    return {};
  },

  created() {
    this.$setLoading(false);
  },
};
</script>
