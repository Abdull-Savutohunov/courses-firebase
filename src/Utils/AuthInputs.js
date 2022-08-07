export const Auth = [
  {
    id: 1,
    name: 'email',
    type:'email',
    label: 'Почта',
    messages: 'Заполните поле -> test@gmail.com'
  },
  {
    id: 2,
    name: 'password',
    type: 'password',
    label: 'Пароль',
    messages: 'Заполните поле -> test1234'
  },
]

export const RegisterStudent = [
  {
    id: 1,
    type: 'email',
    name: 'email',
    label: 'Почта',
    messages: 'Заполните поле -> test@gmail.com'
  },
  {
    id: 2,
    type: 'text',
    name: 'name',
    label: 'Имя',
    messages: 'Заполните поле -> Alex'
  },
  {
    id: 3,
    type: 'password',
    name: 'password',
    label: 'Пароль',
    messages: 'Заполните поле -> test1234'
  },
  {
    id: 4,
    type: 'tel',
    name: 'tel',
    label: 'номер',
    messages: 'Заполните поле -> +996 555 55 55 55'
  },
]

export const RegisterCourses = [
  {
    id: 2,
    type: 'text',
    name: 'name',
    label: 'Имя директора центра',
    messages: 'Заполните поле -> Alex'
  },
  {
    id: 8,
    type: 'text',
    name: 'surNames',
    label: 'Фамилия директора центра',
    messages: 'Заполните поле -> Jonson'
  },
  {
    id: 1,
    type: 'email',
    name: 'email',
    label: 'Почта',
    messages: 'Заполните поле -> test@gmail.com'
  },
  {
    id: 3,
    type: 'password',
    name: 'password',
    label: 'Пароль',
    messages: 'Заполните поле -> test1234'
  },
  {
    id: 4,
    type: 'tel',
    name: 'tel',
    label: 'номер',
    messages: 'Заполните поле -> +996 555 55 55 55'
  },
  {
    id:5,
    type: 'text',
    name:'workExperience',
    label: 'Сколько лет на рынке',
    messages: 'Заполните поле опыта работы'
  },
  {
    id: 6,
    type: 'text',
    name: 'diplomaNumber',
    label: 'Подтверждение лицензии',
    messages: 'Заполните поле -> Номер: 27 019988'
  },
  {
    id: 7,
    type: 'text',
    name: 'diplomaDate',
    label: 'Дата получения лицензии',
    messages: 'Заполните поле -> 01.01.2001'
  },
]

export const textArea = [
  {
    id: 1,
    name: 'university',
    label: 'Образование (где и когда закончили обучение учителя)',
  },
  {
    id: 2,
    name: 'Iam',
    label:'Об образовательном центре'
  },
  {
    id: 3,
    name: 'scientificWork',
    label: 'Результаты учеников и выпускников',
  },
]

export const directionCourses = {
  id: 5,
  name: 'directionCourses',
  label: 'Направление курсов',
  directions: [
    {
      id:1,
      value:'languages',
      title:'Языковые',
      label:{
        
      }
    },
    {
      id: 2,
      value:'Cooking',
      title:'Готовка'
    },
    {
      id: 3 ,
      value:'handlemaked',
      title:'Рукодельные'
    },
    {
      id: 4,
      value:'IT',
      title:'Технологические'
    },
    {
      id: 5,
      value:'Beauty',
      title:'Мода'
    },
  ]
}

export const coursesCity = {
  id: 4,
  name: 'city',
  label: 'Город',
  directions: [
    {
      id:1,
      value:'Osh',
      title:'Ош'
    },
    {
      id:2,
      value:'Bishkek',
      title:'Бишкек'
    },
  ]
}

export const coursesWorkStyle = {
  id: 7,
  name: 'coursesWorkStyle',
  label: 'Личные качества учителей',
  directions: [
    {
      id:1,
      value: 'Cтрогие учителя',
      title: 'Cтрогие учителя',
    },
    {
      id:2,
      value: 'Разговорчивые учителья',
      title: 'Разговорчивые учителья',
    },
    {
      id:3,
      value: 'Понимающие учителья'  ,
      title: 'Понимающие учителья',
    }
  ]
}

export const ProfileCoursesChangeData = [
  {
    id: 2,
    type: 'text',
    name: 'name',
    label: 'Имя',
    messages: 'Заполните поле -> Alex'
  },
  {
    id: 3,
    type: 'password',
    name: 'password',
    label: 'Пароль',
    messages: 'Заполните поле -> test1234'
  },
  {
    id: 4,
    type: 'tel',
    name: 'tel',
    label: 'номер',
    messages: 'Заполните поле -> +996 555 55 55 55'
  },
  {
    id:5,
    type: 'text',
    name:'workExperience',
    label: 'Сколько лет на рынке',
    messages: 'Заполните поле опыта работы'
  },
  {
    id: 6,
    type: 'text',
    name: 'diplomaNumber',
    label: 'Подтверждение лицензии',
    messages: 'Заполните поле -> Подтвердите наличия лицензии на преподование'
  },
  {
    id: 7,
    type: 'text',
    name: 'diplomaDate',
    label: 'Дата выдачи лицензии',
    messages: 'Заполните поле -> 01.01.2001'
  },
]

export const ProfileStudentChangeData = [
  {
    id: 2,
    type: 'text',
    name: 'name',
    label: 'Имя',
    messages: 'Заполните поле -> Alex'
  },
  {
    id: 3,
    type: 'password',
    name: 'password',
    label: 'Пароль',
    messages: 'Заполните поле -> test1234'
  },
  {
    id: 4,
    type: 'tel',
    name: 'tel',
    label: 'номер',
    messages: 'Заполните поле -> +996 555 55 55 55'
  },
]