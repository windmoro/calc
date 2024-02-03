let netice;

topla.onclick = () => {
    netice = `${+reqem1.value} + ${+reqem2.value} = ${+reqem1.value + +reqem2.value}`
    document.getElementById('calc').innerHTML = netice
}
cixan.onclick = () => {
    netice = `${reqem11.value} - ${reqem2.value} = ${reqem1.value - reqem2.value}`
    document.getElementById('calc').innerHTML = netice
}

vuran.onclick = () => {
    netice = `${reqem1.value} * ${reqem2.value} = ${reqem1.value * reqem2.value}`
    document.getElementById('calc').innerHTML = netice
}

bolen.onclick = () => {
    netice = `${reqem1.value} / ${reqem2.value} = ${reqem1.value / reqem2.value}`
    document.getElementById('calc').innerHTML = netice
}
