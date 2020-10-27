import * as $ from 'jquery'
import Post from '@models/Post'
import WebpackLogo from '@/assets/webpack-logo.png'
import '@/babel'
import '@/styles/styles.css'
import '@/styles/scss.scss'

const  post = new Post('Webpack Post Title', WebpackLogo)
$('pre').addClass('code').html(post.toString())

// console.log('Post to String:', post.toString())