/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./*.js'],
  theme: {
    extend: {
      colors:{
        primary:'#6C63FF',
        secondary:'#e3e3e4',
        navDark:'#1E1B4B',
        navHover:'#574FE0',
      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
      },
      borderRadius:{
        '2':'1rem',
      },
      boxShadow:{
        product:'0 10px 25px rgba(108, 99, 255, 0.30)',
      },
      fontSize:{
        nav:'17px',
      },
      spacing:{
        nav:'28px',
      }
    },
  },
  plugins: [],
}

