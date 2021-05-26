import PopupForm from '@/components/popups/PopupForm'
import Head from 'next/head'
import Popup from 'reactjs-popup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import onSubmitForm from '@/components/hooks/onSubmitForm'
import PopupThankyou from '@/components/popups/PopupThankyou'
import PopupLoader from '@/components/popups/PopupLoader'
import PopupError from '@/components/popups/PopupError'
import DatesUntil from '@/components/dates/DatesUntil'

type FormValues = {
  name: string
  phone: string
  email: string
}

const Home = ({ data }) => {
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

  const onSubmitFormThis = async values => {
    setOpenLoader(o => !o)
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
    <>
      <Head>
        <title>Станьте самым востребованным психологом</title>
      </Head>

      {/* tesing deploy */}
      <div className='page'>
        <Popup open={openLoader} onClose={closeLoadingModal}>
          <PopupLoader close={closeLoadingModal} />
        </Popup>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <PopupThankyou close={closeModal} />
        </Popup>
        <Popup open={showError} closeOnDocumentClick onClose={closeModal}>
          <PopupError close={closeModal} />
        </Popup>

        {/* header */}
        <header>
          <div className='container'>
            <div className='header-flex'>
              <a href='' className='main-logo'>
                <img src='/assets/images/main-logo.png' alt='' />
                <span>Институт Профессионального образования</span>
              </a>
              <div className='header-content'>
                <ul className='header-menu'>
                  <li>
                    <Popup
                      trigger={<a>Консультация по программе обучения</a>}
                      modal
                      nested>
                      {close => <PopupForm close={close} />}
                    </Popup>
                  </li>
                  <li>
                    <a href='#reviews' className='to-scroll'>
                      Отзывы
                    </a>
                  </li>
                </ul>
                <a href='tel:8-499-521-28-12' className='header-phone'>
                  +7 (499) 521 28 12
                </a>
              </div>
              <div className='mobile-buter'>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div className='mobile-buter-hidden'>
                <img src='/assets/images/close.svg' alt='' />
              </div>
            </div>
          </div>
        </header>
        <div className='mobile-overlay'></div>
        {/* //header */}

        {/* main-content */}
        <div className='main-content'>
          {/* intro-section */}
          <section className='intro-section'>
            <div className='container'>
              <div className='intro-flex'>
                <div className='intro-content'>
                  <h1>
                    Станьте <span>самым</span> востребованным
                    <strong>психологом</strong>
                  </h1>
                  <div className='desc'>
                    Профессиональная переподготовка с дипломом государственного
                    образца
                  </div>
                  <ul className='intro-list'>
                    <li
                      className='wow fadeInRight'
                      data-wow-duration='1.2s'
                      data-wow-delay='0.6s'>
                      <img src='/assets/images/intro-checkmark.svg' alt='' />
                      <span>
                        Возможность оплаты <strong>в рассрочку</strong>
                      </span>
                    </li>
                    <li
                      className='wow fadeInRight'
                      data-wow-duration='1.2s'
                      data-wow-delay='0.8s'>
                      <img src='/assets/images/intro-checkmark.svg' alt='' />
                      <span>
                        Можно совмещать <strong>с работой</strong>
                      </span>
                    </li>
                    <li
                      className='wow fadeInRight'
                      data-wow-duration='1.2s'
                      data-wow-delay='1s'>
                      <img src='/assets/images/intro-checkmark.svg' alt='' />
                      <span>
                        <strong>Без ожидания</strong> набора групп
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  className='intro-aside wow fadeInRight'
                  data-wow-duration='1s'>
                  <div className='intro-discount'>
                    <div className='intro-pic'>
                      <img
                        className='lazyload'
                        data-src='/assets/images/intro-pic.svg'
                        alt=''
                      />
                    </div>
                    <div className='title'>Скидка 40% на все программы!</div>
                    <div className='date'>
                      <DatesUntil preposition={true} />
                    </div>

                    <Popup
                      trigger={
                        <button className='button blue-button'>
                          Получить программу обучения!
                        </button>
                      }
                      modal
                      nested>
                      {close => <PopupForm close={close} />}
                    </Popup>
                  </div>
                </div>
              </div>
            </div>
            <div className='intro-wave'>
              <img src='/assets/images/wave-intro.svg' alt='' />
            </div>
          </section>

          {/* advantages-section */}
          <section className='advantages-section'>
            <div className='container'>
              <ul className='advantages-list'>
                <li>
                  <div className='title'>Видеолекции</div>
                  <p>
                    Смотреть видеоуроки можно в любое время, доступ к учебным
                    материалам и видео-вебинарам доступен 24/7.
                  </p>
                </li>
                <li>
                  <div className='title'>Практика</div>
                  <p>
                    Весь освоенный материал закрепляется с помощью практического
                    задания и тестов с моментальной обратной связью.
                  </p>
                </li>
                <li>
                  <div className='title'>Консультации</div>
                  <p>
                    Живое общение с преподавателями и спикерами на прямых эфирах
                    и вебинарах, а также обратная связь с персональным куратором
                    на весь этап обучения.
                  </p>
                </li>
                <li>
                  <div className='title'>Диплом</div>
                  <p>
                    Выдаем дипломы установленного образца Министерством
                    образования РФ, каждый диплом вносится в реестр ФРДО. Быстро
                    доставляем документы в любой город России.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* counts-section */}
          <section className='counts-section'>
            <div className='container'>
              <div className='counts-flex'>
                <div className='counts-content'>
                  <h2>Институт Профессионального Образования</h2>
                  <div className='desc'>
                    Это удобное и быстрое получение дополнительного
                    профессионального образования и повышения квалификации
                    онлайн по востребованным на рынке гуманитарным, техническим
                    и бизнес направлениям.
                  </div>
                  <div className='counts-pic'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/counts-pic.svg'
                      alt=''
                    />
                  </div>
                </div>
                <div className='counts-aside'>
                  <ul className='counts-list'>
                    <li>
                      <div
                        className='number wow zoomIn'
                        data-wow-duration='0.6s'
                        data-wow-offset='150'>
                        0%
                      </div>
                      <p>Рассрочка без переплат</p>
                    </li>
                    <li>
                      <div
                        className='number wow zoomIn'
                        data-wow-duration='0.6s'
                        data-wow-offset='150'>
                        14600+
                      </div>
                      <p>Выданных выпускных дипломов</p>
                    </li>
                    <li>
                      <div
                        className='number wow zoomIn'
                        data-wow-duration='0.6s'
                        data-wow-offset='150'>
                        13%
                      </div>
                      <p>Можно вернуть в качестве налогового вычета</p>
                    </li>
                    <li>
                      <div
                        className='number wow zoomIn'
                        data-wow-duration='0.6s'
                        data-wow-offset='150'>
                        50+
                      </div>
                      <p>
                        Первоклассных спикеров-практиков и преподавателей
                        разрабатывают программы
                      </p>
                    </li>
                    <li>
                      <div
                        className='number wow zoomIn'
                        data-wow-duration='0.6s'
                        data-wow-offset='150'>
                        9000+
                      </div>
                      <p>Файлов в онлайн-библиотеке студента</p>
                    </li>
                    <li>
                      <div
                        className='number wow zoomIn'
                        data-wow-duration='0.6s'
                        data-wow-offset='150'>
                        250+
                      </div>
                      <p>
                        Образовательных программ по 19 направлениям 2021 года
                      </p>
                    </li>
                    <li>
                      <div
                        className='number wow zoomIn'
                        data-wow-duration='0.6s'
                        data-wow-offset='150'>
                        24/7
                      </div>
                      <p>
                        Поддержка персонального куратора весь период обучения
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counts-wave'>
              <img src='/assets/images/wave-counts.svg' alt='' />
            </div>
          </section>

          {/* useful-section */}
          <section className='useful-section'>
            <div className='container'>
              <h2>Курс будет полезен:</h2>
              <ul className='useful-list'>
                <li
                  className='number wow fadeIn'
                  data-wow-duration='1s'
                  data-wow-offset='150'>
                  <div className='image'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/useful-list-1.svg'
                      alt=''
                    />
                  </div>
                  <div className='title'>Психологам со стажем</div>
                  <p>
                    Актуализируйте знания о принципах функционирования
                    центральной нервной системы, правилах психодиагностики,
                    способах проведения психологического консультирования и
                    приемах психолого-педагогической коррекции
                  </p>
                </li>
                <li
                  className='number wow fadeIn'
                  data-wow-duration='1s'
                  data-wow-offset='150'
                  data-wow-delay='0.5s'>
                  <div className='image'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/useful-list-2.svg'
                      alt=''
                    />
                  </div>
                  <div className='title'>Практикующим психологам</div>
                  <p>
                    Прокачайте знания психологии и технологии коучинга для
                    использования в работе педагогом, бизнес-тренером или
                    ведущим групповых программ.
                  </p>
                </li>
                <li
                  className='number wow fadeIn'
                  data-wow-duration='1s'
                  data-wow-offset='150'
                  data-wow-delay='1s'>
                  <div className='image'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/useful-list-3.svg'
                      alt=''
                    />
                  </div>
                  <div className='title'>Прогрессивным специалистам</div>
                  <p>
                    Научитесь помогать людям решать их проблемы и используйте
                    это в своей работе и личной жизни.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* results-section */}
          <section className='results-section'>
            <div className='container'>
              <h2>Результаты обучения</h2>
              <ul className='results-list'>
                <li
                  className='wow fadeInLeft'
                  data-wow-offset='120'
                  data-wow-duration='1.2s'>
                  <div className='circle'>
                    <img src='/assets/images/check-white.svg' alt='' />
                  </div>
                  <p>
                    Вы сможете вести частную практику или работать в
                    государственных / частных психологических консультациях,
                    образовательных центрах и в HR-департаментах крупных
                    государственных компаний
                  </p>
                </li>
                <li
                  className='wow fadeInRight'
                  data-wow-offset='120'
                  data-wow-duration='1.2s'>
                  <div className='circle'>
                    <img src='/assets/images/check-white.svg' alt='' />
                  </div>
                  <p>
                    Вы сможете провести диагностику психоэмоционального
                    состояния человека и оказать полноценную психологическую
                    помощь.
                  </p>
                </li>
                <li
                  className='wow fadeInLeft'
                  data-wow-offset='120'
                  data-wow-duration='1.2s'>
                  <div className='circle'>
                    <img src='/assets/images/check-white.svg' alt='' />
                  </div>
                  <p>
                    Вы научитесь профессионально проводить тренинги и лекции,
                    создавая благоприятную доверительную атмосферу в аудитории.
                  </p>
                </li>
                <li
                  className='wow fadeInRight'
                  data-wow-offset='120'
                  data-wow-duration='1.2s'>
                  <div className='circle'>
                    <img src='/assets/images/check-white.svg' alt='' />
                  </div>
                  <p>
                    Вы будете способны решать личные психологические вопросы и
                    проблемы своих близких людей.
                  </p>
                </li>
                <li
                  className='wow fadeInLeft'
                  data-wow-offset='120'
                  data-wow-duration='1.2s'>
                  <div className='circle'>
                    <img src='/assets/images/check-white.svg' alt='' />
                  </div>
                  <p>
                    Вы сможете использовать полученные знания для работы в
                    смежной области (общение с клиентами, менеджмент и бизнес)
                  </p>
                </li>
                <li
                  className='wow fadeInRight'
                  data-wow-offset='120'
                  data-wow-duration='1.2s'>
                  <div className='circle'>
                    <img src='/assets/images/check-white.svg' alt='' />
                  </div>
                  <div className='inner-flex'>
                    <p>
                      Узнайте больше о преимуществах программы обучения на
                      персональной консультации!
                    </p>
                    <Popup
                      trigger={
                        <button className='button'>Оставить заявку</button>
                      }
                      modal
                      nested>
                      {close => <PopupForm close={close} />}
                    </Popup>
                  </div>
                </li>
              </ul>
              <div className='results-flex'>
                <div className='results-slogan'>
                  <div className='title'>
                    <span>Получите консультацию и скидку </span>
                    40% на программы по <br />
                    психологии!
                  </div>
                  <Popup
                    trigger={
                      <button className='button blue-button'>Получить</button>
                    }
                    modal
                    nested>
                    {close => <PopupForm close={close} />}
                  </Popup>
                </div>
                <div className='results-pic'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/results-pic.svg'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='results-wave'>
              <img src='/assets/images/wave-results.svg' alt='' />
            </div>
          </section>

          {/* specialties-section */}
          <section className='specialties-section'>
            <div className='container'>
              <h2>Специальности на выбор</h2>
              <div className='specialties-flex'>
                <div className='specialties-desc'>
                  Вас ждут онлайн-лекции и практические занятия, разработанные
                  нашими преподавателями
                </div>
                <ul className='specialties-counts'>
                  <li>
                    <strong>26</strong>
                    специальностей на выбор
                  </li>
                  <li>
                    <strong>300</strong>
                    онлайн-уроков
                  </li>
                </ul>
              </div>
              <ul className='specialties-list'>
                <li
                  className='wow fadeInUp'
                  data-wow-offset='120'
                  data-wow-duration='1.2s'>
                  <div className='specialties-block item-1'>
                    <div className='number'>1</div>
                    <p>Психология</p>
                  </div>
                </li>
                <li
                  className='wow fadeInUp'
                  data-wow-offset='120'
                  data-wow-duration='1.2s'>
                  <div className='specialties-block item-2'>
                    <div className='number'>2</div>
                    <p>Психология: Очно-заочная (вечерняя) форма обучения</p>
                  </div>
                </li>
                <li
                  className='wow fadeInUp'
                  data-wow-offset='120'
                  data-wow-duration='1.2s'>
                  <div className='specialties-block item-3'>
                    <div className='number'>3</div>
                    <p>Клиническая психология</p>
                  </div>
                </li>
                <li
                  className='wow fadeInUp'
                  data-wow-offset='120'
                  data-wow-duration='1.2s'>
                  <div className='specialties-block item-4'>
                    <div className='number'>4</div>
                    <p>Социальная психология в бизнесе</p>
                  </div>
                </li>
                <li
                  className='wow fadeInUp'
                  data-wow-offset='120'
                  data-wow-duration='1.2s'>
                  <div className='specialties-block item-5'>
                    <div className='number'>5</div>
                    <p>Психология семьи с основами психотерапии</p>
                  </div>
                </li>
                <li
                  className='wow fadeInUp'
                  data-wow-offset='120'
                  data-wow-duration='1.2s'>
                  <div className='specialties-block item-6'>
                    <div className='number'>6</div>
                    <p>
                      Психология дошкольного образования в условиях реализации
                      ФГОС ДО
                    </p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-7'>
                    <div className='number'>7</div>
                    <p>Акмеология и психология развития</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-8'>
                    <div className='number'>8</div>
                    <p>Детская нейропсихология</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-9'>
                    <div className='number'>9</div>
                    <p>Детская психология</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-10'>
                    <div className='number'>10</div>
                    <p>Нейропсихология</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-11'>
                    <div className='number'>11</div>
                    <p>Психолог-тренер</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-12'>
                    <div className='number'>12</div>
                    <p>Экспериментальная психология</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-13'>
                    <div className='number'>13</div>
                    <p>Психология личности</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-14'>
                    <div className='number'>14</div>
                    <p>Психология служебной деятельности</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-15'>
                    <div className='number'>15</div>
                    <p>Социальная психология</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-16'>
                    <div className='number'>16</div>
                    <p>Спортивная психология</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-17'>
                    <div className='number'>17</div>
                    <p>Школьный психолог</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-18'>
                    <div className='number'>18</div>
                    <p>Арт-терапия</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-19'>
                    <div className='number'>19</div>
                    <p>Современные технологии в психологической практике</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-20'>
                    <div className='number'>20</div>
                    <p>Эмоциональный интеллект</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-21'>
                    <div className='number'>21</div>
                    <p>Зоопсихология</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-22'>
                    <div className='number'>22</div>
                    <p>Иппотерапия</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-23'>
                    <div className='number'>23</div>
                    <p>Конфликтология</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-24'>
                    <div className='number'>24</div>
                    <p>Психолог ДОУ</p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-25'>
                    <div className='number'>25</div>
                    <p>
                      Супервизия в практике психологического консультирования и
                      психотерапии
                    </p>
                  </div>
                </li>
                <li>
                  <div className='specialties-block item-26'>
                    <div className='number'>26</div>
                    <p>Экстремальная психология</p>
                  </div>
                </li>
              </ul>
              <a href='' className='button more-specialties'>
                Еще специальности
              </a>
            </div>
          </section>

          {/* consult-section */}
          <section className='consult-section'>
            <div className='consult-wave'>
              <img src='/assets/images/wave-consult.svg' alt='' />
            </div>
            <div className='container'>
              <div className='consult-content'>
                <div className='consult-pic'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/consult-pic.svg'
                    alt=''
                  />
                </div>
                <div className='consult-text'>
                  <h2>
                    <span>Получите</span> консультацию, презентацию программы и
                    описание текущих акций <span>прямо сейчас!</span>
                  </h2>
                  <Popup
                    trigger={<button className='button'>Получить</button>}
                    modal
                    nested>
                    {close => <PopupForm close={close} />}
                  </Popup>
                </div>
              </div>
            </div>
          </section>

          {/* teachers-section */}
          <section className='teachers-section'>
            <div className='container'>
              <h2>Преподаватели</h2>
              <div className='teachers-slider js-slick'>
                <div className='teachers-slider-block'>
                  <div className='image'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/teachers-1.jpg'
                      alt=''
                    />
                  </div>
                  <div className='name'>Падве Сергей Ефимович</div>
                  <div className='job'>
                    Обладатель Advanced Certificate in REBT в Институте Альберта
                    Эллиса
                  </div>
                </div>
                <div className='teachers-slider-block'>
                  <div className='image'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/teachers-2.jpg'
                      alt=''
                    />
                  </div>
                  <div className='name'>Ирина Александровна Перемолотова</div>
                  <div className='job'>Психолог - Коуч - Арт-терапевт</div>
                </div>
                <div className='teachers-slider-block'>
                  <div className='image'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/teachers-3.jpg'
                      alt=''
                    />
                  </div>
                  <div className='name'>Хашимов Владислав Владимирович</div>
                  <div className='job'>
                    Психодрама, Транзактный анализ, Юнгианский анализ
                  </div>
                </div>
                <div className='teachers-slider-block'>
                  <div className='image'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/teachers-4.jpg'
                      alt=''
                    />
                  </div>
                  <div className='name'>Рыбальченко Наталья Викторовна</div>
                  <div className='job'>
                    Профессиональный психолог, преподаватель философии
                  </div>
                </div>
                <div className='teachers-slider-block'>
                  <div className='image'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/teachers-1.jpg'
                      alt=''
                    />
                  </div>
                  <div className='name'>Падве Сергей Ефимович</div>
                  <div className='job'>
                    Обладатель Advanced Certificate in REBT в Институте Альберта
                    Эллиса
                  </div>
                </div>
                <div className='teachers-slider-block'>
                  <div className='image'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/teachers-2.jpg'
                      alt=''
                    />
                  </div>
                  <div className='name'>Ирина Александровна Перемолотова</div>
                  <div className='job'>Психолог - Коуч - Арт-терапевт</div>
                </div>
              </div>
            </div>
          </section>

          {/* studying-section */}
          <section className='studying-section'>
            <div className='container'>
              <div className='studying-text'>
                <h2>Изучайте английский язык выгодно!</h2>
                <div className='desc'>
                  В крупнейшей Российской онлайн-школе английского языка Skyeng
                  вместе с Институтом Профессионального Образования!
                </div>
              </div>
              <div
                className='studying-content wow fadeInUp'
                data-wow-offset='150'
                data-wow-duration='1.2s'>
                <div className='studying-pic'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/studying-pic.svg'
                    alt=''
                  />
                </div>
                <ul className='studying-list'>
                  <li>
                    <img src='/assets/images/check-blue.svg' alt='' />
                    <p>
                      <strong>Скидка 39%</strong> на индивидуальные занятия;
                    </p>
                  </li>
                  <li>
                    <img src='/assets/images/check-blue.svg' alt='' />
                    <p>
                      Бесплатный вводный урок от Института профессионального
                      образования;
                    </p>
                  </li>
                  <li>
                    <img src='/assets/images/check-blue.svg' alt='' />
                    <p>
                      Skyeng дарит <strong>+5 уроков</strong> при покупке пакета
                      на 64 занятия, <strong>+4</strong> на 32,
                      <strong>+3</strong> на 16 и <strong>+2</strong> на 8
                      занятий;
                    </p>
                  </li>
                  <li>
                    <img src='/assets/images/check-blue.svg' alt='' />
                    <p>
                      И другие подарки на изучение английского языка от Skyeng.
                    </p>
                  </li>
                </ul>
                <div className='studying-logo'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/skyeng-logo.svg'
                    alt=''
                  />
                </div>
              </div>

              <Popup
                trigger={
                  <button className='button blue-button'>
                    Получить подарок
                  </button>
                }
                modal
                nested>
                {close => <PopupForm close={close} />}
              </Popup>
            </div>
          </section>

          {/* diplom-section */}
          <section className='diplom-section'>
            <div className='diplom-wave'>
              <img src='/assets/images/wave-diplom.svg' alt='' />
            </div>
            <div className='container'>
              <div className='diplom-flex'>
                <div className='diplom-text'>
                  <h2>Получите диплом о профессиональной переподготовке</h2>
                  <div className='desc'>
                    В крупнейшей Российской онлайн-школе английского языка
                    Skyeng вместе с Институтом Профессионального Образования!
                  </div>

                  <Popup
                    trigger={
                      <button className='button'>Получить диплом</button>
                    }
                    modal
                    nested>
                    {close => <PopupForm close={close} />}
                  </Popup>
                </div>
                <div className='diplom-images'>
                  <div
                    className='diplom-pic item-1 wow zoomIn'
                    data-wow-duration='1s'
                    data-wow-offset='170'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/diplom-1.jpg'
                      alt=''
                    />
                  </div>
                  <div
                    className='diplom-pic item-2 wow zoomIn'
                    data-wow-duration='1s'
                    data-wow-offset='170'
                    data-wow-delay='0.8s'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/diplom-2.jpg'
                      alt=''
                    />
                  </div>
                  <div
                    className='diplom-pic item-3 wow zoomIn'
                    data-wow-duration='1s'
                    data-wow-offset='170'
                    data-wow-delay='1.6s'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/diplom-3.jpg'
                      alt=''
                    />
                  </div>
                  <div className='diplom-gerb'>
                    <img
                      className='lazyload'
                      data-src='/assets/images/diplom-gerb.png'
                      alt=''
                    />
                  </div>
                </div>

                <Popup
                  trigger={
                    <button className='button mobile-diplom-link'>
                      Получить диплом
                    </button>
                  }
                  modal
                  nested>
                  {close => <PopupForm close={close} />}
                </Popup>
              </div>
            </div>
          </section>

          {/* steps-section */}
          <section className='steps-section'>
            <div className='container'>
              <h2>Как проходит обучение</h2>
              <ul className='steps-list'>
                <li
                  className='wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-offset='150'>
                  <div className='steps-block'>
                    <div className='image'>
                      <img
                        className='lazyload'
                        data-src='/assets/images/steps-list-1.svg'
                        alt=''
                      />
                    </div>
                    <div className='title'>
                      Получаете доступ и изучаете темы
                    </div>
                    <p>
                      В личном кабинете Вы изучаете модули программы,
                      просматриваете видео-лекции и присутствуете на вебинарах.
                    </p>
                  </div>
                </li>
                <li
                  className='wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-offset='150'
                  data-wow-delay='0.5s'>
                  <div className='steps-block'>
                    <div className='image'>
                      <img
                        className='lazyload'
                        data-src='/assets/images/steps-list-2.svg'
                        alt=''
                      />
                    </div>
                    <div className='title'>Выполняете задания</div>
                    <p>
                      Изучая учебные материалы, реализована проверка усвоенных
                      знаний посредством онлайн-тестирования. Вы обучаетесь в
                      свободное для себя время и в том темпе, в котором Вам
                      удобно.
                    </p>
                  </div>
                </li>
                <li
                  className='wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-offset='150'
                  data-wow-delay='1s'>
                  <div className='steps-block'>
                    <div className='image'>
                      <img
                        className='lazyload'
                        data-src='/assets/images/steps-list-3.svg'
                        alt=''
                      />
                    </div>
                    <div className='title'>Работаете со спикерами</div>
                    <p>
                      Получаете помощь персонального куратора и общаетесь с
                      преподавателями на вебинарах, закрепляя знания и
                      исправляете ошибки.
                    </p>
                  </div>
                </li>
                <li
                  className='wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-offset='150'
                  data-wow-delay='1.5s'>
                  <div className='steps-block'>
                    <div className='image'>
                      <img
                        className='lazyload'
                        data-src='/assets/images/steps-list-4.svg'
                        alt=''
                      />
                    </div>
                    <div className='title'>Защищаете дипломную работу</div>
                    <p>И дополняете ею своё портфолио.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* reviews-section */}
          <section id='reviews' className='reviews-section'>
            <div className='container'>
              <h2>Отзывы о программе</h2>
              <div className='reviews-slider js-slick'>
                <div className='reviews-slider-block'>
                  <div className='author'>
                    <div className='avatar'>
                      <img
                        className='lazyload'
                        data-src='/assets/images/reviews-avatar-1.jpg'
                        alt=''
                      />
                    </div>
                    <div className='name'>Татьяна Сверлова</div>
                  </div>
                  <p>
                    Сразу же хочу сказать, что сейчас живу и работаю в Италии. И
                    после прохождения обучения по профессиональной
                    переподготовки здесь, могу смело заявить: уровень подачи
                    материала по программе Психологии в ИПО на порядок выше.
                    Рекомендую данный институт всем, кто намерен получать данную
                    программу в дистанционном формате. Преподавательский состав
                    прекрасный, информация актуальная и хорошо
                    структурированная.
                  </p>
                </div>
                <div className='reviews-slider-block'>
                  <div className='author'>
                    <div className='avatar'>
                      <img
                        className='lazyload'
                        data-src='/assets/images/reviews-avatar-2.jpg'
                        alt=''
                      />
                    </div>
                    <div className='name'>Кристина Боровская</div>
                  </div>
                  <p>
                    Была очень удивлена, насколько все, от приемной комиссии к
                    преподавателю и до куратора, вовлечены и заинтересованы в
                    том, чтобы ты получил максимальное количество информации, а
                    не просто довести до конца обучения и выдать бумажку после
                    пустого прослушивания лекций. Абсолютно все вопросы не
                    остаются без внимания, обратная связь с куратором программы
                    и спикерами, общение с другими слушателями и просто
                    удивительная атмосфера!
                  </p>
                </div>
                <div className='reviews-slider-block'>
                  <div className='author'>
                    <div className='avatar'>
                      <img
                        className='lazyload'
                        data-src='/assets/images/reviews-avatar-1.jpg'
                        alt=''
                      />
                    </div>
                    <div className='name'>Татьяна Сверлова</div>
                  </div>
                  <p>
                    Сразу же хочу сказать, что сейчас живу и работаю в Италии. И
                    после прохождения обучения по профессиональной
                    переподготовки здесь, могу смело заявить: уровень подачи
                    материала по программе Психологии в ИПО на порядок выше.
                    Рекомендую данный институт всем, кто намерен получать данную
                    программу в дистанционном формате. Преподавательский состав
                    прекрасный, информация актуальная и хорошо
                    структурированная.
                  </p>
                </div>
                <div className='reviews-slider-block'>
                  <div className='author'>
                    <div className='avatar'>
                      <img
                        className='lazyload'
                        data-src='/assets/images/reviews-avatar-2.jpg'
                        alt=''
                      />
                    </div>
                    <div className='name'>Кристина Боровская</div>
                  </div>
                  <p>
                    Была очень удивлена, насколько все, от приемной комиссии к
                    преподавателю и до куратора, вовлечены и заинтересованы в
                    том, чтобы ты получил максимальное количество информации, а
                    не просто довести до конца обучения и выдать бумажку после
                    пустого прослушивания лекций. Абсолютно все вопросы не
                    остаются без внимания, обратная связь с куратором программы
                    и спикерами, общение с другими слушателями и просто
                    удивительная атмосфера!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* price-section */}
          <section className='price-section'>
            <div className='price-wave'>
              <img src='/assets/images/wave-price.svg' alt='' />
            </div>
            <div className='container'>
              <div className='price-content'>
                <div className='price-pic'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/price-pic.svg'
                    alt=''
                  />
                </div>
                <div className='price-text'>
                  <h2>Воспользуйтесь уникальным предложением на обучение!</h2>
                  <ul className='price-list'>
                    <li
                      className='wow zoomIn'
                      data-wow-duration='1s'
                      data-wow-offset='130'>
                      <div className='price-block'>
                        <img
                          className='check'
                          src='/assets/images/intro-checkmark.svg'
                          alt=''
                        />
                        <div className='title'>
                          Скидка 40% при бронировании до{' '}
                          <DatesUntil preposition={true} />
                        </div>
                        <div className='price'>
                          <span className='old-price'>39900 руб.</span>
                          от 14900 руб.
                        </div>
                      </div>
                    </li>
                    <li
                      className='wow zoomIn'
                      data-wow-duration='1s'
                      data-wow-offset='130'
                      data-wow-delay='0.6s'>
                      <div className='price-block'>
                        <img
                          className='check'
                          src='/assets/images/intro-checkmark.svg'
                          alt=''
                        />
                        <div className='title'>
                          Рассрочка напрямую от Института
                        </div>
                        <div className='price'>3980 руб./меc.</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* request-section */}
          <section className='request-section'>
            <div className='container'>
              <div className='title'>Оставьте заявку прямо сейчас!</div>
              <form
                method='post'
                className='simple-form white-form'
                onSubmit={handleSubmit(onSubmitFormThis)}>
                <div className='inputs-flex'>
                  <div className='input-block width-25'>
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
                  <div className='input-block width-25'>
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
                  <div className='input-block width-25'>
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
                  <div className='input-block width-25'>
                    <button type='submit' className='button'>
                      Оставить заявку
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* main-content */}

        {/* footer */}
        <footer>
          <div className='container'>
            <div className='footer-content'>
              <div className='footer-logo'>
                <img
                  className='lazyload'
                  data-src='/assets/images/main-logo.png'
                  alt=''
                />
              </div>
              <ul className='footer-menu'>
                <li>
                  <Popup
                    trigger={<a>Консультация по программе обучения</a>}
                    modal
                    nested>
                    {close => <PopupForm close={close} />}
                  </Popup>
                </li>
                <li>
                  <a href='#reviews' className='to-scroll'>
                    Отзывы
                  </a>
                </li>
                <li>
                  <a href=''>Политика конфиденциальности</a>
                </li>
              </ul>
              <ul className='footer-contacts'>
                <li>
                  <a href='tel:8-499-521-28-12' className='phone'>
                    +7 (499) 521 28 12
                  </a>
                </li>
                <li>
                  <a href='mailto:vopros@ipo.msk.ru' className='mail'>
                    vopros@ipo.msk.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        {/* /footer */}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = []
  return {
    props: {
      data
    }
  }
}

export default Home
