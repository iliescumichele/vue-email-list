/*
    Attraverso l’apposita API di Boolean
    https://flynn.boolean.careers/exercises/api/random/mail
    generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

    Bonus
    Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/
const app = new Vue ({

    el: "#app",

    data: {
        numMails: 10,
        emails: [],
        success: true,
    },

    methods: {
        getMails(numMails){
            for(i=0 ; i<numMails ; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((boolean) =>{
                    const aMail = boolean.data.response;
                    console.log(aMail);
                    this.emails.push(aMail);
                    if(this.emails.lenght === numMails){
                        this.success = false;
                    };
                });
            }
            console.log(this.emails);
        }
    },

    mounted() {
        this.getMails(this.numMails)
    },
})
