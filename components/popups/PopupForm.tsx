import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import onSubmitForm from '@/components/hooks/onSubmitForm'
import PopupThankyou from '@/components/popups/PopupThankyou'
import PopupLoader from '@/components/popups/PopupLoader'
import PopupError from '@/components/popups/PopupError'
import Popup from 'reactjs-popup'

type FormValues = {
  name: string
  phone: string
  email: string
}

const PopupForm = ({ close }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)
  const [showError, setShowError] = useState(false)
  const closeModal = () => setOpen(false)
  const closeLoadingModal = () => setOpenLoader(false)
  const closeError = () => setShowError(false)

  const { asPath } = useRouter()

  const arrToObj = arr => {
    const obj = {}
    arr.forEach(item => {
      obj[item[0]] = item[1]
    })
    return obj
  }

  const gatherUtms = () => {
    const utmsArr = asPath
      .slice(2)
      .split('&')
      .map(utm => utm.split('='))
    const utmsObj = arrToObj(utmsArr)
    return utmsObj
  }

  const utmsObj = gatherUtms()

  const onSubmitFormThis = async values => {
    setOpenLoader(o => !o)
    values.utmSource = utmsObj['utm_source']
    values.utmMedium = utmsObj['utm_medium']
    values.utmCampaign = utmsObj['utm_campaign']
    values.utmContent = utmsObj['utm_content']
    values.utmTerm = utmsObj['utm_term']
    values.utmWorker = utmsObj['utm_worker']
    const req = await onSubmitForm(values)
    if (req === 200) {
      closeLoadingModal()
      setOpen(o => !o)
      reset()
    } else {
      closeLoadingModal()
      setShowError(o => !o)
    }
  }

  return (
    <div className='popup-modal mfp-with-anim'>
      <Popup open={openLoader} onClose={closeLoadingModal}>
        <PopupLoader close={closeLoadingModal} />
      </Popup>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <PopupThankyou close={closeModal} />
      </Popup>
      <Popup open={showError} closeOnDocumentClick onClose={closeModal}>
        <PopupError close={closeModal} />
      </Popup>
      <div className='popup-content'>
        <div className='popup-top'>
          <h4>Профессиональная переподготовка на психолога</h4>
          <div className='desc'>
            Станьте востребованным специалистом в новой области!
          </div>
        </div>
        <div className='popup-bottom'>
          <div className='modal-pic'>
            <img src='/assets/images/results-pic.svg' alt='' />
          </div>
          <div className='modal-wave'>
            <img src='/assets/images/wave-modal.svg' alt='' />
          </div>
          <form
            method='post'
            className='simple-form'
            onSubmit={handleSubmit(onSubmitFormThis)}>
            <div className='inputs-flex'>
              <div className='input-block width-50'>
                <input
                  type='text'
                  placeholder='Имя'
                  {...register('name', {
                    maxLength: {
                      value: 32,
                      message: `*Слишком длинное имя`
                    }
                  })}
                />
                <p className='inpt-err-msg'>
                  {errors.name && errors.name.message}
                </p>
              </div>
              <div className='input-block width-50'>
                <input
                  type='email'
                  placeholder='E-mail'
                  {...register('email', {
                    minLength: {
                      value: 4,
                      message: `*Email слишком короткий`
                    }
                  })}
                />
                <p className='inpt-err-msg'>
                  {errors.email && errors.email.message}
                </p>
              </div>
              <div className='input-block width-50'>
                <input
                  type='tel'
                  placeholder='Телефон'
                  {...register('phone', {
                    required: `*Пожалуйста, введите Ваш номер телефона`,
                    minLength: {
                      value: 5,
                      message: `*Номер телефона слишком короткий`
                    }
                  })}
                />
                <p className='inpt-err-msg'>
                  {errors.phone && errors.phone.message}
                </p>
              </div>
              <div className='input-block width-50'>
                <button type='submit' className='button'>
                  Получить предложение!
                </button>
              </div>
            </div>
            {/* <div className='input-block'>
              <div className='checkbox-block'>
                <label className='checkbox'>
                  <input type='checkbox' />
                  <i></i>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    <a href=''>Политика конфиденциальности</a>.
                  </span>
                </label>
              </div>
            </div> */}
          </form>
        </div>
        <button className='mfp-close' type='button' onClick={close}>
          <img src='/assets/images/close.svg' alt='' />
        </button>
      </div>
    </div>
  )
}

export default PopupForm
