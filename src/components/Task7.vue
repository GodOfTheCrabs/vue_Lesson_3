<!-- Використовуючи v-bind, динамічно додавайте або видаляйте атрибути елемента (наприклад, disabled, readonly) в залежності від умови. -->

<template>
    <div class="task-border">
        <p class="h4">Task 6</p>
        <v-btn @click="toogleState" style="margin-bottom: 15px;">
            {{ isDisable ? 'Enable input' : 'Disable input' }}
        </v-btn>

        <input type="text" :disabled="isDisable" :readonly="isReadonly" class="form-control" placeholder="Enter your text">
    </div>
</template>

<script>
    export default {
        name: 'Task7',
        data() {
            return {
                isDisable: true,
                isReadonly: true,
            }
        },
        methods: {
            toogleState() {
                this.isDisable = !this.isDisable
                this.isReadonly = !this.isReadonly
            }
        },
    }
</script>

<style>

</style>