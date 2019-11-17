<template>
    <div id="contact" class="frostyfoot h-screen z-10">
        <div class="flex flex-col h-screen justify-between items-center">
            <div class="text-4xl text-white font-extrabold pb-8 pt-8">Get in Touch!</div>
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
                        class="my-2 w-full mx-auto text-xl font-bold font-body rounded-full py-2 px-4"
                        name="message"
                        placeholder="What can we build together?"
                        v-model="formData.message"
                    ></textarea>
                </div>

                <button
                    :style="[submitted?{'pointer-events':'none'}:{'pointer-events':'all'}]"
                    v-bind:class="{'bg-pink-400': submitted, 'bg-pink-500': !submitted}"
                    class="my-4 flex border-white text-white border-2 mx-auto text-xl font-semibold font-body rounded-full py-2 px-4"
                    type="submit"
                >{{submitted?"Thanks!":"Submit"}}</button>
            </form>
            <div class="text-center">
                <div
                    class="uppercase text-lg font-body text-white"
                >Copyright {{new Date().getFullYear()}}</div>
                <div class="uppercase text-md font-body text-white">Joe Wilson</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data: function() {
        return {
            formData: {},
            submitted: false
        };
    },
    methods: {
        encode(data) {
            return Object.keys(data)
                .map(
                    key =>
                        encodeURIComponent(key) +
                        "=" +
                        encodeURIComponent(data[key])
                )
                .join("&");
        },
        handleSubmit(e) {
            fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: this.encode({
                    "form-name": e.target.getAttribute("name"),
                    ...this.formData
                })
            })
                .then()
                .catch(error => alert(error));
            this.submitted = true;
        }
    }
};
</script>

<style scoped>
.frostyfoot {
    background-image: linear-gradient(
        130deg,
        #3ae1b4 0%,
        #29c8db 50%,
        #2c7aff 100%
    );
}
</style>