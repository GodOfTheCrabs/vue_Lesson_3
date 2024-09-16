<!-- 5.Створіть два елементи, один з v-show, інший з v-if, з однаковими умовами. 
    Змініть умову і спостерігайте за відмінностями у DOM. Дослідіть, в яких ситуаціях краще використовувати кожну директиву. 
    Разница между v-if и v-show заключаются в том что v-if полностю уберает елемент с страници, а v-show дает стиль display: none;
-->

<template>
    <div class="task-border">
        <p class="h4">Task 5</p>
        <div v-show="isVisible" class="h5">
            Elements with v-show
        </div>
        <div v-if="isVisible" class="h5">
            Elements with v-if
        </div>
        <button type="button" class="btn btn-primary btn-massive" @click="changeVisible">Change visible</button>
    </div>
</template>

<script>
    export default {
        name: 'Task5',
        data() {
            return {
                isVisible: true,
            }
        },
        methods: {
            changeVisible() {
                this.isVisible = !this.isVisible
            }
        }
    }
</script>

<style>

</style>