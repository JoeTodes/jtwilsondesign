<template>
  <Layout>
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between items-center pt-64 pb-16 px-12 lg:px-32"
    >
      <div class="text-3xl font-bold w-3/5 font-display text-text-blue mb-8">
        <div class="mb-8">Modern &amp; Responsive Web Design &amp; Development</div>
        <div
          class="text-black text-xl font-regular font-body mb-8"
        >Specializing in beautiful front-end experiences, novel productivity tools for gamers and hobbyists, and consuming database APIs</div>
        <button
          class="mb-4 font-display text-xl text-white font-bold frosty tracking-wider border-2 border-white rounded-full px-4 py-3 hover:text-text-green hover:border-text-green hover:bg-whitegrad"
        >EXAMPLES</button>
      </div>
      <g-image alt="Example image" src="~/favicon.png" />
    </div>

    <div
      class="container mx-auto flex flex-col md:flex-row-reverse justify-between items-center pt-32 pb-16 px-12 lg:px-32"
    >
      <div class="text-3xl text-right font-bold w-3/5 font-display text-text-blue mb-8">
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
      <g-image alt="Example image" src="~/favicon.png" />
    </div>

    <div
      class="container mx-auto flex flex-col md:flex-row justify-between items-center pt-32 pb-16 px-12 lg:px-32"
    >
      <div class="text-3xl text-left font-bold w-3/5 font-display text-text-blue mb-8">
        <div class="mb-8">Intriguing &amp; Novel Tokens and Games Storage</div>
        <div
          class="text-black text-xl font-regular font-body mb-8"
        >3D printable or laser engravable designs to enhance the gaming/hobby experience with custom tokens and box organizers</div>
        <button
          class="mb-4 font-display text-xl text-white font-bold frosty tracking-wider border-2 border-white rounded-full px-4 py-3 hover:text-text-green hover:border-text-green hover:bg-whitegrad"
        >EXAMPLES</button>
      </div>
      <g-image alt="Example image" src="~/favicon.png" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style scoped>
button {
  transition: all 0.5s ease;
}
</style>


