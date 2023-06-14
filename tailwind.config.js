/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark:'#323232',
        light:'#ffffff',
        primary:'#04ddb2',
        greeen:'#0EB582',
        bluee:'#18406B',
      }
    },
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '1080px',
      'xl': '1920'
    },
  
    backgroundImage: {
      'bannerBG1':'url("./img/slider-bg2.jpg")',
      'bannerBG2':'url("./img/slider-4-slide-2-1920x678.jpg")',
      'bannerBG3': 'url("./img/slider-4-slide-1-1920x678.jpg")',
      'first-bg':'url("./img/parallax-1-1920x850.jpg")',
      'dream-bg':'url("./img/thumnails-info-1-370x303.jpg")',
      'email-bg': 'url("./img/parallax-2-1920x850.jpg")',
    },
    keyframes: {
      sliding1:{
        from: {
          left:'0',
        },
        to: {
          left:'100%',
        },
      },
      sliding2:{
        from: {
          right:'0',
        },
        to: {
          right:'100%',
        },
      }
    },
    animation:{
      sliding1: 'sliding1 3s linear infinite',
      sliding2: 'sliding2 3s linear infinite',
    },
  plugins: [],
}

}