let FetchCount = 0;

export function Fetch(url, options) {
    FetchCount++;
    const ajax_spinner = document.querySelector('div.ajax-spinner');
    ajax_spinner && ajax_spinner.classList.remove("hidden");
    options.headers.Authorization = localStorage.getItem('AUTHTOKEN');
    return fetch(url, options)
        .then(res => {
            switch (res.status) {
                case 401:
                    setAuth(null);
                    window.location.href = "/";
                    break;
                case 400:
                    throw res.json();
                case 500:
                    throw new Promise(function(resolve, reject) {
                        setTimeout(function() {
                            resolve({message:res.statusText});
                        }, 300);
                    });
                default:
                    return res;
            }
        })
        .finally(() => {
            FetchCount--;
            if (FetchCount <= 0) {
                ajax_spinner && ajax_spinner.classList.add("hidden");
            }
        });
}

export function setAuth(auth) {
    localStorage.setItem('AUTHTOKEN', auth);
}