const PopupError = ({ close }) => {
  return (
    <div className='popup-modal mfp-with-anim'>
      <div className='popup-content'>
        <div className='popup-top'>
          <h4>Ошибка 👀</h4>
          <div className='desc'>Пожалуйста, позвоните нам</div>
        </div>
        <div className='popup-bottom'>
          <div className='modal-pic'>
            <img src='/assets/images/results-pic.svg' alt='' />
          </div>
          <div className='modal-wave'>
            <img src='/assets/images/wave-modal.svg' alt='' />
          </div>
        </div>
        <button className='mfp-close' type='button' onClick={close}>
          <img src='/assets/images/close.svg' alt='' />
        </button>
      </div>
    </div>
  )
}

export default PopupError
