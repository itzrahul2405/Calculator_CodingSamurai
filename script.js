const display = document.getElementById('display')
const result = document.getElementById('res')
digitBtn = document.querySelectorAll('.digit-button')
operatorBtn = document.querySelectorAll('.operator')

let stack = []


// clear button
document.getElementById('clear').addEventListener('click', function(){
    display.value = ''
    result.innerText = ''
    stack = []
})

// backspace button
document.getElementById('backspace').addEventListener('click', function(){
    const length = display.value.length
    let s = display.value
    display.value = s.substr(0,length-1)
})



//  for digits
for(let i=0; i<digitBtn.length; i++){
    digitBtn[i].addEventListener('click', function(){
        display.value += digitBtn[i].textContent
    })
}


//  for operators
for(let i=0; i<operatorBtn.length; i++){
    operatorBtn[i].addEventListener('click', function(){
        // display.value = display.value +  ' ' + operatorBtn[i].textContent


        if(stack.length === 2){
            let op = stack.pop()
            let a = parseFloat(stack.pop())
            let val = display.value.split(' ')
            let b = parseFloat(val[val.length-1])

            if(op=='+'){
                let res = a+b
                result.innerText = res
                stack.push(res)
                stack.push(operatorBtn[i].textContent)
            }
            else if(op=='-'){
                let res = a-b
                result.innerText = res
                stack.push(res)
                stack.push(operatorBtn[i].textContent)
            }
            else if(op=='x'){
                let res = a*b
                result.innerText = res
                stack.push(res)
                stack.push(operatorBtn[i].textContent)
            }
            else if(op=='÷'){
                if(b=='0' || b=='00'){
                    display.value = 'Error!'
                    result.innerText = 'Error!'
                }
                else{
                    let res = a/b
                    result.innerText = res
                    stack.push(res)
                    stack.push(operatorBtn[i].textContent)
                }
            }
            else if(op=='%'){
                let res = Math.floor(a%b)
                result.innerText = res
                stack.push(res)
                stack.push(operatorBtn[i].textContent)
            }
         
            display.value = display.value + ' ' + operatorBtn[i].textContent + ' '
        
        }
        else if(stack.length==0){
            stack.push(display.value)
            display.value = display.value + ' ' + operatorBtn[i].textContent + ' '
            stack.push(operatorBtn[i].textContent)
        }
        // else{
        //     display.value = 'Something went Wrong!'
        // }

    })
}




//  for result by equal
document.getElementById('equal').addEventListener('click', function(){
    const val = display.value.split(' ')
    let b = parseFloat(val[val.length-1])
    let operator = stack.pop()
    let a = parseFloat(stack.pop())


    if(operator==='+'){
        let res = a+b
        display.value = res
        result.innerText = res
    }
    else if(operator==='-'){
        let res = a-b
        display.value = res
        result.innerText = res
    }
    else if(operator==='x'){
        let res = a*b
        display.value = res
        result.innerText = res
    }
    else if(operator==='÷'){
        if(b=='0' || b=='00'){
            display.value = 'Error!'
            result.innerText = 'Error!'
        }
        else{
            let res = a/b
            display.value = res
            result.innerText = res
        }
    }
    // handle modulas
    else if(operator==='%'){
        let res = Math.floor(a%b)
        display.value = res
        result.innerText = res
    }
    // else{
    //     display.value = 'Something went wrong!'
    // }

})





















