<template>
    <Layout class="sm:pt-8 md:pt-32">
        <Content :isLeft="true">
            <template v-slot:title>Modern &amp; Responsive Web Design &amp; Development</template>
            <template
                v-slot:body
            >Specializing in beautiful front-end experiences, novel productivity tools for gamers and hobbyists, and consuming database APIs</template>
            <template v-slot:image>
                <g-image
                    alt="Web Development"
                    src="~/assets/webdev.png"
                    class="ml-8 w-3/4 sm:w-1/2"
                />
            </template>
        </Content>

        <Content :isLeft="false">
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
                    class="ml-8 w-3/4 sm:w-1/2"
                />
            </template>
        </Content>

        <Content :isLeft="true">
            <template v-slot:title>Intriguing &amp; Novel Tokens and Games Storage</template>
            <template
                v-slot:body
            >3D printable or laser engravable designs to enhance the gaming/hobby experience with custom tokens and box organizers</template>
            <template v-slot:image>
                <g-image
                    alt="Web Development"
                    src="~/assets/tokens.png"
                    class="ml-8 w-3/4 sm:w-1/2"
                />
            </template>
        </Content>

        <About />
    </Layout>
</template>

<script>
import About from "~/components/About.vue";
import Content from "~/components/IndexContent.vue";
export default {
    metaInfo: {
        title: "Home"
    },
    components: {
        About,
        Content
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

