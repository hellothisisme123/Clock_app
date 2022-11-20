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












const light_up_segment = (value, segment) => { //segment is (0 - 3), value is (0 - 9)
    const seg_1 = document.querySelector('#seg_0')
    const seg_2 = document.querySelector('#seg_1')
    const seg_3 = document.querySelector('#seg_2')
    const seg_4 = document.querySelector('#seg_3')

    const segments = [ seg_1, seg_2, seg_3, seg_4 ]

    let kiddies_list = segments[segment].childNodes;
    if (kiddies_list.length > 7) kiddies_list.forEach(segment => segment.remove());
    kiddies_list.forEach(segment => segment.classList.remove('lit'));

    let lit_segs = kiddies_list;
    if (value == 0) lit_segs = [kiddies_list[0], kiddies_list[2], kiddies_list[3], kiddies_list[4], kiddies_list[5], kiddies_list[6]];
    else if (value == 1) lit_segs = [kiddies_list[5], kiddies_list[6]];
    else if (value == 2) lit_segs = [kiddies_list[0], kiddies_list[1], kiddies_list[5], kiddies_list[4], kiddies_list[2]];
    else if (value == 3) lit_segs = [kiddies_list[0], kiddies_list[1], kiddies_list[2], kiddies_list[5], kiddies_list[6]];
    else if (value == 4) lit_segs = [kiddies_list[3], kiddies_list[1], kiddies_list[5], kiddies_list[6]];
    else if (value == 5) lit_segs = [kiddies_list[3], kiddies_list[0], kiddies_list[1], kiddies_list[6], kiddies_list[2]];
    else if (value == 6) lit_segs = [kiddies_list[3], kiddies_list[4], kiddies_list[2], kiddies_list[6], kiddies_list[1], kiddies_list[0]];
    else if (value == 7) lit_segs = [kiddies_list[0], kiddies_list[5], kiddies_list[6]];
    else if (value == 9) lit_segs = [kiddies_list[0], kiddies_list[1], kiddies_list[3], kiddies_list[5], kiddies_list[6]];
    else if (value == 'empty') kiddies_list.forEach(segment => segment.classList.remove('lit'));

    if (value != 'empty') { lit_segs.forEach(segment => {
        segment.classList.add('lit')
    })}
}

let merica = true;

const set_digital_time = () => {
    const date = new Date;

    let hour = date.getHours();
    if (hour > 12 && merica) hour -= 12;
    if (`${hour}`.length == 1) {
        light_up_segment('empty', 0)
        light_up_segment(`${hour}`.charAt(0), 1)
    } else if (`${hour}`.length == 2) {
        light_up_segment(`${hour}`.charAt(0), 0)
        light_up_segment(`${hour}`.charAt(1), 1)
    }


    let minute = date.getMinutes()
    if (`${minute}`.length == 1) {
        light_up_segment('empty', 2)
        light_up_segment(`${minute}`.charAt(0), 3)
    } else if (`${minute}`.length == 2) {
        light_up_segment(`${minute}`.charAt(0), 2)
        light_up_segment(`${minute}`.charAt(1), 3)
    }

    console.log(minute)


}

setInterval(set_digital_time, 100);