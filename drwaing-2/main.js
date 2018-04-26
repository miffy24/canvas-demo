var width
var color
var line = document.querySelector('#width')
var lineWidth= document.querySelector('#lineWidth')
var widthBar = document.querySelector('.width-bar')
var palette = document.querySelector('#palette')
var colorBar = document.querySelector('.color-bar')
var colorSelect = document.querySelector('ul')
let widthline=false
line.addEventListener('click',(e)=>{
    this.widthline=!this.widthline
    e.stopPropagation();
    if(this.widthline){
        widthBar.classList.add('active')
    }else{
        widthBar.classList.remove('active')
    }
    this.lineWidth.addEventListener('change',(e)=>{
        e.stopPropagation()
        width = this.lineWidth.value 
        console.log(width)
    })
})
var colors = false
palette.addEventListener('click',(e)=>{
    colors = !colors
    e.stopPropagation();
    if(colors){
        colorBar.classList.add('active')
    }else{
        colorBar.classList.remove('active')
    }
    colorSelect.addEventListener('click',(e)=>{
        e.stopPropagation()
        color = window.getComputedStyle(e.target,null).backgroundColor
        console.log(color)
    })
})
