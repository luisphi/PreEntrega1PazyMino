export const CartWidget = () => {
  return (
    <div className='cartWidget'>
      <button type="button" className="btn colorCartButton position-relative">
        <img src={"images/cart3.svg" } alt={"carrito"} width={20}  />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">6</span>
      </button>
    </div>
  )
}
