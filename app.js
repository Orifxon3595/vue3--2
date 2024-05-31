const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: "Sariq dev", author: "Hudoyberdi", img: "assets/img1.jpg", isFav: true},
        { title: "Sariq dev", author: "Hudoyberdi", img: "assets/img2.jpg", isFav: false},
        { title: "Sariq dev", author: "Hudoyberdi", img: "assets/img3.jpg", isFav: false},
      ],
      // title: 'Hello World',
      // author: 'Orifxon Tuychiyev',
      // age: '28',
      // x: 0,
      // y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleClick(e){
      console.log(e);

    }
    // handleEvent(e, data){
    //     console.log(e, e.type);
    //     if(data){
    //         console.log(data);
    //     }
    // },
    // handleMousemove(e){
    //     this.x = e.offsetX;
    //     this.y = e.offsetY;
    //     console.log(e);
    // }
  },
});
app.mount("#app");
