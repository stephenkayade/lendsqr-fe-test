let storage = {}

storage.saveUsers = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}
storage.saveUser = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

storage.getUsers = () => {

    let data = [];
    const check = storage.checkData('users')

    if (check) {
        data = JSON.parse(localStorage.getItem('users'))
    }

    return data;
}

storage.getUser = () => {

    let data = [];
    const check = storage.checkData('user')

    if (check) {
        data = JSON.parse(localStorage.getItem('user'))
    }

    return data;
}

storage.checkData = (key) => {
    const data = localStorage.getItem(key)
    return data ? true : false;
}

storage.isObjectEmpty = (obj) => {
    return Object.getOwnPropertyNames(obj).length === 0 ? true : false;
}

storage.isArrayEmpty = (arr) => {
    return arr.length <= 0 ? true : false;
}

storage.keepLegacy = (key, data) => {

    if(data){
        localStorage.setItem(key, data);
        return true;
    }else{
        return false
    }
    
}

storage.fetchLegacy = (key) => {

    const data = localStorage.getItem(key);
    return data ? data : '';
}

export default storage