<template>
    <header class="fixed top-0 left-0 w-screen z-20">
        <div id="home" class="h-2 frostytop mx-0 z-20"></div>

        <transition name="nav-scroll">
            <nav
                v-if="!scrollingDown"
                class="mx-auto flex justify-between items-center py-2 sm:py-4 px-4 sm:px-10 bg-white z-10"
            >
                <a class="flex items-center" href="#" v-scroll-to="'#home'">
                    <span
                        class="align-middle font-body font-extrabold text-text-green text-xl lg:text-3xl hover:text-ice-600 tracking-wider"
                    >JTWILSON.DESIGN</span>
                    <span
                        style="color: #39C9DA"
                        class="align-middle font-display font-extrabold text-3xl lg:text-4xl -mt-1"
                    >( )</span>
                </a>

                <ul
                    class="hidden md:flex tracking-widest font-display font-bold text-xl lg:text-2xl text-text-blue"
                >
                    <div class>
                        <li
                            class="mr-4 lg:mr-8 border-2 border-transparent rounded-full px-3 py-2 lg:px-4 lg:py-3 hover:text-text-green hover:border-text-green"
                        >
                            <a href="#" v-scroll-to="'#home'">HOME</a>
                        </li>
                    </div>
                    <li
                        class="mr-2 lg:mr-8 border-2 border-transparent rounded-full px-3 py-2 lg:px-4 lg:py-3 hover:text-text-green hover:border-text-green"
                    >
                        <a href="#" v-scroll-to="'#about'">ABOUT</a>
                    </li>
                    <li
                        class="border-2 border-transparent rounded-full px-3 py-2 lg:px-4 lg:py-3 hover:text-text-green hover:border-text-green"
                    >
                        <a href="#" v-scroll-to="'#contact'">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </transition>
    </header>
</template>

<script>
export default {
    name: "Header",
    data: function() {
        return {
            scrollingDown: false,
            lastYOffset: 0
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
.frostytop {
    background: linear-gradient(90deg, #3ae1b4 0%, #29c8db 50%, #2c7aff 100%);
}
.frosty {
    background-image: linear-gradient(
        130deg,
        #3ae1b4 0%,
        #29c8db 50%,
        #2c7aff 100%
    );
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