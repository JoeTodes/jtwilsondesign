<template>
  <div class="flex flex-col min-h-screen leading-normal bg-white">
    <header class="fixed top-0 left-0 w-screen">
      <div class="h-2 frosty2 mx-0 z-20"></div>

      <div class="fixed bottom-0 left-0 w-screen h-4 frosty3 mx-0"></div>
      <transition name="nav-scroll">
        <nav
          v-if="!scrollingDown"
          class="mx-auto flex justify-between items-center py-4 px-10 bg-white z-10"
        >
          <g-link
            class="font-body font-extrabold text-text-green text-3xl hover:text-ice-600 tracking-wider"
            to="/"
          >JTWILSON.DESIGN</g-link>

          <ul class="flex tracking-widest font-display font-bold text-2xl text-text-blue">
            <div class>
              <li
                class="mx-4 md:mr-4 lg:mr-8 border-2 border-transparent rounded-full px-4 py-3 hover:text-text-green hover:border-text-green"
              >
                <g-link to="/">HOME</g-link>
              </li>
            </div>
            <li
              class="mr-4 md:mr-4 lg:mr-8 border-2 border-transparent rounded-full px-4 py-3 hover:text-text-green hover:border-text-green"
            >
              <g-link to="/about/">ABOUT</g-link>
            </li>
            <li
              class="border-2 border-transparent rounded-full px-4 py-3 hover:text-text-green hover:border-text-green"
            >
              <g-link to="/about/">CONTACT</g-link>
            </li>
          </ul>
        </nav>
      </transition>
    </header>
    <div class="flex-grow container mx-auto">
      <slot />
    </div>

    <footer class="frosty z-10">
      <div class="flex flex-col justify-around items-center">
        <div class="text-4xl text-white font-extrabold pb-8 pt-16">Get in Touch!</div>
        <form
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" />
            </label>
          </p>
          <div class="sender-info">
            <div>
              <input
                :style="[submitted?{'pointer-events':'none'}:{'pointer-events':'all'}]"
                class="my-2 w-full mx-auto text-xl font-bold font-body rounded-full py-2 px-4"
                type="text"
                name="name"
                placeholder="Name"
                v-model="formData.name"
              />
            </div>
            <div>
              <input
                :style="[submitted?{'pointer-events':'none'}:{'pointer-events':'all'}]"
                class="my-2 w-full mx-auto text-xl font-bold font-body rounded-full py-2 px-4"
                type="email"
                placeholder="Email"
                name="email"
                v-model="formData.email"
              />
            </div>
          </div>

          <div class="message-wrapper">
            <textarea
              :style="[submitted?{'pointer-events':'none'}:{'pointer-events':'all'}]"
              class="my-2 w-full mx-auto text-xl font-semibold font-body rounded-full py-2 px-4"
              name="message"
              placeholder="What can we build together?"
              v-model="formData.message"
            ></textarea>
          </div>

          <button
            :style="[submitted?{'pointer-events':'none'}:{'pointer-events':'all'}]"
            v-bind:class="{'bg-pink-400': submitted, 'bg-pink-500': !submitted}"
            class="mb-4 flex border-white text-white border-2 mx-auto text-xl font-semibold font-body rounded-full py-2 px-4"
            type="submit"
          >{{submitted?"Thanks!":"Submit"}}</button>
        </form>
        <div
          class="mt-16 uppercase text-lg font-body text-white"
        >Copyright {{new Date().getFullYear()}}</div>
        <div class="uppercase text-md font-body text-white">Joe Wilson</div>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      scrollingDown: false,
      lastYOffset: 0,
      formData: {},
      submitted: false
    };
  },
  methods: {
    handleScroll(event) {
      if (window.pageYOffset > this.lastYOffset) {
        this.scrollingDown = true;
      } else {
        this.scrollingDown = false;
      }
      this.lastYOffset = window.pageYOffset;
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then()
        .catch(error => alert(error));
      this.submitted = true;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.frosty {
  background: linear-gradient(130deg, #3ae1b4 0%, #29c8db 50%, #2c7aff 100%);
}
.frosty2 {
  background: linear-gradient(90deg, #3ae1b4 0%, #29c8db 50%, #2c7aff 100%);
}

.frosty3 {
  background: linear-gradient(90deg, #3ae1b4 0%, #29c8db 50%, #2c99ff 100%);
}

li {
  transition: all 0.3s ease;
}

nav {
  transform-origin: 0% 0%;
}

.nav-scroll-enter,
.nav-scroll-leave-to {
  transform: scaleY(0);
  transition: all 0.2s ease;
}

.nav-scroll-enter-active,
.nav-scroll-leave-active {
  transition: all 0.2s ease;
}
</style>



