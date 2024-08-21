<template>
    <div class="container__content">
        <slot></slot>
    </div>

</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>

.container__content {
    display: flex;
    max-width: 1245px;
    margin: 120px auto;
}

.container__content {
    display: flex;
    max-width: 1245px;
    margin: 60px auto;
}

@keyframes leftBar_animation {
    from {
        transform: scale(0.95);
    }

    to {
        transform: scale(1.0);
    }
}

@media (max-width: 1183px) {
    .container__content {
        animation-name: leftBar_animation;
        animation-duration: 200ms;
        flex-direction: column;
        align-items: center;
    }

    .container__left_bar {
        width: 80%;
        display: flex;
        height: auto;
        margin-bottom: 20px;
    }

    .filter {
        flex-direction: row;
        align-items: center;
        margin-top: 0px;
    }
}




</style>