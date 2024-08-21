<template>
    <div class="container__left_bar">
        <h1 class="container__left_bar_title">Фильтр товаров</h1>
        <div class="filter">

            <div class="filter__item">
                <input class="input__filter" id="bots" type="checkbox" value="bot" @change="changeRule">
                <label for="bots">Боты</label>
            </div>

            <div class="filter__item">
                <input class="input__filter" id="sites" type="checkbox" value="site" @change="changeRule">
                <label for="bots">Сайты</label>
            </div>

            <div class="filter__item">
                <input class="input__filter" id="algors" type="checkbox" value="alg" @change="changeRule">
                <label for="bots">Алгоритмы</label>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            filterRules: []
        }
    },

    methods: {
        changeRule(event) {
            const valueRule = event.target.value;
            const indexRule = this.filterRules.indexOf(valueRule);

            if (indexRule == -1 ) {
                this.filterRules.push(valueRule)
            } else {
                delete this.filterRules[indexRule];
            }

            this.$emit('filter', this.filterRules);
        }
    }
}

</script>

<style>
    .container__left_bar {
        width: 288px;
        border: 1px rgb(224, 223, 223) solid;
        /* padding: 24px; */
        height: 600px;
        margin-left: 20px;
    }

    .container__left_bar_title {
        padding: 20px;
    }

    .filter {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        background-color: #454F5B;
        color: white;
        font-size: 20px;
    }

    .filter__item {
        padding: 0px 20px;
    }

    .input__filter {
        margin-bottom: 6px;
        margin-right: 6px;

    }

    .filter__item:hover {
        background-color: rgb(224, 223, 223);
        color: black;
    }
    
</style>


