<template>
    <Layout>
        <div
            class="container mx-auto flex flex-col md:flex-row justify-between items-center pt-64 pb-16 px-12 xl:px-64"
        >
            <div
                class="text-3xl text-center md:text-left font-bold w-3/5 font-display text-text-blue mb-8"
            >
                <div class="mb-8">Modern &amp; Responsive Web Design &amp; Development</div>
                <div
                    class="text-black text-xl font-regular font-body mb-8"
                >Specializing in beautiful front-end experiences, novel productivity tools for gamers and hobbyists, and consuming database APIs</div>
                <button
                    class="mb-4 font-display text-xl text-white font-bold frosty tracking-wider border-2 border-white rounded-full px-4 py-3 hover:text-text-green hover:border-text-green hover:bg-whitegrad"
                >EXAMPLES</button>
            </div>
            <g-image alt="Web Development" src="~/assets/webdev.png" class="ml-8 w-1/2" />
        </div>

        <div
            class="container mx-auto flex flex-col md:flex-row-reverse justify-between items-center pt-32 pb-16 px-12 xl:px-64"
        >
            <div
                class="text-3xl text-center md:text-right font-bold w-3/5 font-display text-text-blue mb-8"
            >
                <div
                    class="mb-8"
                >Flexible &amp; Purposeful CAD and Fabrication of Storage &amp; Transport Solutions</div>
                <div
                    class="text-black text-xl font-regular font-body mb-8"
                >Skilled with Autodesk Fusion 360 to design, draft, and fabricate custom flight cases for virtually any application</div>
                <button
                    class="mb-4 font-display text-xl text-white font-bold frosty tracking-wider border-2 border-white rounded-full px-4 py-3 hover:text-text-green hover:border-text-green hover:bg-whitegrad"
                >EXAMPLES</button>
            </div>
            <g-image alt="Web Development" src="~/assets/roadcase.png" class="md:mr-8 w-1/2" />
        </div>

        <div
            class="container mx-auto flex flex-col md:flex-row justify-between items-center pt-32 pb-16 px-12 xl:px-64"
        >
            <div
                class="text-3xl text-center md:text-left font-bold w-3/5 font-display text-text-blue mb-8"
            >
                <div class="mb-8">Intriguing &amp; Novel Tokens and Games Storage</div>
                <div
                    class="text-black text-xl font-regular font-body mb-8"
                >3D printable or laser engravable designs to enhance the gaming/hobby experience with custom tokens and box organizers</div>
                <button
                    class="mb-4 font-display text-xl text-white font-bold frosty tracking-wider border-2 border-white rounded-full px-4 py-3 hover:text-text-green hover:border-text-green hover:bg-whitegrad"
                >EXAMPLES</button>
            </div>
            <g-image alt="Web Development" src="~/assets/tokens.png" class="ml-8 w-1/2" />
        </div>

        <div
            id="about"
            class="container mx-auto flex flex-col items-center my-32 pt-8 px-2 text-center"
        >
            <g-image class="w-1/3" alt="Headshot" src="~/assets/headshot.png"></g-image>
            <div
                class="text-text-green text-5xl uppercase tracking-widest font-extrabold font-body mt-4"
            >Joe Wilson</div>
            <div
                class="text-black text-3xl uppercase tracking-wider font-semibold font-body mt-4"
            >FREELANCE WEB DEV | CAD | HOBBY ACCESSORIES</div>
            <div
                class="text-black text-xl tracking-wider font-semibold font-display mt-4"
            >I am an educator by profession, teaching computer science,</div>
            <div
                class="text-black text-xl tracking-wider font-semibold font-display"
            >design studies and robotics, but spend my spare time</div>
            <div
                class="text-black text-xl tracking-wider font-semibold font-display"
            >working on web projects and designing ways to</div>
            <div
                class="text-black text-xl tracking-wider font-semibold font-display"
            >improve my own hobby experiences.</div>
            <div
                class="text-black text-xl tracking-wider font-semibold font-display"
            >Let's make something awesome together!</div>
        </div>
    </Layout>
</template>



<style scoped>
button {
    transition: all 0.5s ease;
}
</style>


