module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "blue": "hsl(246, 80%, 60%)",
        "work": "hsl(15, 100%, 70%)",
        "play": "hsl(195, 74%, 62%)",
        "study": "hsl(348, 100%, 68%)",
        "exercise": "hsl(145, 58%, 55%)",
        "social": "hsl(264, 64%, 52%)",
        "self-care": "hsl(43, 84%, 65%)",
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "pale-Blue": "hsl(236, 100%, 87%)",
      },
      fontFamily:{
        "rubik": ['Rubik', "sans-serif"]
      },
      backgroundImage:{
        "icon-ellipsis": "url('/public/images/icon-ellipsis.svg')",
        "icon-exercise": "url('/public/images/icon-exercise.svg')",
        "icon-play": "url('/public/images/icon-play.svg')",
        "icon-self-care": "url('/public/images/icon-self-care.svg')",
        "icon-social": "url('/public/images/icon-social.svg')",
        "icon-study": "url('/public/images/icon-study.svg')",
        "icon-work": "url('/public/images/icon-work.svg')",
        "jeremy-robson": "url('/public/images/image-jeremy.png')"
      },
    },
  },
  plugins: [],
}
