<template>
    <div class="card">
        <div class="card-img">
            <home-icon />
        </div>
        <div class="card-content p-t p-b">
            <div class="container">
                <p>
                    <b>Imię i nazwisko</b>
                    <br>Piotr Golczyk
                </p>
                <p>
                    <b>Data urodzenia</b>
                    <br>1991/11/14
                </p>
                <p>
                    <b>Miejsce zamieszkania</b>
                    <br>Gdańsk
                </p>
                <p>
                    <b>Zawód</b>
                    <br>Web developer
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import homeIcon from './icons/home';
export default {
    components: {
        homeIcon
    }
};
</script>
