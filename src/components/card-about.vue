<template>
    <div class="card">
        <div class="card-img">
            <img src="@/assets/img/piotrgolczyk.jpg" alt="">
            <!-- <about-icon /> -->
        </div>
        <div class="card-content p-t p-b">
            <div class="container">
                <p>
                    <b>E-mail:</b>
                    <br><a class="super" href="mailto:petegi@outlook.com">petegi@outlook.com</a>
                </p>
                <p>
                    <b>LinkedIn:</b>
                    <br><a class="super" href="https://linkedin.com/in/piotr-g-a9a990133" target="_blank">/in/piotr-g-a9a990133</a>
                </p>
                <p>
                    <b>Twitter</b>
                    <br><a class="super" href="https://twitter.com/pete_gi" target="_blank">@pete_gi</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import aboutIcon from './icons/about';
export default {
    components: {
        aboutIcon
    }
};
</script>
