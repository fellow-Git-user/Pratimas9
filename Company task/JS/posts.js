const posts = [
    {
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
      id: 8,
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
      id: 11,
      title: "et ea vero quia laudantium autem",
      body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
      id: 12,
      title: "in quibusdam tempore odit est dolorem",
      body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
      id: 13,
      title: "dolorum ut in voluptas mollitia et saepe quo animi",
      body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
      id: 14,
      title: "voluptatem eligendi optio",
      body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
      id: 15,
      title: "eveniet quod temporibus",
      body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    },
    {
      id: 16,
      title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
    },
    {
      id: 17,
      title: "fugit voluptas sed molestias voluptatem provident",
      body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
    },
    {
      id: 18,
      title: "voluptate et itaque vero tempora molestiae",
      body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
    },
    {
      id: 19,
      title: "adipisci placeat illum aut reiciendis qui",
      body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
    },
    {
      id: 20,
      title: "doloribus ad provident suscipit at",
      body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
    },
    {
      id: 21,
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
      body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
    },
    {
      id: 22,
      title: "dolor sint quo a velit explicabo quia nam",
      body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
    },
    {
      id: 23,
      title: "maxime id vitae nihil numquam",
      body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
    },
    {
      id: 24,
      title: "autem hic labore sunt dolores incidunt",
      body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
    },
    {
      id: 25,
      title: "rem alias distinctio quo quis",
      body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
    }
]

function task71(data) {
    console.log(data[0])
}
//  task71(posts)

function task72(data) {
    console.log(data.at(-1))
}
// task72(posts)

function task73(data){
  console.log(data[14])
}
// task73(posts)

function task74(data){
  console.log(data[12])
}
// task74(posts)

function task75(data){
  let middle = Math.floor(posts.length / 2);
  let middleSlice = posts.slice(middle, middle + 1)
  return middleSlice[0]  
}
// console.log(task75(posts))

function task76(data){
  let firstFour = posts.slice(0, 4);
  firstFour.forEach(function(item){
    console.log(item)
  })
}
// (task76(posts))

function task77(data){
  let lastFive = posts.slice(-5, posts.length);
  lastFive.forEach(function(item){
    console.log(item)
  })
}
// (task77(posts))

function task78(data){
  let from5To15 = posts.slice(4, 15);
  from5To15.forEach(function(item){
    console.log(item)
  })
}
// task78(posts)

function task79(data){
  let everySecond = posts.filter(function(item, index){
    if (index % 2 === 1){
      // console.log(item)
    }
    
  })
  
}

 task79(posts)

function task710(data){
  let from5To15 = posts.splice(1, 23);
  posts.forEach(function(item){
    // console.log(item)
  })
  
}
 task710(posts)

function task711(data){
  return posts[0].title
  
}
// console.log(task711(posts))

function task712(data){
  return posts[1].body
  
}
// console.log(task712(posts))

function task713(data){
  return `Post title is '${posts[2].title}' and the content is '${posts[2].body}'`
}
// console.log(task713(posts))

function task714(data){
  posts.forEach(function(objects){
    console.log(objects)
  })
  
}
// task714(posts)

function task715(data){
  posts.forEach(function(objects){
    console.log(objects.title)
  })
  
}
// task715(posts)

function task716(data){
  posts.forEach(function(objects){
    console.log(objects.body)
  })
  
}
//  task716(posts)

function task716(data){
  posts.forEach(function(objects){
    console.log(`Title: ${objects.title}. Content: ${objects.body}`)
  })
  
}
// task716(posts)

function task717(data){
  let firstFour = posts.slice(0, 4)
  firstFour.forEach(function(objects){
    console.log(`Title: "${objects.title}". Content: "${objects.body}"`)
  })
  
}
// task717(posts)

function task718(data){
  let firstFour = posts.slice(18, 25)
  firstFour.forEach(function(objects){
    console.log(`Title: "${objects.title}". Content: "${objects.body}"`)
  })
  
}
// task718(posts)

function task722(data){
 let startsWithS = posts.filter(function(post){
  if (post.title.charAt(0) === 's'){
  console.log(post)
  }
  
 })
  
}
// task722(posts)

function task723(data){
  let startsWithS = posts.filter(function(titles){
   if ((titles.title.charAt(titles.title.length - 1) === 't' || 
   titles.title.charAt(titles.title.length - 1) === 'm')){
    console.log(titles)
   }
   
  })
  
 }
//  task723(posts)

 function task724(data){
  let startsWithS = posts.filter(function(post){
   console.log(post.title.length > 15)
  })
   
 }
  // task724(posts)

 function task725(data){
  let startsWithS = posts.filter(function(titles){
   console.log(titles.title.length < 20 && titles.body.length > 50)
  })
   
 }
//  task725(posts)

 function task726(data){
  posts.forEach(function(titles){
    if(
      titles.title.length >= 20 && 
      titles.title.length <= 30 && 
      titles.body.length > 70 && 
      titles.body.length <= 130
       
    ) {
    console.log(titles);
  } 
  });
}
//  task726(posts)

 function task727(data){
  data.forEach(function(post){
    console.log(`Title: ${post.title}, Body: ${post.body}`);
    if (post.title.includes('it') && post.body.includes('quo')){
      console.log('Match:', post);
    } 
  });
  }
    

// task727(posts)

 function task728(data){
  data.forEach(function(post){
    if (post.body.includes(' sit ')){
      console.log('Match:', post);
    } 
  });
  }
    

// task728(posts)

function task729(data){
  data.forEach(function(post){
    if (post.title.includes('a') > 3 && post.body.includes('o') < 7){
      console.log('Match:', post);
    } 
  });
  }
    

task729(posts)





 




