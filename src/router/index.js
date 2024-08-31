// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';
import Addresturant from '@/components/Addresturant.vue';
import OrderOnline from '@/components/Order_online.vue';
import DiningOutComponent from '@/components/Dinning_out.vue';
import Delivery from '@/components/Delivery.vue';
import Nightlife from '@/components/Nightlife.vue';
import InverstorRelation  from '@/components/Investor_relation.vue';
import CardSlider from '@/Slider/SwiperComponent.vue';
import BestbarPub from '@/components/BestbarPub.vue';
import Brands from '@/components/brands.vue';
import Newlyopen from '@/components/newly_opened.vue'
import Overview from '@/components/overview.vue'
import Advertise from '@/components/Advertise.vue'
import Contacts from '@/components/contact.vue';
import Financial from '@/components/Financial.vue';
import Announcments from '@/components/Announcments.vue';
import Blogs from '@/components/Blog/Blog.vue';
import Governence from '@/components/Governance.vue';
import Resources from '@/components/Resources.vue';
import Esg_Initiatives from '@/components/ESG/Esg_Initiatives.vue';
import Esg_microsite from '@/components/ESG/Esg_microsite.vue';
import Blog_details from '@/components/Blog/blog_details.vue';
import Blog_details2 from '@/components/Blog/blog_details2.vue';
import Collectionscard from '@/components/Collections/Collectionscard.vue';
import Login from '@/components/Login.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/add_resturant',
    name: 'add_resturant',
    component: Addresturant
  },
  {
    path: '/order_online',
    name: 'order_online',
    component: OrderOnline
  },
  {
    path: '/dining_out',
    name: 'DiningOut',
    component: DiningOutComponent
  },
  {
    path: '/delivery',
    name: 'delivery',
    component:  Delivery
  },
  {
    path: '/nightlife',
    name: 'nightlife',
    component:  Nightlife
  },
  {
    path: '/investor_relation',
    name: 'investor_relation',
    component:  InverstorRelation
  },
  {
    path: '/card_slider',
    name: 'card_slider',
    component:  CardSlider
  },
  {
    path: '/best_bar_pub',
    name: 'best_bar_pub',
    component:  BestbarPub
  },
  {
    path: '/brands',
    name: 'brands',
    component:  Brands
  },
  {
    path: '/newlyopen',
    name: 'newlyopen',
    component:   Newlyopen
  },
  {
    path: '/overview',
    name: 'overview',
    component:Overview
  },
  {
    path: '/advertise',
    name: 'advertise',
    component:Advertise
  },
  {
    path: '/contacts',
    name: 'contacts',
    component:Contacts
  },
  {
    path: '/financial',
    name: 'financial',
    component:Financial
  },
  {
    path: '/announcement',
    name: 'announcement',
    component:Announcments
  },
  {
    path: '/blogs',
    name: 'blogs',
    component:Blogs
  },
  {
    path: '/governence',
    name: 'governence',
    component:Governence
  },
    {
    path: '/resources',
    name: 'resources',
    component:Resources
  },
  {
    path: '/esg_iniative',
    name: 'esg_iniative',
    component:Esg_Initiatives
  },
  {
    path: '/esg_microsite',
    name: 'esg_microsite',
    component:Esg_microsite
  },
  {
    path: '/blog_details',
    name: 'blog_details',
    component:Blog_details
  },
  {
    path: '/blog_details2',
    name: 'blog_details2',
    component:Blog_details2
  },
  {
    path: '/collectioncard',
    name: '/collectioncard',
    component:Collectionscard
  },
  {
    path: '/login',
    name: '/login',
    component:Login
  },

  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
