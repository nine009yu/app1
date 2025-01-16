import React from "react"
function randlnt(min,max){
    let x = (max-min)+1
    return min+Math.floor(Math.random()*x)
}
export default function Banner(){
    const r=randlnt(1,3)
    let banner=''
    let url=''

    switch(r){
        case 1:
            banner
    }
}