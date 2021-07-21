import '../../styles/vendor/_swiper.scss';
import '../theme';
import '../../styles/templates/product.scss';
import { Swiper } from 'swiper/js/swiper.esm';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import axios from 'axios';
import Vue from 'vue/dist/vue.esm';

const pdpEl = document.getElementById('pdp');

const vueSwiper = {
  name: 'vue-swiper',
  props: ['images'],
  data() {
    return {
      mblSlider: null,
      selectedImageIndex: 0,
      modalOpen: false,
    };
  },
  mounted() {
    const imgSlider = document.getElementById('img-slider');
    var swiper = new Swiper('#img-slider');
    this.mblSlider = new Swiper(imgSlider, {
      observer: true,
      observeParents: true,
    });

    this.mblSlider.on('transitionEnd', () => {
      this.selectedImageIndex = this.mblSlider.realIndex;
    });
  },
  methods: {
    openModal(){
      this.modalOpen = true;
      disableBodyScroll(this.$refs.imageModal);
    },
    closeModal(){
      this.modalOpen = false;
      enableBodyScroll(this.$refs.imageModal);
    },
    selectImage(index) {
      this.selectedImageIndex = index;
      this.mblSlider.slideTo(index);
    }
  },
  computed: {
    selectedImage() {
      if (this.images && this.images[this.selectedImageIndex]) {
        return this.images[this.selectedImageIndex].node.dsktpImg;
      }
      return null;
    },
  },
};

const vuePdp = new Vue({
  el: pdpEl,
  name: 'vuePdp',
  delimiters: ['${', '}'],
  components: {
    'vue-swiper': vueSwiper,
  },
  data: {
    productHandle: null,
    variantCount: null,
    imageCount: null,
    sofavId: null,
    productData: {},
    selectedOptions: {},
    selectedVariantData: {},
    dataLoaded: false,
    quantity:1,
    descShown: false,
    sortedImages: {},
    optionTypeMap: {
      Size: 'dropdown',
    },
    swatchColors: {
      Blue: '#00BCD3',
      Red: '#EF5350',
      Gold: '#FEC109',
      Brown: '#AF806E',
      'Medium Grey': '#CDCDCD',
      Navy: '#2F3676',
      Yellow: '#FEC109',
      'Dark Wash': '#2F3676',
      'Light Wash': '#00BCD3',
    },
  },
  created() {
    this.productHandle = pdpEl.dataset.productHandle;
    this.variantCount = pdpEl.dataset.variantCount;
    this.imageCount = pdpEl.dataset.imageCount;
    this.sofavId = pdpEl.dataset.sofavId;
    this.getProductData();
  },
  mounted() {

  },
  computed: {
    selectedVariantId() {
      if (this.selectedVariantData && this.selectedVariantData.id) {
        const splitArr = atob(this.selectedVariantData.id).split('/');
        return splitArr[splitArr.length - 1];
      }
      return null;
    },
    selectedVariantCompareAtPrice() {
      if (this.selectedVariantData && this.selectedVariantData.compareAtPriceV2 && this.selectedVariantData.compareAtPriceV2.amount) {
        return Number(this.selectedVariantData.compareAtPriceV2.amount).toFixed(2);
      }
      return null;
    },
    selectedVariantPrice() {
      if (this.selectedVariantData && this.selectedVariantData.priceV2 && this.selectedVariantData.priceV2.amount) {
        return Number(this.selectedVariantData.priceV2.amount).toFixed(2);
      }
      return null;
    },
    selectedVariantPrice() {
      if (this.selectedVariantData && this.selectedVariantData.priceV2 && this.selectedVariantData.priceV2.amount) {
        return Number(this.selectedVariantData.priceV2.amount).toFixed(2);
      }
      return null;
    },
    selectedVariantIsAvailable() {
      if (this.selectedVariantData && this.selectedVariantData.availableForSale) {
        return true;
      }
      return null;
    },
    selectedVariantImages() {
      if (this.productData && this.productData.images && this.selectedVariantData && this.selectedVariantData.image) {
        return this.productData.images.edges.filter((image) => {
          return image.node.originalSrc.includes(this.selectedVariantData.image.originalSrc.split('_')[1]);
        });
      }
      return null;
    },
  },
  watch: {

  },
  methods: {
    increment () {
      this.quantity++
    },
    decrement () {
      if(this.quantity > 1) {
        this.quantity--
      } else {
        this.quantity = 1;
      }
    },
    toggleDesc() {
      this.descShown = !this.descShown;
    },
    setSelectedOptionsValue(index, value) {
      console.log('🐁');
      this.selectedOptions[index].value = value;
      this.setSelectedVariant();
    },
    setSelectedVariant() {
      console.log('🌈');
      this.selectedVariantData = this.productData.variants.edges.find((variant) => {
        return JSON.stringify(variant.node.selectedOptions) === JSON.stringify(this.selectedOptions);
      }).node;
      this.addVariantParamToUrl();
    },
    isPotentialVariantAvailable(index, value) {
      console.log('🚀', value);
      const selectedOptionsCopy = JSON.parse(JSON.stringify(this.selectedVariantData.selectedOptions));
      selectedOptionsCopy[index].value = value;
      const portenitalVariant = this.productData.variants.edges.find((variant) => {
        return JSON.stringify(variant.node.selectedOptions) === JSON.stringify(selectedOptionsCopy);
      });
      return portenitalVariant.node.availableForSale;
    },
    addVariantParamToUrl() {
      const newUrl = `//${window.location.host}/products/${this.productHandle}?variant=${this.selectedVariantId}`;
      window.history.replaceState(null, '', newUrl);
    },
    getProductData() {
      console.time('⏱');
      axios({
        headers: {
          'Content-Type': 'application/graphql',
          'X-Shopify-Storefront-Access-Token': '11804a3b813a11bddf39890e9f86b7bb',
        },
        method: 'post',
        data: `{
          productByHandle(handle: "${this.productHandle}") {
            onlineStoreUrl
            options {
              name
              values
            }
            images(first: ${this.imageCount}) {
              edges {
                node {
                  dsktpImg: transformedSrc(maxWidth: 600)
                  mblImg: transformedSrc(maxWidth: 300)
                  originalSrc
                  altText
                }
              }
            }
            variants(first: ${this.variantCount}) {
              edges {
                node {
                  id
                  selectedOptions {
                    name
                    value
                  }
                  availableForSale
                  priceV2 {
                    amount
                  }
                  compareAtPriceV2 {
                    amount
                  }
                  image {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }`,
        url: '/api/2019-07/graphql.json',
      })
        .then((res) => {
          this.productData = res.data.data.productByHandle;
          this.selectedVariantData = this.productData.variants.edges.find((variant) => atob(variant.node.id).includes(`${this.sofavId}`)).node;
          this.selectedOptions = JSON.parse(JSON.stringify(this.selectedVariantData.selectedOptions));
          this.dataLoaded = true;
          console.timeEnd('⏱');
          console.log('data2',res)
        });
    },
  },
});