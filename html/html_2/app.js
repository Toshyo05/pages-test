function show(){
    document.getElementById('lightning').style.display = 'block';
}
function light(){
    document.getElementById('lightning').style.boxShadow = '0 0 25px rgba(0, 0, 0, 0.212), 0 0 50px rgba(0, 0, 0, 0.212)';
}
function unlight(){
    document.getElementById('lightning').style.boxShadow = 'none';
}