export class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(response) {
    return response.then((res) => {
      if (res.ok) {
        return res.json();
      }
      if (res.status === 409 || res.status === 404 || res.status === 400) {
        return Promise.reject({
          status: res.status,
        });
      }
      return Promise.reject(new Error(`Ошибка получения данных: ${res.status} ${res.statusText}`));
    });
  }
  //авторизация
  login(email, password) {
    return this._getResponseData(
      fetch(`${this._baseUrl}/signin`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
    );
  }

  //провека токена
  checkToken(token) {
    return this._getResponseData(
      fetch(`${this._baseUrl}/me`, {
        method: "GET",
        headers: {
          ...this._headers,
          autorization: `Bearer ${token}`,
        },
      })
    );
  }

  //данные пользователя
  getCurrentUser(token) {
    return this._getResponseData(
      fetch(`${this._baseUrl}/me`, {
        method: "GET",
        headers: {
          ...this._headers,
          autorization: `Bearer ${token}`,
        },
      })
    );
  }

  //Отправляем сообщение в телеграм
  getConsultation(getName, getTelephone, getMessage) {
    //const { getName, getTelephone, getMessage } = data
    const token = localStorage.getItem("token");
    return this._getResponseData(
      fetch(`${this._baseUrl}/telegram`, {
        method: "POST",
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: getName,
          telephone: getTelephone,
          message: getMessage
        }),
      })
    );
  }

    //пишем в БД новое обращение
    createConsultation(getName, getTelephone, getMessage) {
      const token = localStorage.getItem("token");
      return this._getResponseData(
        fetch(`${this._baseUrl}/consult/create`, {
          method: "POST",
          headers: {
            ...this._headers,
            autorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: getName,
            telephone: getTelephone,
            theme: getMessage
          }),
        })
      );
    }
 
     //читаем не архивные сообщения
     getNonArchiveConsultation() {
      const token = localStorage.getItem("token");
      return this._getResponseData(
        fetch(`${this._baseUrl}/consult/notarc`, {
          method: "GET",
          headers: {
            ...this._headers,
            autorization: `Bearer ${token}`,
          }
        })
      );
    }

    //Перемещаем сообщения в архив
    toArchiveConsultation(id) {
      const token = localStorage.getItem("token");
      return this._getResponseData(
        fetch(`${this._baseUrl}/consult/arc`, {
          method: "PATCH",
          headers: {
            ...this._headers,
            autorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
           id: id
          }),
        })
      );
    }

    //читаем архивные сообщения
    getArchiveConsultation() {
      const token = localStorage.getItem("token");
      return this._getResponseData(
        fetch(`${this._baseUrl}/consult/arc`, {
          method: "GET",
          headers: {
            ...this._headers,
            autorization: `Bearer ${token}`,
          }
        })
      );
    }

  //читаем прайс
  getAllPrice() {
    const token = localStorage.getItem("token");
    return this._getResponseData(
      fetch(`${this._baseUrl}/price`, {
        method: "GET",
        headers: {
          ...this._headers,
          autorization: `Bearer ${token}`,
        }
      })
    );
  }
  //читаем один пункт прайса по id
  getOnePrice(id) {
    const token = localStorage.getItem("token");
    return this._getResponseData(
      fetch(`${this._baseUrl}/price/getone`, {
        method: "POST",
        headers: {
          ...this._headers,
          autorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: id,
        })
      })
    );
  }
    //удаляем один пункт прайса по id
    delOnePrice(id) {
      const token = localStorage.getItem("token");
      return this._getResponseData(
        fetch(`${this._baseUrl}/price/delete`, {
          method: "DELETE",
          headers: {
            ...this._headers,
            autorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            id: id,
          })
        })
      );
    }
  //Создаём пункт прайса
  createPrice(data) {
    const { title, titleShow, subtitle, service } = data;
    const token = localStorage.getItem("token");
    return this._getResponseData(
      fetch(`${this._baseUrl}/price`, {
        method: "POST",
        headers: {
          ...this._headers,
          autorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
         title: title,
         titleShow: titleShow,
         subtitle: subtitle,
         service: service
        }),
      })
    );
  }
  //читаем все материалы
  getAllArticles() {
    const token = localStorage.getItem("token");
    return this._getResponseData(
      fetch(`${this._baseUrl}/article`, {
        method: "GET",
        headers: {
          ...this._headers,
          autorization: `Bearer ${token}`,
        }
      })
    );
  }
  //читаем все отзывы
  getAllFeedback() {
    const token = localStorage.getItem("token");
    return this._getResponseData(
      fetch(`${this._baseUrl}/feedback`, {
        method: "GET",
        headers: {
          ...this._headers,
          autorization: `Bearer ${token}`,
        }
      })
    );
  }
}

  const mainApi = new MainApi({
    baseUrl: 'https://api.ka-tandem.ru',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    
  export default mainApi;