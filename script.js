function abrirCaja() {
  const tapa = document.querySelector('.lid');
  const cupon = document.querySelector('.coupon');
  const overlay = document.querySelector('.overlay');

  tapa.classList.add('abierta');

  setTimeout(() => {
    cupon.classList.add('mostrar');
    overlay.classList.add('mostrar');
  }, 700);
}
