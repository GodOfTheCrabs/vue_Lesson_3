<template>
    <div class="container">

             <!-- 6.Створіть декілька компонентів і динамічно переключайте між ними за допомогою v-if, 
                в залежності від вибору користувача (наприклад, використовуючи радіокнопки або випадаючий список).  -->
        <div class="task-border" style="margin-bottom: 25px;">
            <p class="h4">Task 6</p>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="first" v-model="message">
            <label class="form-check-label h5" for="flexRadioDefault1">
                Component FirstMessage
            </label>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="second" v-model="message">
            <label class="form-check-label h5" for="flexRadioDefault1">
                Component SecondMessage
            </label>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="third" v-model="message">
            <label class="form-check-label h5" for="flexRadioDefault1">
                Component ThirdMessage
            </label>
            <div v-if="message === 'first'">
                <FirstMessage />
            </div>
            <div v-if="message === 'second'">
                <SecondMessage />
            </div>
            <div v-if="message === 'third'">
                <ThirdMessage />
            </div>
        </div>
    </div>
</template>

<script>
    import FirstMessage from '../components/FirstMessage.vue'    
    import SecondMessage from '../components/SecondMessage.vue'    
    import ThirdMessage from '../components/ThirdMessage.vue'    

    export default {
        name: 'Task6',
        components: {
            FirstMessage,
            SecondMessage,
            ThirdMessage
        },
        data() {
            return {
                message: ''
            }
        },
    }

</script>

<style lang="css" scoped>
    .form-check-input{
        border: 1px solid black;
        margin-right: 10px;
    }
    .form-check-label {
        margin-right: 30px;
    }
    .form-control {
        margin: 25px auto 0;
    }
</style>