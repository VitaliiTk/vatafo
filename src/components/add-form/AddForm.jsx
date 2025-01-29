import { Button } from '../button/Button'

export function AddForm() {
  return (
    <section id="add-section">
      <div className="container">
        <div className="add__wrapper">
          <h2>Разместить БЕСПЛАТНОЕ объявление просто!</h2>
          <form className="add-form">
            <div>
              <h3>Загрузите фото* (до 30 фото)</h3>
              <input type="url" name="imageUrl" id="image-url" />
            </div>
            <div>
              <h3>Описание*</h3>
              <textarea name="info" id="info"></textarea>
            </div>
            <div>
              <h3>Город*</h3>
              <select name="city" id="city">
                <option value="bishkek">Бишкек</option>
                <option value="osh">ОШ</option>
              </select>
            </div>
            <div className="inputs__table">
              <div>
                <h3>Цена</h3>
                <input type="number" name="price" id="price" />
              </div>
              <div>
                <h3>Валюта</h3>
                <div className="checkbox__wrapper">
                  <span>
                    <input type="checkbox" name="" id="kgs" />
                    <label htmlFor="kgs">KGS</label>
                  </span>
                  <span>
                    <input type="checkbox" name="" id="usd" />
                    <label htmlFor="usd">USD</label>
                  </span>
                </div>
              </div>
              <div>
                <h3>Модель</h3>
                <select name="model" id="model">
                  <option value="ford">Ford</option>
                  <option value="honda">Honda</option>
                  <option value="toyota">Toyota</option>
                </select>
              </div>
              <div>
                <h3>Год</h3>
                <select name="year" id="year">
                  {Array.from({ length: 25 }, (_, i = 2000) => {
                    i + 1
                    return (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div>
                <h3>Пробег (км.)</h3>
                <input type="number" name="ride" id="ride" />
              </div>
              <div>
                <h3>Топливо</h3>
                <div>
                  <span>
                    <input
                      type="checkbox"
                      name="fuel"
                      id="gazoline"
                      value="gazoline"
                    />
                    <label htmlFor="fuel">Бензин</label>
                  </span>
                  <span>
                    <input
                      type="checkbox"
                      name="fuel"
                      id="gaz"
                      value="gaz"
                    />
                    <label htmlFor="gaz">Газ</label>
                  </span>
                  <span>
                    <input
                      type="checkbox"
                      name="fuel"
                      id="electro"
                      value="electro"
                    />
                    <label htmlFor="electro">Электро</label>
                  </span>
                  <span>
                    <input
                      type="checkbox"
                      name="fuel"
                      id="hybrid"
                      value="hybrid"
                    />
                    <label htmlFor="hybrid">Гибрид</label>
                  </span>
                  <span>
                    <input
                      type="checkbox"
                      name="fuel"
                      id="diesel"
                      value="diesel"
                    />
                    <label htmlFor="diesel">Дизель</label>
                  </span>
                </div>
              </div>
              <div>
                <h3>Состояние</h3>
                <select name="condition" id="condition">
                  <option value="bu">Б/У</option>
                  <option value="new">Новое</option>
                </select>
              </div>
              <div>
                <h3>Кузов</h3>
                <select name="body" id="body">
                  <option value="bus">Бус</option>
                  <option value="pikap">Пикап</option>
                  <option value="sedan">Седан</option>
                </select>
              </div>
              <div>
                <h3>Коробка передач</h3>
                <select name="gear" id="gear">
                  <option value="auto">Автомат</option>
                  <option value="variator">Вариатор</option>
                  <option value="mech">Механика</option>
                  <option value="robot">Робот</option>
                  <option value="tiptronic">Типтроник</option>
                </select>
              </div>
              <div>
                <h3>Руль</h3>
                <select name="stearingWheel" id="stearingWheel">
                  <option value="left">Слева</option>
                  <option value="right">Справа</option>
                </select>
              </div>
              <div>
                <h3>Привод</h3>
                <select name="drive" id="drive">
                  <option value="4wd">4WD, полный</option>
                  <option value="Awd">AWD, полный</option>
                  <option value="FR">Задний</option>
                  <option value="FF">Передний</option>
                </select>
              </div>
              <div>
                <h3>Цвет</h3>
                <select name="color" id="color">
                  <option value="red">Красный</option>
                  <option value="blue">Синий</option>
                  <option value="black">Черный</option>
                  <option value="white">Белый</option>
                </select>
              </div>
              <div>
                <h3>Объем двигателя</h3>
                <select name="engineVolume" id="engineVolume">
                  <option value="0.1">0.1</option>
                  <option value="0.2">0.2</option>
                  <option value="0.3">0.3</option>
                  <option value="0.5">0.5</option>
                  <option value="0.6">0.6</option>
                  <option value="0.7">0.7</option>
                  <option value="0.8">0.8</option>
                  <option value="1.0">1.0</option>
                  <option value="1.5">1.5</option>
                  <option value="2.0">2.0</option>
                  <option value="2.5">2.5</option>
                  <option value="3.0">3.0</option>
                  <option value="3.5">3.5</option>
                  <option value="4.0">4.0</option>
                </select>
              </div>
              <div>
                <h3>VIN код</h3>
                <select name="vinCode" id="vinCode">
                  <option value="true">с VIN кодом</option>
                  <option value="false">без VIN кода</option>
                </select>
              </div>
              <div>
                <h3>VIN код</h3>
                <select name="techCondition" id="techCondition">
                  <option value="good">Хорошее</option>
                  <option value="bad">Аварийное</option>
                  <option value="ideal">Идеальное</option>
                  <option value="crashed">Битый</option>
                  <option value="forParts">На запчасти</option>
                </select>
              </div>
              <div>
                <h3>Растаможка</h3>
                <select name="docs" id="docs">
                  <option value="true">Растаможен</option>
                  <option value="false">Не растаможен</option>
                </select>
              </div>
              <div>
                <h3>Наличие</h3>
                <select name="isAvailability" id="isAvailability">
                  <option value="true">В наличие</option>
                  <option value="false">На заказ</option>
                </select>
              </div>
              <div>
                <h3>Расчет</h3>
                <div>
                  <span>
                    <input
                      type="checkbox"
                      name="payMethod"
                      id="payMethod"
                      value="Возможен обмен"
                    />
                    <label htmlFor="payMethod">Возможен обмен</label>
                  </span>
                  <span>
                    <input
                      type="checkbox"
                      name="payMethod"
                      id="payMethod"
                      value="Кредит"
                    />
                    <label htmlFor="payMethod">Кредит</label>
                  </span>
                  <span>
                    <input
                      type="checkbox"
                      name="payMethod"
                      id="payMethod"
                      value="Обмена нет"
                    />
                    <label htmlFor="payMethod">Обмена нет</label>
                  </span>
                  <span>
                    <input
                      type="checkbox"
                      name="payMethod"
                      id="payMethod"
                      value="Оплата наличными"
                    />
                    <label htmlFor="payMethod">
                      Оплата наличными
                    </label>
                  </span>
                  <span>
                    <input
                      type="checkbox"
                      name="payMethod"
                      id="payMethod"
                      value="Расрочка"
                    />
                    <label htmlFor="payMethod">Расрочка</label>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3>Телефон</h3>
              <input type="tel" name="tel" id="tel" />
              <span>
                <input type="checkbox" name="hideTel" id="hideTel" />
                <label htmlFor="hideTel">Скрыть номер</label>
              </span>
            </div>
            <Button>Опубликовать</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
