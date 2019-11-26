<template>
    <div>
        <Panel
            title="web"
            v-on:close-portfolio="closePortfolio"
            v-show="openWeb"
            v-scroll-lock="openWeb"
        />
        <Panel
            title="cad"
            v-on:close-portfolio="closePortfolio"
            v-show="openCad"
            v-scroll-lock="openCad"
        />
        <Panel
            title="gaming"
            v-on:close-portfolio="closePortfolio"
            v-show="openGaming"
            v-scroll-lock="openGaming"
        />

        <Layout class="sm:pt-8 md:pt-16">
            <Content v-on:open-portfolio="openPortfolio" title="web" :isLeft="true">
                <template v-slot:title>Modern &amp; Responsive Web Design &amp; Development</template>
                <template
                    v-slot:body
                >Specializing in beautiful front-end experiences, novel productivity tools for gamers and hobbyists, and Shopify e-commerce platforms</template>
                <template v-slot:image>
                    <g-image
                        alt="Web Development"
                        src="~/assets/webdev.png"
                        class="lg:ml-8 w-3/4 sm:w-1/2"
                    />
                </template>
            </Content>

            <Content v-on:open-portfolio="openPortfolio" title="cad" :isLeft="false">
                <template
                    v-slot:title
                >Flexible &amp; Purposeful CAD and Fabrication of Storage &amp; Transport Solutions</template>
                <template
                    v-slot:body
                >Skilled with Autodesk Fusion 360 to design, draft, and fabricate custom flight cases for virtually any application</template>
                <template v-slot:image>
                    <g-image
                        alt="Web Development"
                        src="~/assets/roadcase.png"
                        class="lg:mr-8 w-3/4 sm:w-1/2"
                    />
                </template>
            </Content>

            <Content v-on:open-portfolio="openPortfolio" title="gaming" :isLeft="true">
                <template v-slot:title>Intriguing &amp; Novel Tokens and Games Storage</template>
                <template
                    v-slot:body
                >3D printable or laser engravable designs to enhance the gaming/hobby experience with custom tokens and box organizers</template>
                <template v-slot:image>
                    <g-image
                        alt="Web Development"
                        src="~/assets/tokens.png"
                        class="lg:ml-8 w-3/4 sm:w-1/2"
                    />
                </template>
            </Content>

            <About />
        </Layout>
    </div>
</template>

<script>
import About from "~/components/About.vue";
import Content from "~/components/IndexContent.vue";
import Panel from "~/components/portfolios/Panel.vue";

export default {
    metaInfo: {
        title: "Home"
    },
    data: function() {
        return {
            openWeb: false,
            openCad: false,
            openGaming: false,
            YOffset: 0
        };
    },
    components: {
        About,
        Content,
        Panel
    },
    methods: {
        openPortfolio: function(title) {
            switch (title) {
                case "web":
                    this.openWeb = true;
                    break;
                case "cad":
                    this.openCad = true;
                    break;
                case "gaming":
                    this.openGaming = true;
                    break;

                default:
                    break;
            }
        },
        closePortfolio: function(title) {
            switch (title) {
                case "web":
                    this.openWeb = false;
                    break;
                case "cad":
                    this.openCad = false;
                    break;
                case "gaming":
                    this.openGaming = false;
                    break;

                default:
                    break;
            }
        }
    }
};
</script>

<style scoped>
.frosty {
    background-image: linear-gradient(
        130deg,
        #3ae1b4 0%,
        #29c8db 50%,
        #2c7aff 100%
    );
}
</style>

