// libs
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

// components
import { Button } from '../../components/button/Button'
// import { DragDropImageUploader } from '../../components/drag-drop-image-uploader/DragDropImageUploader'
import { RegModal } from '../../components/reg-modal/RegModal'

// styles
import './add-form.css'

// functions ===============================================================================
import { PostsService } from '../../services/posts.service'
import { useNavigate } from 'react-router-dom'
import { UserService } from '../../services/user.service'

// master ==================================================================================
export function AddForm() {
  // const [images, setImages] = useState([])
  // const [mainImage, setMainImage] = useState(null)

  // Tanstack get user from global state cashe
  const queryClient = useQueryClient()

  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: UserService.getMe
  })

  const navigate = useNavigate()
  // mutation tanstack
  const newPostMutation = useMutation({
    mutationFn: PostsService.addNew,
    onSuccess: () => {
      queryClient.invalidateQueries(['userposts'])
      navigate('/acount/userposts')
    }
  })

  //
  const formAction = (formData) => {
    // const images = formData.getAll('images')

    const newPost = {
      // main_image: images[0].name,
      main_image: formData.get('image'),
      // images: images,
      price: formData.get('price'),
      category: formData.get('category'),
      info: formData.get('info'),
      user_id: user.id,
      city: formData.get('city'),
      money_symbol: formData.get('moneySymbol'),
      gear: formData.get('gear'),
      stearingWheel: formData.get('stearingWheel'),
      drive: formData.get('drive'),
      payMethod: formData.getAll('payMethod'),
      drive_length: formData.get('ride'),
      fuels: formData.getAll('fuel'),
      year: formData.get('year')
    }

    console.log(newPost)

    newPostMutation.mutate(newPost)
  }

  if (!user) return <RegModal />
  // if (!user) navigate('/')
  // if (!user) return <p>Sign in</p>

  return (
    <section id="add-form-section">
      <div className="container">
        <div className="add__wrapper">
          <h2 className="title">Разместить БЕСПЛАТНОЕ объявление просто!</h2>
          {/* <DragDropImageUploader /> */}
          <form action={formAction} className="add-form" id="add-form" autoComplete="off">
            {/* info top wrapper */}
            <div className="add-form__info-top-wrapper">
              <div className="inputs__wrapper" id="add-info__box">
                <h3>Описание*</h3>
                <textarea className="info-area" name="info" id="info" required></textarea>
              </div>

              <div className="inputs__wrapper" id="add-foto__box">
                <h3>Устанавите фото URL* {/* (до 30 фото) */}</h3>
                <input type="url" name="image" id="image" multiple />
                {/* <input type="file" name="images" id="image" multiple /> */}
                {/* <DragDropImageUploader
                  images={images}
                  setImages={setImages}
                  mainImage={mainImage}
                  onMainImageSelect={onMainImageSelect}
                /> */}
              </div>
            </div>

            {/* inputs table */}
            <div className="inputs__table">
              <div className="inputs__wrapper">
                <h3>Категория*</h3>
                <select name="category" id="category" defaultValue="Продаю автомобиль" required>
                  <option value="Продаю автомобиль">Продаю автомобиль</option>
                  <option value="Продаю квартиру">Продаю квартиру</option>
                </select>
              </div>

              <div className="inputs__wrapper">
                <h3>Город*</h3>
                <select name="city" id="city" required>
                  <option value="bishkek">Бишкек</option>
                  <option value="osh">ОШ</option>
                </select>
              </div>

              <div className="inputs__wrapper">
                <h3>Цена</h3>
                <input type="number" name="price" id="price" required />
              </div>
              <div className="inputs__wrapper">
                <h3>Валюта</h3>
                <div className="checkbox__wrapper">
                  <span>
                    <input type="radio" name="moneySymbol" id="kgs" value="KGS" defaultChecked />
                    <label htmlFor="kgs">KGS</label>
                  </span>
                  <span>
                    <input type="radio" name="moneySymbol" id="usd" value="USD" />
                    <label htmlFor="usd">USD</label>
                  </span>
                </div>
              </div>

              <div className="inputs__wrapper">
                <h3>Год</h3>
                <select name="year" id="year" required>
                  {Array.from({ length: 25 }, (_, i) => {
                    return (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="inputs__wrapper">
                <h3>Пробег (км.)</h3>
                <input type="number" name="ride" id="ride" required />
              </div>
              <div className="inputs__wrapper">
                <h3>Топливо</h3>
                <div>
                  <span>
                    <input
                      type="checkbox"
                      name="fuel"
                      id="gazoline"
                      value="gazoline"
                      defaultChecked
                    />
                    <label htmlFor="gazoline">Бензин</label>
                  </span>
                  <span>
                    <input type="checkbox" name="fuel" id="gaz" value="gaz" />
                    <label htmlFor="gaz">Газ</label>
                  </span>
                  <span>
                    <input type="checkbox" name="fuel" id="electro" value="electro" />
                    <label htmlFor="electro">Электро</label>
                  </span>
                  <span>
                    <input type="checkbox" name="fuel" id="hybrid" value="hybrid" />
                    <label htmlFor="hybrid">Гибрид</label>
                  </span>
                  <span>
                    <input type="checkbox" name="fuel" id="diesel" value="diesel" />
                    <label htmlFor="diesel">Дизель</label>
                  </span>
                </div>
              </div>

              <div className="inputs__wrapper">
                <h3>Коробка передач</h3>
                <select name="gear" id="gear" required>
                  <option value="auto">Автомат</option>
                  <option value="variator">Вариатор</option>
                  <option value="mech">Механика</option>
                  <option value="robot">Робот</option>
                  <option value="tiptronic">Типтроник</option>
                </select>
              </div>
              <div className="inputs__wrapper">
                <h3>Руль</h3>
                <select name="stearingWheel" id="stearingWheel" required>
                  <option value="left">Слева</option>
                  <option value="right">Справа</option>
                </select>
              </div>
              <div className="inputs__wrapper">
                <h3>Привод</h3>
                <select name="drive" id="drive" required>
                  <option value="4wd">4WD, полный</option>
                  <option value="Awd">AWD, полный</option>
                  <option value="FR">Задний</option>
                  <option value="FF">Передний</option>
                </select>
              </div>

              <div className="inputs__wrapper">
                <h3>Расчет</h3>
                <div>
                  <span>
                    <input
                      type="checkbox"
                      name="payMethod"
                      id="1"
                      value="Возможен обмен"
                      defaultChecked
                    />
                    <label htmlFor="1">Возможен обмен</label>
                  </span>
                  <span>
                    <input type="checkbox" name="payMethod" id="2" value="Кредит" />
                    <label htmlFor="2">Кредит</label>
                  </span>
                  <span>
                    <input type="checkbox" name="payMethod" id="3" value="Обмена нет" />
                    <label htmlFor="3">Обмена нет</label>
                  </span>
                  <span>
                    <input type="checkbox" name="payMethod" id="4" value="Оплата наличными" />
                    <label htmlFor="4">Оплата наличными</label>
                  </span>
                  <span>
                    <input type="checkbox" name="payMethod" id="5" value="Расрочка" />
                    <label htmlFor="5">Расрочка</label>
                  </span>
                </div>
              </div>
              <div className="inputs__wrapper">
                <h3>Телефон</h3>
                <input type="tel" name="tel" id="tel" required />
                <span className="add-form__hideTel-label">
                  {/* <input type="hidden" name="hideTel" value="no" /> */}
                  <input type="checkbox" name="hideTel" id="hideTel" value="yes" />
                  <label htmlFor="hideTel">Скрыть номер</label>
                </span>
              </div>
            </div>
            <Button className={'add-dorm__btn'}>Опубликовать</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
