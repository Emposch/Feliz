//Reg

export const sumbit = async (
  username,
  email,
  phone,
  password,
  password2,
  setRegis,
  navigation,
  storeData
) => {
  const register = await fetch("http://165.22.49.123/api/user/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      phone,
      password,
      password2,
    }),
  });
  const content = await register.json();

  if (content.token) {
    navigation.navigate('MainNavigation')
    storeData(content.token)
  } else {
    for (let key in content) {
      alert('Ошибка: ' + content[key])
    }
  }

  setRegis(content);

};

//Auth


export const sumbitAuth = async (
  username,
  password,
  setAuth,
  navigation,
  storeData
) => {
  const auth = await fetch("http://165.22.49.123/api/user/auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const content = await auth.json();

  if(content.token) {
    navigation.navigate('MainNavigation')
    storeData(content.token)
  }else {
    for(let key in content) {
      alert('Ошибка: ' + content[key])
    }
  }

  setAuth(content);

};