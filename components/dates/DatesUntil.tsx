const DatesUntil = ({ preposition = true, executive = false }) => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  let currentMonth = currentDate.getMonth()
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]
  if (executive)
    currentMonth =
      currentMonth + 7 > 11 ? currentMonth + 7 - 11 : currentMonth + 7
  return (
    <>
      {preposition && 'до' + ' '}
      {currentDay < 20 ? '20' : '5'}{' '}
      {(() => {
        let output
        if (currentDay < 20) {
          output = months[currentMonth]
        } else {
          currentMonth === 11
            ? (output = months[0])
            : (output = months[currentMonth + 1])
        }
        return output
      })()}
    </>
  )
}

export default DatesUntil
