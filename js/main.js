const set_time = () => {
    let date = new Date;

    // let check_second_rotation = 0 / 12
    // console.log(check_second_rotation);


    let second_rotation = date.getSeconds() / 60 * 360;
    document.querySelector('.second').style.rotate = `${second_rotation + 180}deg`
    
    let minute_rotation = (date.getMinutes() / 60 + (second_rotation / 360 / 60)) * 360;
    document.querySelector('.minute').style.rotate = `${minute_rotation + 180}deg`

    let hour_rotation = (date.getHours() / 12 *  360) + (minute_rotation / 12);
    document.querySelector('.hour').style.rotate = `${hour_rotation + 180}deg`
}

setInterval(set_time, 10)
setTimeout(() => {
    document.querySelectorAll('.hand').forEach(child => {
        child.style.display = 'block';
    })    
}, 10);