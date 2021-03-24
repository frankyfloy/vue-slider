var app = new Vue({
    el: '#root',
    data: {
        index : 0,
        a_IMG : [
            "assets\\img\\salerno.png",
            "assets\\img\\salerno2.jpg",
            "assets\\img\\salerno3.webp",
            "assets\\img\\salerno4.jpg",
            "assets\\img\\salerno5.jpg",
            "assets\\img\\salerno6.jpg",
            "assets\\img\\salerno7.jpg",
        ],
        header: "Salerno"
    },

    methods: {
        next: function () {
            if (this.index < this.a_IMG.length - 1) {
                this.index++;
            }else{
                this.index = 0;
            }
        },

        prev: function () {
            if (this.index > 0) {
                this.index--;
            }else{
                this.index = this.a_IMG.length - 1;
            }
        }
    }

    // setTimeout(function (){
    //
    // },1200);
});
