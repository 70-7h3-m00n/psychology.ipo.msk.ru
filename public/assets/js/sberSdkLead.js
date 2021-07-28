function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

iapSDK.push([
  'conversion',
  {
    id: uuidv4(),
    type: 'lead',
    offerAlias: '9wkl17719',
    category: '500'
  }
])
