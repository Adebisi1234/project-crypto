let violet = document.querySelectorAll(".crypto")
let newArr = [...violet]

newArr.forEach(x=> (x.addEventListener('click', add)))

function add(){
    newArr.forEach(x => {
        if(x != this){
            x.classList.add('bg-white')
            x.classList.remove('bg-violet')
        }else{
            this.classList.add('bg-violet')
        }
    })
}


