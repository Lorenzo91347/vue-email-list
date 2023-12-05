'use strict'

const response = fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then((data) => console.log(data));

const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            newArray: [],

        }
    },
    methods: {
        arrayFill() {
            for (i = 0; i < 10; i++)
                axios
                    .get(this.apiUrl)
                    .then((response) => {
                        newArray.push(response.data)
                    })
        },
    }




}).mount('#app');
