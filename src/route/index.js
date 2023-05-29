// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()


// ================================================================
var header = {
  name: {
    first:"Serhii",
    last:"Maslianyk",
  },
  position:"Junior Fullstack JS Developer",

  salary: {
    salary:"$1250 per month"
  },
  Address: "Ukraine, Ukrainka City, Kyivska street, 3"

  // {
  //   // Country:"Ukraine",
  //   // City:"Ukrainka",
  //   // street: "Kyivska, 3",
  // },
};

var footer = {
  social: {
    email:{
      text:"Mail to Serhii Maslianyk",
      href:"mailto:s.maslianyk@gmail.com"
    },
    phone:{
      text:"tel:+380939711233",
      href:"tel:+380939711233"
    },
    linkedin:{
      href:"https://www.linkedin.com/in/serhii-maslianyk380939711233",
      text:"My LinkedIn"
    },
   
  }

};

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page:{
      title: "| Resume",

    },
    
    header,

    main:{
      summary: {
        title:"Summary",
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.`
      },
  
      experience: {
        title:"Other experience",
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.`
      },
    },

    footer,
   

  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page:{
      title: "| Resume | All Skills",
    },
    
    header,

    main: {
		skills:[
			{
        name: "HTML",
        point: 1,
        isTop: false,
      },
      {
        name: "Handlbars",
        point: 8,
        isTop: true,
      },
      {
        name: "VS Code",
        point: 9,
        isTop: true,
      },
      {
        name: "Git",
        point: 4,
        isTop: false,
      },
      {
        name: "Terminal",
        point: 5,
        isTop: false,
      },
      {
        name: "NPM",
        point: 6,
        isTop: false,
      },
      {
        name: "React JS",
        point: 0,
        isTop: false,
      },

      {
        name: "PHP JS",
        point: null,
        isTop: null,
      },
		],

    hobbies:[
			{
        name: "Photo",
        isMain: false,
      },
      {
        name: "Tourism",
        isMain: true,
      },
      {
        name: "Cinema",
        isMain: false,
      },
		] 

},

    footer,  

  })
})
// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('education', {
	  // ↙ сюди вводимо JSON дані
  
	  page:{
		title: "| Resume | education",
  
	  },
	  
    header,
  
    main: {
      education:[
        {
          name: "General education school No. 2, Ukrainka",
          isEnd: true,
        },

        {
          name: "Master of Marketing National University of Bioresources and Nature Management",
          isEnd: true,
        },

        {
          name: "JavaScript developer's FullStack course at the IT BRAINS school",
          isEnd: false,
        },
      ],
      certificates:[
        {
          name: "driver's license category B, B1",
          id: 1,
        },
        {
          name: "License for customs brokerage activity",
          id: 2,
        },
        {
          name: "Certificate of customs broker NVO POVERHNOST",
          id: 3,
        },
      ]
      },
  
      footer,
	})
})


// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/works', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('works', {
	  // ↙ сюди вводимо JSON дані
    layout: `big`,
  
	  page:{
		title: "| Resume | works",
  
	  },
	  
    header,
  
    main: {
      works:[
        {
          position: "Junior FS dev",
          company: {
            name:"IT Brain",
            url:"https://www.it-brains.com",
          } ,
          duration:{
            from: "10/10/2023",
            to: "22/10/2024"
          },
          projectAmount: 1,
          project: [
            {
              name: "Resume",
              url: "https://www.it-brains.com",
              about: "Airbnb competitor, High-Load application for searching apartament",
              stacks: [
              {
                name: "React.JS"
              },
              {
                name: "HTML/CSS"
              },
              {
                name: "Node.JS"
              },
                
              ],
              awards: [
                {
                  name: "my first site"
                }, 
                {
                  name: "2th my first site"
                }, 
                ],
              stackAmount: (877),
              awardAmount: (786),
            },
          ]
        },
        {
          position: "Senior specialist in customs clearance",
          company: {
            name:"aviation company Ukrainian Helicopters",
            url:"https://www.ukrcopter.com"
          } ,
          duration:{
            from: "10/10/2014",
            to: null
          },
          projectAmount: 0,
          project: [
            {
              name: "Resume",
              url: "https://www.it-brains.com",
              about: "Airbnb competitor, High-Load application for searching apartament",
              stacks: [
              {
                name: "React.JS"
              },
              {
                name: "HTML/CSS"
              },
              {
                name: "Node.JS"
              },
                
              ],
              awards: [
                {
                  name: "my first site"
                }, 
                {
                  name: "2th my first site"
                }, 
                ],
              stackAmount: (432),
              awardAmount: (545),
            },
          ]
        },
        {
          position: "Company URL null",
          company: {
            name:"Name Company URL null",
            url: null
          } ,
          duration:{
            from: "test",
            to: "test"
          },
          projectAmount: 0,
          project: [
            {
              name: "test",
              url: "https://www.it-brains.com",
              about: "Airbnb competitor, High-Load application for searching apartament",
              stacks: [
              {
                name: "React.JS",
                name: "HTML/CSS",
                name: "Node.JS",
              },
                
              ],
              awards: [
                {
                  name: "my first site"
                }, 
                {
                  name: "2th my first site"
                }, 
                ],
              stackAmount: (865),
              awardAmount: (988),
            },
          ]

        },
      ]
      },
  
    footer,
	})
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: "basic",
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },

        
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// ================================================================

router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    layout: "basic",
    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

// ================================================================

router.get('/web', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('web', {
    layout: "basic",
    web: {
      languages: [
        {
          name: 'HTML',
          version: 'HTML5',
          description:
            'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
          elements: [
            {
              name: 'div',
              description:
                'Defines a division or a section in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
            {
              name: 'p',
              description:
                'Defines a paragraph in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
          ],
        },
        {
          name: 'CSS',
          version: 'CSS3',
          description:
            'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
          properties: [
            {
              name: 'color',
              description: 'Sets the color of the text.',
              values: [
                {
                  value: 'red',
                  description:
                    'Sets the text color to red.',
                },
                {
                  value: 'blue',
                  description:
                    'Sets the text color to blue.',
                },
              ],
            },
            {
              name: 'background-color',
              description:
                'Sets the background color of an element.',
              values: [
                {
                  value: 'white',
                  description:
                    'Sets the background color to white.',
                },
                {
                  value: 'black',
                  description:
                    'Sets the background color to black.',
                },
              ],
            },
          ],
        },
        {
          name: 'JavaScript',
          version: 'ES6',
          description:
            'JavaScript is a programming language used to create interactive effects within web browsers.',
          functions: [
            {
              name: 'alert()',
              description:
                'Displays an alert box with a specified message and an OK button.',
              parameters: [
                {
                  name: 'message',
                  type: 'string',
                  description:
                    'The message to display in the alert box.',
                },
              ],
            },
            {
              name: 'getElementById()',
              description:
                'Returns the element with the specified ID.',
              parameters: [
                {
                  name: 'id',
                  type: 'string',
                  description:
                    'The ID of the element to find.',
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================


  // ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
