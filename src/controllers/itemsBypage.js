exports.allUniversities = (result) => {
 return {
    quantidade: result.length,
    universities: result.map((uni)=>{
      return {
        _id: uni._id,
        name: uni.name,
        country: uni.country,
        'state-province': uni['state-province']
      }
    })
  }
}

exports.universitiesByPage = (result, page, limit) => {
  const arrayPage = [];
  const maxItems = limit || 20;
  const total = page * maxItems;

  for(let i = total - maxItems; i < total; i++){
    arrayPage.push(result[i]);
  } 

  return {
    quantidade: arrayPage.length,
    universities: arrayPage.map((uni)=>{
      return {
        _id: uni._id,
        name: uni.name,
        country: uni.country,
        'state-province': uni['state-province']
      }
    })
  }
}