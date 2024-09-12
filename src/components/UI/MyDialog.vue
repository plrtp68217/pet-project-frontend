<template>
    <div @click.stop="hideDialog" v-if="show" class="dialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },

    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    }
   
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
        background-color: white;
        padding: 20px 40px;
        border-radius: 18px;
        width: 400px;
        height: 260px;
        overflow: hidden;
    }
</style>