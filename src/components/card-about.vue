<template>
    <div class="card">
        <div class="card-img">
            <!-- <img src="@/assets/img/piotrgolczyk.jpg" alt=""> -->
            <about-icon />
        </div>
        <div class="card-content p-t p-b">
            <div class="container">
                <p>
                    <b>Zainteresowania</b>
                    <ul>
                        <li>Gry komputerowe</li>
                        <li>Muzyka</li>
                        <li>Technologia</li>
                        <li>Psychologia</li>
                    </ul>
                </p>
                <p>
                    <b>Języki</b>
                    <ul>
                        <li>polski - ojczysty</li>
                        <li>angielski - B2</li>
                    </ul>
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
