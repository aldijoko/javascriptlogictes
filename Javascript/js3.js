// Expected Result : 
// [
//   { name: 'Rian Nugraha', school_name: 'PLMK-JKT' },
//   { name: 'Ari Santoso', school_name: 'GRSR-JKT' },
//   { name: 'Rahman Sunggara', school_name: 'GELM-JKT' },
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.


const source = [
    {
      id: "1",
      data: {
          first_name: "Rian",
          last_name: "Nugraha"
      },
      school: {
        id: "1",
        data: "PLMK-JKT"
      },
    },
    {
      id: "2",
      full_name: "Ari Santoso",
      school: {
        id: "1",
        short_name: "GRSR",
        data: "JKT"
      },
    },
    {
      id: "3",
      data: {
        first_name: "Rahman",
        last_name: "Sunggara"
    },
    school: {
        id: "1",
        short_name: "GELM",
        data: "JKT"
      },
    },
    {
        id: "4",
        data: {
            first_name: "Rian",
            last_name: "Nugraha"
        },
        school: {
            id: "2",
            data: "PLMK-BDG"
        },
    },
  ]


  function result(num) {
    // Your answer here
    for (var i=0; i<= source.length; i++){
        if(source[i]===source[0]){
            console.log("name:" + source[i].data.first_name +" "+source[i].data.last_name + ", school_name: " + source[i].school.data);
        }if(source[i]===source[1]){
             console.log("name: " + source[1].full_name + ", school_name: " + source[1].school.short_name + "-" + source[1].school.data);
        }if(source[i]===source[2]){
            console.log("name:" + source[i].data.first_name + " "+source[i].data.last_name + ", school_name: " + source[i].school.short_name + "-" + source[i].school.data);
        }
    }
  }
  
  console.log(result(source));
