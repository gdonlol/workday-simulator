export const Footer = () => {
  return (
    <div className="flex-col flex-aic" style={{ color: 'rgb(73, 73, 73)', marginTop: '16px' }}>
      <p>Follow Us</p>
      <div className="flex flex-jcc" style={{ gap: '10px' }}>
        <div className="flex flex-jcc flex-aic social-icon"><i className="fa fa-linkedin"></i></div>
        <div className="flex flex-jcc flex-aic social-icon"><i className="fa fa-quote-right"></i></div>
        <div className="flex flex-jcc flex-aic social-icon"><i className="fa fa-twitter"></i></div>
        <div className="flex flex-jcc flex-aic social-icon"><i className="fa fa-facebook"></i></div>
      </div>
      <p style={{ fontSize: '11px' }}>
        <small>© 2024 gdonlol. This is a fan-made project and is not affiliated with any company depicted on this website.</small>
      </p>
    </div>
  )
}
