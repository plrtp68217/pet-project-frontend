<template>
    <div class="dialog">
        <div  class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    
   
}
</script>

<style scoped>
    .dialog {
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .dialog__content {
        background-color: aliceblue;
        padding: 10px 30px 10px 30px;
        border-radius: 18px;
    }
</style>