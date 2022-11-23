document.getElementById('RD1').classList.add('z4');
document.getElementById('b5').classList.add('A');
document.getElementById('pop1').classList.add('p1');
document.getElementById('pop2').classList.add('p1');
document.getElementById('dice').classList.add('diceroll');
document.getElementById('win').classList.add('noshow');


document.getElementById("RD1").addEventListener('click', function(){
    document.getElementById('b5').classList.replace('A','B');
    document.getElementById('dice').classList.replace('diceroll','dice5');
    document.getElementById('pop1').classList.replace('p1','p2');
});
document.getElementById("OK1").addEventListener('click', function(){
    document.getElementById('pop1').classList.add('p3');
    document.getElementById('b5').classList.replace('B','C');
    document.getElementById('RD1').classList.replace('z4','z1');
    document.getElementById('RD2').classList.add('z4');
    document.getElementById('dice').classList.replace('dice5','diceroll');
});
document.getElementById("RD2").addEventListener('click', function(){
    document.getElementById('b5').classList.replace('C','D');
    document.getElementById('dice').classList.replace('diceroll','dice3');
    document.getElementById('pop2').classList.replace('p1','p2');
});
document.getElementById("OK2").addEventListener('click', function(){
    document.getElementById('pop2').classList.add('p3');
    document.getElementById('b5').classList.replace('D','E');
    document.getElementById('RD2').classList.replace('z4','z1');
    document.getElementById('RD3').classList.add('z4');
    document.getElementById('dice').classList.replace('dice3','diceroll');
});
document.getElementById("RD3").addEventListener('click', function(){
    document.getElementById('b5').classList.replace('E','F');
    document.getElementById('dice').classList.replace('diceroll','dice2');
    document.getElementById('win').classList.replace('noshow','show');
});
// document.getElementById('b5').classList.add('B');
//     document.getElementById('d3').classList.add('l');