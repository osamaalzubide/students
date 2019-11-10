  let arr=[];
  page = 1;
    fetch('http://localhost:3000/student/'+page , {
      method: 'GET',
  })
  .then(Response =>
      Response.JSON.parse(data))
      .then( data =>{
        page++;
       arr = result.photos
        console.log(data);
      });
//
//    .then(result => { arr = result.photos });