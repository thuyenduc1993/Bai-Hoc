let nam= prompt("ai đó");
if (nam ==='admin') {
        let pass=prompt('password');
        if (pass==='TheMaster') {
            alert(' Welcome')
        } else if (pass===null ) {
            alert('Canceled');
        } else {
            alert('Wrong password');
        }
    }else if (nam ===null) {
    alert('Canceled');
} else {
    alert("tối ko biết bạn");
}