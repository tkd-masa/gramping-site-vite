<script lang="ts" setup>
import { ref } from "vue";

type FooterItems = {
  id: number;
  itemName: string;
}[];

const footerItems = ref<FooterItems>([
  {
    id: 1,
    itemName: "HOME",
  },
  {
    id: 2,
    itemName: "TENT",
  },
  {
    id: 3,
    itemName: "FOOD",
  },
  {
    id: 4,
    itemName: "FAQ",
  },
  {
    id: 4,
    itemName: "ACCESS",
  },
]);
</script>

<template>
  <footer>
    <div class="pc_flex">
      <div class="footer_logo">
        <img src="/img/logo.svg" alt="" />
      </div>
      <ul class="footer_nav">
        <li v-for="item in footerItems" :key="item.id" class="footer_nav_item">
          <router-link :to="{ name: item.itemName }">
            {{ item.itemName }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="footer_address">
      <div class="address_logo">
        <img src="/img/address_logo.png" alt="" />
      </div>
      <p class="address">
        〒123-4567<br />長野県北佐久郡軽井沢町発地0000<br />TEL：01-2345-6789
      </p>
    </div>
    <div class="cp">
      <p>Copyright&copy;Green Castle</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 20px 10px;
  background-color: var(--main-color);
  color: #fff;
}

.footer_logo {
  text-align: center;
  margin-bottom: 10px;
}

.footer_logo img {
  width: 70px;
}

.footer_nav {
  text-align: center;
}

.footer_nav_item {
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-family: mrs-eaves, serif;
}

.footer_nav_item a {
  color: #fff;
}

.footer_address {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 20px;
}

.address_logo {
  width: 100px;
  margin-right: 10px;
}

.address {
  font-size: 14px;
}

.cp {
  text-align: center;
  font-size: 1.2rem;
}

@media screen and (min-width: 768px) {
  footer {
    padding: 40px 20px 20px;
    background-position: center bottom;
  }

  .pc_flex {
    max-width: 1020px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer_logo {
    margin-right: 120px;
  }

  .footer_logo img {
    width: 250px;
  }

  .footer_nav_item {
    font-size: 2.4rem;
    margin-bottom: 20px;
  }

  .footer_address {
    max-width: 1020px;
    justify-content: center;
    margin: 80px auto 20px;
  }

  .address_logo {
    margin-right: 20px;
  }

  .address {
    font-size: 16px;
    margin-right: 20px;
  }

  .cp {
    font-size: 1.4rem;
  }
}
</style>
