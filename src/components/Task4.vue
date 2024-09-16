<!-- 4.Створіть компонент, який відображає два різних повідомлення на основі булевої змінної. Переключайте змінну для перевірки умовного виведення обох повідомлень. -->
<template>
    <div class="task-border">
        <p class="h4">Task 4</p>
        <button type="button" class="btn btn-primary btn-massive" @click="changeMessage">Change message</button>
        <p class="h4" v-if="message">Old message</p>
        <p class="h4" v-else>New message</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: true
            }
        },
        methods: {
            changeMessage() {
                if(this.message) {
                    this.message = false
                }
                else {
                    this.message = true
                }
            },
        }
    }
</script>

<style>

</style>