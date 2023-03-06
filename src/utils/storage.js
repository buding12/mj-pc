// localStorage ------------------------
export const setLocal = (key, val) => {
  if (typeof val === 'object') {
    //  由于storage只能存字符串遇到数组或对象必须转换成数组或字符串
    // eslint-disable-next-line no-param-reassign
    val = JSON.stringify(val);
  }
  localStorage.setItem(key, val);
};

export const getLocal = (key) => {
  const val = localStorage.getItem(key);
  try {
    return JSON.parse(val);
  } catch (error) {
    return val;
  }
};
export const delLocal = (key) => {
  localStorage.removeItem(key);
};

// sessionStorage ------------------------
export const setSession = (key, val) => {
  if (typeof val === 'object') {
    // eslint-disable-next-line no-param-reassign
    val = JSON.stringify(val);
  }
  sessionStorage.setItem(key, val);
};
export const getSession = (key) => {
  const val = sessionStorage.getItem(key);
  try {
    return JSON.parse(val);
  } catch (error) {
    return val;
  }
};
export const delSession = (key) => {
  sessionStorage.removeItem(key);
};
