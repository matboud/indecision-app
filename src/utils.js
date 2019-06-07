console.log('utils here');

export const isAdult = (age) => {
    if(age > 18){
        return 'adult'
    } else {
        return 'noop'
    }
}

export const canDrink = (age) => {
    if(age > 21){
        return 'get twisted'
    } else {
        return 'no drink for u kiddo'
    }
}