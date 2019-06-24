
/**
 * @name 数据请求
 * */

function handle (obj = {}) {
    let {url, method, headers, data} = obj;
    let _obj = {url, method, headers};

    method = method && method.toLocaleUpperCase();
    if (method !== 'GET') {
        _obj['headers'] = headers || {'Content-type': 'application/json'};
        _obj['body'] = data;
    }

    return new Promise((resolve, reject) => {
        fetch(url, {..._obj})
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    });
}

class http {
    fetch = (obj) => {
        return handle(obj);
    };
    get = (url) => {
        return handle({
            url,
            method: 'GET'
        });
    };
    post = (url, headers, data) => {
        return handle({
            method: 'POST',
            headers,
            data
        });
    };
    delete = (url, headers, data) => {
        return handle({
            method: 'DELETE',
            headers,
            data
        });
    };
    put = (url, headers, data) => {
        return handle({
            method: 'PUT',
            headers,
            data
        });
    };
}

export default new http();